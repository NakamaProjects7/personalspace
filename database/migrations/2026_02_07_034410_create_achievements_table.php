<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('achievements', function (Blueprint $table) {
            $table->id();
            $table->json('title'); // Bilingual: {en: "...", id: "..."}
            $table->json('description'); // Bilingual: {en: "...", id: "..."}
            $table->string('year'); // e.g., "2023 - Present"
            $table->string('image')->nullable(); // Icon path or Image URL
            $table->string('mood_color')->default('bg-primary-500'); // For styling
            $table->integer('order_sequence')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('achievements');
    }
};
