import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Components/Layout/GuestLayout';

export default function About() {
    // Determine language from GuestLayout context if passed, but since we are defaulting to ID, 
    // we will hardcode ID content as primary. Ideally this component receives `lang` prop from layout
    // but GuestLayout manages it via children. We can make the content dynamic if needed,
    // but the request was "bahasa utama semua itu bahasa indonesia".

    // For simplicity and meeting the requirement effectively, we'll write the content in Indonesian 
    // as the default rendered state or use a simple toggle if we want to keep EN support visible.
    // Given the architecture, let's stick to the translations object pattern used in Home.jsx for consistency 
    // if we want to be robust, OR just directly use ID since that's the request.

    // Let's implement the translation pattern again to be safe and professional, defaulting to ID.

    // Note: Since GuestLayout controls the language state but doesn't pass it down explicitly to children 
    // in the current implementation (it uses children prop), we might need to rely on a context or 
    // just content that is primarily Indonesian. 
    // However, GuestLayout *does* receive lang/setLang props, but to make the page content reactive 
    // to the navbar toggle, we need to lift the state or use a context.
    // In Home.jsx, state was local. 
    // To properly support the user's request of "Default ID, Secondary EN", I will use the same pattern:
    // Local state defaulting to 'id'. (The navbar toggle in GuestLayout might be isolated if not lifted, 
    // but for this task I will focus on the content being ID first).

    const [lang, setLang] = useState('id'); // Default ID

    const t = {
        id: {
            hero: {
                badge: "👋 Kenalan Yuk",
                title_prefix: "Halo, Saya",
                name: "Muhammad Arif",
                description: "Seorang antusias teknologi, mahasiswa teknik informatika, dan konten kreator yang bersemangat untuk belajar, membangun, dan berbagi wawasan seputar teknologi, pengembangan diri, dan keamanan siber.",
            },
            stats: [
                { label: 'Tahun Pengalaman', value: '3+', icon: '📅' },
                { label: 'Proyek Selesai', value: '20+', icon: '🚀' },
                { label: 'Klien Puas', value: '15+', icon: '😊' },
                { label: 'Total Komit', value: '1000+', icon: '💻' },
            ],
            story: {
                title: "Cerita Saya",
                paragraphs: [
                    "Hai! Saya Arif. Perjalanan saya di dunia teknologi dimulai dari rasa penasaran sederhana: 'Bagaimana sih sebuah website bisa bekerja?'. Rasa ingin tahu itu membawa saya menyelami dunia baris kode yang ternyata sangat menantang namun menyenangkan.",
                    "Sekarang, saya sedang menempuh pendidikan di jurusan Teknik Informatika. Di sela-sela kesibukan kuliah, saya membagikan apa yang saya pelajari melalui media sosial. Kenapa? Karena saya percaya ilmu yang dibagi tidak akan berkurang, justru akan semakin melekat.",
                    "Fokus saya saat ini ada di Web Development dan Cyber Security. Dua dunia yang menurut saya sangat krusial di era digital ini. Saya ingin menciptakan sistem yang tidak hanya canggih dan fungsional, tapi juga aman.",
                    "Di luar itu, saya hanyalah mahasiswa biasa yang suka kopi, game, dan diskusi tentang masa depan teknologi. Yuk, berteman!"
                ]
            },
            skills: {
                title: "Keahlian & Tools",
                subtitle: "Teknologi yang saya gunakan untuk mewujudkan ide menjadi nyata",
                list: [
                    { name: 'React & Next.js', level: 90, icon: '⚛️' },
                    { name: 'Laravel & PHP', level: 85, icon: '🔺' },
                    { name: 'Node.js', level: 80, icon: '🟢' },
                    { name: 'Cyber Security', level: 75, icon: '🔒' },
                    { name: 'Database Design', level: 85, icon: '💾' },
                    { name: 'UI/UX Design', level: 70, icon: '🎨' },
                ]
            },
            experience: {
                title: "Pengalaman",
                subtitle: "Jejak langkah perjalanan profesional saya",
                list: [
                    {
                        title: 'Freelance Developer',
                        company: 'Self-Employed',
                        period: '2023 - Sekarang',
                        description: 'Membangun aplikasi web untuk berbagai klien dan membantu merealisasikan ide-ide mereka menjadi produk digital.',
                        color: 'from-brand-500 to-green-500'
                    },
                    {
                        title: 'Content Creator',
                        company: 'Instagram & YouTube',
                        period: '2022 - Sekarang',
                        description: 'Berbagi tutorial coding, tips keamanan siber, dan wawasan teknologi kepada komunitas developer muda.',
                        color: 'from-green-500 to-pink-500'
                    },
                    {
                        title: 'Mahasiswa Informatika',
                        company: 'Universitas',
                        period: '2021 - Sekarang',
                        description: 'Mempelajari fundamental ilmu komputer, algoritma, dan pengembangan perangkat lunak secara akademis.',
                        color: 'from-teal-500 to-cyan-500'
                    },
                ]
            },
            tech: {
                title: "Tech Stack",
                subtitle: "Perangkat & teknologi andalan saya sehari-hari",
                categories: [
                    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Inertia.js'] },
                    { category: 'Backend', items: ['Laravel', 'Node.js', 'Express', 'REST API'] },
                    { category: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
                    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Postman'] },
                ]
            },
            cta: {
                title: "Mari Berkolaborasi!",
                subtitle: "Punya ide proyek atau sekadar ingin ngobrol soal tech? Pintu saya selalu terbuka.",
                btn_contact: "Hubungi Saya",
                btn_portfolio: "Lihat Karya"
            }
        },
        en: {
            hero: {
                badge: "👋 Get to Know Me",
                title_prefix: "Hi, I'm",
                name: "Muhammad Arif",
                description: "A passionate Tech Enthusiast, Computer Science Student, and Content Creator dedicated to learning, building, and sharing knowledge about technology, growth, and cyber security.",
            },
            stats: [
                { label: 'Years Experience', value: '3+', icon: '📅' },
                { label: 'Projects Completed', value: '20+', icon: '🚀' },
                { label: 'Happy Clients', value: '15+', icon: '😊' },
                { label: 'Code Commits', value: '1000+', icon: '💻' },
            ],
            story: {
                title: "My Story",
                paragraphs: [
                    "Hi! I'm Arif. My journey in technology started with a simple curiosity: 'How does a website actually work?'. That curiosity led me to dive deep into the world of coding, which turned out to be challenging yet incredibly rewarding.",
                    "Currently, I am pursuing my degree in Computer Science. Amidst my university life, I share what I learn on social media. Why? Because I believe that knowledge sharing is the best way to master a subject.",
                    "My current focus is on Web Development and Cyber Security. Two fields that I believe are crucial in this digital era. I aim to build systems that are not just advanced and functional, but also secure.",
                    "Beyond that, I'm just a regular student who loves coffee, gaming, and discussing the future of tech. Let's connect!"
                ]
            },
            skills: {
                title: "Skills & Expertise",
                subtitle: "Technologies and tools I work with to bring ideas to life",
                list: [
                    { name: 'React & Next.js', level: 90, icon: '⚛️' },
                    { name: 'Laravel & PHP', level: 85, icon: '🔺' },
                    { name: 'Node.js', level: 80, icon: '🟢' },
                    { name: 'Cyber Security', level: 75, icon: '🔒' },
                    { name: 'Database Design', level: 85, icon: '💾' },
                    { name: 'UI/UX Design', level: 70, icon: '🎨' },
                ]
            },
            experience: {
                title: "Experience",
                subtitle: "My professional journey and key milestones",
                list: [
                    {
                        title: 'Freelance Developer',
                        company: 'Self-Employed',
                        period: '2023 - Present',
                        description: 'Building web applications and helping clients bring their ideas to life.',
                        color: 'from-brand-500 to-green-500'
                    },
                    {
                        title: 'Content Creator',
                        company: 'Instagram & YouTube',
                        period: '2022 - Present',
                        description: 'Sharing knowledge about tech, programming, and cyber security.',
                        color: 'from-green-500 to-pink-500'
                    },
                    {
                        title: 'Computer Science Student',
                        company: 'University',
                        period: '2021 - Present',
                        description: 'Learning fundamentals and advanced concepts in computer science.',
                        color: 'from-teal-500 to-cyan-500'
                    },
                ]
            },
            tech: {
                title: "Tech Stack",
                subtitle: "Technologies I use to build amazing projects",
                categories: [
                    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Inertia.js'] },
                    { category: 'Backend', items: ['Laravel', 'Node.js', 'Express', 'REST API'] },
                    { category: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
                    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Postman'] },
                ]
            },
            cta: {
                title: "Let's Build Something Amazing",
                subtitle: "Whether you have a project in mind or just want to chat about tech, I'm always open to new opportunities.",
                btn_contact: "Get in Touch",
                btn_portfolio: "View My Work"
            }
        }
    };

    const content = t[lang];

    return (
        <GuestLayout lang={lang} setLang={setLang}>
            <Head title={`About Me - ${content.hero.name}`} />

            {/* Hero Section */}
            <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-50 via-white to-brand-50 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-block px-4 py-2 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-6">
                            {content.hero.badge}
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                            {content.hero.title_prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-green-600">{content.hero.name}</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-8">
                            {content.hero.description}
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
                        {content.stats.map((stat, index) => (
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
                                {content.story.title}
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-4">
                                {content.story.paragraphs.map((p, idx) => (
                                    <p key={idx}>{p}</p>
                                ))}
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{content.skills.title}</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {content.skills.subtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content.skills.list.map((skill, index) => (
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{content.experience.title}</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {content.experience.subtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {content.experience.list.map((exp, index) => (
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
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{content.tech.title}</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            {content.tech.subtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.tech.categories.map((stack, index) => (
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
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">{content.cta.title}</h2>
                    <p className="text-xl text-brand-100 mb-8 leading-relaxed">
                        {content.cta.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="px-8 py-4 bg-white text-brand-600 rounded-xl font-bold hover:shadow-2xl transition-all hover:-translate-y-1">
                            {content.cta.btn_contact}
                        </Link>
                        <Link href="/portfolio" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all">
                            {content.cta.btn_portfolio}
                        </Link>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
