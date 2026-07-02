"use client";

import { useEffect, useRef } from "react";

/**
 * AdSlot — A reusable, plug-and-play Google AdSense slot.
 *
 * How to activate:
 * 1. Get your AdSense account approved at https://adsense.google.com
 * 2. Ensure the AdSense <Script> is present in src/app/layout.tsx with your publisher ID
 * 3. Replace adSlot prop values at each usage site with real unit IDs from AdSense dashboard
 * 4. Set NEXT_PUBLIC_ADSENSE_ENABLED=true in your .env.production
 *
 * IMPORTANT: Keep Auto Ads DISABLED in AdSense dashboard — use manual placement only.
 * Do not place AdSense inside the preview/download workflow.
 *
 * Until enabled, this component renders nothing gracefully.
 */

type AdFormat = "banner" | "display" | "vertical" | "responsive";

interface AdSlotProps {
    slotId: string;       // Unique DOM id suffix, e.g. "home-mid"
    adClient?: string;    // Publisher ID, defaults to your ca-pub ID
    adSlot?: string;      // Ad unit ID from AdSense dashboard (required for real ads)
    format?: AdFormat;    // "banner" = mobile-safe horizontal | "display" = 300x250
    className?: string;
    label?: string;
    style?: React.CSSProperties;
}


const FORMAT_STYLES: Record<AdFormat, React.CSSProperties> = {
    banner: { display: "block", width: "100%", maxWidth: "728px", height: "90px" },
    display: { display: "inline-block", width: "300px", height: "250px" },
    vertical: { display: "inline-block", width: "300px", height: "600px" },
    responsive: { display: "block", width: "100%", minHeight: "90px" },
};

const FORMAT_LABELS: Record<AdFormat, string> = {
    banner: "Responsive banner",
    display: "300 x 250 display",
    vertical: "300 x 600 display",
    responsive: "Responsive display",
};

export default function AdSlot({
    slotId,
    adClient = "ca-pub-3646851872285015",
    adSlot = "0000000000",
    format = "banner",
    className = "",
    label = "Advertisement",
    style,
}: AdSlotProps) {
    const isEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
    const isPlaceholderSlot = adSlot === "0000000000" || adSlot.startsWith("YOUR_");
    const shouldShowLocalPlaceholder = isEnabled && isPlaceholderSlot && process.env.NODE_ENV !== "production";
    const insRef = useRef<HTMLModElement | null>(null);
    const pushed = useRef(false);

    useEffect(() => {
        if (!isEnabled || isPlaceholderSlot || pushed.current) return;
        let frameId: number;
        let attempts = 0;

        const tryPush = () => {
            const width = insRef.current?.offsetWidth ?? 0;
            if (width === 0 && attempts < 20) {
                // Layout not ready yet — retry on the next animation frame
                attempts++;
                frameId = requestAnimationFrame(tryPush);
                return;
            }
            if (width === 0) return; // Element never got width, skip silently
            try {
                pushed.current = true;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ((window as any).adsbygoogle = (window as any).adsbygoogle || ([] as any[])).push({});
            } catch (e) {
                console.error("AdSense push error:", e);
            }
        };

        frameId = requestAnimationFrame(tryPush);
        return () => cancelAnimationFrame(frameId);
    }, [isEnabled, isPlaceholderSlot]);

    if (!isEnabled) return null;
    if (isPlaceholderSlot && !shouldShowLocalPlaceholder) return null;

    const adStyle = { ...FORMAT_STYLES[format], ...style };
    const adFormatProps =
        format === "responsive"
            ? { "data-ad-format": "auto", "data-full-width-responsive": "true" }
            : format === "display"
                ? { "data-ad-format": "rectangle" }
                : format === "vertical"
                    ? { "data-ad-format": "vertical" }
                    : {};

    return (
        <div
            id={`ad-slot-${slotId}`}
            className={`my-8 flex w-full flex-col items-center justify-center gap-2 overflow-hidden ${className}`}
        >
            {label && (
                <p className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">
                    {label}
                </p>
            )}
            {shouldShowLocalPlaceholder ? (
                <div
                    className="flex max-w-full items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 text-center text-xs font-medium text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-500"
                    style={adStyle}
                >
                    {FORMAT_LABELS[format]} test slot
                </div>
            ) : (
                <ins
                    ref={insRef}
                    className="adsbygoogle"
                    style={adStyle}
                    data-ad-client={adClient}
                    data-ad-slot={adSlot}
                    {...adFormatProps}
                />
            )}
        </div>
    );
}
