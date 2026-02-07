@extends('layouts.app')

@section('title', 'Blog - Insights & Transformations')
@section('description', 'Latest thoughts, tutorials, and insights on Tech, Growth, and Cyber Security.')

@section('content')

<!-- Hero Section -->
<section class="hero" style="padding: 6rem 0 4rem;">
    <div class="container">
        <div class="text-center" style="max-width: 800px; margin: 0 auto;">
            <h1 class="fade-in-up">Blog & Newsletter</h1>
            <p class="hero-subtitle">Sharing real transformation journeys, technical deep-dives, and growth strategies</p>
        </div>
    </div>
</section>

<!-- Category Filter -->
<section style="padding: 2rem 0;">
    <div class="container">
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-primary btn-sm" data-filter="all">All Topics</button>
            <button class="btn btn-outline btn-sm" data-filter="tech">Tech</button>
            <button class="btn btn-outline btn-sm" data-filter="growth">Growth</button>
            <button class="btn btn-outline btn-sm" data-filter="security">Cyber Security</button>
        </div>
    </div>
</section>

<!-- Blog Posts Grid -->
<section class="section">
    <div class="container">
        <div class="grid grid-3">
            @php
                $articles = \App\Models\Newsletter::latest()->paginate(9);
            @endphp

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
                <div class="col-span-3 text-center py-12">
                    <p class="text-gray-500 text-lg">No articles found. Stay tuned!</p>
                </div>
            @endforelse
        </div>

        <div class="mt-8">
            {{ $articles->links() }}
        </div>
    </div>
</section>

<!-- Newsletter Signup -->
<section class="section bg-gray">
    <div class="container">
        <div class="card card-lg card-highlight text-center" style="max-width: 800px; margin: 0 auto;">
            <h2>Join the Newsletter</h2>
            <p style="font-size: 1.125rem; margin-bottom: 2rem;">Get exclusive insights on tech, growth, and security directly in your inbox.</p>
            
            <form action="#" method="POST" data-validate style="max-width: 500px; margin: 0 auto;">
                <div class="form-group" style="display: flex; gap: 0.5rem;">
                    <input type="email" name="email" placeholder="Enter your email address" class="form-input" required style="margin: 0;">
                    <button type="submit" class="btn btn-primary">Subscribe</button>
                </div>
                <p class="text-xs text-gray mt-2">No spam. Only high-value content once a week.</p>
            </form>
        </div>
    </div>
</section>

@endsection
