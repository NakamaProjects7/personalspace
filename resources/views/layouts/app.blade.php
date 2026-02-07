<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <!-- SEO Meta Tags -->
    <title>@yield('title', 'Personal Space - Tech, Growth & Cyber Security')</title>
    <meta name="description" content="@yield('description', 'Building meaningful digital impact. Sharing real transformation journeys in Tech, Growth, and Cyber Security.')">
    <meta name="keywords" content="tech, growth, cyber security, portfolio, blog, personal branding">
    <meta name="author" content="Your Name">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="@yield('title', 'Personal Space')">
    <meta property="og:description" content="@yield('description', 'Tech, Growth & Cyber Security')">
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet">
    
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    
    @stack('styles')
</head>
<body>
    <!-- Header -->
    @include('components.header')
    
    <!-- Main Content -->
    <main>
        @yield('content')
    </main>
    
    <!-- Footer -->
    @include('components.footer')
    
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    
    @stack('scripts')
</body>
</html>
