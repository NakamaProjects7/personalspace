import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Components/Layout/GuestLayout';

export default function EventsIndex({ events }) {
    return (
        <GuestLayout>
            <Head title="Upcoming Events" />

            {/* Hero Section */}
            <section className="pt-16 pb-12 bg-gradient-to-br from-slate-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-extrabold font-display text-slate-900 mb-6">
                        Upcoming Events
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Join me in upcoming talks, webinars, and community events
                    </p>
                </div>
            </section>

            {/* Events Magazine Grid */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {events.data && events.data.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                            {/* Featured Event - Large Left */}
                            {events.data[0] && (
                                <div className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all h-full">
                                    {/* Large Gradient Background */}
                                    <div className="aspect-[4/3] bg-gradient-to-br from-brand-500 via-purple-500 to-teal-500 overflow-hidden relative p-8 flex flex-col justify-end">
                                        <div className="absolute inset-0 bg-black/20"></div>
                                        <div className="relative z-10">
                                            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider mb-3">
                                                Featured Event
                                            </span>
                                            <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {new Date(events.data[0].date).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-8">
                                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">
                                            {events.data[0].title}
                                        </h3>

                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            {events.data[0].description}
                                        </p>

                                        {/* Location */}
                                        {events.data[0].location && (
                                            <div className="flex items-center gap-2 text-slate-500 mb-6">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {events.data[0].location}
                                            </div>
                                        )}

                                        {/* Registration Link */}
                                        {events.data[0].registration_link && (
                                            <a
                                                href={events.data[0].registration_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-brand-600 font-semibold uppercase tracking-wide text-sm hover:gap-3 transition-all"
                                            >
                                                Register Now
                                                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Grid of Smaller Events - Right */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {events.data.slice(1, 7).map((event) => (
                                    <div
                                        key={event.id}
                                        className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col"
                                    >
                                        {/* Small Gradient Header */}
                                        <div className="aspect-video bg-gradient-to-br from-brand-400 via-purple-400 to-teal-400 overflow-hidden relative p-4 flex items-end">
                                            <div className="absolute inset-0 bg-black/10"></div>
                                            <div className="relative z-10 flex items-center gap-2 text-white text-sm">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {new Date(event.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 flex flex-col flex-1">
                                            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-2">
                                                Event
                                            </span>

                                            <h4 className="font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors flex-1">
                                                {event.title}
                                            </h4>

                                            {/* Location - Compact */}
                                            {event.location && (
                                                <div className="flex items-center gap-1 text-xs text-slate-500 mt-2">
                                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    </svg>
                                                    {event.location}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-24">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No upcoming events</h3>
                            <p className="text-gray-500">Check back soon for new events!</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {events.data && events.data.length > 0 && events.links && (
                        <div className="mt-12 flex justify-center gap-2">
                            {events.links.map((link, index) => (
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
