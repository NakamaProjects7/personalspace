import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import Button from '@/Components/UI/Button';

export default function Index({ events }) {
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this event?')) {
            router.delete(route('admin.events.destroy', id));
        }
    };

    return (
        <AdminLayout title="Events">
            <Head title="Events" />

            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-display text-gray-900">Events</h1>
                        <p className="text-gray-500 mt-1">Manage your upcoming and past events</p>
                    </div>
                    <Link href={route('admin.events.create')}>
                        <Button text="Create Event" variant="primary" className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </Button>
                    </Link>
                </div>

                {events.data && events.data.length > 0 ? (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Event</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Badge</th>
                                    <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {events.data.map((event) => (
                                    <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-gray-900">{event.title}</div>
                                            <div className="text-sm text-gray-500 line-clamp-1">{event.description}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">
                                                {new Date(event.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">{event.location || 'Online'}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {event.badge && (
                                                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-brand-50 text-brand-700">
                                                    {event.badge}
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={route('admin.events.edit', event.id)}
                                                    className="px-3 py-1.5 text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(event.id)}
                                                    className="px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">No events yet</h3>
                        <p className="text-gray-500 mb-4">Create your first event to get started</p>
                        <Link href={route('admin.events.create')}>
                            <Button text="Create Event" variant="primary" />
                        </Link>
                    </div>
                )}

                {events.links && events.data && events.data.length > 0 && (
                    <div className="mt-8 flex justify-center gap-2">
                        {events.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || '#'}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${link.active
                                        ? 'bg-brand-600 text-white'
                                        : link.url
                                            ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                    }`}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
