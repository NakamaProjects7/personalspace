<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Subscriber extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'unsubscribe_token',
        'subscribed_at',
    ];

    protected $casts = [
        'subscribed_at' => 'datetime',
    ];

    /**
     * Generate unique unsubscribe token
     */
    public static function generateUnsubscribeToken()
    {
        return Str::random(64);
    }

    /**
     * Check if email is already subscribed
     */
    public static function isSubscribed($email)
    {
        return self::where('email', $email)->exists();
    }
}
