<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .footer { margin-top: 30px; font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 10px; }
        .original-message { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #ddd; margin-top: 20px; font-size: 0.9em; }
    </style>
</head>
<body>
    <div class="container">
        <p>Dear {{ $contact->name }},</p>
        
        <div style="white-space: pre-wrap;">
{!! nl2br(e($replyMessage)) !!}
        </div>

        <p>Best regards,<br>
        {{ config('app.name') }} Team</p>

        <div class="original-message">
            <p><strong>On {{ $contact->created_at->format('M d, Y') }}, you wrote:</strong></p>
            <p><em>{{ $contact->message }}</em></p>
        </div>
        
        <div class="footer">
            <p>This email was sent from {{ config('app.name') }}.</p>
        </div>
    </div>
</body>
</html>
