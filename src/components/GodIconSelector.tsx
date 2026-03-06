"use client";

import { useState, useRef, useEffect } from "react";
import { Upload, X, Check, Loader2 } from "lucide-react";

interface Props {
    currentIcon: string;
    onSelect: (icon: string) => void;
    onCancel: () => void;
}

export default function GodIconSelector({ currentIcon, onSelect, onCancel }: Props) {
    const [selected, setSelected] = useState(currentIcon);
    const [icons, setIcons] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchIcons = async () => {
            try {
                const res = await fetch('/api/god-icons');
                if (res.ok) {
                    const data = await res.json();
                    setIcons(data.icons || []);
                }
            } catch (err) {
                console.error('Failed to load god icons:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchIcons();
    }, []);

    const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setSelected(imageUrl);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-zinc-900 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center shrink-0">
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Select Symbol / Icon</h3>
                    <button onClick={onCancel} className="p-1 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-4 overflow-y-auto flex-1 custom-scrollbar">
                    {loading ? (
                        <div className="flex items-center justify-center py-16 text-zinc-400">
                            <Loader2 className="w-6 h-6 animate-spin mr-2" />
                            Loading icons...
                        </div>
                    ) : (
                        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                            {/* Custom Upload Tile */}
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="aspect-square flex flex-col items-center justify-center gap-1 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors text-zinc-500 dark:text-zinc-400"
                            >
                                <Upload className="w-5 h-5 sm:w-6 sm:h-6" />
                                <span className="text-[9px] sm:text-[10px] font-medium text-center leading-tight">Upload<br />Custom</span>
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                accept="image/*"
                                className="hidden"
                                onChange={handleCustomUpload}
                            />

                            {/* Pre-defined Icons — dynamically loaded */}
                            {icons.map((filename) => {
                                const iconPath = `/god_icons/${filename}`;
                                const isSelected = selected === iconPath;
                                return (
                                    <button
                                        key={filename}
                                        onClick={() => setSelected(iconPath)}
                                        className={`aspect-square relative p-2 rounded-xl border-2 transition-all ${isSelected
                                            ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30'
                                            : 'border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800'
                                            }`}
                                    >
                                        <img src={iconPath} alt={filename} className="w-full h-full object-contain" />
                                        {isSelected && (
                                            <div className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full p-0.5">
                                                <Check className="w-3 h-3" />
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center shrink-0 bg-white dark:bg-zinc-900">
                    <span className="text-xs text-zinc-400">{icons.length} icons available</span>
                    <div className="flex gap-2">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 dark:text-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => onSelect(selected)}
                            className="px-4 py-2 flex items-center gap-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm shadow-indigo-500/20"
                        >
                            <Check className="w-4 h-4" />
                            Apply Selection
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
