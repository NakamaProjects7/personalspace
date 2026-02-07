<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Timeline;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class TimelineController extends Controller
{
    public function index()
    {
        $timelines = Timeline::orderBy('sort_order')->orderBy('year')->get();
        return Inertia::render('Admin/Timelines/Index', [
            'timelines' => $timelines
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Timelines/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'year' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'sort_order' => 'integer|min:0',
        ]);

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('timelines', 'public');
            $validated['image'] = '/storage/' . $path;
        }

        Timeline::create($validated);

        return redirect()->route('admin.timelines.index')->with('success', 'Timeline item created successfully.');
    }

    public function edit(Timeline $timeline)
    {
        return Inertia::render('Admin/Timelines/Edit', [
            'timeline' => $timeline
        ]);
    }

    public function update(Request $request, Timeline $timeline)
    {
        $validated = $request->validate([
            'year' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'sort_order' => 'integer|min:0',
        ]);

        if ($request->hasFile('image')) {
            // Delete old image if exists
            if ($timeline->image) {
                 $oldPath = str_replace('/storage/', '', $timeline->image);
                 Storage::disk('public')->delete($oldPath);
            }
            $path = $request->file('image')->store('timelines', 'public');
            $validated['image'] = '/storage/' . $path;
        }

        $timeline->update($validated);

        return redirect()->route('admin.timelines.index')->with('success', 'Timeline item updated successfully.');
    }

    public function destroy(Timeline $timeline)
    {
        if ($timeline->image) {
             $oldPath = str_replace('/storage/', '', $timeline->image);
             Storage::disk('public')->delete($oldPath);
        }
        $timeline->delete();

        return redirect()->route('admin.timelines.index')->with('success', 'Timeline item deleted successfully.');
    }
}
