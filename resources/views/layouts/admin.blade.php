<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Admin Dashboard - {{ config('app.name', 'Personal Space') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- EasyMDE -->
    <link rel="stylesheet" href="https://unpkg.com/easymde/dist/easymde.min.css">
    <script src="https://unpkg.com/easymde/dist/easymde.min.js"></script>

    <!-- Tailwind (using CDN for simplicity in admin) -->
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
        body { font-family: 'Inter', sans-serif; }
        .easymde-container { font-family: 'Inter', sans-serif; }
        /* Notion-like Editor Styling overrides */
        .CodeMirror {
            border: 1px solid #e5e7eb;
            border-radius: 0.5rem;
            padding: 1rem;
            font-size: 1rem;
            line-height: 1.6;
        }
        .editor-toolbar {
            border: 1px solid #e5e7eb;
            border-bottom: none;
            border-radius: 0.5rem 0.5rem 0 0;
            opacity: 0.7;
        }
        .editor-toolbar:hover { opacity: 1; }
    </style>
</head>
<body class="bg-gray-100 antialiased">
    <div class="min-h-screen flex">
        <!-- Sidebar -->
        <aside class="w-64 bg-white border-r border-gray-200 hidden md:block">
            <div class="p-6 border-b border-gray-200">
                <a href="{{ url('/') }}" class="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <span>← Back to Site</span>
                </a>
            </div>
            <nav class="p-4 space-y-1">
                <a href="{{ route('admin.dashboard') }}" class="block px-4 py-2 rounded-lg {{ request()->routeIs('admin.dashboard') ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-600 hover:bg-gray-50' }}">
                    Dashboard
                </a>
                <a href="{{ route('admin.newsletters.index') }}" class="block px-4 py-2 rounded-lg {{ request()->routeIs('admin.newsletters.*') ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-600 hover:bg-gray-50' }}">
                    Newsletters
                </a>
                <a href="{{ route('admin.projects.index') }}" class="block px-4 py-2 rounded-lg {{ request()->routeIs('admin.projects.*') ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-600 hover:bg-gray-50' }}">
                    Projects
                </a>
                <a href="{{ route('admin.events.index') }}" class="block px-4 py-2 rounded-lg {{ request()->routeIs('admin.events.*') ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-600 hover:bg-gray-50' }}">
                    Events
                </a>
            </nav>
        </aside>

        <!-- Main Content -->
        <main class="flex-1">
            <header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
                <h1 class="text-xl font-semibold text-gray-800">
                    @yield('header')
                </h1>
                <div class="flex items-center gap-4">
                    <span class="text-sm text-gray-500">{{ Auth::user()->name ?? 'Admin' }}</span>
                </div>
            </header>

            <div class="p-6">
                @if(session('success'))
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <span class="block sm:inline">{{ session('success') }}</span>
                    </div>
                @endif

                @yield('content')
            </div>
        </main>
    </div>

    @stack('scripts')
</body>
</html>
