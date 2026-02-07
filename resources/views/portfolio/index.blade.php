@extends('layouts.app')

@section('title', 'Portfolio - My Projects & Work')
@section('description', 'Explore my portfolio of web development projects, security tools, and digital solutions.')

@section('content')

<!-- Hero Section -->
<section class="hero" style="padding: 6rem 0 4rem;">
    <div class="container">
        <div class="text-center" style="max-width: 800px; margin: 0 auto;">
            <h1 class="fade-in-up">Portfolio</h1>
            <p class="hero-subtitle">A showcase of my work in web development, security, and digital innovation</p>
        </div>
    </div>
</section>

<!-- Filter Buttons -->
<section style="padding: 2rem 0;">
    <div class="container">
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-primary btn-sm" data-filter="all">All Projects</button>
            <button class="btn btn-outline btn-sm" data-filter="web">Web Development</button>
            <button class="btn btn-outline btn-sm" data-filter="security">Security</button>
            <button class="btn btn-outline btn-sm" data-filter="mobile">Mobile</button>
            <button class="btn btn-outline btn-sm" data-filter="tools">Tools</button>
        </div>
    </div>
</section>

<!-- Projects Grid -->
<section class="section">
    <div class="container">
        <div class="grid grid-3">
            @php
            $projects = [
                [
                    'title' => 'E-Commerce Platform',
                    'content' => 'Full-featured online store with payment integration, inventory management, and admin dashboard. Built with modern technologies for optimal performance.',
                    'image' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop',
                    'tags' => ['Laravel', 'Vue.js', 'MySQL', 'Stripe'],
                    'category' => 'web',
                    'link' => '/portfolio/1'
                ],
                [
                    'title' => 'Security Audit Tool',
                    'content' => 'Automated security scanning and vulnerability detection system for web applications. Implements OWASP Top 10 checks.',
                    'image' => 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
                    'tags' => ['Python', 'Flask', 'Security', 'Docker'],
                    'category' => 'security',
                    'link' => '/portfolio/2'
                ],
                [
                    'title' => 'Growth Analytics Dashboard',
                    'content' => 'Real-time analytics platform for tracking business growth metrics. Features include custom charts, reports, and insights.',
                    'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                    'tags' => ['React', 'Node.js', 'MongoDB', 'Chart.js'],
                    'category' => 'web',
                    'link' => '/portfolio/3'
                ],
                [
                    'title' => 'Mobile Banking App',
                    'content' => 'Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.',
                    'image' => 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
                    'tags' => ['React Native', 'Node.js', 'PostgreSQL'],
                    'category' => 'mobile',
                    'link' => '/portfolio/4'
                ],
                [
                    'title' => 'Password Manager',
                    'content' => 'End-to-end encrypted password manager with zero-knowledge architecture. Secure storage for sensitive credentials.',
                    'image' => 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=300&fit=crop',
                    'tags' => ['Electron', 'TypeScript', 'Crypto'],
                    'category' => 'security',
                    'link' => '/portfolio/5'
                ],
                [
                    'title' => 'Task Management System',
                    'content' => 'Collaborative task management tool with real-time updates, team assignments, and progress tracking.',
                    'image' => 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
                    'tags' => ['Vue.js', 'Laravel', 'WebSocket'],
                    'category' => 'web',
                    'link' => '/portfolio/6'
                ],
                [
                    'title' => 'API Development Kit',
                    'content' => 'Comprehensive toolkit for building RESTful APIs with authentication, rate limiting, and documentation generation.',
                    'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
                    'tags' => ['Node.js', 'Express', 'OpenAPI'],
                    'category' => 'tools',
                    'link' => '/portfolio/7'
                ],
                [
                    'title' => 'Learning Management System',
                    'content' => 'Online learning platform with video courses, quizzes, certificates, and student progress tracking.',
                    'image' => 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop',
                    'tags' => ['PHP', 'Laravel', 'MySQL', 'AWS'],
                    'category' => 'web',
                    'link' => '/portfolio/8'
                ],
                [
                    'title' => 'Network Scanner',
                    'content' => 'Network security scanning tool for identifying vulnerabilities, open ports, and security misconfigurations.',
                    'image' => 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop',
                    'tags' => ['Python', 'Nmap', 'CLI'],
                    'category' => 'security',
                    'link' => '/portfolio/9'
                ]
            ];
            @endphp
            
            @foreach($projects as $project)
                <div data-category="{{ $project['category'] }}">
                    @include('components.card', [
                        'title' => $project['title'],
                        'content' => $project['content'],
                        'image' => $project['image'],
                        'tags' => $project['tags'],
                        'link' => $project['link'],
                        'linkText' => 'View Details',
                        'class' => 'project-card'
                    ])
                </div>
            @endforeach
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section bg-gray">
    <div class="container">
        <div class="text-center">
            <h2 class="mb-6">Have a Project in Mind?</h2>
            <p style="font-size: 1.125rem; max-width: 600px; margin: 0 auto 2rem;">
                Let's discuss how we can work together to bring your ideas to life.
            </p>
            @include('components.button', [
                'text' => 'Start a Collaboration',
                'url' => '/collaboration',
                'variant' => 'primary',
                'size' => 'lg'
            ])
        </div>
    </div>
</section>

@endsection
