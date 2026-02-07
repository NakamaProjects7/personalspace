import React, { useState } from 'react';
import { Head, useForm, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import Button from '@/Components/UI/Button';

export default function Edit({ achievement }) {
    const { data, setData, put, processing, errors } = useForm({
        title: achievement.title || { en: '', id: '' },
        description: achievement.description || { en: '', id: '' },
        year: achievement.year || '',
        image: achievement.image || '',
        mood_color: achievement.mood_color || 'bg-primary-500',
        order_sequence: achievement.order_sequence || 0,
    });

    const [imagePreview, setImagePreview] = useState(
        achievement.image && (achievement.image.startsWith('http') || achievement.image.startsWith('/'))
            ? achievement.image
            : (achievement.image ? `/storage/${achievement.image}` : null)
    );
    const [uploading, setUploading] = useState(false);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
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
                if (result.success) setData('image', result.url);
            } catch (error) {
                console.error('Upload failed:', error);
            } finally {
                setUploading(false);
            }
        }
    };

    const submit = (e) => {
        e.preventDefault();
        put(route('admin.achievements.update', achievement.id));
    };

    const handleDelete = () => {
        if (confirm('Delete this achievement?')) {
            router.delete(route('admin.achievements.destroy', achievement.id));
        }
    };

    return (
        <AdminLayout title="Edit Achievement">
            <Head title="Edit Achievement" />
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-display text-gray-900">Edit Achievement</h1>
                    </div>
                    <button onClick={handleDelete} className="text-red-600 hover:text-red-700">Delete</button>
                </div>

                <form onSubmit={submit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-8 space-y-8">
                    {/* Bilingual Title */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Title (English)</label>
                            <input
                                type="text"
                                value={data.title.en}
                                onChange={(e) => setData('title', { ...data.title, en: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                            />
                            {errors['title.en'] && <div className="text-red-500 text-sm mt-1">{errors['title.en']}</div>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Title (Indonesia)</label>
                            <input
                                type="text"
                                value={data.title.id}
                                onChange={(e) => setData('title', { ...data.title, id: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                            />
                            {errors['title.id'] && <div className="text-red-500 text-sm mt-1">{errors['title.id']}</div>}
                        </div>
                    </div>

                    {/* Bilingual Description */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Description (English)</label>
                            <textarea
                                value={data.description.en}
                                onChange={(e) => setData('description', { ...data.description, en: e.target.value })}
                                rows={3}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                            />
                            {errors['description.en'] && <div className="text-red-500 text-sm mt-1">{errors['description.en']}</div>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Description (Indonesia)</label>
                            <textarea
                                value={data.description.id}
                                onChange={(e) => setData('description', { ...data.description, id: e.target.value })}
                                rows={3}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                            />
                            {errors['description.id'] && <div className="text-red-500 text-sm mt-1">{errors['description.id']}</div>}
                        </div>
                    </div>

                    {/* Meta Data */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Year / Period</label>
                            <input
                                type="text"
                                value={data.year}
                                onChange={(e) => setData('year', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                            />
                            {errors.year && <div className="text-red-500 text-sm mt-1">{errors.year}</div>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Order Sequence</label>
                            <input
                                type="number"
                                value={data.order_sequence}
                                onChange={(e) => setData('order_sequence', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Image / Icon</label>
                            <div className="flex items-center gap-4">
                                <label className="cursor-pointer px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                                    <span className="text-sm">{uploading ? '...' : 'Upload'}</span>
                                    <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                                </label>
                                {imagePreview && (
                                    <img
                                        src={imagePreview.startsWith('http') || imagePreview.startsWith('data:') ? imagePreview : `/storage/${imagePreview}`}
                                        className="w-10 h-10 object-cover rounded"
                                    />
                                )}
                            </div>
                            <input
                                type="text"
                                value={data.image || ''}
                                onChange={(e) => setData('image', e.target.value)}
                                className="mt-2 w-full text-xs border-gray-200 rounded"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <Link href={route('admin.achievements.index')} className="px-6 py-2.5 text-gray-700">Cancel</Link>
                        <Button type="submit" text={processing ? 'Updating...' : 'Update Achievement'} variant="primary" />
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
