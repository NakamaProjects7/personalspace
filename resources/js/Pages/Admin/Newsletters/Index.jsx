import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import Button from '@/Components/UI/Button';

export default function Index({ newsletters }) {
    return (
        <AdminLayout title="Newsletters">
            <Head title="Newsletters" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold font-display text-gray-900">Newsletters</h1>
                        <p className="text-gray-500 mt-1">Manage your published content</p>
                    </div>
                    <Link href={route('admin.newsletters.create')}>
                        <Button text="Write New" variant="primary" className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </Button>
                    </Link>
                </div>

                {/* Newsletter Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsletters.data && newsletters.data.length > 0 ? (
                        newsletters.data.map((newsletter) => (
                            <div key={newsletter.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group">
                                {/* Cover Image */}
                                {newsletter.image && (
                                    <div className="aspect-video overflow-hidden bg-gray-100">
                                        <img
                                            src={newsletter.image}
                                            alt={newsletter.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="p-6">
                                    {/* Category Badge */}
                                    <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full mb-3">
                                        {newsletter.category}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors">
                                        {newsletter.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                        {newsletter.excerpt}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                        <span>{new Date(newsletter.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-2 pt-4 border-t border-gray-100">
                                        <Link
                                            href={route('blog.show', newsletter.id)}
                                            className="flex-1 px-4 py-2 text-center text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                        >
                                            View
                                        </Link>
                                        <Link
                                            href={route('admin.newsletters.edit', newsletter.id)}
                                            className="flex-1 px-4 py-2 text-center text-sm font-medium text-brand-700 bg-brand-50 rounded-lg hover:bg-brand-100 transition-colors"
                                        >
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">No newsletters yet</h3>
                            <p className="text-gray-500 mb-4">Start writing your first newsletter</p>
                            <Link href={route('admin.newsletters.create')}>
                                <Button text="Write New Newsletter" variant="primary" />
                            </Link>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {newsletters.data && newsletters.data.length > 0 && newsletters.links && (
                    <div className="mt-8 flex justify-center gap-2">
                        {newsletters.links.map((link, index) => (
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
