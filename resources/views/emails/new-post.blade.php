<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Article from {{ config('app.name') }}</title>
    <style>
        body { margin: 0; padding: 0; background-color: #0f172a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #0f172a; padding-bottom: 60px; }
        .main { background-color: #1e293b; margin: 0 auto; width: 100%; max-width: 600px; border-radius: 16px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); border: 1px solid #334155; }
        .header { background-image: linear-gradient(to bottom right, #0f172a, #1e293b); padding: 50px 0; text-align: center; position: relative; overflow: hidden; }
        .header::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #fbbf24, #d97706, #fbbf24); }
        .header-badge { display: inline-block; background-color: rgba(251, 191, 36, 0.1); color: #fbbf24; padding: 6px 16px; border-radius: 50px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px; border: 1px solid rgba(251, 191, 36, 0.2); }
        .title { color: #f8fafc; font-size: 32px; font-weight: 800; margin: 0 40px; line-height: 1.2; letter-spacing: -0.5px; }
        .content { padding: 40px; }
        .article-card { background-color: #0f172a; border-radius: 12px; padding: 32px; border: 1px solid #334155; text-align: center; }
        .article-title { color: #f8fafc; font-size: 24px; font-weight: 700; margin-bottom: 16px; line-height: 1.3; }
        .article-excerpt { color: #94a3b8; font-size: 16px; line-height: 1.7; margin-bottom: 32px; }
        .btn { display: inline-block; background: linear-gradient(to right, #fbbf24, #d97706); color: #0f172a; padding: 16px 40px; border-radius: 50px; font-weight: 800; text-decoration: none; font-size: 16px; box-shadow: 0 10px 15px -3px rgba(251, 191, 36, 0.3), 0 4px 6px -2px rgba(251, 191, 36, 0.1); transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 0.5px; }
        .btn:hover { transform: translateY(-3px); box-shadow: 0 20px 25px -5px rgba(251, 191, 36, 0.4), 0 10px 10px -5px rgba(251, 191, 36, 0.1); filter: brightness(1.1); }
        .footer { text-align: center; color: #64748b; font-size: 13px; margin-top: 40px; padding: 0 20px; line-height: 1.6; }
        .unsubscribe { color: #94a3b8; text-decoration: underline; transition: color 0.2s; }
        .unsubscribe:hover { color: #fbbf24; }
        .social-icons { margin-top: 24px; margin-bottom: 24px; }
        .social-link { display: inline-block; width: 32px; height: 32px; background-color: #334155; border-radius: 50%; color: #cbd5e1; line-height: 32px; margin: 0 8px; text-decoration: none; font-size: 14px; transition: all 0.2s; }
        .social-link:hover { background-color: #fbbf24; color: #0f172a; transform: scale(1.1); }
        
        @media screen and (max-width: 600px) {
            .content { padding: 24px; }
            .header { padding: 40px 0; }
            .title { font-size: 26px; margin: 0 20px; }
            .article-card { padding: 24px; }
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="main">
            <!-- Header -->
            <div class="header">
                <div class="header-badge">New Publication</div>
                <h1 class="title">Fresh Insights Just Landed</h1>
            </div>

            <!-- Content -->
            <div class="content">
                <div class="article-card">
                    <h2 class="article-title">{{ $newsletter->title }}</h2>
                    <p class="article-excerpt">{{ $newsletter->excerpt }}</p>
                    
                    <a href="{{ route('blog.show', $newsletter->slug) }}" class="btn">
                        Read Article 🚀
                    </a>
                </div>
            </div>

            <!-- Footer -->
            <div class="footer">
                <div class="social-icons">
                    <a href="https://instagram.com/mhmmdarif.rs" class="social-link">Ig</a>
                    <a href="https://linkedin.com/in/muhammad-arif-rahmad-syahputra" class="social-link">In</a>
                    <a href="https://github.com/mhdarif09" class="social-link">Gh</a>
                </div>
                
                <p>
                    You received this email because you're part of the<br>
                    <strong>{{ config('app.name') }}</strong> community.
                </p>
                <p style="margin-top: 16px;">
                    <a href="{{ route('newsletter.unsubscribe', $subscriber->unsubscribe_token) }}" class="unsubscribe">Unsubscribe</a>
                </p>
            </div>
        </div>
    </div>
</body>
</html>
