@extends('layouts.app')

@section('title', 'Collaboration - Let\'s Build the Future')
@section('description', 'Interested in working together? Explore partnership opportunities and startup collaborations.')

@section('content')

<!-- Hero Section -->
<section class="hero" style="padding: 6rem 0 4rem;">
    <div class="container">
        <div class="text-center" style="max-width: 800px; margin: 0 auto;">
            <h1 class="fade-in-up">Let's Collaborate</h1>
            <p class="hero-subtitle">Building meaningful impact requires great partnerships. Whether you're a startup, a brand, or a fellow builder, I'm open to exploring new frontiers together.</p>
        </div>
    </div>
</section>

<!-- Collaboration Pillars -->
<section class="section">
    <div class="container">
        <div class="grid grid-3">
            <div class="card card-lg" style="text-align: center;">
                <div class="highlight-icon mb-6">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                </div>
                <h3>Technical Partnership</h3>
                <p class="text-gray mb-6">Building the specialized core of your product. From security infrastructure to scalable backend architecture.</p>
                @include('components.button', ['text' => 'Learn More', 'url' => '#', 'variant' => 'outline', 'size' => 'sm'])
            </div>
            
            <div class="card card-lg" style="text-align: center;">
                <div class="highlight-icon mb-6">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                    </svg>
                </div>
                <h3>Growth Mentorship</h3>
                <p class="text-gray mb-6">Strategic advice for startups looking to scale their engineering culture and technical systems.</p>
                @include('components.button', ['text' => 'Learn More', 'url' => '#', 'variant' => 'outline', 'size' => 'sm'])
            </div>
            
            <div class="card card-lg" style="text-align: center;">
                <div class="highlight-icon mb-6">
                    <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                </div>
                <h3>Security Audit</h3>
                <p class="text-gray mb-6">Independent security reviews and penetration testing for your web and cloud infrastructure.</p>
                @include('components.button', ['text' => 'Learn More', 'url' => '#', 'variant' => 'outline', 'size' => 'sm'])
            </div>
        </div>
    </div>
</section>

<!-- Collaboration Form Section -->
<section class="section bg-gray" id="collab-form">
    <div class="container">
        <div class="grid" style="grid-template-columns: 1fr 1.5fr; gap: 4rem; align-items: start;">
            <div>
                <h2 class="mb-6">Start a conversation</h2>
                <p class="text-gray mb-8">Tell me a bit about what you're building and how you think I can help. I usually respond within 48 hours.</p>
                
                <div class="mb-12">
                    <h4 class="mb-4">What happens next?</h4>
                    <ul class="flex flex-col gap-4" style="list-style: none; padding: 0;">
                        <li class="flex gap-3">
                            <span class="bg-primary text-white" style="width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; flex-shrink: 0;">1</span>
                            <span>We'll schedule a quick 15-min discovery call.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="bg-primary text-white" style="width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; flex-shrink: 0;">2</span>
                            <span>I'll prepare a high-level proposal or roadmap.</span>
                        </li>
                        <li class="flex gap-3">
                            <span class="bg-primary text-white" style="width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; flex-shrink: 0;">3</span>
                            <span>We'll start building and transforming!</span>
                        </li>
                    </ul>
                </div>
                
                <div class="card card-highlight">
                    <h4 class="mb-4">Direct contact</h4>
                    <span class="text-sm text-gray">Email me at</span>
                    <a href="mailto:hello@alexchen.tech" class="display-block font-semibold decoration-none text-primary">hello@alexchen.tech</a>
                </div>
            </div>
            
            <div class="card card-lg">
                <div class="text-center mb-8">
                    <h3 class="mb-4">Quick Response via WhatsApp</h3>
                    <p class="text-gray mb-6">Untuk respon yang lebih cepat, kamu bisa langsung chat aku melalui WhatsApp.</p>
                    @include('components.button', [
                        'text' => 'Chat via WhatsApp',
                        'url' => 'https://wa.me/yourphonenumber?text=Halo%20Arif,%20saya%20tertarik%20untuk%20berkolaborasi.',
                        'variant' => 'primary',
                        'size' => 'lg'
                    ])
                    <div style="margin: 2rem 0; display: flex; align-items: center; gap: 1rem;">
                        <div style="flex: 1; height: 1px; background: var(--color-gray-200);"></div>
                        <span class="text-xs text-gray uppercase font-bold">Or use the form</span>
                        <div style="flex: 1; height: 1px; background: var(--color-gray-200);"></div>
                    </div>
                </div>

                <form action="#" method="POST" data-validate>
                    <div class="grid grid-2 mb-6">
                        <div class="form-group mb-0">
                            <label class="form-label">Full Name</label>
                            <input type="text" name="name" class="form-input" placeholder="Your name" required>
                        </div>
                        <div class="form-group mb-0">
                            <label class="form-label">Email Address</label>
                            <input type="email" name="email" class="form-input" placeholder="Your email" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Interest Area</label>
                        <select name="service" class="form-select" required>
                            <option value="">Select a service...</option>
                            <option value="tech">Technical Partnership</option>
                            <option value="growth">Growth Mentorship</option>
                            <option value="security">Security Audit</option>
                            <option value="other">Other / Custom Collaboration</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Company / Project Name</label>
                        <input type="text" name="company" class="form-input" placeholder="What are you building?">
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Tell me about your vision</label>
                        <textarea name="message" class="form-textarea" placeholder="Describe the problem you're solving or the help you need..." required></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary w-full" style="width: 100%;">Send Collaboration Request</button>
                    <p class="text-xs text-center text-gray mt-4">By clicking the button, you agree to start a professional dialogue.</p>
                </form>
            </div>
        </div>
    </div>
</section>

@endsection
