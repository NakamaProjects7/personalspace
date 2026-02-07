@extends('layouts.app')

@section('title', 'About Me - Personal Journey & Experience')
@section('description', 'Learn more about my journey in tech, growth mindset, and passion for cyber security.')

@section('content')

<!-- Hero Section -->
<section class="hero" style="padding: 6rem 0 4rem;">
    <div class="container">
        <div class="text-center" style="max-width: 800px; margin: 0 auto;">
            <h1 class="fade-in-up">About Me</h1>
            <p class="hero-subtitle">Tech enthusiast, startup builder, and lifelong learner passionate about creating meaningful digital impact</p>
        </div>
    </div>
</section>

<!-- Profile Section -->
<section class="section">
    <div class="container">
        <div class="hero-content" style="grid-template-columns: 1fr 1.5fr; align-items: start;">
            <div>
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop" 
                     alt="Profile Photo" 
                     style="border-radius: 1rem; box-shadow: var(--shadow-xl); width: 100%;">
            </div>
            
            <div>
                <h2 class="mb-6">Hello, I'm [Your Name]</h2>
                <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem;">
                    I'm a passionate developer and tech enthusiast with a strong focus on building secure, 
                    scalable applications. My journey in technology started with curiosity and has evolved 
                    into a commitment to continuous growth and learning.
                </p>
                
                <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem;">
                    I believe in the power of technology to transform lives and businesses. Through my work, 
                    I combine technical expertise with a security-first mindset to create solutions that matter. 
                    My focus areas include web development, cyber security, and growth strategies for startups.
                </p>
                
                <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 2rem;">
                    When I'm not coding, you'll find me writing about tech, attending security conferences, 
                    or collaborating with other builders in the startup ecosystem.
                </p>
                
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    @include('components.button', [
                        'text' => 'Download CV',
                        'url' => '#',
                        'variant' => 'primary'
                    ])
                    @include('components.button', [
                        'text' => 'View Portfolio',
                        'url' => '/portfolio',
                        'variant' => 'secondary'
                    ])
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Journey & Experience -->
<section class="section bg-gray">
    <div class="container">
        <div class="section-title">
            <h2>My Journey</h2>
            <p>Key milestones and experiences that shaped my path</p>
        </div>
        
        <div style="max-width: 900px; margin: 0 auto;">
            <!-- Timeline Item -->
            <div class="card mb-6">
                <div style="display: flex; gap: 2rem; align-items: start;">
                    <div style="flex-shrink: 0; width: 120px; text-align: center;">
                        <div style="background: var(--color-primary-lighter); padding: 1rem; border-radius: 0.5rem;">
                            <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary);">2024 - Now</div>
                        </div>
                    </div>
                    <div>
                        <h3>Full Stack Developer & Security Consultant</h3>
                        <p class="text-primary mb-4">Freelance & Startup Collaborations</p>
                        <p>Working with startups to build secure, scalable applications. Focusing on security audits, 
                        code reviews, and implementing best practices for modern web applications.</p>
                    </div>
                </div>
            </div>
            
            <div class="card mb-6">
                <div style="display: flex; gap: 2rem; align-items: start;">
                    <div style="flex-shrink: 0; width: 120px; text-align: center;">
                        <div style="background: var(--color-primary-lighter); padding: 1rem; border-radius: 0.5rem;">
                            <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary);">2022 - 2024</div>
                        </div>
                    </div>
                    <div>
                        <h3>Senior Web Developer</h3>
                        <p class="text-primary mb-4">Tech Company</p>
                        <p>Led development of multiple high-traffic web applications. Implemented security protocols 
                        and mentored junior developers in best practices.</p>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div style="display: flex; gap: 2rem; align-items: start;">
                    <div style="flex-shrink: 0; width: 120px; text-align: center;">
                        <div style="background: var(--color-primary-lighter); padding: 1rem; border-radius: 0.5rem;">
                            <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-primary);">2020 - 2022</div>
                        </div>
                    </div>
                    <div>
                        <h3>Junior Developer</h3>
                        <p class="text-primary mb-4">Startup</p>
                        <p>Started my professional journey building web applications and learning from experienced developers. 
                        Developed a passion for clean code and security.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Skills & Technology Stack -->
<section class="section">
    <div class="container">
        <div class="section-title">
            <h2>Skills & Technology Stack</h2>
            <p>Tools and technologies I work with</p>
        </div>
        
        <div class="grid grid-3">
            <!-- Frontend -->
            <div class="card">
                <h3 style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: var(--color-primary);">
                        <polyline points="16 18 22 12 16 6"/>
                        <polyline points="8 6 2 12 8 18"/>
                    </svg>
                    Frontend
                </h3>
                <div class="tech-stack">
                    <span class="badge">HTML5</span>
                    <span class="badge">CSS3</span>
                    <span class="badge">JavaScript</span>
                    <span class="badge">Vue.js</span>
                    <span class="badge">React</span>
                    <span class="badge">Tailwind CSS</span>
                </div>
            </div>
            
            <!-- Backend -->
            <div class="card">
                <h3 style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: var(--color-primary);">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                        <line x1="6" y1="6" x2="6.01" y2="6"/>
                        <line x1="6" y1="18" x2="6.01" y2="18"/>
                    </svg>
                    Backend
                </h3>
                <div class="tech-stack">
                    <span class="badge">PHP</span>
                    <span class="badge">Laravel</span>
                    <span class="badge">Node.js</span>
                    <span class="badge">Python</span>
                    <span class="badge">MySQL</span>
                    <span class="badge">PostgreSQL</span>
                    <span class="badge">MongoDB</span>
                </div>
            </div>
            
            <!-- DevOps & Security -->
            <div class="card">
                <h3 style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem;">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: var(--color-primary);">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    DevOps & Security
                </h3>
                <div class="tech-stack">
                    <span class="badge">Git</span>
                    <span class="badge">Docker</span>
                    <span class="badge">CI/CD</span>
                    <span class="badge">Linux</span>
                    <span class="badge">OWASP</span>
                    <span class="badge">Penetration Testing</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Values & Approach -->
<section class="section bg-gray">
    <div class="container">
        <div class="section-title">
            <h2>My Approach</h2>
            <p>Core principles that guide my work</p>
        </div>
        
        <div class="grid grid-2">
            <div class="card">
                <h3 class="mb-4">🎯 Growth Mindset</h3>
                <p>Continuous learning and improvement. Every challenge is an opportunity to grow and develop new skills.</p>
            </div>
            
            <div class="card">
                <h3 class="mb-4">🔒 Security First</h3>
                <p>Building secure applications from the ground up. Security is not an afterthought, it's a foundation.</p>
            </div>
            
            <div class="card">
                <h3 class="mb-4">🚀 Innovation</h3>
                <p>Staying on top of latest technologies and best practices to deliver modern, efficient solutions.</p>
            </div>
            
            <div class="card">
                <h3 class="mb-4">🤝 Collaboration</h3>
                <p>Working together to achieve better results. Open communication and knowledge sharing create success.</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="section">
    <div class="container">
        <div class="card card-lg card-highlight text-center" style="max-width: 800px; margin: 0 auto;">
            <h2>Let's Work Together</h2>
            <p style="font-size: 1.125rem; margin-bottom: 2rem;">
                Interested in collaborating or have a project in mind? I'd love to hear from you!
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                @include('components.button', [
                    'text' => 'Start a Project',
                    'url' => '/collaboration',
                    'variant' => 'primary',
                    'size' => 'lg'
                ])
                @include('components.button', [
                    'text' => 'Get in Touch',
                    'url' => '/contact',
                    'variant' => 'outline',
                    'size' => 'lg'
                ])
            </div>
        </div>
    </div>
</section>

@endsection
