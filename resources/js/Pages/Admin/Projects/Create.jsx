import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import Button from '@/Components/UI/Button';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        image: null,
        tech_stack: '',
        live_url: '',
        github_url: '',
        featured: false,
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);

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
        post(route('admin.projects.store'));
    };

    return (
        <AdminLayout title="Add Project">
            <Head title="Add Project" />

            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-display text-gray-900">Add New Project</h1>
                        <p className="text-gray-500 mt-1">Showcase your work</p>
                    </div>
                    <Link href={route('admin.projects.index')} className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to List
                    </Link>
                </div>

                <form onSubmit={submit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">Project Title</label>
                            <input
                                type="text"
                                id="title"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className="w-full px-4 py-3 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                placeholder="e.g., E-Commerce Platform"
                            />
                            {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                            <textarea
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                                placeholder="Describe what this project does..."
                            />
                            {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Project Screenshot</label>
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

                        <div>
                            <label htmlFor="tech_stack" className="block text-sm font-semibold text-gray-700 mb-2">Tech Stack</label>
                            <input
                                type="text"
                                id="tech_stack"
                                value={data.tech_stack}
                                onChange={(e) => setData('tech_stack', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                placeholder="React, Laravel, TailwindCSS (comma-separated)"
                            />
                            {errors.tech_stack && <div className="text-red-500 text-sm mt-1">{errors.tech_stack}</div>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="live_url" className="block text-sm font-semibold text-gray-700 mb-2">Live URL (Optional)</label>
                                <input
                                    type="url"
                                    id="live_url"
                                    value={data.live_url}
                                    onChange={(e) => setData('live_url', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                    placeholder="https://"
                                />
                                {errors.live_url && <div className="text-red-500 text-sm mt-1">{errors.live_url}</div>}
                            </div>

                            <div>
                                <label htmlFor="github_url" className="block text-sm font-semibold text-gray-700 mb-2">GitHub URL (Optional)</label>
                                <input
                                    type="url"
                                    id="github_url"
                                    value={data.github_url}
                                    onChange={(e) => setData('github_url', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                    placeholder="https://github.com/..."
                                />
                                {errors.github_url && <div className="text-red-500 text-sm mt-1">{errors.github_url}</div>}
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="featured"
                                checked={data.featured}
                                onChange={(e) => setData('featured', e.target.checked)}
                                className="w-4 h-4 text-brand-600 bg-gray-100 border-gray-300 rounded focus:ring-brand-500"
                            />
                            <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-700">
                                Feature this project on homepage
                            </label>
                        </div>
                    </div>

                    <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-end gap-3">
                        <Link
                            href={route('admin.projects.index')}
                            className="px-6 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Cancel
                        </Link>
                        <Button
                            type="submit"
                            text={processing ? 'Creating...' : 'Create Project'}
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
