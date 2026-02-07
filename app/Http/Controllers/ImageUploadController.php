<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageUploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp,svg,bmp,tiff|max:10240', // 10MB max
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();
            
            // Store in public/storage/images
            $path = $image->storeAs('images', $filename, 'public');
            
            return response()->json([
                'success' => true,
                'url' => Storage::url($path),
                'path' => $path,
            ]);
        }

        return response()->json([
            'success' => false,
            'message' => 'No image file provided'
        ], 400);
    }

    public function uploadTiny(Request $request)
    {
        // Dedicated endpoint for TinyMCE image uploads
        $request->validate([
            'file' => 'required|image|mimes:jpeg,png,jpg,gif,webp,svg,bmp,tiff|max:10240',
        ]);

        if ($request->hasFile('file')) {
            $image = $request->file('file');
            $filename = time() . '_' . Str::slug(pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME)) . '.' . $image->getClientOriginalExtension();
            
            $path = $image->storeAs('images', $filename, 'public');
            
            // TinyMCE expects location in response
            return response()->json([
                'location' => asset('storage/' . $path),
            ]);
        }

        return response()->json([
            'error' => 'No image file provided'
        ], 400);
    }
}
