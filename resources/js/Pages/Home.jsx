import React, { useState, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Components/Layout/GuestLayout';


const translations = {
    en: {
        hero: {
            badge: "Available for Collaboration",
            greeting_prefix: "Hello, I'm",
            greeting_name: "Muhammad Arif",
            role_intro: "I am a ",
            roles: [
                'Tech Enthusiast',
                'Computer Science Student',
                'Content Creator',
                'Freelancer'
            ],
            description: [
                "I am a student sharing what I've learned about",
                "technology",
                "career growth",
                "and",
                "cyber security",
                "Let's learn and grow together 🚀"
            ],
            cta_blog: "Explore Articles",
            cta_contact: "Get in Touch",
            stats: {
                articles: "Articles",
                projects: "Projects",
                events: "Events"
            },
            cards: {
                tech_stack: "Tech Stack",
                learning: "Currently Learning",
                active_projects: "Active Projects",
                in_dev: "In Development"
            }
        },
        achievements: {
            badge: "🏆 Milestones",
            title_prefix: "My Journey &",
            title_highlight: "Achievements",
            subtitle: "Milestones and accomplishments throughout my tech journey",
            empty: "No achievements added yet. Check back soon!",
            scroll: "Scroll for more"
        },
        projects: {
            badge: "🚀 Portfolio",
            title_prefix: "Featured",
            title_highlight: "Projects",
            subtitle: "Check out some of my latest work and creative projects",
            featured_tag: "Featured",
            view_project: "View Project",
            view: "View",
            view_all: "View All Projects →"
        },
        blog: {
            badge: "✍️ Blog",
            title_prefix: "Latest",
            title_highlight: "Articles",
            subtitle: "Insights about technology, career growth, and cyber security",
            featured_tag: "Featured",
            read_article: "Read Article",
            read: "Read",
            view_all: "View All Articles →"
        },
        newsletter: {
            badge: "📬 Newsletter",
            title: "Stay Updated with Latest Articles",
            description: "Get notified when I publish new articles about technology, coding tutorials, cyber security tips, and career growth strategies. Join our community of learners!",
            features: [
                "Weekly tech insights & tutorials",
                "Exclusive coding tips",
                "Unsubscribe anytime"
            ],
            label_email: "Your Email Address",
            placeholder: "your.email@example.com",
            button_submitting: "Subscribing...",
            button_default: "Subscribe Now 🚀",
            footer: "Join 500+ subscribers getting weekly insights"
        },
        events: {
            badge: "📅 Events",
            title_prefix: "Upcoming",
            title_highlight: "Events",
            subtitle: "Join me at these exciting tech events and workshops",
            featured_tag: "Featured Event",
            view_all: "View All Events →"
        }
    },
    id: {
        hero: {
            badge: "Tersedia untuk Kolaborasi",
            greeting_prefix: "Halo, Aku",
            greeting_name: "Muhammad Arif",
            role_intro: "Aku seorang ",
            roles: [
                'Antusias Teknologi',
                'Mahasiswa Ilmu Komputer',
                'Kreator Konten',
                'Pekerja Lepas'
            ],
            description: [
                "Aku adalah seorang pelajar yang berbagi tentang",
                "teknologi",
                "pertumbuhan karir",
                "dan",
                "keamanan siber",
                "Mari belajar dan tumbuh bersama 🚀"
            ],
            cta_blog: "Jelajahi Artikel",
            cta_contact: "Hubungi Saya",
            stats: {
                articles: "Artikel",
                projects: "Proyek",
                events: "Acara"
            },
            cards: {
                tech_stack: "Teknologi",
                learning: "Sedang Belajar",
                active_projects: "Proyek Aktif",
                in_dev: "Dalam Pengembangan"
            }
        },
        achievements: {
            badge: "🏆 Pencapaian",
            title_prefix: "Perjalanan &",
            title_highlight: "Pencapaian",
            subtitle: "Tonggak sejarah dan pencapaian selama perjalanan karir saya",
            empty: "Belum ada pencapaian. Segera kembali!",
            scroll: "Geser untuk melihat"
        },
        projects: {
            badge: "🚀 Portofolio",
            title_prefix: "Proyek",
            title_highlight: "Unggulan",
            subtitle: "Lihat beberapa karya terbaru dan proyek kreatif saya",
            featured_tag: "Unggulan",
            view_project: "Lihat Proyek",
            view: "Lihat",
            view_all: "Lihat Semua Proyek →"
        },
        blog: {
            badge: "✍️ Blog",
            title_prefix: "Artikel",
            title_highlight: "Terbaru",
            subtitle: "Wawasan seputar teknologi, karir, dan keamanan siber",
            featured_tag: "Pilihan",
            read_article: "Baca Artikel",
            read: "Baca",
            view_all: "Lihat Semua Artikel →"
        },
        newsletter: {
            badge: "📬 Buletin",
            title: "Dapatkan Update Artikel Terbaru",
            description: "Dapatkan notifikasi saat saya menerbitkan artikel baru tentang teknologi, tutorial coding, tips keamanan siber, dan strategi karir. Gabung dengan komunitas pembelajar!",
            features: [
                "Wawasan teknis & tutorial mingguan",
                "Tips coding eksklusif",
                "Berhenti berlangganan kapan saja"
            ],
            label_email: "Alamat Email Anda",
            placeholder: "email.anda@contoh.com",
            button_submitting: "Mendaftarkan...",
            button_default: "Langganan Sekarang 🚀",
            footer: "Gabung dengan 500+ pelanggan lainnya"
        },
        events: {
            badge: "📅 Acara",
            title_prefix: "Acara",
            title_highlight: "Mendatang",
            subtitle: "Ikuti saya di acara teknologi dan workshop menarik ini",
            featured_tag: "Acara Utama",
            view_all: "Lihat Semua Acara →"
        }
    }
};

export default function Home({ featuredProjects, latestNewsletters, events, achievements, flash }) {
    const [lang, setLang] = useState('en');
    const t = translations[lang];

    const roles = t.hero.roles;
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                setIsAnimating(false);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [roles.length]);

    // Reset role index when language changes to avoid out of bounds unique issues practically 
    // but here lengths are same so it's fine.

    // Newsletter subscription state
    const { data: subscribeData, setData: setSubscribeData, post: postSubscribe, processing: processingSubscribe, errors: subscribeErrors } = useForm({
        email: '',
    });

    const handleSubscribe = (e) => {
        e.preventDefault();
        postSubscribe('/subscribe', {
            onSuccess: () => {
                setSubscribeData({ email: '' });
            }
        });
    };

    // Helper to get image source
    const getImageSource = (image) => {
        if (!image) return null;
        if (image.startsWith('http') || image.startsWith('data:')) return image;
        if (image.startsWith('/storage/') || image.startsWith('storage/')) return image.startsWith('/') ? image : `/${image}`;
        if (image.match(/\.(jpeg|jpg|gif|png|webp)$/) != null) return `/storage/${image}`;
        return null;
    };

    return (
        <GuestLayout lang={lang} setLang={setLang}>
            <Head title="Home - Tech, Growth & Cyber Security" />

            {/* Modern Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-32 lg:pt-28 lg:pb-40 bg-white">
                {/* Language Toggle moved to GuestLayout Navbar */}

                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-20 right-1/4 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side */}
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-50 to-primary-50 border border-primary-200/50 text-primary-700 text-sm font-semibold mb-6 shadow-lg shadow-primary-100/50 backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                                </span>
                                {t.hero.badge}
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-900 tracking-tight mb-6 leading-[1.2]">
                                {t.hero.greeting_prefix} <span className="text-secondary-900">{t.hero.greeting_name}</span>.
                                <br />
                                <span className="text-secondary-700 text-3xl sm:text-4xl lg:text-5xl">{t.hero.role_intro}</span>
                                <span
                                    className={`inline-block text-secondary-900 transition-all duration-500 text-3xl sm:text-4xl lg:text-5xl ${isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
                                        }`}
                                >
                                    {roles[currentRoleIndex]}
                                </span>
                            </h1>

                            <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                                {t.hero.description[0]}
                                <span className="text-secondary-900 font-semibold mx-1"> {t.hero.description[1]}</span>,
                                <span className="text-secondary-900 font-semibold mx-1"> {t.hero.description[2]}</span>,
                                {t.hero.description[3]}
                                <span className="text-secondary-900 font-semibold mx-1"> {t.hero.description[4]}</span>.
                                <br />
                                {t.hero.description[5]}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <Link href="/blog">
                                    <button className="group relative overflow-hidden px-8 py-4 text-lg shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600">
                                        <span className="relative z-10 flex items-center gap-2">
                                            {t.hero.cta_blog}
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="px-8 py-4 text-lg border-2 hover:bg-secondary-50 bg-white border-secondary-700 text-secondary-700 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
                                        {t.hero.cta_contact}
                                    </button>
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-4">
                                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-secondary-200/50 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-2xl font-bold text-secondary-900 mb-1">50+</div>
                                    <div className="text-sm text-secondary-600 font-medium">{t.hero.stats.articles}</div>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-secondary-200/50 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-2xl font-bold text-secondary-900 mb-1">20+</div>
                                    <div className="text-sm text-secondary-600 font-medium">{t.hero.stats.projects}</div>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-secondary-200/50 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="text-2xl font-bold text-secondary-900 mb-1">5+</div>
                                    <div className="text-sm text-secondary-600 font-medium">{t.hero.stats.events}</div>
                                </div>
                            </div>

                            {/* Social Media Grid */}
                            <div className="grid grid-cols-4 gap-4">
                                <a href="https://instagram.com/mhmmdarif.rs" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-secondary-200/50 shadow-sm hover:shadow-md hover:bg-white transition-all group">
                                    <svg className="w-6 h-6 text-secondary-600 group-hover:text-pink-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-secondary-200/50 shadow-sm hover:shadow-md hover:bg-white transition-all group">
                                    <svg className="w-6 h-6 text-secondary-600 group-hover:text-red-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/mhdarif09" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-secondary-200/50 shadow-sm hover:shadow-md hover:bg-white transition-all group">
                                    <svg className="w-6 h-6 text-secondary-600 group-hover:text-slate-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="https://linkedin.com/in/muhammad-arif-rahmad-syahputra" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-secondary-200/50 shadow-sm hover:shadow-md hover:bg-white transition-all group">
                                    <svg className="w-6 h-6 text-secondary-600 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative z-10 mx-auto w-full max-w-md">
                                <div className="absolute inset-0 bg-primary-500 rounded-full"></div>
                                <div className="relative z-10 rounded-full overflow-hidden aspect-square">
                                    <img src="/images/arif.png" alt="Muhammad Arif" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute top-0 right-0 -mr-4 mt-8 animate-float hidden lg:block">
                                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-secondary-200/50 w-48">
                                    <div className="text-xs font-bold text-primary-600 uppercase mb-2">{t.hero.cards.tech_stack}</div>
                                    <div className="flex flex-wrap gap-1">
                                        <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">React</span>
                                        <span className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded">Laravel</span>
                                        <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">Node.js</span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-8 -left-4 animate-float-delayed hidden lg:block">
                                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-secondary-200/50 w-52">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-xs text-secondary-500">{t.hero.cards.learning}</div>
                                            <div className="font-bold text-secondary-900">{t.hero.description[4]}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-1/2 -right-8 animate-float hidden lg:block">
                                <div className="bg-primary-500 rounded-2xl p-4 shadow-xl w-44 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                        <span className="font-bold">{t.hero.cards.active_projects}</span>
                                    </div>
                                    <div className="text-3xl font-bold">6+</div>
                                    <div className="text-xs text-white/80">{t.hero.cards.in_dev}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-bold mb-6">
                            {t.achievements.badge}
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary-900 mb-6">
                            {t.achievements.title_prefix} <span className="text-secondary-900">{t.achievements.title_highlight}</span>
                        </h2>

                        <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                            {t.achievements.subtitle}
                        </p>
                    </div>

                    <div className="relative">
                        {(!achievements || achievements.length === 0) ? (
                            <div className="text-center text-secondary-500 py-12 bg-white rounded-2xl border border-secondary-100 border-dashed max-w-7xl mx-auto px-4">
                                <p>{t.achievements.empty}</p>
                            </div>
                        ) : (
                            <div className="relative overflow-x-auto pb-16 pt-12 hide-scrollbar snap-x flex px-4 md:px-8 gap-8">
                                {/* Decorator Line */}
                                <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-secondary-200 via-primary-200 to-secondary-200 w-[200%] md:w-full z-0 opacity-50"></div>

                                {achievements.map((item, index) => {
                                    const imgSrc = getImageSource(item.image);
                                    return (
                                        <div key={item.id} className="relative z-10 flex-shrink-0 w-[85vw] md:w-[450px] snap-center group pt-8">
                                            {/* Luxurious Card Effect */}
                                            <div className="absolute inset-0 top-8 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
                                            <div className="absolute inset-0 top-8 bg-white rounded-3xl shadow-sm border border-secondary-100 group-hover:shadow-2xl group-hover:border-primary-200 transition-all duration-500"></div>

                                            <div className="relative p-8 flex flex-col items-center text-center h-full mt-8">
                                                {/* Year Badge - Floating 'Mewah' Style */}
                                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary-900 to-primary-900 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg tracking-widest border-4 border-white z-20">
                                                    {item.year}
                                                </div>

                                                {/* Image - Luxurious Size */}
                                                <div className="mt-4 mb-6 relative">
                                                    <div className="absolute inset-0 bg-primary-200 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                                    <div className={`w-32 h-32 ${item.mood_color || 'bg-white'} rounded-full p-2 border-4 border-white shadow-xl flex items-center justify-center text-5xl relative z-10 group-hover:scale-105 transition-transform duration-500`}>
                                                        {imgSrc ? (
                                                            <img src={imgSrc} alt={item.title?.[lang]} className="w-full h-full object-cover rounded-full" />
                                                        ) : (
                                                            <span>{item.image || '🏆'}</span>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <h3 className="text-2xl font-display font-bold text-secondary-900 mb-3 group-hover:text-primary-700 transition-colors">
                                                    {item.title?.[lang] || item.title?.en}
                                                </h3>
                                                <div className="w-12 h-1 bg-yellow-400 rounded-full mb-4"></div>
                                                <p className="text-secondary-600 text-base leading-relaxed line-clamp-4">
                                                    {item.description?.[lang] || item.description?.en}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            {featuredProjects && featuredProjects.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-bold mb-6">
                                {t.projects.badge}
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary-900 mb-4">
                                {t.projects.title_prefix} <span className="text-secondary-900">{t.projects.title_highlight}</span>
                            </h2>
                            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                                {t.projects.subtitle}
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {featuredProjects[0] && (
                                <Link href={`/portfolio/${featuredProjects[0].slug}`} className="lg:row-span-2 group">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full border-2 border-transparent hover:border-primary-500">
                                        <div className="aspect-[4/3] bg-secondary-100 overflow-hidden">
                                            {featuredProjects[0].image ? (
                                                <img
                                                    src={getImageSource(featuredProjects[0].image)}
                                                    alt={featuredProjects[0].title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <span className="text-8xl">💼</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-8">
                                            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold mb-4">
                                                {t.projects.featured_tag}
                                            </div>
                                            <h3 className="text-3xl font-extrabold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                                                {featuredProjects[0].title}
                                            </h3>
                                            <p className="text-secondary-600 mb-6 line-clamp-3">
                                                {featuredProjects[0].description}
                                            </p>
                                            <span className="inline-flex items-center text-primary-600 font-bold group-hover:gap-2 transition-all">
                                                {t.projects.view_project}
                                                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            )}

                            <div className="grid gap-8">
                                {featuredProjects.slice(1).map((project) => (
                                    <Link key={project.id} href={`/portfolio/${project.slug}`} className="group">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary-500 flex flex-col sm:flex-row h-full">
                                            <div className="sm:w-48 aspect-video sm:aspect-square bg-secondary-100 overflow-hidden flex-shrink-0">
                                                {project.image ? (
                                                    <img
                                                        src={getImageSource(project.image)}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <span className="text-5xl">💼</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-6 flex-1">
                                                <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                                    {project.title}
                                                </h3>
                                                <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                                                    {project.description}
                                                </p>
                                                <span className="inline-flex items-center text-primary-600 font-semibold text-sm group-hover:gap-1 transition-all">
                                                    {t.projects.view} →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/portfolio">
                                <button className="px-8 py-4 bg-primary-500 text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    {t.projects.view_all}
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Latest Newsletters Section */}
            {latestNewsletters && latestNewsletters.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-bold mb-6">
                                {t.blog.badge}
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary-900 mb-4">
                                {t.blog.title_prefix} <span className="text-secondary-900">{t.blog.title_highlight}</span>
                            </h2>
                            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                                {t.blog.subtitle}
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Featured Article */}
                            {latestNewsletters[0] && (
                                <Link href={`/blog/${latestNewsletters[0].slug}`} className="lg:row-span-2 group">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full border-2 border-transparent hover:border-primary-500">
                                        <div className="aspect-[4/3] bg-secondary-100 overflow-hidden">
                                            {latestNewsletters[0].image ? (
                                                <img
                                                    src={getImageSource(latestNewsletters[0].image)}
                                                    alt={latestNewsletters[0].title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <span className="text-8xl">📝</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-8">
                                            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold mb-4">
                                                {t.blog.featured_tag}
                                            </div>
                                            <h3 className="text-3xl font-extrabold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                                                {latestNewsletters[0].title}
                                            </h3>
                                            <p className="text-secondary-600 mb-6 line-clamp-3">
                                                {latestNewsletters[0].excerpt}
                                            </p>
                                            <span className="inline-flex items-center text-primary-600 font-bold group-hover:gap-2 transition-all">
                                                {t.blog.read_article}
                                                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            )}

                            <div className="grid gap-8">
                                {latestNewsletters.slice(1).map((article) => (
                                    <Link key={article.id} href={`/blog/${article.slug}`} className="group">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary-500 flex flex-col sm:flex-row h-full">
                                            <div className="sm:w-48 aspect-video sm:aspect-square bg-secondary-100 overflow-hidden flex-shrink-0">
                                                {article.image ? (
                                                    <img
                                                        src={getImageSource(article.image)}
                                                        alt={article.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <span className="text-5xl">📝</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-6 flex-1">
                                                <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                                    {article.title}
                                                </h3>
                                                <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                                                    {article.excerpt}
                                                </p>
                                                <span className="inline-flex items-center text-primary-600 font-semibold text-sm group-hover:gap-1 transition-all">
                                                    {t.blog.read} →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/blog">
                                <button className="px-8 py-4 bg-primary-500 text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    {t.blog.view_all}
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Newsletter Subscription Section */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-bold mb-6">
                                {t.newsletter.badge}
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-secondary-900">
                                {t.newsletter.title}
                            </h2>
                            <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
                                {t.newsletter.description}
                            </p>

                            <div className="space-y-4">
                                {t.newsletter.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-lg text-secondary-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-secondary-50 rounded-2xl p-8 border-2 border-secondary-200 shadow-xl">
                            {flash?.success && (
                                <div className="mb-6 p-4 bg-primary-100 border border-primary-300 text-primary-800 rounded-lg font-semibold">
                                    {flash.success}
                                </div>
                            )}
                            {flash?.error && (
                                <div className="mb-6 p-4 bg-red-100 border border-red-300 text-red-800 rounded-lg font-semibold">
                                    {flash.error}
                                </div>
                            )}

                            <form onSubmit={handleSubscribe} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-secondary-900">{t.newsletter.label_email}</label>
                                    <input
                                        type="email"
                                        value={subscribeData.email}
                                        onChange={(e) => setSubscribeData('email', e.target.value)}
                                        className="w-full px-4 py-4 bg-white border-2 border-secondary-300 rounded-lg text-secondary-900 placeholder-secondary-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                        placeholder={t.newsletter.placeholder}
                                        required
                                    />
                                    {subscribeErrors.email && <p className="mt-2 text-sm text-red-600 font-semibold">{subscribeErrors.email}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processingSubscribe}
                                    className="w-full px-8 py-4 bg-primary-500 text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    {processingSubscribe ? t.newsletter.button_submitting : t.newsletter.button_default}
                                </button>
                            </form>

                            <p className="text-center text-sm text-secondary-500 mt-4">
                                {t.newsletter.footer}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            {events && events.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-bold mb-6">
                                {t.events.badge}
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-secondary-900 mb-4">
                                {t.events.title_prefix} <span className="text-secondary-900">{t.events.title_highlight}</span>
                            </h2>
                            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
                                {t.events.subtitle}
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {events[0] && (
                                <div className="lg:row-span-2 group">
                                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full border-2 border-transparent hover:border-primary-500">
                                        <div className="aspect-[4/3] bg-secondary-100 overflow-hidden relative">
                                            {events[0].banner ? (
                                                <img
                                                    src={getImageSource(events[0].banner)}
                                                    alt={events[0].title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <span className="text-8xl">📆</span>
                                                </div>
                                            )}
                                            <div className="absolute top-4 right-4 px-4 py-2 bg-primary-500 text-white rounded-xl font-bold text-sm">
                                                {new Date(events[0].date).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'short' })}
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold mb-4">
                                                {t.events.featured_tag}
                                            </div>
                                            <h3 className="text-3xl font-extrabold text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors">
                                                {events[0].title}
                                            </h3>
                                            <p className="text-secondary-600 mb-4 line-clamp-3">
                                                {events[0].description}
                                            </p>
                                            <div className="flex items-center text-secondary-600 text-sm">
                                                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {events[0].location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="grid gap-8">
                                {events.slice(1).map((event) => (
                                    <div key={event.id} className="group">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary-500 flex flex-col sm:flex-row h-full">
                                            <div className="sm:w-48 aspect-video sm:aspect-square bg-secondary-100 overflow-hidden flex-shrink-0 relative">
                                                {event.banner ? (
                                                    <img
                                                        src={getImageSource(event.banner)}
                                                        alt={event.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center">
                                                        <span className="text-5xl">📆</span>
                                                    </div>
                                                )}
                                                <div className="absolute top-2 right-2 px-3 py-1 bg-primary-500 text-white rounded-lg font-bold text-xs">
                                                    {new Date(event.date).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { day: 'numeric', month: 'short' })}
                                                </div>
                                            </div>
                                            <div className="p-6 flex-1">
                                                <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                                    {event.title}
                                                </h3>
                                                <p className="text-secondary-600 text-sm mb-3 line-clamp-2">
                                                    {event.description}
                                                </p>
                                                <div className="flex items-center text-secondary-500 text-xs">
                                                    <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    </svg>
                                                    {event.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/events">
                                <button className="px-8 py-4 bg-primary-500 text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                    {t.events.view_all}
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}
        </GuestLayout>
    );
}
