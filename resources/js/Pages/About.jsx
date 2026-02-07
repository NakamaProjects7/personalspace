import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Components/Layout/GuestLayout';

export default function About() {
    const skills = [
        { name: 'React & Next.js', level: 90, icon: '⚛️' },
        { name: 'Laravel & PHP', level: 85, icon: '🔺' },
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Cyber Security', level: 75, icon: '🔒' },
        { name: 'Database Design', level: 85, icon: '💾' },
        { name: 'UI/UX Design', level: 70, icon: '🎨' },
    ];

    const experiences = [
        {
            title: 'Freelance Developer',
            company: 'Self-Employed',
            period: '2023 - Present',
            description: 'Building web applications and helping clients bring their ideas to life',
            color: 'from-brand-500 to-green-500'
        },
        {
            title: 'Content Creator',
            company: 'YouTube & Instagram',
            period: '2022 - Present',
            description: 'Sharing knowledge about tech, programming, and cyber security',
            color: 'from-green-500 to-pink-500'
        },
        {
            title: 'Computer Science Student',
            company: 'University',
            period: '2021 - Present',
            description: 'Learning fundamentals and advanced concepts in computer science',
            color: 'from-teal-500 to-cyan-500'
        },
    ];

    const techStack = [
        { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Inertia.js'] },
        { category: 'Backend', items: ['Laravel', 'Node.js', 'Express', 'REST API'] },
        { category: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
        { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Postman'] },
    ];

    const stats = [
        { label: 'Years Experience', value: '3+', icon: '📅' },
        { label: 'Projects Completed', value: '20+', icon: '🚀' },
        { label: 'Happy Clients', value: '15+', icon: '😊' },
        { label: 'Code Commits', value: '1000+', icon: '💻' },
    ];

    return (
        <GuestLayout>
            <Head title="About Me - Muhammad Arif" />

            {/* Hero Section */}
            <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-brand-50 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-block px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-6">
                            👋 Get to Know Me
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-green-600">Muhammad Arif</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            A passionate <span className="font-semibold text-brand-600">Tech Enthusiast</span>, <span className="font-semibold text-green-600">Computer Science Student</span>, and <span className="font-semibold text-teal-600">Content Creator</span> dedicated to learning, building, and sharing knowledge about technology, growth, and cyber security.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-3">{stat.icon}</div>
                                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* My Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                                My Story
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-4">
                                <p>
                                    Saya adalah seorang pelajar Computer Science yang memiliki passion besar dalam dunia teknologi. Perjalanan saya dimulai dari rasa penasaran tentang bagaimana aplikasi dan website bekerja.
                                </p>
                                <p>
                                    Seiring waktu, saya mulai belajar programming, web development, dan cyber security. Saya percaya bahwa teknologi adalah alat yang powerful untuk membuat perubahan positif di dunia.
                                </p>
                                <p>
                                    Selain coding, saya juga aktif sebagai content creator untuk membagikan apa yang saya pelajari kepada orang lain. Saya percaya bahwa knowledge sharing adalah kunci untuk tumbuh bersama.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-100 to-brand-100 p-8 flex items-center justify-center overflow-hidden">
                                <img
                                    src="/images/arif.png"
                                    alt="Muhammad Arif"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-500 rounded-2xl opacity-20 blur-xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-500 rounded-2xl opacity-20 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Technologies and tools I work with to bring ideas to life
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-3xl">{skill.icon}</div>
                                    <h3 className="font-bold text-slate-900">{skill.name}</h3>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                                    <div
                                        className="bg-gradient-to-r from-brand-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <div className="text-sm text-slate-500 text-right">{skill.level}%</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Experience & Journey</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            My professional journey and key milestones
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative group">
                                <div className="bg-white border-2 border-slate-100 rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-2">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold text-xl mb-4`}>
                                        {index + 1}
                                    </div>
                                    <div className="text-sm text-slate-500 mb-2">{exp.period}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                                    <div className="text-brand-600 font-semibold mb-3">{exp.company}</div>
                                    <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Bento Grid */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Tech Stack</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Technologies I use to build amazing projects
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {techStack.map((stack, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                                <h3 className="font-bold text-slate-900 mb-4 text-lg">{stack.category}</h3>
                                <div className="space-y-2">
                                    {stack.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                                            <span className="text-slate-600 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-brand-600 to-green-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
                    <p className="text-xl text-brand-100 mb-8 leading-relaxed">
                        Whether you have a project in mind or just want to chat about tech, I'm always open to new opportunities and collaborations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-8 py-4 bg-white text-brand-600 rounded-xl font-bold hover:shadow-2xl transition-all hover:-translate-y-1">
                            Get in Touch
                        </Link>
                        <Link href="/portfolio" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all">
                            View My Work
                        </Link>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
