<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .header { text-align: center; border-bottom: 2px solid #f0f0f0; padding-bottom: 20px; margin-bottom: 20px; }
        .header h1 { margin: 0; color: #00522a; font-size: 24px; }
        .content { margin-bottom: 30px; }
        .btn { display: inline-block; background-color: #f9bf05; color: #fff; text-decoration: none; padding: 12px 25px; border-radius: 5px; font-weight: bold; margin-top: 20px; }
        .footer { text-align: center; font-size: 12px; color: #999; margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; }
        .unsubscribe { color: #999; text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Article Published! 🚀</h1>
        </div>
        
        <div class="content">
            <h2>{{ $newsletter->title }}</h2>
            <p>{{ $newsletter->excerpt }}</p>
            
            <div style="text-align: center;">
                <a href="{{ route('blog.show', $newsletter->slug) }}" class="btn">Read Article</a>
            </div>
        </div>
        
        <div class="footer">
            <p>You received this email because you are subscribed to {{ config('app.name') }}.</p>
            <p>
                <a href="{{ route('newsletter.unsubscribe', $subscriber->unsubscribe_token) }}" class="unsubscribe">Unsubscribe</a>
            </button>
        </div>
    </div>
</body>
</html>
