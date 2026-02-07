import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import TinyMCEEditor from '@/Components/Editor/TinyMCEEditor';
import Button from '@/Components/UI/Button';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        category: '',
        image: null,
        content: '',
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            // Preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);

            // Upload immediately
            setUploading(true);
            const formData = new FormData();
            formData.append('image', file);

            try {
                const response = await fetch(route('admin.upload.image'), {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                        'Accept': 'application/json',
                    }
                });

                const result = await response.json();
                if (result.success) {
                    setData('image', result.url);
                }
            } catch (error) {
                console.error('Upload failed:', error);
            } finally {
                setUploading(false);
            }
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.newsletters.store'));
    };

    return (
        <AdminLayout title="Write Newsletter">
            <Head title="Write Newsletter" />

            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-display text-gray-900">Write New Newsletter</h1>
                        <p className="text-gray-500 mt-1">Share your insights with the community</p>
                    </div>
                    <Link href={route('admin.newsletters.index')} className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to List
                    </Link>
                </div>

                <form onSubmit={submit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 space-y-6">
                        {/* Title */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                            <input
                                type="text"
                                id="title"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className="w-full px-4 py-3 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                placeholder="Enter a catchy title..."
                            />
                            {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Category */}
                            <div>
                                <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                                <select
                                    id="category"
                                    value={data.category}
                                    onChange={(e) => setData('category', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                >
                                    <option value="">Select Category</option>
                                    <option value="Tech">Tech</option>
                                    <option value="Growth">Growth</option>
                                    <option value="Cyber Security">Cyber Security</option>
                                    <option value="Tutorial">Tutorial</option>
                                    <option value="Life">Life</option>
                                </select>
                                {errors.category && <div className="text-red-500 text-sm mt-1">{errors.category}</div>}
                            </div>

                            {/* Cover Image Upload */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
                                <div className="flex items-center gap-4">
                                    <label className="flex-1">
                                        <div className="cursor-pointer px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-brand-500 transition-colors text-center">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="hidden"
                                            />
                                            <span className="text-sm text-gray-600">
                                                {uploading ? 'Uploading...' : imagePreview ? 'Change Image' : 'Choose Image'}
                                            </span>
                                        </div>
                                    </label>
                                    {imagePreview && (
                                        <img src={imagePreview} alt="Preview" className="w-20 h-20 object-cover rounded-lg shadow-sm" />
                                    )}
                                </div>
                                {errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
                            </div>
                        </div>

                        {/* Editor */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
                            <div className="border border-gray-200 rounded-xl overflow-hidden">
                                <TinyMCEEditor
                                    content={data.content}
                                    onChange={(html) => setData('content', html)}
                                />
                            </div>
                            {errors.content && <div className="text-red-500 text-sm mt-1">{errors.content}</div>}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-end gap-3">
                        <Link
                            href={route('admin.newsletters.index')}
                            className="px-6 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Cancel
                        </Link>
                        <Button
                            type="submit"
                            text={processing ? 'Publishing...' : 'Publish Newsletter'}
                            variant="primary"
                            size="lg"
                            className={processing ? 'opacity-75 cursor-not-allowed' : ''}
                        />
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
