import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Components/Layout/GuestLayout';
import Card from '@/Components/UI/Card';

export default function PortfolioShow({ project, relatedProjects }) {
    return (
        <GuestLayout>
            <Head title={project.title} />

            {/* Project Header */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
                {/* Back Button */}
                <Link href={route('portfolio.index')} className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-600 mb-8 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Projects
                </Link>

                {/* Title & Description */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl lg:text-5xl font-extrabold font-display text-slate-900 mb-6 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        {project.description}
                    </p>
                </div>

                {/* Cover Image */}
                {project.image && (
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-xl bg-slate-100 border border-slate-200">
                        <img
                            src={project.image.startsWith('http') || project.image.startsWith('/') ? project.image : `/storage/${project.image}`}
                            alt={project.title}
                            className="w-full h-auto"
                        />
                    </div>
                )}

                {/* Main Content Area */}
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left: Project Details (Tech stack, Live links) */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Links */}
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Links</h3>
                            <div className="space-y-3">
                                {project.live_url && (
                                    <a
                                        href={project.live_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-brand-600 hover:text-brand-700 font-medium transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                                {project.github_url && (
                                    <a
                                        href={project.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        Source Code
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                            <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack ? project.tech_stack.split(',').map((tech, idx) => (
                                    <span key={idx} className="text-xs text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-lg font-medium shadow-sm">
                                        {tech.trim()}
                                    </span>
                                )) : (
                                    <span className="text-slate-500 text-sm">No specific stack listed</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right: Content/Story */}
                    <div className="lg:col-span-2">
                        {/* About Project */}
                        <div className="prose prose-lg prose-slate max-w-none">
                            <h3 className="text-2xl font-bold font-display text-slate-900 mb-4">About this Project</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {project.description}
                                {/* NOTE: If you have a 'content' or 'long_description' field in the future, render it here.
                                    For now, we re-use description or you can add static placeholders if needed. */}
                            </p>

                            {/* Placeholder for more content if needed */}
                            <p className="text-slate-600 leading-relaxed">
                                This project was built to address specific challenges and provide a solution for...
                                (This is placeholder text. In a real app, you might have a dedicated 'content' field in your database for the full case study).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Share Section */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    {/* ... Same share buttons as blog ... */}
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Share this project</h3>
                    <div className="flex gap-3">
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

            {/* Related Projects */}
            {relatedProjects && relatedProjects.length > 0 && (
                <section className="bg-slate-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold font-display text-slate-900 mb-8">Other Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedProjects.map((related) => (
                                <Link key={related.id} href={route('portfolio.show', related.slug)}>
                                    <div className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                                        {related.image && (
                                            <div className="aspect-video bg-slate-100 overflow-hidden">
                                                <img
                                                    src={related.image.startsWith('http') || related.image.startsWith('/') ? related.image : `/storage/${related.image}`}
                                                    alt={related.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                        <div className="p-4 flex flex-col flex-1">
                                            <h4 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors">
                                                {related.title}
                                            </h4>
                                            <p className="text-sm text-slate-600 line-clamp-2 mb-3">
                                                {related.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </GuestLayout>
    );
}
