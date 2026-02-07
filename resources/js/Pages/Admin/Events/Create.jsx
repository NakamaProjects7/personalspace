import React from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import Button from '@/Components/UI/Button';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        date: '',
        location: '',
        badge: '',
        registration_link: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.events.store'));
    };

    return (
        <AdminLayout title="Create Event">
            <Head title="Create Event" />

            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-display text-gray-900">Create New Event</h1>
                        <p className="text-gray-500 mt-1">Add an upcoming event or workshop</p>
                    </div>
                    <Link href={route('admin.events.index')} className="text-gray-500 hover:text-gray-700 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to List
                    </Link>
                </div>

                <form onSubmit={submit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-8 space-y-6">
                        <div>
                            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">Event Title</label>
                            <input
                                type="text"
                                id="title"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className="w-full px-4 py-3 text-lg border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                placeholder="e.g., Web Development Workshop"
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
                                placeholder="Describe what attendees will learn..."
                            />
                            {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">Date & Time</label>
                                <input
                                    type="datetime-local"
                                    id="date"
                                    value={data.date}
                                    onChange={(e) => setData('date', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                />
                                {errors.date && <div className="text-red-500 text-sm mt-1">{errors.date}</div>}
                            </div>

                            <div>
                                <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                                <input
                                    type="text"
                                    id="location"
                                    value={data.location}
                                    onChange={(e) => setData('location', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                    placeholder="e.g., Online / Jakarta"
                                />
                                {errors.location && <div className="text-red-500 text-sm mt-1">{errors.location}</div>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="badge" className="block text-sm font-semibold text-gray-700 mb-2">Badge (Optional)</label>
                                <input
                                    type="text"
                                    id="badge"
                                    value={data.badge}
                                    onChange={(e) => setData('badge', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                    placeholder="e.g., Free, Premium, Webinar"
                                />
                                {errors.badge && <div className="text-red-500 text-sm mt-1">{errors.badge}</div>}
                            </div>

                            <div>
                                <label htmlFor="registration_link" className="block text-sm font-semibold text-gray-700 mb-2">Registration Link (Optional)</label>
                                <input
                                    type="url"
                                    id="registration_link"
                                    value={data.registration_link}
                                    onChange={(e) => setData('registration_link', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                    placeholder="https://..."
                                />
                                {errors.registration_link && <div className="text-red-500 text-sm mt-1">{errors.registration_link}</div>}
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-end gap-3">
                        <Link
                            href={route('admin.events.index')}
                            className="px-6 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Cancel
                        </Link>
                        <Button
                            type="submit"
                            text={processing ? 'Creating...' : 'Create Event'}
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
