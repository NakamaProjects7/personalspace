import React, { useEffect, useRef, useState } from 'react';

export default function TurnstileWidget({ onVerify }) {
    const containerRef = useRef(null);
    const widgetId = useRef(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

        if (!siteKey) {
            setError('Missing VITE_TURNSTILE_SITE_KEY in .env');
            return;
        }

        // Function to render the widget
        const renderWidget = () => {
            if (!containerRef.current || !window.turnstile) return;

            // Prevent multiple renders
            if (widgetId.current) return;

            try {
                widgetId.current = window.turnstile.render(containerRef.current, {
                    sitekey: siteKey,
                    callback: (token) => {
                        if (onVerify) onVerify(token);
                    },
                    'expired-callback': () => {
                        if (onVerify) onVerify(null);
                    },
                    theme: 'light',
                });
            } catch (e) {
                console.error('Turnstile render error:', e);
            }
        };

        // Check if script is already present
        const scriptId = 'cloudflare-turnstile-script';
        let script = document.getElementById(scriptId);

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        }

        // If script is already loaded (window.turnstile exists), render immediately
        if (window.turnstile) {
            renderWidget();
        } else {
            // Wait for script to load
            script.onload = renderWidget;
        }

        return () => {
            if (widgetId.current && window.turnstile) {
                try {
                    window.turnstile.remove(widgetId.current);
                    widgetId.current = null;
                } catch (e) {
                    console.warn('Error removing Turnstile widget:', e);
                }
            }
            // Note: We don't remove the script tag to avoid reloading it on nav changes
        };
    }, [onVerify]);

    if (error) {
        return (
            <div className="p-4 bg-red-50 text-red-700 text-sm rounded border border-red-200">
                {error}
            </div>
        );
    }

    return <div ref={containerRef} className="cf-turnstile min-h-[65px]"></div>;
}
