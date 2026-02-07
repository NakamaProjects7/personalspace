import React from 'react';
import { Link } from '@inertiajs/react';

export default function Button({
    text,
    url,
    type = 'button',
    variant = 'primary',
    size = 'md',
    className = '',
    onClick
}) {
    const baseStyles = "inline-flex items-center justify-center font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] hover:shadow-[0_6px_20px_rgba(22,163,74,0.23)] hover:-translate-y-0.5 rounded-full border border-transparent",
        secondary: "bg-brand-100 text-brand-800 hover:bg-brand-200 hover:-translate-y-0.5 rounded-full border border-transparent",
        outline: "bg-transparent text-gray-700 border-2 border-gray-200 hover:border-brand-600 hover:text-brand-600 rounded-full hover:-translate-y-0.5",
        ghost: "text-gray-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg",
        white: "bg-white text-gray-900 hover:bg-gray-50 shadow-sm border border-gray-100 rounded-full hover:-translate-y-0.5"
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-2.5 text-sm",
        lg: "px-8 py-3.5 text-base"
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (url) {
        if (url.startsWith('http')) {
            return (
                <a href={url} className={combinedClasses} target="_blank" rel="noopener noreferrer">
                    {text}
                </a>
            );
        }
        return (
            <Link href={url} className={combinedClasses}>
                {text}
            </Link>
        );
    }

    return (
        <button type={type} className={combinedClasses} onClick={onClick}>
            {text}
        </button>
    );
}
