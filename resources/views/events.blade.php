@extends('layouts.app')

@section('title', 'Events - Join the Journey')
@section('description', 'Upcoming workshops, tech talks, and community sessions.')

@section('content')

<!-- Hero Section -->
<section class="hero" style="padding: 6rem 0 4rem;">
    <div class="container">
        <div class="text-center" style="max-width: 800px; margin: 0 auto;">
            <h1 class="fade-in-up">Upcoming events</h1>
            <p class="hero-subtitle">Let's connect in person or virtually. I regularly host workshops, tech talks, and community sharing sessions.</p>
        </div>
    </div>
</section>

<!-- Events List -->
<section class="section">
    <div class="container">
        <div class="section-title text-left">
            <h2>Next Sessions</h2>
            <p>Save the date for these upcoming interactive sessions.</p>
        </div>
        
        <div class="flex flex-col gap-6" style="max-width: 900px;">
            @php
                $upcomingEvents = \App\Models\Event::where('date', '>=', now())->orderBy('date')->get();
            @endphp

            @forelse($upcomingEvents as $event)
                <div class="event-card">
                    <div class="event-date">
                        <div class="day">{{ $event->date->format('d') }}</div>
                        <div class="month">{{ strtoupper($event->date->format('M')) }}</div>
                    </div>
                    <div class="event-content">
                        <div class="flex items-center gap-2 mb-2">
                            @if($event->badge)
                                <span class="badge">{{ $event->badge }}</span>
                            @endif
                            <span class="text-xs text-gray">{{ $event->date->format('h:i A') }} GMT+7</span>
                        </div>
                        <h3>{{ $event->title }}</h3>
                        <p class="text-gray mb-6">{{ $event->description }}</p>
                        <div class="flex-between">
                            <div class="flex gap-4">
                                <span class="text-sm"><strong>Location:</strong> {{ $event->location ?? 'Online' }}</span>
                            </div>
                            @include('components.button', [
                                'text' => 'Register Seat',
                                'url' => $event->registration_link ?? '#',
                                'variant' => 'primary',
                                'size' => 'sm'
                            ])
                        </div>
                    </div>
                </div>
            @empty
                <div class="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                    <p class="text-gray-500">No upcoming events scheduled at the moment.</p>
                </div>
            @endforelse
        </div>
    </div>
</section>

<!-- Past Events -->
<section class="section bg-gray">
    <div class="container">
        <div class="section-title">
            <h2>Past Events Documentation</h2>
            <p>Access recordings, slides, and summaries from previous sessions.</p>
        </div>
        
        <div class="grid grid-3">
            <div class="card">
                <div class="card-image mb-4" style="height: 150px;">
                    <img src="https://images.unsplash.com/photo-1540575861501-7c00117fb3c9?w=400&h=300&fit=crop" alt="Event">
                </div>
                <span class="text-xs text-primary mb-2 display-block">Nov 2025</span>
                <h4 class="mb-2">Laravel Indonesia Meetup</h4>
                <p class="text-sm text-gray mb-4">Sharing about "Laravel Pulse for Real-time Monitoring".</p>
                <a href="#" class="text-primary text-sm font-semibold">View Recording →</a>
            </div>
            
            <div class="card">
                <div class="card-image mb-4" style="height: 150px;">
                    <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop" alt="Event">
                </div>
                <span class="text-xs text-primary mb-2 display-block">Oct 2025</span>
                <h4 class="mb-2">Cyber Security Awareness Day</h4>
                <p class="text-sm text-gray mb-4">Workshop on personal data protection for small businesses.</p>
                <a href="#" class="text-primary text-sm font-semibold">Get Slide Deck →</a>
            </div>
            
            <div class="card">
                <div class="card-image mb-4" style="height: 150px;">
                    <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop" alt="Event">
                </div>
                <span class="text-xs text-primary mb-2 display-block">Sep 2025</span>
                <h4 class="mb-2">Tech Startup Growth Hacking</h4>
                <p class="text-sm text-gray mb-4">Panel discussion on technical growth strategies.</p>
                <a href="#" class="text-primary text-sm font-semibold">Read Summary →</a>
            </div>
        </div>
    </div>
</section>

@endsection
