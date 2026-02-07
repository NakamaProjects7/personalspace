@extends('layouts.admin')

@section('header', 'Write Newsletter')

@section('content')
<div class="max-w-4xl mx-auto">
    <form action="{{ route('admin.newsletters.store') }}" method="POST" class="space-y-6">
        @csrf
        
        <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" name="title" id="title" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 sm:text-lg p-2" placeholder="Enter post title..." required>
        </div>

        <div>
            <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
            <select name="category" id="category" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200">
                <option value="Tech">Technology</option>
                <option value="Growth">Growth</option>
                <option value="Cyber Security">Cyber Security</option>
            </select>
        </div>
        
        <!-- Image URL Input (Simplified for now) -->
        <div>
             <label for="image" class="block text-sm font-medium text-gray-700">Cover Image URL</label>
             <input type="url" name="image" id="image" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200" placeholder="https://...">
        </div>

        <div>
            <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
            <textarea name="content" id="content" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"></textarea>
        </div>

        <div class="flex justify-end gap-4">
            <a href="{{ route('admin.newsletters.index') }}" class="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Cancel
            </a>
            <button type="submit" class="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                Publish
            </button>
        </div>
    </form>
</div>
@endsection

@push('scripts')
<script>
    const easyMDE = new EasyMDE({ 
        element: document.getElementById('content'),
        spellChecker: false,
        placeholder: "Write your newsletter content here...",
        status: ['autosave', 'lines', 'words', 'cursor'],
        minHeight: "400px",
        toolbar: [
            "bold", "italic", "heading", "|", 
            "quote", "unordered-list", "ordered-list", "|",
            "link", "image", "|",
            "preview", "side-by-side", "fullscreen", "|",
            "guide"
        ]
    });
</script>
@endpush
