import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Components/Layout/AdminLayout';

export default function MessageShow({ contact }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        subject: `Re: ${contact.subject}`,
        message: '',
    });

    const [isReplying, setIsReplying] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.contacts.reply', contact.id), {
            onSuccess: () => {
                reset('message');
                setIsReplying(false);
                alert('Reply sent successfully!');
            },
        });
    };

    return (
        <AdminLayout title="View Message">
            <Head title={`Message from ${contact.name}`} />

            <div className="max-w-4xl mx-auto">
                <Link
                    href={route('admin.contacts.index')}
                    className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6"
                >
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Messages
                </Link>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                    <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-start">
                        <div>
                            <h1 className="text-xl font-bold text-gray-900 mb-2">{contact.subject}</h1>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span className="font-semibold text-gray-900">{contact.name}</span>
                                <span>&lt;{contact.email}&gt;</span>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">
                            {new Date(contact.created_at).toLocaleString()}
                        </div>
                    </div>

                    <div className="p-8 text-gray-800 whitespace-pre-wrap leading-relaxed">
                        {contact.message}
                    </div>
                </div>

                {/* Reply Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900">Reply</h2>
                    </div>

                    <div className="p-6">
                        <form onSubmit={submit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input
                                    type="text"
                                    value={data.subject}
                                    onChange={(e) => setData('subject', e.target.value)}
                                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                />
                                {errors.subject && <div className="text-red-500 text-sm mt-1">{errors.subject}</div>}
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    rows="6"
                                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    placeholder="Write your reply here..."
                                    required
                                ></textarea>
                                {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 flex items-center gap-2"
                                >
                                    {processing ? 'Sending...' : (
                                        <>
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Send Reply
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
