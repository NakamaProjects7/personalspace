import React, { useState } from 'react';
import { Link } from '@inertiajs/react';

const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'Profile',
            portfolio: 'Portfolio',
            blog: 'Blog',
            events: 'Events',
            contact: 'Contact',
            signin: 'Sign In',
            personal: 'Personal',
            professional: 'Professional'
        },
        footer: {
            explore: 'Explore',
            resources: 'Resources',
            legal: 'Legal',
            privacy: 'Privacy',
            terms: 'Terms',
            description: 'Empowering developers and creators to build meaningful digital impact through technology, growth strategies, and cyber security awareness.',
            rights: 'Muhammad Arif. Built with Laravel, Inertia, & React.',
            system: 'Systems Operational'
        },
        toggle: {
            en: 'EN',
            id: 'ID'
        }
    },
    id: {
        nav: {
            home: 'Beranda',
            about: 'Profil',
            portfolio: 'Portofolio',
            blog: 'Blog',
            events: 'Acara',
            contact: 'Kontak',
            signin: 'Masuk',
            personal: 'Personal',
            professional: 'Profesional'
        },
        footer: {
            explore: 'Jelajahi',
            resources: 'Sumber Daya',
            legal: 'Legal',
            privacy: 'Privasi',
            terms: 'Syarat & Ketentuan',
            description: 'Memberdayakan pengembang dan kreator untuk membangun dampak digital yang bermakna melalui teknologi, strategi pertumbuhan, dan kesadaran keamanan siber.',
            rights: 'Muhammad Arif. Dibuat dengan Laravel, Inertia, & React.',
            system: 'Sistem Operasional'
        },
        toggle: {
            en: 'ING',
            id: 'IND'
        }
    }
};

export default function GuestLayout({ children, title, lang: propLang, setLang: propSetLang }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Use prop if available (controlled), otherwise local state (uncontrolled)
    const [localLang, setLocalLang] = useState('id'); // Default to Indonesian
    const lang = propLang || localLang;
    const setLang = propSetLang || setLocalLang;

    const t = translations[lang];

    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
                <div className="loader-container">
                    <div className="loader-text">
                        Muhammad Arif
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-slate-900 selection:bg-brand-100 selection:text-brand-900">
            {/* Header */}
            <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm supports-[backdrop-filter]:bg-white/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-2xl font-bold font-display tracking-tight text-slate-900 hover:text-brand-600 transition-colors flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-lg shadow-lg shadow-brand-500/30">
                                    P
                                </div>
                                <span className="hidden sm:block">Personal Space</span>
                                <span className="sm:hidden">PS</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-1">
                            <NavLink href="/" active={route().current('home')}>{t.nav.home}</NavLink>
                            <NavDropdown title={t.nav.about} active={route().current('about')} items={[
                                { label: t.nav.personal, href: '/about?tab=personal' },
                                { label: t.nav.professional, href: '/about?tab=professional' }
                            ]} />
                            <NavLink href="/portfolio" active={route().current('portfolio.index')}>{t.nav.portfolio}</NavLink>
                            <NavLink href="/blog" active={route().current('blog.index')}>{t.nav.blog}</NavLink>
                            <NavLink href="/events" active={route().current('events.index')}>{t.nav.events}</NavLink>
                        </nav>

                        <div className="hidden md:flex items-center space-x-4 pl-8 border-l border-gray-200">
                            {/* Language Toggle */}
                            <div className="flex items-center bg-gray-100 rounded-full p-1">
                                <button
                                    onClick={() => setLang('en')}
                                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-white shadow text-brand-600' : 'text-slate-500 hover:text-slate-900'}`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLang('id')}
                                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'id' ? 'bg-white shadow text-brand-600' : 'text-slate-500 hover:text-slate-900'}`}
                                >
                                    ID
                                </button>
                            </div>

                            <Link href="/contact" className="text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors font-display">
                                {t.nav.contact}
                            </Link>

                        </div>

                        {/* Mobile menu button and Language Toggle */}
                        <div className="flex items-center gap-4 md:hidden">
                            <div className="flex items-center bg-gray-100 rounded-full p-1">
                                <button
                                    onClick={() => setLang('en')}
                                    className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-white shadow text-brand-600' : 'text-slate-500'}`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLang('id')}
                                    className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'id' ? 'bg-white shadow text-brand-600' : 'text-slate-500'}`}
                                >
                                    ID
                                </button>
                            </div>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                    <div className="px-4 py-6 space-y-2">
                        <MobileNavLink href="/">{t.nav.home}</MobileNavLink>
                        <div className="pl-4 border-l-2 border-gray-100 ml-4 space-y-2">
                            <MobileNavLink href="/about?tab=personal">{t.nav.personal}</MobileNavLink>
                            <MobileNavLink href="/about?tab=professional">{t.nav.professional}</MobileNavLink>
                        </div>
                        <MobileNavLink href="/portfolio">{t.nav.portfolio}</MobileNavLink>
                        <MobileNavLink href="/blog">{t.nav.blog}</MobileNavLink>
                        <MobileNavLink href="/events">{t.nav.events}</MobileNavLink>
                        <MobileNavLink href="/contact">{t.nav.contact}</MobileNavLink>
                        <div className="pt-4 mt-4 border-t border-gray-100">
                            <a href="/login" className="block w-full text-center px-4 py-3 bg-slate-900 text-white rounded-xl font-medium shadow-md">
                                {t.nav.signin}
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 pt-24 pb-12 mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                        <div className="md:col-span-5 space-y-6">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-lg shadow-sm">P</div>
                                <span className="text-xl font-bold font-display tracking-tight text-slate-900">Personal Space</span>
                            </Link>
                            <p className="text-slate-500 leading-relaxed max-w-sm">
                                {t.footer.description}
                            </p>
                            <div className="flex gap-4">
                                {/* Social icons - Kept static as user didn't ask to translate/change these */}
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-50 hover:text-brand-600 transition-colors cursor-pointer">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-50 hover:text-brand-600 transition-colors cursor-pointer">
                                    <span className="sr-only">GitHub</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-2 md:col-start-7">
                            <h4 className="font-display font-bold text-slate-900 mb-6">{t.footer.explore}</h4>
                            <ul className="space-y-4">
                                <li><Link href="/" className="text-slate-500 hover:text-brand-600 transition-colors">{t.nav.home}</Link></li>
                                <li><Link href="/about" className="text-slate-500 hover:text-brand-600 transition-colors">{t.nav.about}</Link></li>
                                <li><Link href="/portfolio" className="text-slate-500 hover:text-brand-600 transition-colors">{t.nav.portfolio}</Link></li>
                                <li><Link href="/blog" className="text-slate-500 hover:text-brand-600 transition-colors">{t.nav.blog}</Link></li>
                            </ul>
                        </div>

                        <div className="md:col-span-2">
                            <h4 className="font-display font-bold text-slate-900 mb-6">{t.footer.resources}</h4>
                            <ul className="space-y-4">
                                <li><Link href="/events" className="text-slate-500 hover:text-brand-600 transition-colors">{t.nav.events}</Link></li>
                                <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">Newsletter</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">Community</a></li>
                            </ul>
                        </div>

                        <div className="md:col-span-2">
                            <h4 className="font-display font-bold text-slate-900 mb-6">{t.footer.legal}</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">{t.footer.privacy}</a></li>
                                <li><a href="#" className="text-slate-500 hover:text-brand-600 transition-colors">{t.footer.terms}</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm">
                            &copy; {new Date().getFullYear()} {t.footer.rights}
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-sm font-medium text-slate-500">{t.footer.system}</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}


function NavLink({ href, active, children }) {
    const classes = active
        ? "text-brand-600 px-4 py-2 text-sm font-semibold rounded-lg bg-brand-50"
        : "text-slate-600 hover:text-brand-600 hover:bg-gray-50 px-4 py-2 text-sm font-medium transition-all rounded-lg";

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
}

function NavDropdown({ title, active, items }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={`flex items-center gap-1 ${active ? "text-brand-600 bg-brand-50 font-semibold" : "text-slate-600 hover:text-brand-600 hover:bg-gray-50 font-medium"} px-4 py-2 text-sm rounded-lg transition-all`}
            >
                {title}
                <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in-up">
                    {items.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

function MobileNavLink({ href, children }) {
    return (
        <Link href={href} className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-brand-50 transition-colors">
            {children}
        </Link>
    );
}

