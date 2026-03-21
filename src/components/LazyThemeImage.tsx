"use client";

import { useState, useRef, useEffect } from "react";

interface Props {
    src: string;
    alt: string;
    className?: string;
}

/**
 * LazyThemeImage
 * - Uses IntersectionObserver to only start loading once the element is near the viewport.
 * - Shows a shimmer skeleton until the image is fully loaded.
 */
export default function LazyThemeImage({ src, alt, className = "" }: Props) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // Once it enters the viewport, mark visible and stop observing
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                // Start loading a bit before the element actually enters the viewport
                rootMargin: "200px",
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-full">
            {/* Shimmer skeleton — shown until the real image has loaded */}
            {!isLoaded && (
                <div className="absolute inset-0 shimmer-skeleton rounded" />
            )}

            {/* Only render the <img> tag once the element is near the viewport */}
            {isVisible && (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    className={`w-full h-full transition-opacity duration-300 ${className} ${isLoaded ? "opacity-100" : "opacity-0"}`}
                />
            )}
        </div>
    );
}
