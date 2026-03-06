"use client";

/**
 * AdSlot — A reusable, plug-and-play Google AdSense slot.
 *
 * How to activate:
 * 1. Get your AdSense account approved at https://adsense.google.com
 * 2. Uncomment the AdSense <Script> in src/app/layout.tsx and add your publisher ID
 * 3. Replace "ca-pub-XXXXXXXXXXXXXXXX" and the slot IDs with your real values
 * 4. Set NEXT_PUBLIC_ADSENSE_ENABLED=true in your .env.production
 *
 * Until then, this component renders nothing in production gracefully.
 */

interface AdSlotProps {
    slotId: string;       // The ad-slot identifier, e.g., "home-below-steps"
    adClient?: string;    // Your AdSense publisher ID: ca-pub-XXXXXXXXXXXXXXXX
    adSlot?: string;      // Your specific ad unit ID from AdSense dashboard
    className?: string;
    style?: React.CSSProperties;
}

export default function AdSlot({ slotId, adClient, adSlot, className = "", style }: AdSlotProps) {
    const isEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";

    if (!isEnabled) return null;

    return (
        <div
            id={`ad-slot-${slotId}`}
            className={`flex items-center justify-center min-h-[90px] bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden text-xs text-zinc-400 ${className}`}
            style={style}
        >
            {/* Replace with actual AdSense ins tag when approved */}
            {/* <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adClient || "ca-pub-XXXXXXXXXXXXXXXX"}
        data-ad-slot={adSlot || "0000000000"}
        data-ad-format="auto"
        data-full-width-responsive="true"
      /> */}
            <span>Advertisement</span>
        </div>
    );
}
