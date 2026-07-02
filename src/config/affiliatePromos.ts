export interface AffiliatePromo {
    label: string;
    title: string;
    description: string;
    cta: string;
    href: string;
}

export const downloadAffiliatePromo: AffiliatePromo = {
    label: process.env.NEXT_PUBLIC_DOWNLOAD_PROMO_LABEL || "Recommended",
    title: process.env.NEXT_PUBLIC_DOWNLOAD_PROMO_TITLE || "Share your biodata clearly on WhatsApp",
    description:
        process.env.NEXT_PUBLIC_DOWNLOAD_PROMO_DESCRIPTION ||
        "A quick guide to sending PDF or PNG biodata files without losing quality.",
    cta: process.env.NEXT_PUBLIC_DOWNLOAD_PROMO_CTA || "View guide",
    href: process.env.NEXT_PUBLIC_DOWNLOAD_AFFILIATE_URL || "/articles/biodata-format-for-whatsapp",
};
