import { useState, useEffect, useRef } from "react";

type TranslationMap = Record<string, string>;

export function useTranslation(lang: string) {
    const [translations, setTranslations] = useState<TranslationMap>({});
    const cache = useRef<Record<string, TranslationMap>>({});

    useEffect(() => {
        if (!lang || lang === "") return;

        // Return cached result immediately
        if (cache.current[lang]) {
            setTranslations(cache.current[lang]);
            return;
        }

        fetch(`/translations/${lang}.json`)
            .then((res) => res.json())
            .then((data: TranslationMap) => {
                cache.current[lang] = data;
                setTranslations(data);
            })
            .catch(() => {
                // Silently fail and fall back to original labels
                setTranslations({});
            });
    }, [lang]);

    const t = (key: string): string | undefined => translations[key];

    return { t };
}
