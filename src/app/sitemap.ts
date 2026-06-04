import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://biodatabuilder.in";
    return [
        { url: "https://biodatabuilder.in/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: `${baseUrl}/create`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${baseUrl}/articles`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        // Pillar & Special Pages
        { url: `${baseUrl}/articles/marriage-biodata-statistics-india`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${baseUrl}/articles/biodata-tips`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${baseUrl}/articles/biodata-for-marriage`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${baseUrl}/articles/biodata-format-hindi`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${baseUrl}/articles/biodata-format-word-download`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        // English articles
        { url: `${baseUrl}/articles/best-marriage-biodata-format-for-hindu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/articles/marriage-biodata-format-for-muslim`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/articles/marriage-biodata-format-for-christian`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/articles/marriage-biodata-for-boy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/articles/shaadi-biodata-format-for-girl`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/articles/biodata-for-second-marriage`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/articles/kundali-details-in-biodata`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/articles/manglik-biodata-format`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/articles/modern-vs-traditional-biodata`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/articles/biodata-format-for-whatsapp`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/articles/how-to-write-biodata-about-me`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/articles/simple-biodata-format-for-job-pdf`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/articles/biodata-vs-resume-difference`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        // Regional language articles
        { url: `${baseUrl}/articles/vivah-biodata-format-hindi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/articles/lagna-biodata-format-marathi`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/articles/lagna-biodata-format-gujarati`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/articles/thirumanam-biodata-format-tamil`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/articles/vivah-biodata-format-telugu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        // Other pages
        { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
        { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
        { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ];
}
