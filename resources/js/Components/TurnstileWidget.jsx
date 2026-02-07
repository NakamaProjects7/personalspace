import React, { useEffect, useRef } from 'react';

export default function TurnstileWidget({ onVerify }) {
    const containerRef = useRef(null);
    const widgetId = useRef(null);

    useEffect(() => {
        const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

        if (!siteKey) {
            console.error('Turnstile Site Key is missing. Please check your .env file.');
            return;
        }

        // Load Cloudflare Turnstile script
        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
        script.async = true;
        script.defer = true;

        script.onload = () => {
            if (window.turnstile && containerRef.current) {
                widgetId.current = window.turnstile.render(containerRef.current, {
                    sitekey: siteKey,
                    callback: (token) => {
                        if (onVerify) {
                            onVerify(token);
                        }
                    },
                    theme: 'light',
                });
            }
        };

        document.body.appendChild(script);

        return () => {
            if (widgetId.current && window.turnstile) {
                window.turnstile.remove(widgetId.current);
            }
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, [onVerify]);

    if (!import.meta.env.VITE_TURNSTILE_SITE_KEY) {
        return (
            <div className="p-4 bg-yellow-50 text-yellow-800 text-sm rounded border border-yellow-200">
                <strong>Config Missing:</strong> Please set VITE_TURNSTILE_SITE_KEY in your .env file.
            </div>
        );
    }

    return <div ref={containerRef} className="cf-turnstile"></div>;
}
