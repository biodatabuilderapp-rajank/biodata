import { Plus, X, ImagePlus, Settings2, Languages, ChevronUp, ChevronDown, AlignJustify } from "lucide-react";
import { useState } from "react";
import ImageCropper from "./ImageCropper";
import GodIconSelector from "./GodIconSelector";
import { SUPPORTED_LANGUAGES } from "./LanguageSelector";
import { translateBiodata } from "@/lib/translateBiodata";
import { useUITranslation } from "@/lib/useUITranslation";
import { Biodata } from "@/lib/biodata";

interface Props {
    data: Biodata;
    onChange: (data: Biodata) => void;
    language: string;
    onLanguageChange: (lang: string) => void;
}

const SectionTitleInput = ({ section, data, updateSectionTitle }: { section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, data: Biodata, updateSectionTitle: (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, value: string) => void }) => (
    <input
        type="text"
        value={(data[section] as any).title}
        onChange={(e) => updateSectionTitle(section, e.target.value)}
        className="bg-transparent border-b-2 border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 focus:border-indigo-500 focus:outline-none transition-colors w-full px-1 py-0.5 text-lg font-semibold text-zinc-900 dark:text-zinc-100"
        title="Edit Section Title"
        tabIndex={-1}
    />
);

const Section = ({ titleInput, onAddCustomField, children }: { titleInput: React.ReactNode, onAddCustomField?: () => void, children: React.ReactNode }) => (
    <div className="mb-8 p-6 bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm relative group">
        <div className="mb-4 flex items-center justify-between gap-2">
            {titleInput}
        </div>
        <div className="space-y-4">
            {children}
        </div>
        {onAddCustomField && (
            <div className="mt-5">
                <button
                    onClick={onAddCustomField}
                    className="w-full py-2.5 text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-xl transition-all flex items-center justify-center gap-2 text-sm font-medium border border-dashed border-zinc-300 dark:border-zinc-700 hover:border-indigo-300 dark:hover:border-indigo-500"
                    title="Add Custom Field"
                >
                    <Plus className="w-4 h-4" />
                    <span>Add Field</span>
                </button>
            </div>
        )}
    </div>
);

interface InputProps {
    section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>;
    field: string;
    data: Biodata;
    updateSection: (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, field: string, value: string) => void;
    updateLabel: (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, field: string, value: string) => void;
    removeField: (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, field: string) => void;
    onToggleMultiline?: () => void;
    onMoveUp?: () => void;
    onMoveDown?: () => void;
    isFirst?: boolean;
    isLast?: boolean;
    type?: string;
    placeholder?: string;
}

const Input = ({ section, field, data, updateSection, updateLabel, removeField, onToggleMultiline, onMoveUp, onMoveDown, isFirst = true, isLast = true, type = "text", placeholder = "" }: InputProps) => {
    const fieldData = (data[section] as any)[field] as { label: string; value: string; multiline?: boolean };
    if (!fieldData) return null;
    const isMultiline = type === "textarea" || !!fieldData.multiline;
    const canToggle = type !== "textarea" && !!onToggleMultiline;
    const canMove = !!onMoveUp || !!onMoveDown;

    return (
        <div className="group/field relative">
            <div className="flex justify-between items-center mb-1.5">
                <input
                    type="text"
                    value={fieldData.label}
                    onChange={(e) => updateLabel(section, field, e.target.value)}
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-transparent border-b border-transparent hover:border-zinc-300 dark:hover:border-zinc-600 focus:border-indigo-500 focus:outline-none py-0.5 px-1 -ml-1 transition-colors w-full sm:w-auto"
                    title="Edit Field Label"
                    tabIndex={-1}
                />
                <div className="flex items-center gap-1 shrink-0">
                    {/* Move up/down — always visible for custom fields so they're easy to click */}
                    {onMoveUp && (
                        <button onClick={onMoveUp} disabled={isFirst} tabIndex={-1} title="Move up"
                            className="p-0.5 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 disabled:opacity-25 disabled:cursor-not-allowed transition-colors">
                            <ChevronUp className="w-3.5 h-3.5" />
                        </button>
                    )}
                    {onMoveDown && (
                        <button onClick={onMoveDown} disabled={isLast} tabIndex={-1} title="Move down"
                            className="p-0.5 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 disabled:opacity-25 disabled:cursor-not-allowed transition-colors">
                            <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                    )}
                    {canToggle && (
                        <button onClick={onToggleMultiline} tabIndex={-1}
                            title={isMultiline ? "Switch to single line" : "Switch to multi-line"}
                            className={`p-0.5 rounded transition-colors opacity-0 group-hover/field:opacity-100 ${
                                isMultiline ? "text-indigo-500" : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                            }`}>
                            <AlignJustify className="w-3.5 h-3.5" />
                        </button>
                    )}
                    {removeField && (
                        <button onClick={() => removeField(section, field)} tabIndex={-1} title="Remove field"
                            className="text-zinc-400 hover:text-red-500 p-0.5 rounded transition-colors shrink-0 opacity-0 group-hover/field:opacity-100">
                            <X className="w-3.5 h-3.5" />
                        </button>
                    )}
                </div>
            </div>
            {isMultiline ? (
                <textarea
                    placeholder={placeholder}
                    className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-zinc-900 dark:text-zinc-100 min-h-[100px] resize-y"
                    value={fieldData.value}
                    onChange={(e) => updateSection(section, field, e.target.value)}
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-zinc-900 dark:text-zinc-100"
                    value={fieldData.value}
                    onChange={(e) => updateSection(section, field, e.target.value)}
                />
            )}
        </div>
    );
};

export default function BiodataForm({ data, onChange, language, onLanguageChange }: Props) {
    const [imageToCrop, setImageToCrop] = useState<string | null>(null);
    const [showGodIconSelector, setShowGodIconSelector] = useState(false);
    const { t } = useUITranslation(language);
    const [isSwitching, setIsSwitching] = useState(false);

    const handleLanguageSwitch = async (lang: string) => {
        if (lang === language || isSwitching) return;
        setIsSwitching(true);
        try {
            const updated = await translateBiodata(data, language, lang);
            onChange(updated);
            onLanguageChange(lang);
        } catch (e) {
            console.error("Failed to switch language", e);
        } finally {
            setIsSwitching(false);
        }
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setImageToCrop(URL.createObjectURL(file));
            e.target.value = ''; // Reset input
        }
    };

    const handleCropComplete = (croppedImage: string) => {
        onChange({
            ...data,
            profilePhoto: { ...data.profilePhoto!, url: croppedImage }
        });
        setImageToCrop(null);
    };

    const updatePhotoShape = (shape: 'square' | 'circle') => {
        onChange({
            ...data,
            profilePhoto: { ...data.profilePhoto!, shape: shape }
        });
    };

    const togglePhotoHidden = () => {
        onChange({
            ...data,
            profilePhoto: { ...data.profilePhoto!, isHidden: !data.profilePhoto?.isHidden }
        });
    };

    const removePhoto = () => {
        onChange({
            ...data,
            profilePhoto: { ...data.profilePhoto!, url: "" }
        });
    };

    const toggleGodIconHidden = () => {
        onChange({
            ...data,
            godIcon: { ...data.godIcon!, isHidden: !data.godIcon?.isHidden }
        });
    };

    const updateGodIcon = (url: string) => {
        onChange({
            ...data,
            godIcon: { ...data.godIcon!, url }
        });
        setShowGodIconSelector(false);
    };

    const updateGodIconText = (text: string) => {
        onChange({
            ...data,
            godIcon: { ...data.godIcon!, text }
        });
    };

    const updateSection = (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, field: string, value: string) => {
        onChange({
            ...data,
            [section]: {
                ...data[section],
                [field]: {
                    ...(data[section] as any)[field],
                    value: value
                }
            },
        });
    };

    const updateLabel = (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, field: string, value: string) => {
        onChange({
            ...data,
            [section]: {
                ...data[section],
                [field]: {
                    ...(data[section] as any)[field],
                    label: value
                }
            },
        });
    };

    const updateSectionTitle = (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, value: string) => {
        onChange({
            ...data,
            [section]: {
                ...data[section],
                title: value
            }
        });
    };

    const addCustomField = (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>) => {
        const customId = `customField_${Date.now()}`;
        onChange({
            ...data,
            [section]: {
                ...data[section],
                [customId]: { label: "Custom Details", value: "" }
            }
        });
    };

    const removeField = (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, field: string) => {
        const updatedSection = { ...data[section] } as any;
        delete updatedSection[field];
        onChange({ ...data, [section]: updatedSection });
    };

    const toggleMultiline = (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, field: string) => {
        const fieldData = (data[section] as any)[field];
        const turningOff = !!fieldData.multiline;
        // When switching back to single-line, collapse any newlines into spaces so the
        // preview doesn't show stale multi-line formatting.
        const newValue = turningOff
            ? fieldData.value.replace(/\n+/g, ' ').trim()
            : fieldData.value;
        onChange({
            ...data,
            [section]: { ...data[section], [field]: { ...fieldData, multiline: !fieldData.multiline, value: newValue } }
        });
    };

    const STANDARD_FIELDS: Record<string, string[]> = {
        personalDetails: ["fullName", "dateOfBirth", "height", "bloodGroup", "complexion", "maritalStatus", "education", "occupation", "annualIncome"],
        familyDetails: ["fatherName", "fatherOccupation", "motherName", "motherOccupation", "siblings"],
        contactDetails: ["contactNumber", "email", "address"],
    };

    const moveField = (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, field: string, direction: 'up' | 'down') => {
        const sectionData = { ...data[section] } as any;
        // ALL fields in the section (not just custom) — so every field is reorderable
        const allFields = Object.keys(sectionData).filter(k => k !== 'title');
        const idx = allFields.indexOf(field);
        if (direction === 'up' && idx > 0) {
            [allFields[idx - 1], allFields[idx]] = [allFields[idx], allFields[idx - 1]];
        } else if (direction === 'down' && idx < allFields.length - 1) {
            [allFields[idx], allFields[idx + 1]] = [allFields[idx + 1], allFields[idx]];
        } else return;
        // Rebuild section with new key order (title first, then fields in new order)
        const newSection: any = { title: sectionData.title };
        for (const k of allFields) { newSection[k] = sectionData[k]; }
        onChange({ ...data, [section]: newSection });
    };

    // Field type and placeholder lookup maps
    const FIELD_TYPES: Record<string, string> = {
        contactNumber: "tel",
        email: "email",
        address: "textarea",
    };
    const FIELD_PLACEHOLDERS: Record<string, string> = {
        fullName: "e.g. Rahul Sharma",
        dateOfBirth: "e.g. 14 Oct 1995, 10:30 AM",
        height: "e.g. 5' 8\"",
        bloodGroup: "e.g. O+",
        complexion: "e.g. Fair",
        maritalStatus: "e.g. Never Married",
        education: "e.g. B.Tech in Computer Science",
        occupation: "e.g. Software Engineer at Google",
        annualIncome: "e.g. 15 LPA / $120,000",
        siblings: "e.g. 1 Brother, 1 Sister",
        address: "e.g. Andheri West, Mumbai",
    };

    const renderSectionInputs = (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>) => {
        const allFields = Object.keys(data[section] as any).filter(key => key !== 'title');

        return (
            <>
                {allFields.map((field, idx) => (
                    <Input
                        key={field}
                        data={data}
                        updateSection={updateSection}
                        updateLabel={updateLabel}
                        removeField={removeField}
                        onToggleMultiline={() => toggleMultiline(section, field)}
                        onMoveUp={() => moveField(section, field, 'up')}
                        onMoveDown={() => moveField(section, field, 'down')}
                        isFirst={idx === 0}
                        isLast={idx === allFields.length - 1}
                        section={section}
                        field={field}
                        type={FIELD_TYPES[field] || "text"}
                        placeholder={FIELD_PLACEHOLDERS[field] || ""}
                    />
                ))}
            </>
        );
    };

    return (
        <div className="space-y-6">
            {/* Language Selector */}
            <div className="p-5 bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Languages className="w-5 h-5 text-indigo-500 shrink-0" />
                        <div>
                            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{t("create.lang.label") || "Biodata Language"}</div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400">{t("create.lang.subtitle") || "Field labels and section titles will be translated"}</div>
                        </div>
                    </div>
                    <select
                        value={language}
                        onChange={(e) => handleLanguageSwitch(e.target.value)}
                        disabled={isSwitching}
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-wait"
                    >
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.native}{isSwitching && lang.code === language ? " (translating…)" : ""}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Photo & Symbol Configuration Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Photo Control */}
                <div className="p-5 bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                            {t("create.photo.label") || "Photo (optional)"}
                        </h3>
                        <label className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 cursor-pointer">
                            <input type="checkbox" checked={data.profilePhoto?.isHidden || false} onChange={togglePhotoHidden} className="rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
                            {t("create.photo.hide") || "Hide on Biodata"}
                        </label>
                    </div>

                    <div className="flex gap-4 items-center">
                        {data.profilePhoto?.url ? (
                            <div className={`relative ${data.profilePhoto.shape === 'circle' ? 'rounded-full' : 'rounded-lg'} w-16 h-16 overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm shrink-0`}>
                                <img src={data.profilePhoto.url} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        ) : (
                            <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center shrink-0">
                                <ImagePlus className="w-6 h-6 text-zinc-400" />
                            </div>
                        )}

                        <div className="flex-1 flex flex-col gap-2">
                            <div className="flex gap-2">
                                <button onClick={() => document.getElementById('photo-upload')?.click()} className="text-xs px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors rounded-lg font-medium text-zinc-700 dark:text-zinc-300 flex-1">
                                    {data.profilePhoto?.url ? (t("create.photo.change") || 'Change Photo') : (t("create.photo.upload") || 'Upload Photo')}
                                </button>
                                <input id="photo-upload" type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                                {data.profilePhoto?.url && (
                                    <button onClick={removePhoto} className="text-xs px-3 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 transition-colors rounded-lg font-medium">
                                        {t("create.photo.remove") || "Remove"}
                                    </button>
                                )}
                            </div>

                            {data.profilePhoto?.url && (
                                <div className="flex bg-zinc-100 dark:bg-zinc-900 p-0.5 rounded-lg z-0 relative">
                                    <button onClick={() => updatePhotoShape('circle')} className={`flex-1 text-[10px] font-medium py-1 rounded-md transition-all ${data.profilePhoto?.shape === 'circle' ? 'bg-white dark:bg-zinc-800 shadow text-indigo-600 dark:text-indigo-400' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'}`}>{t("create.photo.circle") || "Circular"}</button>
                                    <button onClick={() => updatePhotoShape('square')} className={`flex-1 text-[10px] font-medium py-1 rounded-md transition-all ${data.profilePhoto?.shape === 'square' ? 'bg-white dark:bg-zinc-800 shadow text-indigo-600 dark:text-indigo-400' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'}`}>{t("create.photo.square") || "Square"}</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* God Icon Control */}
                <div className="p-5 bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                            {t("create.godIcon.label") || "Symbol / God Icon"}
                        </h3>
                        <label className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 cursor-pointer">
                            <input type="checkbox" checked={data.godIcon?.isHidden || false} onChange={toggleGodIconHidden} className="rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
                            {t("create.godIcon.hide") || "Hide"}
                        </label>
                    </div>

                    <div className="flex gap-4 items-center h-full">
                        <div className="w-16 h-16 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 shrink-0 p-2 relative">
                            {data.godIcon?.url && !data.godIcon.isHidden ? (
                                <img src={data.godIcon.url} alt="Icon" className="w-full h-full object-contain drop-shadow-sm" />
                            ) : (
                                <div className="text-[10px] text-zinc-400 text-center leading-tight">No Icon<br />(Hidden)</div>
                            )}
                        </div>

                        <div className="flex-1 flex flex-col gap-2">
                            <button onClick={() => setShowGodIconSelector(true)} className="w-full text-xs px-3 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors rounded-lg font-medium text-zinc-700 dark:text-zinc-300 flex items-center justify-center gap-2">
                                <Settings2 className="w-3.5 h-3.5" />
                                {t("create.godIcon.change") || "Choose Icon"}
                            </button>
                            <input
                                type="text"
                                value={data.godIcon?.text || ""}
                                onChange={(e) => updateGodIconText(e.target.value)}
                                placeholder="e.g. || Shri Ganeshay Namah ||"
                                className="w-full text-xs px-3 py-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Section titleInput={<SectionTitleInput section="personalDetails" data={data} updateSectionTitle={updateSectionTitle} />} onAddCustomField={() => addCustomField('personalDetails')}>
                {renderSectionInputs("personalDetails")}
            </Section>

            <Section titleInput={<SectionTitleInput section="familyDetails" data={data} updateSectionTitle={updateSectionTitle} />} onAddCustomField={() => addCustomField('familyDetails')}>
                {renderSectionInputs("familyDetails")}
            </Section>

            <Section titleInput={<SectionTitleInput section="contactDetails" data={data} updateSectionTitle={updateSectionTitle} />} onAddCustomField={() => addCustomField('contactDetails')}>
                {renderSectionInputs("contactDetails")}
            </Section>

            {/* Modals outside flow */}
            {imageToCrop && (
                <ImageCropper
                    image={imageToCrop}
                    shape={data.profilePhoto?.shape || 'circle'}
                    onCropComplete={handleCropComplete}
                    onCancel={() => setImageToCrop(null)}
                />
            )}

            {showGodIconSelector && (
                <GodIconSelector
                    currentIcon={data.godIcon?.url || ""}
                    onSelect={updateGodIcon}
                    onCancel={() => setShowGodIconSelector(false)}
                />
            )}
        </div>
    );
}
