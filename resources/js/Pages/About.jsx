import React, { useState, useEffect } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import GuestLayout from '@/Components/Layout/GuestLayout';

export default function About({ timelines, projects }) {
    const { url } = usePage();
    const [lang, setLang] = useState('id'); // Default ID
    const [activeTab, setActiveTab] = useState('personal'); // 'personal' or 'professional'
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll for sticky navbar visual effect and initial tab from URL
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        // Check URL param for tab
        const params = new URLSearchParams(window.location.search);
        const tabParam = params.get('tab');
        if (tabParam === 'personal' || tabParam === 'professional') {
            setActiveTab(tabParam);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [url]);

    // Helper to safely parse tech_stack
    const getTechStack = (stack) => {
        if (!stack) return [];
        try {
            // Attempt to parse JSON
            const parsed = JSON.parse(stack);
            // If it's array, return it. If it's string, wrap in array.
            return Array.isArray(parsed) ? parsed : [parsed];
        } catch (e) {
            // If parse fails, assume it's a comma-separated string or single value
            return stack.includes(',') ? stack.split(',').map(s => s.trim()) : [stack];
        }
    };

    const t = {
        id: {
            hero: {
                badge: activeTab === 'personal' ? "👋 Kenalan Yuk!" : "💼 Profesional & Berkelas",
                title_prefix: activeTab === 'personal' ? "Di Balik Layar," : "Mitra Strategis",
                name: activeTab === 'personal' ? "Ada Manusia Biasa" : "Digital Business Anda",
                description: activeTab === 'personal'
                    ? "Nggak melulu soal koding. Ini sisi lain gue yang mungkin nggak kelihatan di LinkedIn. Suka kopi, obrolan deep talk, dan hal-hal sederhana."
                    : "Saya tidak menjual kode. Saya menjual solusi, ketenangan pikiran, dan aset digital yang bekerja keras untuk bisnis Anda (bahkan saat Anda tidur).",
            },
            nav: {
                personal: "Personal (The Real Me)",
                professional: "Profesional (The Value)"
            },
            personal: {
                intro: {
                    title: "Siapa Sebenarnya Muhammad Arif?",
                    content: [
                        "Bukan sekadar deretan gelar atau jabatan. Gue adalah seorang pembelajar seumur hidup yang percaya bahwa pendidikan adalah senjata paling ampuh untuk mengubah nasib.",
                        "Dari Palembang ke panggung dunia, perjalanan gue nggak selalu mulus. Tapi setiap fase—dari madrasah sederhana sampai kuliah di luar negeri—membentuk mental gue jadi seperti sekarang: Pantang menyerah dan selalu lapar akan ilmu.",
                        "Gue percaya, sukses itu bukan cuma soal pencapaian pribadi, tapi seberapa banyak dampak yang bisa kita kasih ke orang lain. Itulah kenapa gue bangun Learntera & Paradigma.idn."
                    ]
                },
                education: [
                    {
                        school: "INTI International University, Malaysia",
                        level: "International Exposure",
                        year: "Exchange Program",
                        desc: "Merasakan atmosfer pendidikan global dan networking lintas negara. Membuka wawasan tentang teknologi dan budaya internasional.",
                        rank: "Awardee"
                    },
                    {
                        school: "Universitas Bina Darma",
                        level: "Sarjana (S1)",
                        year: "Undergraduate",
                        desc: "Tempat gue nemuin passion di dunia Digital & Tech. Aktif di berbagai organisasi kampus dan mulai merintis karir profesional dari sini.",
                        rank: "Lulusan Terbaik / Cum Laude"
                    },
                    {
                        school: "MAN 1 Palembang",
                        level: "SMA / MA",
                        year: "High School",
                        desc: "Masa-masa pembentukan karakter disiplin dan leadership. Mulai aktif ikut lomba akademik dan organisasi siswa.",
                        rank: "Juara Umum & Kompetisi Sains"
                    },
                    {
                        school: "MTS Patra Mandiri",
                        level: "SMP / MTS",
                        year: "Middle School",
                        desc: "",
                        rank: ""
                    },
                    {
                        school: "MI Tarbiyah Islamiya",
                        level: "SD / MI",
                        year: "Elementary",
                        desc: "",
                        rank: ""
                    }
                ],
                timeline: {
                    title: "Jejak Langkah & Cerita",
                    subtitle: "Setiap fase punya ceritanya sendiri. Ini highlight perjalanan gue sejauh ini.",
                },
                values: {
                    title: "Prinsip Gue (Red Flags & Green Flags)",
                    subtitle: "Biar kita cocok, ini hal-hal yang gue pegang teguh.",
                    list: [
                        { title: "Transparan (No Ghosting)", desc: "Kalau ada masalah, gue bakal bilang di awal. Nggak ada tuh tiba-tiba ngilang pas deadline.", icon: "👻" },
                        { title: "Growth (Tumbuh Bareng)", desc: "Gue seneng belajar. Kalau lo punya insight baru, kasih tau gue. Kita upgrade bareng-bareng.", icon: "🌱" },
                        { title: "Respect (Saling Hargai)", desc: "Gue hargai waktu & ide lo, gue harap lo juga gitu ke gue. Kita partner, bukan bos & bawahan.", icon: "🤝" },
                        { title: "Fun (Dibawa Asik Aja)", desc: "Kerja keras boleh, tapi jangan lupa ketawa. Hidup udah serius, project jangan dibikin stress.", icon: "😄" }
                    ]
                },
                favorites: {
                    title: "Mood Booster",
                    items: [
                        { category: "Fuel", value: "Kopi Hitam (Pahit kayak idup, tapi nagih)", icon: "☕" },
                        { category: "Vibe", value: "Lagu Indie Senja-senja gitulah", icon: "🎵" },
                        { category: "Escape", value: "Gunung / Alam Terbuka", icon: "🏔️" },
                        { category: "Geek", value: "Ngulik Tech Stack Baru", icon: "💻" }
                    ]
                }
            },
            professional: {
                intro: {
                    title: "Kenapa Harganya 'Sekian'?",
                    content: [
                        "Mungkin Anda mikir, 'Kok lebih mahal dari freelancer sebelah?'. Simple: Karena saya nggak cuma ngerjain tugas, saya mikirin bisnis Anda.",
                        "Saya jual **Pengalaman & Ketenangan**. Anda nggak perlu pusing mikirin server down, bug yang muncul tiba-tiba, atau tampilan yang berantakan di HP. Saya pastiin semuanya beres.",
                        "Saya bangun aset. Website yang saya buat bukan pengeluaran, tapi **Investasi**. Itu bakal jadi marketing 24/7 buat Anda. Jadi, harganya sebanding dengan value yang Anda dapet."
                    ]
                },
                services: {
                    title: "Solusi Premium",
                    list: [
                        { title: "Custom Development", desc: "Bukan template pasaran. Dibangun dari nol khusus buat kebutuhan unik bisnis Anda.", icon: "💎" },
                        { title: "Scalable Architecture", desc: "Siap nampung 10 user atau 1 juta user. Pondasinya kuat dari awal.", icon: "🏗️" },
                        { title: "Security First", desc: "Data Anda aman. Saya terapin standar keamanan industri biar nggak gampang jebol.", icon: "🔒" },
                        { title: "SEO & Performance", desc: "Nggak cuma bagus diliat, tapi juga gampang ditemuin di Google dan ngebut pas dibuka.", icon: "🚀" }
                    ]
                },
                usp: {
                    title: "Beda Kelas",
                    items: [
                        { title: "Business Mindset", desc: "Saya ngerti bahasa bisnis (ROI, Conversion, Funnel). Nggak cuma bahasa teknis." },
                        { title: "Long-term Partner", desc: "Saya cari partner jangka panjang. Sukses Anda = Portofolio Sukses Saya." },
                        { title: "Support Premium", desc: "Ada masalah? Chat saya. Saya bales cepet (selama jam kerja ya wkwk)." },
                        { title: "Clean Handoff", desc: "Dokumentasi lengkap. Kalau nanti mau dioper ke tim lain, gampang banget." }
                    ]
                },
                stats: [
                    { label: 'Tahun Pengalaman', value: '3+', icon: '🔥' },
                    { label: 'Project Tuntas', value: '25+', icon: '✅' },
                    { label: 'Client Puas', value: '95%', icon: '⭐' },
                    { label: 'Value Generated', value: '$$$', icon: '💰' },
                ]
            },
            cta: {
                personal: {
                    title: "Udah Kenal Kan?",
                    subtitle: "Kalau rasanya 'klik', yuk ngobrol lebih lanjut. Siapa tau jadi temen diskusi yang asik.",
                    btn: "DM Instagram (Fast Respon)"
                },
                professional: {
                    title: "Siap Investasi?",
                    subtitle: "Slot project terbatas. Saya cuma ambil project yang saya yakin bisa deliver 100%. Amankan slot Anda.",
                    btn: "Konsultasi Project (Gratis)"
                }
            }
        },
        en: {
            // Keep simplified EN fallback for structure validity
            hero: { badge: "Hi", title_prefix: "I am", name: "Arif", description: "..." },
            nav: { personal: "Personal", professional: "Professional" },
            personal: { intro: { title: "About Me", content: [] }, timeline: { title: "Timeline", subtitle: "" }, values: { title: "Values", list: [] }, favorites: { title: "Favorites", items: [] } },
            professional: { intro: { title: "Why Hire Me", content: [] }, services: { title: "Services", list: [] }, usp: { title: "USP", items: [] }, stats: [] },
            cta: { personal: { title: "Contact", subtitle: "", btn: "Contact" }, professional: { title: "Hire Me", subtitle: "", btn: "Consult" } }
        }
    };

    const content = t[lang];

    return (
        <GuestLayout lang={lang} setLang={setLang}>
            <Head title={`About Me - ${content.hero.name}`} />



            {/* Hero Section (Content changes based on tab) */}
            <section className="relative py-16 bg-white overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
                    <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 ${activeTab === 'personal' ? 'bg-secondary-100 text-secondary-700' : 'bg-primary-100 text-primary-700'}`}>
                        {content.hero.badge}
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-secondary-900 mb-6 leading-tight">
                        {content.hero.title_prefix} <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeTab === 'personal' ? 'from-secondary-600 to-primary-600' : 'from-primary-600 to-secondary-600'}`}>{content.hero.name}</span>
                    </h1>
                    <p className="text-xl text-secondary-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                        {content.hero.description}
                    </p>
                </div>
            </section>

            <div className="min-h-[60vh]">
                {activeTab === 'personal' ? (
                    // PERSONAL CONTENT (PDKT MODE)
                    <div className="animate-fade-in space-y-20 pb-20">
                        {/* Deep Dive Bio */}
                        <section className="bg-white overflow-visible">
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="relative">
                                    {/* Decorative Background Elements */}
                                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                                    <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 border border-white/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden">
                                        <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">

                                            {/* 3D Photo Area */}
                                            <div className="md:col-span-5 order-1 md:order-2 perspective-1000 group">
                                                <div className="relative transform transition-all duration-700 group-hover:rotate-y-6 group-hover:rotate-x-6 preserve-3d">
                                                    {/* Back Layer */}
                                                    <div className="absolute inset-0 bg-secondary-900 rounded-3xl transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-8 group-hover:translate-y-8"></div>
                                                    {/* Middle Layer */}
                                                    <div className="absolute inset-0 bg-primary-400 rounded-3xl transform translate-x-2 translate-y-2 -z-10 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>

                                                    {/* Main Image */}
                                                    <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                                                        <img
                                                            src="/images/fotoabang.jpg"
                                                            alt="Muhammad Arif Personal"
                                                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        {/* Floating Caption/Badge */}
                                                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                                            <p className="text-secondary-900 font-bold text-center text-sm">"Dream Big, Execute Bigger." 🚀</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Text Content */}
                                            <div className="md:col-span-7 order-2 md:order-1">
                                                <div className="space-y-6">
                                                    <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-bold tracking-wide mb-2 border border-primary-100">
                                                        Tentang Gue 👋
                                                    </div>
                                                    <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-900 leading-tight font-display">
                                                        {content.personal.intro.title}
                                                    </h2>
                                                    <div className="prose prose-lg text-secondary-600 space-y-5 leading-relaxed">
                                                        {content.personal.intro.content.map((p, idx) => (
                                                            <p key={idx} className="relative pl-6 border-l-4 border-primary-200 hover:border-primary-500 transition-colors duration-300">
                                                                {p}
                                                            </p>
                                                        ))}
                                                    </div>

                                                    {/* Signature or Personal Touch */}
                                                    <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-4">
                                                        <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center text-2xl">
                                                            ✍️
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-secondary-900">Muhammad Arif</div>
                                                            <div className="text-xs text-secondary-500 uppercase tracking-wider">Lifelong Learner</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Education History */}
                        <section className="bg-white overflow-hidden py-8">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center mb-10">
                                    <h2 className="text-2xl font-bold text-secondary-900">Riwayat Pendidikan</h2>
                                    <p className="text-secondary-500">Fondasi akademik yang membentuk pola pikir gue.</p>
                                </div>

                                <div className="relative">
                                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden"></div>
                                    <div className="flex gap-6 overflow-x-auto pb-12 px-4 hide-scrollbar snap-x cursor-grab active:cursor-grabbing">
                                        {content.personal.education.map((edu, idx) => (
                                            <div key={idx} className="group relative flex-shrink-0 w-[300px] md:w-[350px] snap-center perspective-1000">
                                                {/* 3D Card Effect */}
                                                <div className="absolute inset-0 bg-primary-100 rounded-2xl transform translate-y-3 translate-x-3 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5"></div>
                                                <div className="relative bg-white p-6 rounded-2xl border border-gray-50 shadow-lg h-full flex flex-col transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-1 group-hover:shadow-xl">

                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-gray-100">
                                                            {idx === 0 ? '🌏' : idx === 1 ? '🎓' : idx === 2 ? '🏫' : '🎒'}
                                                        </div>
                                                        <span className="text-xs font-bold px-3 py-1 bg-primary-50 text-primary-700 rounded-full border border-primary-100">{edu.year}</span>
                                                    </div>

                                                    <h3 className="text-lg font-bold text-secondary-900 mb-1 leading-tight group-hover:text-primary-600 transition-colors">{edu.school}</h3>
                                                    <div className="text-xs font-bold text-secondary-400 uppercase tracking-wider mb-4">{edu.level}</div>

                                                    {edu.desc ? (
                                                        <p className="text-sm text-secondary-600 leading-relaxed mb-4 flex-1 line-clamp-4">{edu.desc}</p>
                                                    ) : (
                                                        <div className="flex-1"></div>
                                                    )}

                                                    {edu.rank && (
                                                        <div className="pt-4 border-t border-gray-50 mt-auto">
                                                            <div className="flex items-center gap-2 text-secondary-800 text-xs font-bold uppercase tracking-wide">
                                                                <span className="text-yellow-500 text-lg">★</span>
                                                                {edu.rank}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Values (Red/Green Flags) */}
                        <section>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center mb-10">
                                    <h2 className="text-2xl font-bold text-secondary-900">{content.personal.values.title}</h2>
                                    <p className="text-secondary-500">{content.personal.values.subtitle}</p>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {content.personal.values.list.map((val, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-primary-300 transition-colors group text-center">
                                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{val.icon}</div>
                                            <h3 className="font-bold text-lg text-secondary-900 mb-2">{val.title}</h3>
                                            <p className="text-secondary-600 text-sm">{val.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Timeline */}
                        <section className="bg-white overflow-hidden">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-secondary-900 mb-2 font-display">{content.personal.timeline.title}</h2>
                                    <p className="text-secondary-600">{content.personal.timeline.subtitle}</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0 hidden md:block"></div>
                                    {timelines && timelines.length > 0 ? (
                                        <div className="flex gap-6 overflow-x-auto pb-8 px-4 hide-scrollbar snap-x relative z-10">
                                            {timelines.map((item, idx) => (
                                                <div key={item.id || idx} className="flex-shrink-0 w-72 snap-center">
                                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
                                                        <div className="text-sm font-bold text-primary-600 mb-2">{item.year}</div>
                                                        <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-gray-100">
                                                            {item.image ? (
                                                                <img
                                                                    src={item.image}
                                                                    alt={item.title}
                                                                    className="w-full h-full object-cover"
                                                                    onError={(e) => {
                                                                        e.target.style.display = 'none'; // Hide broken image
                                                                        e.target.nextSibling.style.display = 'flex'; // Show fallback
                                                                    }}
                                                                />
                                                            ) : null}
                                                            {/* Fallback (always rendered but hidden if image loads) */}
                                                            <div className="absolute inset-0 flex items-center justify-center text-2xl" style={{ display: item.image ? 'none' : 'flex' }}>
                                                                📸
                                                            </div>
                                                        </div>
                                                        <h3 className="font-bold text-secondary-900 mb-2">{item.title}</h3>
                                                        <p className="text-xs text-secondary-500 leading-relaxed flex-1">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center text-gray-500">Belum ada timeline.</div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Mood Booster */}
                        <section>
                            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-2xl font-bold text-center text-secondary-900 mb-8">{content.personal.favorites.title}</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {content.personal.favorites.items.map((fav, idx) => (
                                        <div key={idx} className="bg-secondary-900 text-white p-6 rounded-2xl text-center hover:-translate-y-1 transition-transform">
                                            <div className="text-3xl mb-3">{fav.icon}</div>
                                            <div className="text-xs font-bold text-secondary-400 uppercase tracking-wider mb-1">{fav.category}</div>
                                            <div className="font-bold">{fav.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                ) : (
                    // PROFESSIONAL CONTENT (PREMIUM VALUE)
                    <div className="animate-fade-in space-y-20 pb-20">
                        {/* Professional Profile & Intro */}
                        <section className="bg-white overflow-hidden">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

                                    {/* Professional 3D Photo */}
                                    <div className="order-1 perspective-1000 group flex justify-center md:justify-start">
                                        <div className="relative w-full max-w-md transform transition-transform duration-500 group-hover:rotate-y-3 group-hover:rotate-x-3">
                                            {/* Techy Background Decoration */}
                                            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500 to-primary-200 rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
                                            <div className="absolute top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-primary-500 rounded-tr-3xl -mr-4 -mt-4 transition-all duration-300 group-hover:-mr-6 group-hover:-mt-6"></div>
                                            <div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-primary-500 rounded-bl-3xl -ml-4 -mb-4 transition-all duration-300 group-hover:-ml-6 group-hover:-mb-6"></div>

                                            {/* Main Image Container */}
                                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-secondary-900 border border-secondary-800">
                                                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent z-10"></div>
                                                <img
                                                    src="/images/arif.png"
                                                    alt="Professional Arif"
                                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                                />

                                                {/* Professional Floating Badge */}
                                                <div className="absolute bottom-6 left-6 z-20">
                                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg">
                                                        <div className="text-white font-bold text-lg">Digital Partner</div>
                                                        <div className="text-primary-400 text-xs uppercase tracking-wider font-bold">Since 2021</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Short Bio / Hook */}
                                    <div className="order-2">
                                        <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-bold tracking-wide mb-4">
                                            Full Stack Developer & Tech Consultant
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary-900 leading-tight mb-6 font-display">
                                            Membangun Sistem, <span className="text-primary-600">Bukan Sekadar Website.</span>
                                        </h2>
                                        <p className="text-xl text-secondary-600 leading-relaxed mb-8">
                                            Saya membantu bisnis bertransformasi digital dengan fondasi teknologi yang kokoh, aman, dan scalable. Fokus saya adalah <strong className="text-secondary-900">Business Growth</strong>, bukan cuma kode yang jalan.
                                        </p>
                                    </div>
                                </div>

                                {/* Philosophy / Pricing Justification */}
                                <div className="max-w-4xl mx-auto border-t border-gray-100 pt-16 text-center md:text-left">
                                    <div className="md:flex md:gap-12 items-start">
                                        <div className="hidden md:block w-24 h-24 bg-primary-50 rounded-full flex-shrink-0 flex items-center justify-center text-4xl mb-6">
                                            💡
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-secondary-900 mb-4">{content.professional.intro.title}</h3>
                                            <div className="prose prose-lg text-secondary-600">
                                                {content.professional.intro.content.map((p, idx) => (
                                                    <p key={idx} className="leading-relaxed mb-4 last:mb-0">
                                                        {p.split(/(\*\*.*?\*\*)/g).map((part, i) =>
                                                            part.startsWith('**') && part.endsWith('**')
                                                                ? <strong key={i} className="text-secondary-900">{part.slice(2, -2)}</strong>
                                                                : part
                                                        )}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* USP */}
                        <section className="bg-secondary-900 text-white py-16">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-3xl font-bold text-center mb-12 font-display">{content.professional.usp.title}</h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {content.professional.usp.items.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                                            <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center font-bold text-secondary-900 text-xl">
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl text-primary-400 mb-2">{item.title}</h3>
                                                <p className="text-secondary-300 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Portfolio Grid */}
                        <section className="bg-gray-50 py-16">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-secondary-900 mb-4 font-display">Featured Portfolio</h2>
                                    <p className="text-secondary-600">Beberapa karya terbaik yang pernah saya kerjakan.</p>
                                </div>

                                {projects && projects.length > 0 ? (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {projects.map((project) => (
                                            <Link href={route('portfolio.show', project.slug)} key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                                                <div className="relative aspect-video overflow-hidden bg-gray-200">
                                                    {project.image ? (
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full text-4xl text-gray-300">💻</div>
                                                    )}
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                                        <span className="bg-white text-secondary-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project</span>
                                                    </div>
                                                </div>
                                                <div className="p-6 flex flex-col flex-1">
                                                    <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">{project.title}</h3>
                                                    <p className="text-secondary-600 text-sm mb-4 line-clamp-2 flex-1">{project.description}</p>
                                                    <div className="flex flex-wrap gap-2 mt-auto">
                                                        {getTechStack(project.tech_stack).slice(0, 3).map((tech, idx) => (
                                                            <span key={idx} className="bg-secondary-50 text-secondary-600 px-2 py-1 rounded text-xs border border-secondary-100">{tech}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12 text-gray-500 bg-white rounded-2xl border border-dashed border-gray-300">
                                        <p>Belum ada project yang ditampilkan.</p>
                                    </div>
                                )}

                                <div className="text-center mt-10">
                                    <Link href="/portfolio" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 hover:underline">
                                        Lihat Semua Portfolio <span>&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        {/* Services */}
                        <section>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-secondary-900 mb-4">{content.professional.services.title}</h2>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {content.professional.services.list.map((srv, idx) => (
                                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg shadow-gray-100 border border-gray-50 text-center hover:scale-105 transition-transform duration-300">
                                            <div className="text-4xl mb-4">{srv.icon}</div>
                                            <h3 className="font-bold text-lg text-secondary-900 mb-2">{srv.title}</h3>
                                            <p className="text-sm text-secondary-600">{srv.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Stats */}
                        <section>
                            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                        {content.professional.stats.map((stat, idx) => (
                                            <div key={idx}>
                                                <div className="text-4xl font-black mb-2 text-primary-400">{stat.value}</div>
                                                <div className="text-xs uppercase tracking-widest opacity-70">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </div>

            {/* Sticky CTA Bottom Bar (Mobile/Desktop) */}
            <div className="fixed bottom-6 left-0 right-0 z-50 pointer-events-none">
                <div className="max-w-md mx-auto px-4 pointer-events-auto">
                    <div className="bg-secondary-900/90 backdrop-blur-md text-white p-4 rounded-full shadow-2xl flex items-center justify-between gap-4 border border-secondary-700 animate-bounce-in">
                        <div className="pl-2">
                            <div className="text-xs text-secondary-400 font-bold uppercase tracking-wider">
                                {activeTab === 'personal' ? 'Tertarik?' : 'Ready?'}
                            </div>
                            <div className="font-bold text-sm">
                                {activeTab === 'personal' ? 'Yuk Ngopi Virtual ☕' : 'Amankan Slot Project 🚀'}
                            </div>
                        </div>
                        <Link
                            href="/contact"
                            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-transform hover:scale-105 shadow-lg ${activeTab === 'personal' ? 'bg-white text-secondary-900' : 'bg-primary-500 text-secondary-900'}`}
                        >
                            {activeTab === 'personal' ? 'DM Instagram' : 'Hire Me'}
                        </Link>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
