<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f7fafc;
            padding: 30px;
            border-radius: 0 0 10px 10px;
        }
        .info-row {
            margin: 10px 0;
            padding: 10px;
            background: white;
            border-radius: 5px;
        }
        .label {
            font-weight: bold;
            color: #667eea;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>💬 New Contact Form Submission</h1>
    </div>
    <div class="content">
        <div class="info-row">
            <span class="label">From:</span> {{ $contact->name }}
        </div>
        <div class="info-row">
            <span class="label">Email:</span> {{ $contact->email }}
        </div>
        <div class="info-row">
            <span class="label">Subject:</span> {{ $contact->subject }}
        </div>
        <div class="info-row">
            <span class="label">Message:</span><br>
            {{ $contact->message }}
        </div>
        <div class="info-row">
            <span class="label">Submitted:</span> {{ $contact->submitted_at->format('F j, Y g:i A') }}
        </div>
    </div>
    <div style="text-align: center; padding: 20px; color: #718096; font-size: 12px;">
        <p>Reply directly to this email to respond to {{ $contact->name }}</p>
    </div>
</body>
</html>
