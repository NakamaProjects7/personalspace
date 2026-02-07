<?php

namespace App\Http\Controllers;

use App\Models\Newsletter;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function index()
    {
        $newsletters = Newsletter::latest('published_at')
            ->whereNotNull('published_at')
            ->paginate(12);

        return Inertia::render('Blog/Index', [
            'newsletters' => $newsletters,
        ]);
    }

    public function show($slug)
    {
        $newsletter = Newsletter::where('slug', $slug)->firstOrFail();
        $relatedNewsletters = Newsletter::where('category', $newsletter->category)
            ->where('id', '!=', $newsletter->id)
            ->whereNotNull('published_at')
            ->latest('published_at')
            ->limit(3)
            ->get();

        return Inertia::render('Blog/Show', [
            'newsletter' => $newsletter,
            'relatedNewsletters' => $relatedNewsletters,
        ]);
    }
}
