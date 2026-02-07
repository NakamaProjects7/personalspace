import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';

export default function Dashboard({ stats }) {
    return (
        <AdminLayout title="Dashboard">
            <Head title="Admin Dashboard" />

            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                    <div className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Total Newsletters</div>
                    <div className="text-3xl font-bold text-gray-900 mb-4">{stats?.newsletters || 0}</div>
                    <Link href={route('admin.newsletters.create')} className="mt-auto text-green-600 font-medium hover:underline text-sm">
                        Write New +
                    </Link>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                    <div className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Projects</div>
                    <div className="text-3xl font-bold text-gray-900 mb-4">{stats?.projects || 0}</div>
                    <Link href={route('admin.projects.index')} className="mt-auto text-green-600 font-medium hover:underline text-sm">
                        Manage Projects &rarr;
                    </Link>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
                    <div className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Upcoming Events</div>
                    <div className="text-3xl font-bold text-gray-900 mb-4">{stats?.events || 0}</div>
                    <Link href={route('admin.events.create')} className="mt-auto text-green-600 font-medium hover:underline text-sm">
                        Add Event +
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
                    <div className="space-y-3">
                        <Link href={route('admin.newsletters.create')} className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-green-50 rounded-lg text-gray-700 hover:text-green-700 transition-colors font-medium">
                            📝 Write a new post
                        </Link>
                        <Link href={route('admin.events.create')} className="block w-full text-left px-4 py-3 bg-gray-50 hover:bg-green-50 rounded-lg text-gray-700 hover:text-green-700 transition-colors font-medium">
                            📅 Schedule an event
                        </Link>
                        <div className="opacity-50 pointer-events-none block w-full text-left px-4 py-3 bg-gray-50 rounded-lg text-gray-500 font-medium">
                            📊 View analytics (Coming Soon)
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">System Status</h2>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 font-medium">All systems operational</span>
                    </div>
                    <p className="text-sm text-gray-500">
                        Laravel v{stats?.laravel_version} <br />
                        PHP v{stats?.php_version}
                    </p>
                </div>
            </div>
        </AdminLayout>
    );
}
