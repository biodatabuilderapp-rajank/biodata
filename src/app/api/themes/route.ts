import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const themesDir = path.join(process.cwd(), 'public/themes');

        // Ensure directory exists
        if (!fs.existsSync(themesDir)) {
            return NextResponse.json({ themes: [] });
        }

        const files = fs.readdirSync(themesDir);

        // Filter for only .png or .jpg images to act as the primary theme token
        const themeFiles = files.filter(file => file.endsWith('.png') || file.endsWith('.jpg'));

        // Optionally sort them properly (e.g., theme-1, theme-2 vs theme-10)
        themeFiles.sort((a, b) => {
            const numA = parseInt(a.replace(/[^0-9]/g, ''), 10) || 0;
            const numB = parseInt(b.replace(/[^0-9]/g, ''), 10) || 0;
            return numA - numB;
        });

        return NextResponse.json({ themes: themeFiles });
    } catch (error) {
        console.error('Error reading themes directory:', error);
        return NextResponse.json({ themes: [] }, { status: 500 });
    }
}
