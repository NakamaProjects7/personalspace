import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/Components/Layout/GuestLayout';
import TurnstileWidget from '@/Components/TurnstileWidget';

export default function Contact({ flash }) {
    const [turnstileToken, setTurnstileToken] = useState('');
    const [subscribeTurnstileToken, setSubscribeTurnstileToken] = useState('');

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
        'cf-turnstile-response': '',
    });

    const { data: subscribeData, setData: setSubscribeData, post: postSubscribe, processing: processingSubscribe, errors: subscribeErrors } = useForm({
        email: '',
        'cf-turnstile-response': '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setData('cf-turnstile-response', turnstileToken);
        post('/contact', {
            onSuccess: () => {
                setData({ name: '', email: '', subject: '', message: '', 'cf-turnstile-response': '' });
                setTurnstileToken('');
            }
        });
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubscribeData('cf-turnstile-response', subscribeTurnstileToken);
        postSubscribe('/subscribe', {
            onSuccess: () => {
                setSubscribeData({ email: '', 'cf-turnstile-response': '' });
                setSubscribeTurnstileToken('');
            }
        });
    };

    const socialLinks = [
        { name: 'Instagram', icon: '📷', url: 'https://instagram.com/yourusername', color: 'from-pink-500 to-green-500' },
        { name: 'GitHub', icon: '💻', url: 'https://github.com/yourusername', color: 'from-gray-700 to-gray-900' },
        { name: 'YouTube', icon: '📺', url: 'https://youtube.com/@yourchannel', color: 'from-red-500 to-red-600' },
        { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourprofile', color: 'from-blue-600 to-blue-700' },
    ];

    return (
        <GuestLayout>
            <Head title="Contact - Get in Touch" />

            {/* Hero Section */}
            <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-brand-50 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-block px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-6">
                            💬 Let's Connect
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-green-600">Touch</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Have a project in mind or just want to chat about tech? I'd love to hear from you! Drop me a message and I'll get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section - Grid Layout */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Form - 2 columns */}
                        <div className="lg:col-span-2">
                            <div className="bg-white border-2 border-slate-100 rounded-2xl p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Me a Message</h2>

                                {/* Flash Messages */}
                                {flash?.success && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
                                        {flash.success}
                                    </div>
                                )}
                                {flash?.error && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                                        {flash.error}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                                placeholder="Muhammad Arif"
                                                required
                                            />
                                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                                placeholder="email@example.com"
                                                required
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            value={data.subject}
                                            onChange={(e) => setData('subject', e.target.value)}
                                            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                            placeholder="Project Inquiry / Collaboration / General Question"
                                            required
                                        />
                                        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            rows="6"
                                            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Tell me about your project or question..."
                                            required
                                        ></textarea>
                                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                    </div>

                                    {/* Cloudflare Turnstile */}
                                    <div className="flex justify-center">
                                        <TurnstileWidget onVerify={setTurnstileToken} />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing || !turnstileToken}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-brand-600 to-green-600 text-white rounded-xl font-bold hover:shadow-xl transition-all hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {processing ? 'Sending...' : 'Send Message 📨'}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar - Contact Info & Newsletter */}
                        <div className="space-y-8">
                            {/* Contact Info Card */}
                            <div className="bg-gradient-to-br from-brand-50 to-brand-50 border-2 border-brand-100 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
                                            📧
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-600">Email</div>
                                            <div className="font-semibold text-slate-900">your-email@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
                                            📍
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-600">Location</div>
                                            <div className="font-semibold text-slate-900">Indonesia</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl">
                                            ⏰
                                        </div>
                                        <div>
                                            <div className="text-sm text-slate-600">Response Time</div>
                                            <div className="font-semibold text-slate-900">Within 24 hours</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter Subscription */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                                <h3 className="text-xl font-bold mb-3">📬 Subscribe to Newsletter</h3>
                                <p className="text-slate-300 text-sm mb-6">
                                    Get notified when I publish new articles about tech, coding, and cyber security.
                                </p>

                                <form onSubmit={handleSubscribe} className="space-y-4">
                                    <input
                                        type="email"
                                        value={subscribeData.email}
                                        onChange={(e) => setSubscribeData('email', e.target.value)}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                                        placeholder="your@email.com"
                                        required
                                    />
                                    {subscribeErrors.email && <p className="text-sm text-red-400">{subscribeErrors.email}</p>}

                                    <div className="flex justify-center">
                                        <TurnstileWidget onVerify={setSubscribeTurnstileToken} />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processingSubscribe || !subscribeTurnstileToken}
                                        className="w-full px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-brand-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {processingSubscribe ? 'Subscribing...' : 'Subscribe'}
                                    </button>
                                </form>
                            </div>

                            {/* Social Media Grid */}
                            <div className="bg-white border-2 border-slate-100 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Connect on Social Media</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 bg-gradient-to-br ${social.color} text-white rounded-xl text-center hover:shadow-lg transition-all hover:-translate-y-1`}
                                        >
                                            <div className="text-3xl mb-2">{social.icon}</div>
                                            <div className="text-sm font-semibold">{social.name}</div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
