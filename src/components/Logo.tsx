import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    size?: number;
    showText?: boolean;
    className?: string;
}

export default function Logo({ size = 180, showText = false, className = "" }: LogoProps) {
    return (
        <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
            <Image
                src="/logo.png"
                alt="Biodata Builder"
                width={size}
                height={size}
                className="rounded-lg"
                priority
            />
            {showText && (
                <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-white">
                    BiodataBuilder
                </span>
            )}
        </Link>
    );
}
