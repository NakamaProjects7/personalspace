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
        Schema::table('newsletters', function (Blueprint $table) {
            $table->string('slug')->nullable()->after('title');
        });

        // Populate existing slugs
        $newsletters = \DB::table('newsletters')->get();
        foreach ($newsletters as $newsletter) {
            \DB::table('newsletters')
                ->where('id', $newsletter->id)
                ->update(['slug' => \Str::slug($newsletter->title)]);
        }

        // Make slug non-nullable and unique AFTER populating
        Schema::table('newsletters', function (Blueprint $table) {
            $table->string('slug')->nullable(false)->change();
            // Optional: $table->unique('slug'); if you want unique
        });

        // Same for Projects
        if (Schema::hasTable('projects')) {
             Schema::table('projects', function (Blueprint $table) {
                if (!Schema::hasColumn('projects', 'slug')) {
                    $table->string('slug')->nullable()->after('title');
                }
            });
            
             $projects = \DB::table('projects')->get();
            foreach ($projects as $project) {
                \DB::table('projects')
                    ->where('id', $project->id)
                    ->update(['slug' => \Str::slug($project->title)]);
            }

             Schema::table('projects', function (Blueprint $table) {
                $table->string('slug')->nullable(false)->change();
            });
        }

        // Same for Events
        if (Schema::hasTable('events')) {
             Schema::table('events', function (Blueprint $table) {
                if (!Schema::hasColumn('events', 'slug')) {
                    $table->string('slug')->nullable()->after('title');
                }
            });
            
             $events = \DB::table('events')->get();
            foreach ($events as $event) {
                \DB::table('events')
                    ->where('id', $event->id)
                    ->update(['slug' => \Str::slug($event->title)]);
            }

             Schema::table('events', function (Blueprint $table) {
                $table->string('slug')->nullable(false)->change();
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('newsletters', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
        
        if (Schema::hasTable('projects')) {
            Schema::table('projects', function (Blueprint $table) {
                 if (Schema::hasColumn('projects', 'slug')) {
                    $table->dropColumn('slug');
                 }
            });
        }

        if (Schema::hasTable('events')) {
            Schema::table('events', function (Blueprint $table) {
                 if (Schema::hasColumn('events', 'slug')) {
                    $table->dropColumn('slug');
                 }
            });
        }
    }
};
