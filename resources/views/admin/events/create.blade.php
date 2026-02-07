@extends('layouts.admin')

@section('header', 'Create Event')

@section('content')
<div class="max-w-4xl mx-auto">
    <form action="{{ route('admin.events.store') }}" method="POST" class="space-y-6">
        @csrf
        
        <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Event Title</label>
            <input type="text" name="title" id="title" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 p-2" required>
        </div>

        <div>
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" id="description" rows="3" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 p-2" required></textarea>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="date" class="block text-sm font-medium text-gray-700">Date & Time</label>
                <input type="datetime-local" name="date" id="date" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 p-2" required>
            </div>

            <div>
                 <label for="badges" class="block text-sm font-medium text-gray-700">Badge (e.g., Webinar, Workshop)</label>
                 <input type="text" name="badges" id="badges" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 p-2">
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="location" class="block text-sm font-medium text-gray-700">Location (or 'Online')</label>
                <input type="text" name="location" id="location" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 p-2">
            </div>

            <div>
                 <label for="registration_link" class="block text-sm font-medium text-gray-700">Registration Link</label>
                 <input type="url" name="registration_link" id="registration_link" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 p-2">
            </div>
        </div>

        <div class="flex justify-end gap-4">
            <a href="{{ route('admin.events.index') }}" class="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Cancel
            </a>
            <button type="submit" class="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                Create Event
            </button>
        </div>
    </form>
</div>
@endsection
