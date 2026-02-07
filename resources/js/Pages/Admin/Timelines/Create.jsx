import React from 'react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        year: '',
        title: '',
        description: '',
        image: null,
        sort_order: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.timelines.store'));
    };

    return (
        <AdminLayout title="Add Timeline">
            <Head title="Admin - Add Timeline" />

            <div className="py-6">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-gray-100">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit} className="space-y-6">
                                <div>
                                    <label className="block font-medium text-sm text-gray-700">Year / Period</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-md shadow-sm transition-colors"
                                        value={data.year}
                                        onChange={e => setData('year', e.target.value)}
                                        placeholder="e.g. 2015 or 2015-2019"
                                    />
                                    {errors.year && <div className="text-red-500 text-sm mt-1">{errors.year}</div>}
                                </div>

                                <div>
                                    <label className="block font-medium text-sm text-gray-700">Title</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-md shadow-sm transition-colors"
                                        value={data.title}
                                        onChange={e => setData('title', e.target.value)}
                                        placeholder="e.g. Started High School"
                                    />
                                    {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                                </div>

                                <div>
                                    <label className="block font-medium text-sm text-gray-700">Description</label>
                                    <textarea
                                        className="mt-1 block w-full border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-md shadow-sm h-32 transition-colors"
                                        value={data.description}
                                        onChange={e => setData('description', e.target.value)}
                                        placeholder="Tell the story..."
                                    ></textarea>
                                    {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                                </div>

                                <div>
                                    <label className="block font-medium text-sm text-gray-700">Image</label>
                                    <input
                                        type="file"
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 transition-colors"
                                        onChange={e => setData('image', e.target.files[0])}
                                    />
                                    {errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
                                </div>

                                <div>
                                    <label className="block font-medium text-sm text-gray-700">Sort Order</label>
                                    <input
                                        type="number"
                                        className="mt-1 block w-full border-gray-300 focus:border-green-500 focus:ring-green-500 rounded-md shadow-sm transition-colors"
                                        value={data.sort_order}
                                        onChange={e => setData('sort_order', e.target.value)}
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Lower numbers appear first.</p>
                                    {errors.sort_order && <div className="text-red-500 text-sm mt-1">{errors.sort_order}</div>}
                                </div>

                                <div className="flex items-center justify-end">
                                    <Link href={route('admin.timelines.index')} className="text-gray-600 hover:text-gray-900 mr-4">Cancel</Link>
                                    <button
                                        type="submit"
                                        className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 disabled:opacity-50 transition-colors"
                                        disabled={processing}
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
