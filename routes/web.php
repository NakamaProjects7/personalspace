<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\AdminMiddleware;

use App\Http\Controllers\HomeController;

// Auth Routes
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');


Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/portfolio', function () {
    $projects = App\Models\Project::orderBy('created_at', 'desc')->paginate(12);
    return Inertia::render('Portfolio/Index', [
        'projects' => $projects
    ]);
})->name('portfolio.index');

Route::get('/portfolio/{slug}', function ($slug) {
    $project = App\Models\Project::where('slug', $slug)->firstOrFail();
    $relatedProjects = App\Models\Project::where('id', '!=', $project->id)
        ->latest('created_at')
        ->limit(3)
        ->get();
    
    return Inertia::render('Portfolio/Show', [
        'project' => $project,
        'relatedProjects' => $relatedProjects
    ]);
})->name('portfolio.show');


Route::get('/blog', [App\Http\Controllers\BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [App\Http\Controllers\BlogController::class, 'show'])->name('blog.show');

Route::get('/events', function () {
    $events = App\Models\Event::orderBy('date', 'desc')->paginate(12);
    return Inertia::render('Events/Index', [
        'events' => $events
    ]);
})->name('events.index');

Route::get('/contact', [App\Http\Controllers\ContactController::class, 'index'])->name('contact');
Route::post('/contact', [App\Http\Controllers\ContactController::class, 'store'])->name('contact.store');

// Newsletter Subscription Routes
Route::post('/subscribe', [App\Http\Controllers\SubscriberController::class, 'subscribe'])->name('newsletter.subscribe');
Route::get('/unsubscribe/{token}', [App\Http\Controllers\SubscriberController::class, 'unsubscribe'])->name('newsletter.unsubscribe');

// Admin Routes
Route::middleware(['auth', AdminMiddleware::class])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AdminController::class, 'dashboard'])->name('dashboard');
    
    // Newsletters
    Route::get('/newsletters', [AdminController::class, 'newslettersIndex'])->name('newsletters.index');
    Route::get('/newsletters/create', [AdminController::class, 'newslettersCreate'])->name('newsletters.create');
    Route::post('/newsletters', [AdminController::class, 'newslettersStore'])->name('newsletters.store');
    Route::get('/newsletters/{id}/edit', [AdminController::class, 'newslettersEdit'])->name('newsletters.edit');
    Route::put('/newsletters/{id}', [AdminController::class, 'newslettersUpdate'])->name('newsletters.update');
    Route::delete('/newsletters/{id}', [AdminController::class, 'newslettersDestroy'])->name('newsletters.destroy');
    
    // Events
    Route::get('/events', [AdminController::class, 'eventsIndex'])->name('events.index');
    Route::get('/events/create', [AdminController::class, 'eventsCreate'])->name('events.create');
    Route::post('/events', [AdminController::class, 'eventsStore'])->name('events.store');
    Route::get('/events/{id}/edit', [AdminController::class, 'eventsEdit'])->name('events.edit');
    Route::put('/events/{id}', [AdminController::class, 'eventsUpdate'])->name('events.update');
    Route::delete('/events/{id}', [AdminController::class, 'eventsDestroy'])->name('events.destroy');
    
    // Projects
    Route::get('/projects', [AdminController::class, 'projectsIndex'])->name('projects.index');
    Route::get('/projects/create', [AdminController::class, 'projectsCreate'])->name('projects.create');
    Route::post('/projects', [AdminController::class, 'projectsStore'])->name('projects.store');
    Route::get('/projects/{id}/edit', [AdminController::class, 'projectsEdit'])->name('projects.edit');
    Route::put('/projects/{id}', [AdminController::class, 'projectsUpdate'])->name('projects.update');
    Route::delete('/projects/{id}', [AdminController::class, 'projectsDestroy'])->name('projects.destroy');
    
    // Image Uploads
    Route::post('/upload/image', [App\Http\Controllers\ImageUploadController::class, 'upload'])->name('upload.image');
    Route::post('/upload/tinymce', [App\Http\Controllers\ImageUploadController::class, 'uploadTiny'])->name('upload.tinymce');

    // Achievements
    Route::get('/achievements', [AdminController::class, 'achievementsIndex'])->name('achievements.index');
    Route::get('/achievements/create', [AdminController::class, 'achievementsCreate'])->name('achievements.create');
    Route::post('/achievements', [AdminController::class, 'achievementsStore'])->name('achievements.store');
    Route::get('/achievements/{id}/edit', [AdminController::class, 'achievementsEdit'])->name('achievements.edit');
    Route::put('/achievements/{id}', [AdminController::class, 'achievementsUpdate'])->name('achievements.update');
    Route::delete('/achievements/{id}', [AdminController::class, 'achievementsDestroy'])->name('achievements.destroy');
});


