<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Newsletter;
use App\Models\Project;
use App\Models\Event;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        // Fetch featured projects
        $featuredProjects = Project::where('featured', true)
            ->orderBy('created_at', 'desc')
            ->limit(3)
            ->get();
        
        // If no featured projects, take latest 3
        if ($featuredProjects->isEmpty()) {
            $featuredProjects = Project::latest()->take(3)->get();
        }

        // Fetch latest newsletters
        $latestNewsletters = Newsletter::latest()->take(3)->get();

        // Fetch upcoming events (show all for now, including past events)
        $events = Event::orderBy('date', 'desc')->take(7)->get();

        // Fetch achievements (Dynamic)
        $achievements = \App\Models\Achievement::orderBy('order_sequence')->get();

        return Inertia::render('Home', [
            'featuredProjects' => $featuredProjects,
            'latestNewsletters' => $latestNewsletters,
            'events' => $events,
            'achievements' => $achievements,
        ]);
    }
}
