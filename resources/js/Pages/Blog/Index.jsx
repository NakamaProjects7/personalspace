import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Components/Layout/GuestLayout';

export default function BlogIndex({ newsletters }) {
    return (
        <GuestLayout>
            <Head title="Articles & Newsletters" />

            {/* Hero Section */}
            <section className="pt-16 pb-12 bg-gradient-to-br from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold font-display text-slate-900 mb-6">
                        Articles & Insights
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Thoughts on technology, growth, cyber security, and building meaningful digital products
                    </p>
                </div>
            </section>

            {/* Articles Magazine Grid */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {newsletters.data && newsletters.data.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                            {/* Featured Article - Large Left */}
                            {newsletters.data[0] && (
                                <Link
                                    href={route('blog.show', newsletters.data[0].slug)}
                                    className="group"
                                >
                                    <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all h-full">
                                        {/* Large Image */}
                                        {newsletters.data[0].image && (
                                            <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                                                <img
                                                    src={newsletters.data[0].image.startsWith('http') || newsletters.data[0].image.startsWith('/') ? newsletters.data[0].image : `/storage/${newsletters.data[0].image}`}
                                                    alt={newsletters.data[0].title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                {newsletters.data[0].category && (
                                                    <span className="absolute top-4 left-4 text-xs font-bold bg-white px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">
                                                        {newsletters.data[0].category}
                                                    </span>
                                                )}
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="p-8">
                                            <div className="text-xs text-slate-500 uppercase tracking-wider mb-3">
                                                {new Date(newsletters.data[0].published_at).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </div>

                                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                                                {newsletters.data[0].title}
                                            </h3>

                                            <p className="text-slate-600 leading-relaxed mb-6">
                                                {newsletters.data[0].excerpt}
                                            </p>

                                            <div className="inline-flex items-center text-brand-600 font-semibold uppercase tracking-wide text-sm group-hover:gap-3 transition-all">
                                                Read More
                                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )}

                            {/* Grid of Smaller Articles - Right */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {newsletters.data.slice(1, 7).map((article) => (
                                    <Link
                                        key={article.id}
                                        href={route('blog.show', article.slug)}
                                        className="group"
                                    >
                                        <div className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                                            {/* Small Image */}
                                            {article.image && (
                                                <div className="aspect-video bg-slate-100 overflow-hidden relative">
                                                    <img
                                                        src={article.image.startsWith('http') || article.image.startsWith('/') ? article.image : `/storage/${article.image}`}
                                                        alt={article.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                            )}

                                            {/* Content */}
                                            <div className="p-4 flex flex-col flex-1">
                                                {article.category && (
                                                    <span className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
                                                        {article.category}
                                                    </span>
                                                )}

                                                <h4 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors flex-1">
                                                    {article.title}
                                                </h4>

                                                <div className="text-xs text-slate-500">
                                                    {new Date(article.published_at).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-24">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles yet</h3>
                            <p className="text-gray-500">Check back soon for new content!</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {newsletters.data && newsletters.data.length > 0 && newsletters.links && (
                        <div className="mt-12 flex justify-center gap-2">
                            {newsletters.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || '#'}
                                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${link.active
                                        ? 'bg-brand-600 text-white'
                                        : link.url
                                            ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
                                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        }`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </GuestLayout>
    );
}
