@extends('layouts.admin')

@section('header', 'Newsletters')

@section('content')
<div class="mb-6 flex justify-between items-center">
    <div class="flex-1">
        <input type="text" placeholder="Search newsletters..." class="w-full max-w-md border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200">
    </div>
    <a href="{{ route('admin.newsletters.create') }}" class="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
        New Post
    </a>
</div>

<div class="bg-white shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Published</th>
                <th scope="col" class="relative px-6 py-3"><span class="sr-only">Edit</span></th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            @forelse($newsletters as $newsletter)
            <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900">{{ $newsletter->title }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {{ $newsletter->category }}
                    </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ $newsletter->published_at ? $newsletter->published_at->format('M d, Y') : 'Draft' }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-green-600 hover:text-green-900">Edit</a>
                </td>
            </tr>
            @empty
            <tr>
                <td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500">
                    No newsletters found. Start writing!
                </td>
            </tr>
            @endforelse
        </tbody>
    </table>
</div>

<div class="mt-4">
    {{ $newsletters->links() }}
</div>
@endsection
