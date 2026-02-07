import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Components/Layout/GuestLayout';
import Card from '@/Components/UI/Card';

export default function BlogShow({ newsletter, relatedNewsletters }) {
    // Helper to process content and add paragraph spacing
    const processContent = (content) => {
        if (!content) return '';

        // If content already has paragraphs, just return it (TinyMCE output)
        if (content.includes('<p>')) {
            return content;
        }

        // If content is plain text or uses <br>, wrap lines in <p> labels with margin
        // Split by newlines or <br> tags
        return content
            .split(/\r\n|\n|<br\s*\/?>/gi)
            .filter(line => line.trim().length > 0)
            .map(line => `<p class="mb-4">${line.trim()}</p>`)
            .join('');
    };

    return (
        <GuestLayout>
            <Head title={newsletter.title} />

            {/* Article Header */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
                {/* Back Button */}
                <Link href={route('blog.index')} className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-600 mb-8 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Articles
                </Link>

                {/* Category Badge */}
                <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full">
                        {newsletter.category}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-extrabold font-display text-slate-900 mb-6 leading-tight">
                    {newsletter.title}
                </h1>

                {/* Meta */}
                <div className="flex items-center gap-4 text-slate-500 mb-8 pb-8 border-b border-gray-200">
                    <time dateTime={newsletter.published_at}>
                        {new Date(newsletter.published_at).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </time>
                    <span>•</span>
                    <span>Muhammad Arif</span>
                </div>

                {/* Cover Image */}
                {newsletter.image && (
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={newsletter.image.startsWith('http') || newsletter.image.startsWith('/') ? newsletter.image : `/storage/${newsletter.image}`}
                            alt={newsletter.title}
                            className="w-full h-auto"
                        />
                    </div>
                )}

                {/* Content */}
                <div
                    className="prose prose-lg prose-slate max-w-none 
                               prose-headings:font-display prose-headings:font-bold
                               prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                               prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                               prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline
                               prose-img:rounded-xl prose-img:shadow-lg
                               prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                               prose-pre:bg-slate-900 prose-pre:text-slate-50"
                    dangerouslySetInnerHTML={{ __html: processContent(newsletter.content) }}
                />

                {/* Share Section */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Share this article</h3>
                    <div className="flex gap-3">
                        <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(newsletter.title)}&url=${encodeURIComponent(window.location.href)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                            Twitter
                        </a>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(window.location.href);
                                alert('Link copied to clipboard!');
                            }}
                            className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy Link
                        </button>
                    </div>
                </div>
            </article>

            {/* Related Articles */}
            {relatedNewsletters && relatedNewsletters.length > 0 && (
                <section className="bg-slate-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold font-display text-slate-900 mb-8">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedNewsletters.map((related) => (
                                <Link key={related.id} href={route('blog.show', related.slug)}>
                                    <Card
                                        title={related.title}
                                        content={related.excerpt}
                                        image={related.image.startsWith('http') || related.image.startsWith('/') ? related.image : `/storage/${related.image}`}
                                        badge={related.category}
                                        meta={`<span>${new Date(related.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>`}
                                        className="h-full"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </GuestLayout>
    );
}
