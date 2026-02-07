{{-- 
    Card Component
    Usage: @include('components.card', ['title' => 'Title', 'content' => 'Content', 'image' => 'path/to/image.jpg'])
--}}

@php
    $cardClass = $class ?? 'card';
    $hasImage = isset($image) && $image;
@endphp

<div class="{{ $cardClass }}">
    @if($hasImage)
        <div class="card-image">
            <img src="{{ $image }}" alt="{{ $title ?? '' }}">
        </div>
    @endif
    
    <div class="card-content">
        @if(isset($badge))
            <span class="badge">{{ $badge }}</span>
        @endif
        
        @if(isset($title))
            <h3 class="card-title">{{ $title }}</h3>
        @endif
        
        @if(isset($content))
            <p class="card-text">{{ $content }}</p>
        @endif
        
        @if(isset($meta))
            <div class="card-meta">
                {{ $meta }}
            </div>
        @endif
        
        @if(isset($tags))
            <div class="tech-stack">
                @foreach($tags as $tag)
                    <span class="badge badge-gray">{{ $tag }}</span>
                @endforeach
            </div>
        @endif
        
        @if(isset($link))
            <a href="{{ $link }}" class="btn btn-secondary btn-sm mt-4">
                {{ $linkText ?? 'Learn More' }}
            </a>
        @endif
        
        {{ $slot ?? '' }}
    </div>
</div>
