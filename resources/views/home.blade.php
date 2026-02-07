@extends('layouts.app')

@section('title', 'Home - Tech, Growth & Cyber Security')
@section('description', 'Welcome to my personal space. Building meaningful digital impact through tech, growth, and cyber security.')

@section('content')

<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="hero-content fade-in-up">
            <div>
                <h1 class="hero-title">Halo, aku Muhammad Arif</h1>
                <p class="hero-subtitle">
                    Aku merupakan seorang <strong>content creator</strong>, <strong>educator</strong>, dan <strong>technology enthusiast</strong>.
                </p>
                <p class="mb-8" style="font-size: 1.125rem; color: var(--color-gray-600);">
                    Membangun dampak digital yang bermakna melalui teknologi, pertumbuhan, dan keamanan siber.
                </p>
                
                <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
                    @include('components.button', [
                        'text' => 'Let\'s Collaborate',
                        'url' => 'https://wa.me/yourphonenumber', {{-- Replace with actual phone --}}
                        'variant' => 'primary',
                        'size' => 'lg'
                    ])
                    @include('components.button', [
                        'text' => 'Read My Blog',
                        'url' => '/blog',
                        'variant' => 'outline',
                        'size' => 'lg'
                    ])
                </div>
            </div>
            
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=600&fit=crop" alt="Muhammad Arif">
            </div>
        </div>
    </div>
</section>

<!-- Tempat Berbagi Section -->
<section class="section" style="background: var(--color-gray-50);">
    <div class="container">
        <div class="section-title">
            <h2>Tempat Berbagi</h2>
            <p>Temukan konten, tutorial, dan insight menarik di berbagai platformku</p>
        </div>
        
        <div class="grid grid-3">
            <!-- Instagram -->
            <a href="https://instagram.com/yourusername" target="_blank" class="card text-center" style="text-decoration: none;">
                <div class="highlight-icon mb-4" style="background: #E1306C15; color: #E1306C;">
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.272 2.69.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.2 4.353 2.62 6.77 6.98 6.97 1.281.058 1.689.072 4.948.072 3.259 0 3.667-.014 4.947-.072 4.351-.2 6.77-2.62 6.97-6.97.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.2-4.353-2.612-6.77-6.97-6.97C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                </div>
                <h3>Instagram</h3>
                <p class="text-sm text-gray">Daily micro-learning & tips siber sekuritas</p>
                <span class="text-primary mt-4 font-bold">Follow Me →</span>
            </a>
            
            <!-- YouTube -->
            <a href="https://youtube.com/yourusername" target="_blank" class="card text-center" style="text-decoration: none;">
                <div class="highlight-icon mb-4" style="background: #FF000015; color: #FF0000;">
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                </div>
                <h3>YouTube</h3>
                <p class="text-sm text-gray">Full tutorial, tech review & deep-dive</p>
                <span class="text-primary mt-4 font-bold">Subscribe →</span>
            </a>
            
            <!-- Website -->
            <a href="#" class="card text-center" style="text-decoration: none;">
                <div class="highlight-icon mb-4" style="background: var(--color-primary-lighter); color: var(--color-primary);">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                </div>
                <h3>Website ini</h3>
                <p class="text-sm text-gray">Pusat resource, event & newsletter eksklusif</p>
                <span class="text-primary mt-4 font-bold">Jelajahi →</span>
            </a>
        </div>
    </div>
</section>

<!-- Highlights Section -->
<section class="section">
    <div class="container">
        <div class="section-title">
            <h2>What I Focus On</h2>
            <p>Three pillars that drive my work and passion</p>
        </div>
        
        <div class="highlight-grid">
            <!-- Tech Highlight -->
            <div class="highlight-card">
                <div class="highlight-icon">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                </div>
                <h3>Tech</h3>
                <p>Building robust applications with modern technologies and best practices</p>
            </div>
            
            <!-- Growth Highlight -->
            <div class="highlight-card">
                <div class="highlight-icon">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <line x1="12" y1="20" x2="12" y2="10"/>
                        <line x1="18" y1="20" x2="18" y2="4"/>
                        <line x1="6" y1="20" x2="6" y2="16"/>
                    </svg>
                </div>
                <h3>Growth</h3>
                <p>Continuous learning and improvement mindset for personal and professional development</p>
            </div>
            
            <!-- Cyber Security Highlight -->
            <div class="highlight-card">
                <div class="highlight-icon">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                </div>
                <h3>Cyber Security</h3>
                <p>Ensuring security and privacy in every digital solution I create</p>
            </div>
        </div>
    </div>
</section>

<!-- Featured Projects -->
<section class="section bg-gray">
    <div class="container">
        <div class="section-title">
            <h2>Featured Projects</h2>
            <p>Explore some of my recent work and digital creations</p>
        </div>
        
        <div class="grid grid-3">
        <div class="grid grid-3">
            @forelse($projects as $project)
                @include('components.card', [
                    'title' => $project->title,
                    'content' => $project->excerpt,
                    'image' => $project->image,
                    'tags' => json_decode($project->tags, true) ?? [],
                    'link' => $project->link ?? '#',
                    'linkText' => 'View Project',
                    'class' => 'project-card'
                ])
            @empty
                 <div class="col-span-3 text-center py-8 text-gray-500">
                    <p>No projects to display yet.</p>
                </div>
            @endforelse
        </div>
        </div>
        
        <div class="text-center mt-8">
            @include('components.button', [
                'text' => 'View All Projects',
                'url' => '/portfolio',
                'variant' => 'outline'
            ])
        </div>
    </div>
</section>

<!-- Latest Blog Posts -->
<section class="section">
    <div class="container">
        <div class="section-title">
            <h2>Latest Articles</h2>
            <p>Thoughts, tutorials, and insights from my journey</p>
        </div>
        
        <div class="grid grid-3">
        <div class="grid grid-3">
            @forelse($articles as $article)
                @include('components.card', [
                    'title' => $article->title,
                    'content' => $article->excerpt ?? Str::limit(strip_tags($article->content), 100),
                    'image' => $article->image,
                    'badge' => $article->category,
                    'meta' => '<span>' . ($article->published_at ? $article->published_at->format('M d, Y') : 'Draft') . '</span>',
                    'link' => '/blog',
                    'linkText' => 'Read More',
                    'class' => 'blog-card'
                ])
            @empty
                <div class="col-span-3 text-center py-8 text-gray-500">
                    <p>No articles published yet.</p>
                </div>
            @endforelse
        </div>
        </div>
        
        <div class="text-center mt-8">
            @include('components.button', [
                'text' => 'View All Articles',
                'url' => '/blog',
                'variant' => 'outline'
            ])
        </div>
    </div>
</section>

<!-- Upcoming Events -->
<section class="section bg-gray">
    <div class="container">
        <div class="section-title">
            <h2>Upcoming Events</h2>
            <p>Join me at these events and webinars</p>
        </div>
        
        <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem;">
            @forelse($events as $event)
                <div class="event-card">
                    <div class="event-date">
                        <div class="day">{{ $event->date->format('d') }}</div>
                        <div class="month">{{ strtoupper($event->date->format('M')) }}</div>
                    </div>
                    <div class="event-content">
                        <h3>{{ $event->title }}</h3>
                        <p class="text-gray">{{ $event->description }}</p>
                        <div class="mt-4">
                            @include('components.button', [
                                'text' => 'Register Now',
                                'url' => $event->registration_link ?? '#',
                                'variant' => 'primary',
                                'size' => 'sm'
                            ])
                        </div>
                    </div>
                </div>
            @empty
                <div class="text-center py-6 bg-white rounded-lg border border-gray-200">
                    <p class="text-gray-500">No upcoming events at the moment.</p>
                </div>
            @endforelse
        </div>
        
        <div class="text-center mt-8">
            @include('components.button', [
                'text' => 'View All Events',
                'url' => '/events',
                'variant' => 'outline'
            ])
        </div>
    </div>
</section>

<!-- Collaboration CTA -->
<section class="section">
    <div class="container">
        <div class="card card-lg card-highlight text-center" style="max-width: 800px; margin: 0 auto;">
            <h2>Let's Build Something Together</h2>
            <p style="font-size: 1.125rem; margin-bottom: 2rem;">I'm always open to new opportunities, collaborations, and exciting projects.</p>
            
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                @include('components.button', [
                    'text' => 'Chat via WhatsApp',
                    'url' => 'https://wa.me/yourphonenumber?text=Halo%20Arif,%20saya%20tertarik%20untuk%20berkolaborasi.',
                    'variant' => 'primary',
                    'size' => 'lg'
                ])
                @include('components.button', [
                    'text' => 'Send Email',
                    'url' => 'mailto:hello@alexchen.tech',
                    'variant' => 'outline',
                    'size' => 'lg'
                ])
            </div>
        </div>
    </div>
</section>

@endsection
