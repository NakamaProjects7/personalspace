import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Components/Layout/GuestLayout';

export default function PortfolioIndex({ projects }) {
    return (
        <GuestLayout>
            <Head title="Portfolio & Projects" />

            {/* Hero Section */}
            <section className="pt-16 pb-12 bg-gradient-to-br from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold font-display text-slate-900 mb-6">
                        Portfolio & Projects
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        A collection of projects I've built, experimented with, and learned from
                    </p>
                </div>
            </section>

            {/* Projects Magazine Grid */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {projects.data && projects.data.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                            {/* Featured Project - Large Left */}
                            {/* Featured Project - Large Left */}
                            {projects.data[0] && (
                                <Link href={route('portfolio.show', projects.data[0].slug)} className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all h-full block">
                                    {/* Large Image */}
                                    {projects.data[0].image && (
                                        <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                                            <img
                                                src={projects.data[0].image.startsWith('http') || projects.data[0].image.startsWith('/') ? projects.data[0].image : `/storage/${projects.data[0].image}`}
                                                alt={projects.data[0].title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <span className="absolute top-4 left-4 text-xs font-bold bg-white px-4 py-2 rounded-full shadow-lg uppercase tracking-wider">
                                                Featured
                                            </span>
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div className="p-8">
                                        <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider">
                                            Project
                                        </span>

                                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-2 mb-4 group-hover:text-brand-600 transition-colors">
                                            {projects.data[0].title}
                                        </h3>

                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            {projects.data[0].description}
                                        </p>

                                        {/* Tech Stack */}
                                        {projects.data[0].tech_stack && (
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {projects.data[0].tech_stack.split(',').map((tech, idx) => (
                                                    <span key={idx} className="text-xs text-slate-700 bg-slate-100 px-3 py-1 rounded-full font-medium">
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* View Details Link */}
                                        <span className="inline-flex items-center text-brand-600 font-semibold uppercase tracking-wide text-sm group-hover:gap-3 transition-all">
                                            View Details
                                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            )}

                            {/* Grid of Smaller Projects - Right */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {projects.data.slice(1, 7).map((project) => (
                                    <Link
                                        key={project.id}
                                        href={route('portfolio.show', project.slug)}
                                        className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col"
                                    >
                                        {/* Small Image */}
                                        {project.image && (
                                            <div className="aspect-video bg-slate-100 overflow-hidden">
                                                <img
                                                    src={project.image.startsWith('http') || project.image.startsWith('/') ? project.image : `/storage/${project.image}`}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className="p-4 flex flex-col flex-1">
                                            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
                                                Project
                                            </span>

                                            <h4 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors flex-1">
                                                {project.title}
                                            </h4>

                                            {/* Tech Stack - Compact */}
                                            {project.tech_stack && (
                                                <div className="flex flex-wrap gap-1 mt-2">
                                                    {project.tech_stack.split(',').slice(0, 2).map((tech, idx) => (
                                                        <span key={idx} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
                                                            {tech.trim()}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-24">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects yet</h3>
                            <p className="text-gray-500">Check back soon for new projects!</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {projects.data && projects.data.length > 0 && projects.links && (
                        <div className="mt-12 flex justify-center gap-2">
                            {projects.links.map((link, index) => (
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
