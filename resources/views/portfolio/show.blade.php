@extends('layouts.app')

@section('title', 'Project Details - E-Commerce Platform')
@section('description', 'Detailed overview of the E-Commerce Platform project including features, technologies, and outcomes.')

@section('content')

<!-- Hero Section -->
<section class="hero" style="padding: 6rem 0;">
    <div class="container">
        <div class="hero-content">
            <div>
                <div style="margin-bottom: 1rem;">
                    <span class="badge">Web Development</span>
                </div>
                <h1 style="margin-bottom: 1.5rem;">E-Commerce Platform</h1>
                <p class="hero-subtitle">A modern, full-featured online store with seamless payment integration and comprehensive admin dashboard</p>
                
                <div style="display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
                    @include('components.button', [
                        'text' => 'Live Demo',
                        'url' => '#',
                        'variant' => 'primary'
                    ])
                    @include('components.button', [
                        'text' => 'View Code',
                        'url' => '#',
                        'variant' => 'secondary'
                    ])
                </div>
            </div>
            
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop" alt="E-Commerce Platform">
            </div>
        </div>
    </div>
</section>

<!-- Project Overview -->
<section class="section">
    <div class="container">
        <div class="grid" style="grid-template-columns: 2fr 1fr; gap: 3rem;">
            <div>
                <h2 class="mb-6">Project Overview</h2>
                <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem;">
                    This e-commerce platform was built to provide a seamless shopping experience for customers 
                    while giving administrators powerful tools to manage products, orders, and inventory.
                </p>
                
                <p style="font-size: 1.125rem; line-height: 1.8; margin-bottom: 1.5rem;">
                    The platform features a responsive design, secure payment processing through Stripe, 
                    real-time inventory management, and comprehensive analytics for business insights.
                </p>
                
                <h3 class="mt-8 mb-4">Key Features</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--color-gray-100); display: flex; align-items: center; gap: 0.75rem;">
                        <span style="color: var(--color-primary); font-size: 1.25rem;">✓</span>
                        <span>Secure user authentication and authorization</span>
                    </li>
                    <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--color-gray-100); display: flex; align-items: center; gap: 0.75rem;">
                        <span style="color: var(--color-primary); font-size: 1.25rem;">✓</span>
                        <span>Product catalog with categories and search</span>
                    </li>
                    <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--color-gray-100); display: flex; align-items: center; gap: 0.75rem;">
                        <span style="color: var(--color-primary); font-size: 1.25rem;">✓</span>
                        <span>Shopping cart and checkout process</span>
                    </li>
                    <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--color-gray-100); display: flex; align-items: center; gap: 0.75rem;">
                        <span style="color: var(--color-primary); font-size: 1.25rem;">✓</span>
                        <span>Stripe payment integration</span>
                    </li>
                    <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--color-gray-100); display: flex; align-items: center; gap: 0.75rem;">
                        <span style="color: var(--color-primary); font-size: 1.25rem;">✓</span>
                        <span>Order management and tracking</span>
                    </li>
                    <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--color-gray-100); display: flex; align-items: center; gap: 0.75rem;">
                        <span style="color: var(--color-primary); font-size: 1.25rem;">✓</span>
                        <span>Inventory management system</span>
                    </li>
                    <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--color-gray-100); display: flex; align-items: center; gap: 0.75rem;">
                        <span style="color: var(--color-primary); font-size: 1.25rem;">✓</span>
                        <span>Admin dashboard with analytics</span>
                    </li>
                    <li style="padding: 0.75rem 0; display: flex; align-items: center; gap: 0.75rem;">
                        <span style="color: var(--color-primary); font-size: 1.25rem;">✓</span>
                        <span>Responsive design for all devices</span>
                    </li>
                </ul>
            </div>
            
            <div>
                <!-- Tech Stack -->
                <div class="card mb-6">
                    <h3 class="mb-4">Tech Stack</h3>
                    <div class="tech-stack">
                        <span class="badge">Laravel</span>
                        <span class="badge">Vue.js</span>
                        <span class="badge">MySQL</span>
                        <span class="badge">Stripe</span>
                        <span class="badge">Tailwind CSS</span>
                        <span class="badge">Redis</span>
                    </div>
                </div>
                
                <!-- Project Info -->
                <div class="card">
                    <h3 class="mb-4">Project Info</h3>
                    <div style="display: flex; flex-direction: column; gap: 1rem;">
                        <div>
                            <div style="font-size: 0.875rem; color: var(--color-gray-600); margin-bottom: 0.25rem;">Client</div>
                            <div style="font-weight: 600;">Retail Company</div>
                        </div>
                        <div>
                            <div style="font-size: 0.875rem; color: var(--color-gray-600); margin-bottom: 0.25rem;">Duration</div>
                            <div style="font-weight: 600;">3 months</div>
                        </div>
                        <div>
                            <div style="font-size: 0.875rem; color: var(--color-gray-600); margin-bottom: 0.25rem;">Year</div>
                            <div style="font-weight: 600;">2024</div>
                        </div>
                        <div>
                            <div style="font-size: 0.875rem; color: var(--color-gray-600); margin-bottom: 0.25rem;">Role</div>
                            <div style="font-weight: 600;">Full Stack Developer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Screenshots -->
<section class="section bg-gray">
    <div class="container">
        <h2 class="text-center mb-12">Project Screenshots</h2>
        
        <div class="grid grid-2">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" 
                 alt="Screenshot 1" 
                 style="border-radius: 0.75rem; box-shadow: var(--shadow-lg); width: 100%;">
            <img src="https://images.unsplash.com/photo-1556742407-5cc6edd8d6b6?w=600&h=400&fit=crop" 
                 alt="Screenshot 2" 
                 style="border-radius: 0.75rem; box-shadow: var(--shadow-lg); width: 100%;">
            <img src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop" 
                 alt="Screenshot 3" 
                 style="border-radius: 0.75rem; box-shadow: var(--shadow-lg); width: 100%;">
            <img src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=600&h=400&fit=crop" 
                 alt="Screenshot 4" 
                 style="border-radius: 0.75rem; box-shadow: var(--shadow-lg); width: 100%;">
        </div>
    </div>
</section>

<!-- Results -->
<section class="section">
    <div class="container">
        <h2 class="text-center mb-12">Results & Impact</h2>
        
        <div class="grid grid-3">
            <div class="card text-center">
                <div style="font-size: 3rem; font-weight: 700; color: var(--color-primary); margin-bottom: 1rem;">150%</div>
                <h4 style="margin-bottom: 0.5rem;">Sales Increase</h4>
                <p class="text-gray">Growth in online sales within first 3 months</p>
            </div>
            
            <div class="card text-center">
                <div style="font-size: 3rem; font-weight: 700; color: var(--color-primary); margin-bottom: 1rem;">10K+</div>
                <h4 style="margin-bottom: 0.5rem;">Active Users</h4>
                <p class="text-gray">Registered customers using the platform</p>
            </div>
            
            <div class="card text-center">
                <div style="font-size: 3rem; font-weight: 700; color: var(--color-primary); margin-bottom: 1rem;">99.9%</div>
                <h4 style="margin-bottom: 0.5rem;">Uptime</h4>
                <p class="text-gray">System reliability and availability</p>
            </div>
        </div>
    </div>
</section>

<!-- Navigation -->
<section class="section bg-gray">
    <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <a href="/portfolio" class="btn btn-outline">← Back to Portfolio</a>
            <a href="/portfolio/2" class="btn btn-primary">Next Project →</a>
        </div>
    </div>
</section>

@endsection
