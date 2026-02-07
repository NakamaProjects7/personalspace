<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reply from {{ config('app.name') }}</title>
    <style>
        body { margin: 0; padding: 0; background-color: #022c22; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #022c22; padding-bottom: 60px; }
        .main { background-color: #064e3b; margin: 0 auto; width: 100%; max-width: 600px; border-radius: 12px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5); border: 1px solid #065f46; }
        .header { background: linear-gradient(135deg, #022c22 0%, #064e3b 100%); padding: 40px 0; text-align: center; border-bottom: 1px solid #065f46; }
        .logo { font-size: 28px; font-weight: 800; color: #fbbf24; text-decoration: none; letter-spacing: -0.5px; text-transform: uppercase; }
        .content { padding: 40px; color: #ecfdf5; line-height: 1.8; font-size: 16px; }
        .greeting { font-size: 20px; font-weight: 600; color: #ffffff; margin-bottom: 24px; }
        .message-body { margin-bottom: 32px; color: #d1fae5; }
        .button { display: inline-block; background: linear-gradient(to right, #fbbf24, #d97706); color: #022c22; padding: 14px 32px; border-radius: 8px; font-weight: 700; text-decoration: none; text-align: center; margin-top: 10px; box-shadow: 0 4px 6px -1px rgba(251, 191, 36, 0.2); transition: all 0.3s ease; }
        .button:hover { transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(251, 191, 36, 0.3); }
        .original-message { margin-top: 40px; background-color: #022c22; border-radius: 8px; padding: 24px; border-left: 4px solid #fbbf24; }
        .original-header { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #6ee7b7; margin-bottom: 12px; font-weight: 700; }
        .original-text { font-style: italic; color: #6ee7b7; font-size: 14px; margin: 0; }
        .footer { text-align: center; color: #34d399; font-size: 14px; margin-top: 30px; padding: 0 20px; }
        .social-links { margin-top: 20px; }
        .social-link { color: #6ee7b7; text-decoration: none; margin: 0 10px; font-size: 12px; }
        @media screen and (max-width: 600px) {
            .content { padding: 24px; }
            .header { padding: 30px 0; }
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="main">
            <!-- Header -->
            <div class="header">
                <a href="{{ config('app.url') }}" class="logo">
                     {{ config('app.name') }}
                </a>
            </div>

            <!-- Content -->
            <div class="content">
                <div class="greeting">Hello {{ $contact->name }},</div>
                
                <div class="message-body">
                    {!! nl2br(e($replyMessage)) !!}
                </div>

                <p style="margin-top: 32px; color: #6ee7b7;">
                    Best regards,<br>
                    <strong style="color: #ffffff;">Muhammad Arif</strong>
                </p>

                <!-- Original Message Context -->
                <div class="original-message">
                    <div class="original-header">
                        On {{ $contact->created_at->format('M d, Y') }}, you wrote:
                    </div>
                    <p class="original-text">"{{ $contact->message }}"</p>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>&copy; {{ date('Y') }} {{ config('app.name') }}. All rights reserved.</p>
            <div class="social-links">
                <a href="https://instagram.com/mhmmdarif.rs" class="social-link">Instagram</a> •
                <a href="https://linkedin.com/in/muhammad-arif-rahmad-syahputra" class="social-link">LinkedIn</a> •
                <a href="https://github.com/mhdarif09" class="social-link">GitHub</a>
            </div>
        </div>
    </div>
</body>
</html>
