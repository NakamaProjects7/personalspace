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
}
