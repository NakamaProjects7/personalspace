<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Mail\ContactFormSubmitted;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Display contact page
     */
    public function index()
    {
        return inertia('Contact');
    }

    /**
     * Store contact form submission
     */
    public function store(Request $request)
    {
        // Validate Cloudflare Turnstile
        $turnstileResponse = $request->input('cf-turnstile-response');
        
        if (!$this->verifyTurnstile($turnstileResponse)) {
            return back()->with('error', 'Captcha verification failed. Please try again.');
        }

        // Validate form data
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|min:10',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        // Store contact
        $contact = Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
        ]);

        // Send email notification to admin
        try {
            Mail::to(config('mail.from.address'))->send(new ContactFormSubmitted($contact));
        } catch (\Exception $e) {
            \Log::error('Failed to send contact notification: ' . $e->getMessage());
        }

        return back()->with('success', 'Your message has been sent successfully! We\'ll get back to you soon.');
    }

    /**
     * Verify Cloudflare Turnstile response
     */
    private function verifyTurnstile($token)
    {
        $secretKey = config('services.turnstile.secret_key'); // Matches config/services.php

        if (!$token) {
            return false;
        }

        $response = Http::asForm()->post('https://challenges.cloudflare.com/turnstile/v0/siteverify', [
            'secret' => $secretKey,
            'response' => $token,
            'remoteip' => request()->ip(),
        ]);

        $result = $response->json();

        if (!($result['success'] ?? false)) {
            \Log::error('Turnstile Verification Failed', [
                'success' => $result['success'] ?? false,
                'error-codes' => $result['error-codes'] ?? [],
                'hostname' => $result['hostname'] ?? 'unknown'
            ]);
            return false;
        }

        return true;
    }
}
