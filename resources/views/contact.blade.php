@extends('layouts.app')

@section('title', 'Contact - Get in Touch')
@section('description', 'Reach out for inquiries, collaboration, or just a friendly chat.')

@section('content')

<!-- Hero Section -->
<section class="hero" style="padding: 6rem 0 4rem;">
    <div class="container">
        <div class="text-center" style="max-width: 800px; margin: 0 auto;">
            <h1 class="fade-in-up">Get in touch</h1>
            <p class="hero-subtitle">Whether you have a specific question or just want to say hi, my inbox is always open.</p>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="grid" style="grid-template-columns: 1fr 1.5fr; gap: 4rem;">
            <!-- Contact Info -->
            <div>
                <h2 class="mb-8">Contact Information</h2>
                
                <div class="flex flex-col gap-8">
                    <div class="flex gap-4">
                        <div class="highlight-icon" style="width: 48px; height: 48px; flex-shrink: 0;">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                            </svg>
                        </div>
                        <div>
                            <h4 class="mb-1">Email</h4>
                            <a href="mailto:hello@alexchen.tech" class="text-primary decoration-none">hello@alexchen.tech</a>
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <div class="highlight-icon" style="width: 48px; height: 48px; flex-shrink: 0;">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                            </svg>
                        </div>
                        <div>
                            <h4 class="mb-1">LinkedIn</h4>
                            <a href="#" class="text-primary decoration-none">linkedin.com/in/alexchen</a>
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <div class="highlight-icon" style="width: 48px; height: 48px; flex-shrink: 0;">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                            </svg>
                        </div>
                        <div>
                            <h4 class="mb-1">Twitter</h4>
                            <a href="#" class="text-primary decoration-none">@alexchen_tech</a>
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <div class="highlight-icon" style="width: 48px; height: 48px; flex-shrink: 0;">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                            </svg>
                        </div>
                        <div>
                            <h4 class="mb-1">GitHub</h4>
                            <a href="#" class="text-primary decoration-none">github.com/alexchen</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Contact Form -->
            <div class="card card-lg shadow-xl">
                <form action="#" method="POST" data-validate>
                    <div class="form-group">
                        <label class="form-label">Name</label>
                        <input type="text" name="name" class="form-input" placeholder="Your name" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Email Address</label>
                        <input type="email" name="email" class="form-input" placeholder="Your email address" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Subject</label>
                        <input type="text" name="subject" class="form-input" placeholder="Project inquiry / Just saying hi" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Message</label>
                        <textarea name="message" class="form-textarea" placeholder="Tell me what's on your mind..." required></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-primary w-full" style="width: 100%;">Send Message</button>
                    <p class="text-xs text-center text-gray mt-4">I read every email. You should hear from me in 1-2 days.</p>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- Maps Placeholder -->
<section class="section bg-gray">
    <div class="container">
        <div class="card" style="height: 300px; display: flex; align-items: center; justify-content: center; background: var(--color-gray-100); border: 2px dashed var(--color-gray-300);">
            <div class="text-center">
                <h4 class="mb-2">Based in Jakarta, Indonesia</h4>
                <p class="text-gray">Working with partners worldwide.</p>
            </div>
        </div>
    </div>
</section>

@endsection
