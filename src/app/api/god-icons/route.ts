import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const iconsDir = path.join(process.cwd(), 'public/god_icons');

        if (!fs.existsSync(iconsDir)) {
            return NextResponse.json({ icons: [] });
        }

        const files = fs.readdirSync(iconsDir);

        const iconFiles = files.filter(file =>
            file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.svg') || file.endsWith('.webp')
        );

        // Sort numerically: god-icon-1.png, god-icon-2.png, ... god-icon-10.png
        iconFiles.sort((a, b) => {
            const numA = parseInt(a.replace(/[^0-9]/g, ''), 10) || 0;
            const numB = parseInt(b.replace(/[^0-9]/g, ''), 10) || 0;
            return numA - numB;
        });

        return NextResponse.json({ icons: iconFiles });
    } catch (error) {
        console.error('Error reading god_icons directory:', error);
        return NextResponse.json({ icons: [] }, { status: 500 });
    }
}
