import type { Metadata } from "next";
import CreatePageClient from "./_CreatePage";

export const metadata: Metadata = {
    title: "Create Your Marriage Biodata",
    description:
        "Fill in your details and build a beautiful Indian marriage biodata in minutes. Choose from stunning templates and download as PDF or PNG — completely free.",
    alternates: { canonical: "https://biodatabuilder.in/create" },
    openGraph: {
        url: "https://biodatabuilder.in/create",
        title: "Create Your Marriage Biodata — BiodataBuilder",
        description:
            "Build a beautiful Indian marriage biodata online. Choose from stunning templates and download as PDF or PNG — completely free.",
    },
};

/**
 * Server component wrapper so we can export `metadata` for /create,
 * while the actual page logic lives in the "use client" _CreatePage component.
 */
export default function CreatePage() {
    return <CreatePageClient />;
}
