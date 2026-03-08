"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ClientThemeGallery() {
    const [themes, setThemes] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchThemes = async () => {
            try {
                const res = await fetch('/api/themes');
                if (res.ok) {
                    const data = await res.json();
                    if (data.themes && data.themes.length > 0) {
                        // Shuffle the themes and pick exactly 4
                        const shuffled = [...data.themes].sort(() => 0.5 - Math.random());
                        setThemes(shuffled.slice(0, 4));
                    }
                }
            } catch (err) {
                console.error("Failed to fetch themes", err);
            } finally {
                setIsLoaded(true);
            }
        };
        fetchThemes();
    }, []);

    // Show a skeleton layout while loading to prevent layout shift
    if (!isLoaded) {
        return (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 aspect-[1240/1754] bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
                ))}
            </div>
        );
    }

    if (themes.length === 0) return null;

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {themes.map((t) => (
                <div key={t} className="group relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md hover:shadow-2xl transition-all hover:-translate-y-1 aspect-[1240/1754] bg-zinc-100 dark:bg-zinc-800">
                    <Image
                        src={`/themes/${t}`}
                        alt={`Biodata theme ${t}`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <Link
                            href="/create"
                            onClick={() => localStorage.setItem("biodataTheme", t)}
                            className="w-full py-2.5 rounded-xl bg-white/95 backdrop-blur-sm text-indigo-700 hover:text-white hover:bg-indigo-600 transition-colors font-bold text-sm text-center shadow-lg"
                        >
                            Use This Theme
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
