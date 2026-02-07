<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Newsletter extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'excerpt',
        'category',
        'image',
        'published_at',
    ];

    protected $casts = [
        'published_at' => 'datetime',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($newsletter) {
            if (empty($newsletter->slug)) {
                $newsletter->slug = \Str::slug($newsletter->title);
            }
        });

        static::updating(function ($newsletter) {
            if ($newsletter->isDirty('title') && empty($newsletter->slug)) {
                $newsletter->slug = \Str::slug($newsletter->title);
            }
        });
    }
}
