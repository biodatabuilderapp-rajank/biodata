import { useState, useEffect, useRef } from "react";

type TranslationMap = Record<string, string>;

const cache: Record<string, TranslationMap> = {};

export function useUITranslation(lang: string) {
    const [translations, setTranslations] = useState<TranslationMap>(
        cache[lang] ?? {}
    );

    useEffect(() => {
        if (!lang) return;
        if (cache[lang]) {
            setTranslations(cache[lang]);
            return;
        }
        fetch(`/translations/ui-${lang}.json`)
            .then((r) => r.json())
            .then((data: TranslationMap) => {
                cache[lang] = data;
                setTranslations(data);
            })
            .catch(() => setTranslations({}));
    }, [lang]);

    const t = (key: string): string | undefined => translations[key];

    return { t };
}
