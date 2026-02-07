import React from 'react';

export default function Card({
    title,
    content,
    image,
    tags = [],
    badge,
    meta,
    link,
    linkText = 'Read More',
    className = '',
    variant = 'vertical' // vertical | horizontal
}) {
    // Shared classes
    const cardBase = `group relative bg-white rounded-3xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-brand-100 ${className}`;

    if (variant === 'horizontal') {
        return (
            <div className={`${cardBase} flex flex-col md:flex-row`}>
                {image && (
                    <div className="md:w-1/3 relative overflow-hidden">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {badge && (
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-700 tracking-wide uppercase shadow-sm">
                                {badge}
                            </div>
                        )}
                    </div>
                )}
                <div className="p-8 flex-1 flex flex-col justify-center">
                    {meta && (
                        <div className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2 uppercase tracking-wide" dangerouslySetInnerHTML={{ __html: meta }} />
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display leading-tight group-hover:text-brand-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6">
                        {content}
                    </p>
                    {link && (
                        <a href={link} className="inline-flex items-center text-sm font-bold text-brand-600 hover:text-brand-700 pb-1 border-b-2 border-transparent hover:border-brand-600 transition-all w-fit">
                            {linkText}
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className={`${cardBase} flex flex-col h-full hover:-translate-y-1`}>
            {image && (
                <div className="relative h-64 overflow-hidden bg-gray-50">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {badge && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-700 tracking-wide uppercase shadow-sm">
                            {badge}
                        </div>
                    )}
                </div>
            )}

            <div className="p-8 flex-1 flex flex-col">
                {meta && (
                    <div className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-widest" dangerouslySetInnerHTML={{ __html: meta }} />
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display leading-tight group-hover:text-brand-600 transition-colors line-clamp-2">
                    {title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {content}
                </p>

                <div className="mt-auto flex items-center justify-between">
                    {tags.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                            {tags.slice(0, 2).map((tag, index) => (
                                <span key={index} className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-md border border-gray-100">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    ) : <div></div>}

                    {link && (
                        <a href={link} className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-900 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
