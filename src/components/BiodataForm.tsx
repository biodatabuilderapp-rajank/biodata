"use client";

import { Biodata } from "@/app/create/page";
import { Plus, X, ImagePlus, Settings2, Languages, AlertTriangle } from "lucide-react";
import { useState } from "react";
import ImageCropper from "./ImageCropper";
import GodIconSelector from "./GodIconSelector";
import { SUPPORTED_LANGUAGES } from "./LanguageSelector";

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

const Input = ({ section, field, data, updateSection, updateLabel, removeField, type = "text", placeholder = "" }: { section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, field: string, data: Biodata, updateSection: (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, field: string, value: string) => void, updateLabel: (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, field: string, value: string) => void, removeField: (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, field: string) => void, type?: string, placeholder?: string }) => {
    const fieldData = (data[section] as any)[field] as { label: string, value: string };
    if (!fieldData) return null; // Safety check in case of mid-render deletion

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
                {removeField && (
                    <button
                        onClick={() => removeField(section, field)}
                        className="text-zinc-400 hover:text-red-500 p-0.5 rounded transition-colors shrink-0"
                        title="Remove field"
                        tabIndex={-1}
                    >
                        <X className="w-3.5 h-3.5" />
                    </button>
                )}
            </div>
            {type === "textarea" ? (
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
    const [pendingLang, setPendingLang] = useState<string | null>(null);
    const [isSwitching, setIsSwitching] = useState(false);

    const handleLanguageRequest = (lang: string) => {
        if (lang === language) return;
        setPendingLang(lang);
    };

    const confirmLanguageSwitch = async () => {
        if (!pendingLang) return;
        setIsSwitching(true);
        try {
            const [enMap, targetMap] = await Promise.all([
                fetch("/translations/en.json").then((r) => r.json()),
                fetch(`/translations/${pendingLang}.json`).then((r) => r.json()),
            ]);

            // Translate a label only if the field exists AND it still matches the English default
            const translateField = (
                key: string,
                field: { label: string; value: string } | undefined
            ): { label: string; value: string } | undefined => {
                if (!field) return field;
                const enDefault = enMap[key] as string | undefined;
                const translated = targetMap[key] as string | undefined;
                if (!enDefault || !translated) return field;
                const newLabel = field.label === enDefault ? translated : field.label;
                return { ...field, label: newLabel };
            };

            const translateTitle = (key: string, current: string): string => {
                const enDefault = enMap[key] as string | undefined;
                const translated = targetMap[key] as string | undefined;
                if (!enDefault || !translated) return current;
                return current === enDefault ? translated : current;
            };

            const updated: Biodata = {
                ...data,
                personalDetails: {
                    ...data.personalDetails,
                    title: translateTitle("personalDetails.title", data.personalDetails.title),
                    fullName: translateField("personalDetails.fullName", data.personalDetails.fullName)!,
                    dateOfBirth: translateField("personalDetails.dateOfBirth", data.personalDetails.dateOfBirth)!,
                    height: translateField("personalDetails.height", data.personalDetails.height)!,
                    bloodGroup: translateField("personalDetails.bloodGroup", data.personalDetails.bloodGroup)!,
                    complexion: translateField("personalDetails.complexion", data.personalDetails.complexion)!,
                    maritalStatus: translateField("personalDetails.maritalStatus", data.personalDetails.maritalStatus)!,
                    education: translateField("personalDetails.education", data.personalDetails.education)!,
                    occupation: translateField("personalDetails.occupation", data.personalDetails.occupation)!,
                    annualIncome: translateField("personalDetails.annualIncome", data.personalDetails.annualIncome)!,
                },
                familyDetails: {
                    ...data.familyDetails,
                    title: translateTitle("familyDetails.title", data.familyDetails.title),
                    fatherName: translateField("familyDetails.fatherName", data.familyDetails.fatherName)!,
                    fatherOccupation: translateField("familyDetails.fatherOccupation", data.familyDetails.fatherOccupation)!,
                    motherName: translateField("familyDetails.motherName", data.familyDetails.motherName)!,
                    motherOccupation: translateField("familyDetails.motherOccupation", data.familyDetails.motherOccupation)!,
                    siblings: translateField("familyDetails.siblings", data.familyDetails.siblings)!,
                },
                contactDetails: {
                    ...data.contactDetails,
                    title: translateTitle("contactDetails.title", data.contactDetails.title),
                    contactNumber: translateField("contactDetails.contactNumber", data.contactDetails.contactNumber)!,
                    email: translateField("contactDetails.email", data.contactDetails.email)!,
                    address: translateField("contactDetails.address", data.contactDetails.address)!,
                },
            };

            onChange(updated);
            onLanguageChange(pendingLang);
        } catch (e) {
            console.error("Failed to switch language", e);
        } finally {
            setIsSwitching(false);
            setPendingLang(null);
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
        onChange({
            ...data,
            [section]: updatedSection
        });
    };

    const renderSectionInputs = (section: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, standardFields: string[]) => {
        const allFields = Object.keys(data[section] as any).filter(key => key !== 'title');
        const customFields = allFields.filter(key => !standardFields.includes(key));

        return (
            <>
                {/* Render standard fields exactly as requested originally */}
                {section === "personalDetails" && (
                    <>
                        <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="personalDetails" field="fullName" placeholder="e.g. Rahul Sharma" />
                        <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="personalDetails" field="dateOfBirth" placeholder="e.g. 14 Oct 1995, 10:30 AM" />
                        <div className="grid grid-cols-2 gap-4">
                            <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="personalDetails" field="height" placeholder="e.g. 5' 8&quot;" />
                            <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="personalDetails" field="bloodGroup" placeholder="e.g. O+" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="personalDetails" field="complexion" placeholder="e.g. Fair" />
                            <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="personalDetails" field="maritalStatus" placeholder="e.g. Never Married" />
                        </div>
                        <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="personalDetails" field="education" placeholder="e.g. B.Tech in Computer Science" />
                        <div className="grid grid-cols-2 gap-4">
                            <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="personalDetails" field="occupation" placeholder="e.g. Software Engineer at Google" />
                            <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="personalDetails" field="annualIncome" placeholder="e.g. 15 LPA / $120,000" />
                        </div>
                    </>
                )}
                {section === "familyDetails" && (
                    <>
                        <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="familyDetails" field="fatherName" />
                        <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="familyDetails" field="fatherOccupation" />
                        <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="familyDetails" field="motherName" />
                        <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="familyDetails" field="motherOccupation" />
                        <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="familyDetails" field="siblings" placeholder="e.g. 1 Brother, 1 Sister" />
                    </>
                )}
                {section === "contactDetails" && (
                    <>
                        <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="contactDetails" field="contactNumber" type="tel" />
                        <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="contactDetails" field="email" type="email" />
                        <Input data={data} updateSection={updateSection} updateLabel={updateLabel} removeField={removeField} section="contactDetails" field="address" placeholder="e.g. Andheri West, Mumbai" type="textarea" />
                    </>
                )}

                {/* Render dynamically added custom fields below the standard ones */}
                {customFields.map((field) => (
                    <Input
                        key={field}
                        data={data}
                        updateSection={updateSection}
                        updateLabel={updateLabel}
                        removeField={removeField}
                        section={section}
                        field={field}
                        placeholder="Type value..."
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
                            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Biodata Language</div>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400">Field labels and section titles will be translated</div>
                        </div>
                    </div>
                    <select
                        value={pendingLang ?? language}
                        onChange={(e) => handleLanguageRequest(e.target.value)}
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-colors"
                    >
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.native}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Confirmation banner */}
                {pendingLang && (
                    <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">
                                Switch to {SUPPORTED_LANGUAGES.find(l => l.code === pendingLang)?.native}?
                            </p>
                            <p className="text-xs text-amber-700 dark:text-amber-400 mt-0.5">
                                Default field labels will be translated. Labels you&apos;ve already customized won&apos;t be changed.
                            </p>
                        </div>
                        <div className="flex gap-2 shrink-0">
                            <button
                                onClick={() => setPendingLang(null)}
                                className="text-xs px-2.5 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmLanguageSwitch}
                                disabled={isSwitching}
                                className="text-xs px-2.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-50"
                            >
                                {isSwitching ? "Switching..." : "Switch"}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Photo & Symbol Configuration Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Profile Photo Control */}
                <div className="p-5 bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                            Profile Photo
                        </h3>
                        <label className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 cursor-pointer">
                            <input type="checkbox" checked={data.profilePhoto?.isHidden || false} onChange={togglePhotoHidden} className="rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
                            Hide on Biodata
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
                                    {data.profilePhoto?.url ? 'Change Photo' : 'Upload Photo'}
                                </button>
                                <input id="photo-upload" type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
                                {data.profilePhoto?.url && (
                                    <button onClick={removePhoto} className="text-xs px-3 py-1.5 text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 transition-colors rounded-lg font-medium">
                                        Remove
                                    </button>
                                )}
                            </div>

                            {data.profilePhoto?.url && (
                                <div className="flex bg-zinc-100 dark:bg-zinc-900 p-0.5 rounded-lg z-0 relative">
                                    <button onClick={() => updatePhotoShape('circle')} className={`flex-1 text-[10px] font-medium py-1 rounded-md transition-all ${data.profilePhoto?.shape === 'circle' ? 'bg-white dark:bg-zinc-800 shadow text-indigo-600 dark:text-indigo-400' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'}`}>Circular</button>
                                    <button onClick={() => updatePhotoShape('square')} className={`flex-1 text-[10px] font-medium py-1 rounded-md transition-all ${data.profilePhoto?.shape === 'square' ? 'bg-white dark:bg-zinc-800 shadow text-indigo-600 dark:text-indigo-400' : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'}`}>Square</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* God Icon Control */}
                <div className="p-5 bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                            Symbol / God Icon
                        </h3>
                        <label className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 cursor-pointer">
                            <input type="checkbox" checked={data.godIcon?.isHidden || false} onChange={toggleGodIconHidden} className="rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500" />
                            Hide
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
                                Choose Icon
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
                {renderSectionInputs("personalDetails", ["fullName", "dateOfBirth", "height", "bloodGroup", "complexion", "maritalStatus", "education", "occupation", "annualIncome"])}
            </Section>

            <Section titleInput={<SectionTitleInput section="familyDetails" data={data} updateSectionTitle={updateSectionTitle} />} onAddCustomField={() => addCustomField('familyDetails')}>
                {renderSectionInputs("familyDetails", ["fatherName", "fatherOccupation", "motherName", "motherOccupation", "siblings"])}
            </Section>

            <Section titleInput={<SectionTitleInput section="contactDetails" data={data} updateSectionTitle={updateSectionTitle} />} onAddCustomField={() => addCustomField('contactDetails')}>
                {renderSectionInputs("contactDetails", ["contactNumber", "email", "address"])}
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
