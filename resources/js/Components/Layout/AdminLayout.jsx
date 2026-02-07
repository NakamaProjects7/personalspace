import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AdminLayout({ children, title }) {
    const { auth } = usePage().props;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navigation = [
        { name: 'Dashboard', href: route('admin.dashboard'), icon: 'HomeIcon' },
        { name: 'Newsletters', href: route('admin.newsletters.index'), icon: 'NewspaperIcon' },
        { name: 'Events', href: route('admin.events.index'), icon: 'CalendarIcon' },
        { name: 'Projects', href: route('admin.projects.index'), icon: 'BriefcaseIcon' },
        { name: 'Achievements', href: route('admin.achievements.index'), icon: 'AcademicCapIcon' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <Link href={route('home')} className="text-xl font-bold text-gray-900 tracking-tight">
                        Admin<span className="text-green-600">Space</span>
                    </Link>
                    <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="p-4 space-y-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${route().current(item.href.split('.').slice(0, 2).join('.') + '*')
                                ? 'bg-green-50 text-green-700'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            {/* Simple Icons implementation or replace with passed SVG */}
                            <span className="truncate">{item.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                            {auth.user?.name?.charAt(0) || 'A'}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{auth.user?.name || 'Admin'}</p>
                            <p className="text-xs text-gray-500 truncate">{auth.user?.email || ''}</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
                {/* Top header for mobile menu trigger */}
                <header className="bg-white shadow-sm md:hidden flex items-center justify-between p-4">
                    <span className="font-bold text-gray-900">{title}</span>
                    <button onClick={() => setIsSidebarOpen(true)} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto p-4 sm:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
