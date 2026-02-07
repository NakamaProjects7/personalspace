import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';
import Button from '@/Components/UI/Button';

export default function Index({ achievements }) {
    return (
        <AdminLayout title="Achievements">
            <Head title="Achievements" />
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Achievements</h1>
                    <Link href={route('admin.achievements.create')}>
                        <Button text="Add New" variant="primary" />
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Order</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Title</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Year</th>
                                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {achievements.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.order_sequence}</td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-gray-900">{item.title?.en}</div>
                                        <div className="text-xs text-gray-500">{item.title?.id}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{item.year}</td>
                                    <td className="px-6 py-4 text-right">
                                        <Link href={route('admin.achievements.edit', item.id)} className="text-brand-600 hover:text-brand-800 font-medium">Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {achievements.length === 0 && (
                        <div className="p-8 text-center text-gray-500">No achievements found. Start adding some!</div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
