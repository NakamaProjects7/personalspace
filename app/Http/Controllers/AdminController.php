<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Newsletter;
use App\Models\Project;
use App\Models\Event;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        $stats = [
            'newsletters' => Newsletter::count(),
            'projects' => Project::count(),
            'events' => Event::count(),
            'laravel_version' => app()->version(),
            'php_version' => PHP_VERSION,
        ];
        
        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
        ]);
    }

    // ===== Newsletters =====
    public function newslettersIndex()
    {
        $newsletters = Newsletter::latest()->paginate(12);
        return Inertia::render('Admin/Newsletters/Index', [
            'newsletters' => $newsletters,
        ]);
    }

    public function newslettersCreate()
    {
        return Inertia::render('Admin/Newsletters/Create');
    }

    public function newslettersStore(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'category' => 'required',
            'image' => 'nullable|string',
        ]);

        $newsletter = Newsletter::create([
            'title' => $validated['title'],
            'content' => $validated['content'],
            'excerpt' => Str::limit(strip_tags($validated['content']), 150),
            'category' => $validated['category'],
            'image' => $request->image,
            'published_at' => now(),
        ]);

        // Send notification to all subscribers
        $subscribers = \App\Models\Subscriber::all();
        foreach ($subscribers as $subscriber) {
            \Illuminate\Support\Facades\Mail::to($subscriber->email)->queue(new \App\Mail\NewPostNotification($newsletter, $subscriber));
        }

        return redirect()->route('admin.newsletters.index')->with('success', 'Newsletter published!');
    }

    public function newslettersEdit($id)
    {
        $newsletter = Newsletter::findOrFail($id);
        return Inertia::render('Admin/Newsletters/Edit', [
            'newsletter' => $newsletter,
        ]);
    }

    public function newslettersUpdate(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'category' => 'required',
            'image' => 'nullable|string',
        ]);

        $newsletter = Newsletter::findOrFail($id);
        $newsletter->update([
            'title' => $validated['title'],
            'content' => $validated['content'],
            'excerpt' => Str::limit(strip_tags($validated['content']), 150),
            'category' => $validated['category'],
            'image' => $request->image,
        ]);

        return redirect()->route('admin.newsletters.index')->with('success', 'Newsletter updated!');
    }

    public function newslettersDestroy($id)
    {
        Newsletter::findOrFail($id)->delete();
        return redirect()->route('admin.newsletters.index')->with('success', 'Newsletter deleted!');
    }

    // ===== Events =====
    public function eventsIndex()
    {
        $events = Event::latest('date')->paginate(12);
        return Inertia::render('Admin/Events/Index', [
            'events' => $events,
        ]);
    }

    public function eventsCreate()
    {
        return Inertia::render('Admin/Events/Create');
    }

    public function eventsStore(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'date' => 'required|date',
            'location' => 'nullable|string',
            'badge' => 'nullable|string',
            'registration_link' => 'nullable|url',
        ]);

        Event::create($validated);

        return redirect()->route('admin.events.index')->with('success', 'Event created!');
    }

    public function eventsEdit($id)
    {
        $event = Event::findOrFail($id);
        return Inertia::render('Admin/Events/Edit', [
            'event' => $event,
        ]);
    }

    public function eventsUpdate(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'date' => 'required|date',
            'location' => 'nullable|string',
            'badge' => 'nullable|string',
            'registration_link' => 'nullable|url',
        ]);

        $event = Event::findOrFail($id);
        $event->update($validated);

        return redirect()->route('admin.events.index')->with('success', 'Event updated!');
    }

    public function eventsDestroy($id)
    {
        Event::findOrFail($id)->delete();
        return redirect()->route('admin.events.index')->with('success', 'Event deleted!');
    }

    // ===== Projects =====
    public function projectsIndex()
    {
        $projects = Project::latest()->paginate(12);
        return Inertia::render('Admin/Projects/Index', [
            'projects' => $projects,
        ]);
    }

    public function projectsCreate()
    {
        return Inertia::render('Admin/Projects/Create');
    }

    public function projectsStore(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'nullable|string',
            'tech_stack' => 'nullable|string',
            'live_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'featured' => 'nullable|boolean',
        ]);

        Project::create($validated);

        return redirect()->route('admin.projects.index')->with('success', 'Project created!');
    }

    public function projectsEdit($id)
    {
        $project = Project::findOrFail($id);
        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project,
        ]);
    }

    public function projectsUpdate(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'image' => 'nullable|string',
            'tech_stack' => 'nullable|string',
            'live_url' => 'nullable|url',
            'github_url' => 'nullable|url',
            'featured' => 'nullable|boolean',
        ]);

        $project = Project::findOrFail($id);
        $project->update($validated);

        return redirect()->route('admin.projects.index')->with('success', 'Project updated!');
    }

    public function projectsDestroy($id)
    {
        Project::findOrFail($id)->delete();
        return redirect()->route('admin.projects.index')->with('success', 'Project deleted!');
    }
    // ===== Achievements =====
    public function achievementsIndex()
    {
        $achievements = \App\Models\Achievement::orderBy('order_sequence')->get();
        return Inertia::render('Admin/Achievements/Index', [
            'achievements' => $achievements,
        ]);
    }

    public function achievementsCreate()
    {
        return Inertia::render('Admin/Achievements/Create');
    }

    public function achievementsStore(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|array',
            'title.en' => 'required|string',
            'title.id' => 'required|string',
            'description' => 'required|array',
            'description.en' => 'required|string',
            'description.id' => 'required|string',
            'year' => 'required|string',
            'image' => 'nullable|string',
            'mood_color' => 'nullable|string',
            'order_sequence' => 'nullable|integer',
        ]);

        \App\Models\Achievement::create($validated);

        return redirect()->route('admin.achievements.index')->with('success', 'Achievement created!');
    }

    public function achievementsEdit($id)
    {
        $achievement = \App\Models\Achievement::findOrFail($id);
        return Inertia::render('Admin/Achievements/Edit', [
            'achievement' => $achievement,
        ]);
    }

    public function achievementsUpdate(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|array',
            'title.en' => 'required|string',
            'title.id' => 'required|string',
            'description' => 'required|array',
            'description.en' => 'required|string',
            'description.id' => 'required|string',
            'year' => 'required|string',
            'image' => 'nullable|string',
            'mood_color' => 'nullable|string',
            'order_sequence' => 'nullable|integer',
        ]);

        $achievement = \App\Models\Achievement::findOrFail($id);
        $achievement->update($validated);

        return redirect()->route('admin.achievements.index')->with('success', 'Achievement updated!');
    }

    public function achievementsDestroy($id)
    {
        \App\Models\Achievement::findOrFail($id)->delete();
        return redirect()->route('admin.achievements.index')->with('success', 'Achievement deleted!');
    }
}
