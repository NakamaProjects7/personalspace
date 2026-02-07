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
        .button {
            display: inline-block;
            padding: 12px 30px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 20px;
            color: #718096;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>📢 New Article Published!</h1>
    </div>
    <div class="content">
        <h2>{{ $newsletter->title }}</h2>
        <p>{{ Str::limit(strip_tags($newsletter->content), 200) }}</p>
        
        <a href="{{ url('/blog/' . $newsletter->slug) }}" class="button">
            Read Full Article →
        </a>
        
        <p style="margin-top: 30px; color: #718096;">
            Thank you for subscribing to our newsletter!
        </p>
    </div>
    <div class="footer">
        <p>Muhammad Arif's Personal Space</p>
        <p>
            <a href="{{ $unsubscribeUrl }}" style="color: #667eea;">Unsubscribe</a>
        </p>
    </div>
</body>
</html>
