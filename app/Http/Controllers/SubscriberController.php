<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class SubscriberController extends Controller
{
    /**
     * Subscribe to newsletter
     */
    public function subscribe(Request $request)
    {
        // Validate Cloudflare Turnstile
        $turnstileResponse = $request->input('cf-turnstile-response');
        
        if (!$this->verifyTurnstile($turnstileResponse)) {
            return back()->with('error', 'Captcha verification failed. Please try again.');
        }

        // Validate email
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:subscribers,email',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->with('error', 'This email is already subscribed or invalid.');
        }

        // Create subscriber
        Subscriber::create([
            'email' => $request->email,
            'unsubscribe_token' => Subscriber::generateUnsubscribeToken(),
        ]);

        return back()->with('success', 'Successfully subscribed to newsletter!');
    }

    /**
     * Unsubscribe from newsletter
     */
    public function unsubscribe($token)
    {
        $subscriber = Subscriber::where('unsubscribe_token', $token)->first();

        if (!$subscriber) {
            abort(404, 'Invalid unsubscribe link');
        }

        $subscriber->delete();

        return redirect('/')->with('success', 'You have been unsubscribed from our newsletter.');
    }

    /**
     * Verify Cloudflare Turnstile response
     */
    private function verifyTurnstile($response)
    {
        if (!$response) {
            return false;
        }

        $secretKey = config('services.turnstile.secret_key');

        $verifyResponse = Http::post('https://challenges.cloudflare.com/turnstile/v0/siteverify', [
            'secret' => $secretKey,
            'response' => $response,
        ])->json();

        return $verifyResponse['success'] ?? false;
    }
}
