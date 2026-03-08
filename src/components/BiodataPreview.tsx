"use client";

import { Biodata } from "@/app/create/page";

export interface ThemeMeta {
    pageBackgroundColor: string;
    containerPadding: string;
    fontFamily: string;
    headingColor: string;
    labelColor: string;
    valueColor: string;
    baseFontSize: string;
    sectionTitleFontSize: string;
    sectionSpacing: string;
    fieldSpacing: string;
    godIconTextColor: string;
    godIconFontSize: string;
    godIconSpacing: string;
    godIconHideStrategy?: "visibility" | "display";
    profilePhotoTop: string;
    profilePhotoRight: string;
}

interface Props {
    data: Biodata;
    template: string; // The selected background image name
    themeMeta?: ThemeMeta; // Optional to prevent crashes before fetch
}

export default function BiodataPreview({ data, template, themeMeta }: Props) {
    const defaultMeta: ThemeMeta = {
        pageBackgroundColor: "#ffffff",
        containerPadding: "6.25cqi 3.75cqi 3.75cqi 3.75cqi", // 50 30 30 30
        fontFamily: "'Noto Serif', Georgia, serif",
        headingColor: "#333333",
        labelColor: "#555555",
        valueColor: "#111111",
        baseFontSize: "1.625cqi",
        sectionTitleFontSize: "2.125cqi",
        sectionSpacing: "2.5cqi",
        fieldSpacing: "0.625cqi",
        godIconTextColor: "#8b0000",
        godIconFontSize: "2.5cqi",
        godIconSpacing: "2cqi",
        godIconHideStrategy: "visibility",
        profilePhotoTop: "10cqi",
        profilePhotoRight: "10cqi",
    };

    const meta: ThemeMeta = { ...defaultMeta, ...themeMeta };

    const DetailRow = ({ label, value }: { label: string; value: string }) => {
        if (!value) return null;
        return (
            <div
                className="flex flex-row items-start"
                style={{ paddingBottom: meta.fieldSpacing, fontSize: meta.baseFontSize, fontFamily: meta.fontFamily }}
            >
                <span className="font-semibold shrink-0 pr-2 flex justify-between" style={{ color: meta.labelColor, width: '27cqi' }}>
                    <span>{label}</span>
                    <span>:</span>
                </span>
                <span className="font-medium whitespace-pre-wrap" style={{ color: meta.valueColor }}>
                    {value}
                </span>
            </div>
        );
    };

    const hasAnyValue = (sectionData: any) => {
        return Object.keys(sectionData).some(key => key !== 'title' && sectionData[key].value.trim() !== "");
    };

    const renderSectionRows = (sectionKey: Exclude<keyof Biodata, 'profilePhoto' | 'godIcon'>, standardFields: string[]) => {
        const sectionData = data[sectionKey] as any;
        const allKeys = Object.keys(sectionData).filter(k => k !== 'title');
        const customKeys = allKeys.filter(k => !standardFields.includes(k));

        return (
            <div className="grid grid-cols-1">
                {/* Standard Fields */}
                {standardFields.map(field => {
                    const rowData = sectionData[field];
                    if (!rowData) return null; // Safe check for older localStorage structures
                    return <DetailRow key={field} label={rowData.label} value={rowData.value} />
                })}
                {/* Custom Fields */}
                {customKeys.map(field => {
                    const rowData = sectionData[field];
                    if (!rowData) return null;
                    return <DetailRow key={field} label={rowData.label} value={rowData.value} />
                })}
            </div>
        );
    };

    const renderSections = () => (
        <>
            {hasAnyValue(data.personalDetails) && (
                <section style={{ marginBottom: meta.sectionSpacing }}>
                    <h2 className="font-bold tracking-wider" style={{ color: meta.headingColor, fontSize: meta.sectionTitleFontSize, fontFamily: meta.fontFamily, paddingBottom: meta.fieldSpacing }}>
                        {data.personalDetails.title}
                    </h2>
                    {renderSectionRows("personalDetails", ["fullName", "dateOfBirth", "height", "bloodGroup", "complexion", "maritalStatus", "education", "occupation", "annualIncome"])}
                </section>
            )}

            {hasAnyValue(data.familyDetails) && (
                <section style={{ marginBottom: meta.sectionSpacing }}>
                    <h2 className="font-bold tracking-wider" style={{ color: meta.headingColor, fontSize: meta.sectionTitleFontSize, fontFamily: meta.fontFamily, paddingBottom: meta.fieldSpacing }}>
                        {data.familyDetails.title}
                    </h2>
                    {renderSectionRows("familyDetails", ["fatherName", "fatherOccupation", "motherName", "motherOccupation", "siblings"])}
                </section>
            )}

            {hasAnyValue(data.contactDetails) && (
                <section>
                    <h2 className="font-bold tracking-wider" style={{ color: meta.headingColor, fontSize: meta.sectionTitleFontSize, fontFamily: meta.fontFamily, paddingBottom: meta.fieldSpacing }}>
                        {data.contactDetails.title}
                    </h2>
                    {renderSectionRows("contactDetails", ["contactNumber", "email", "address"])}
                </section>
            )}
        </>
    );

    const renderProfilePhoto = () => {
        if (!data.profilePhoto?.url || data.profilePhoto.isHidden) return null;

        return (
            <div
                className={`absolute z-20 shrink-0 ${data.profilePhoto.shape === 'circle' ? 'rounded-full' : 'rounded-2xl'} overflow-hidden shadow-sm`}
                style={{ top: meta.profilePhotoTop, right: meta.profilePhotoRight, width: '18cqi', height: '18cqi' }}
            >
                <img src={data.profilePhoto.url} alt="Profile" className="w-full h-full object-cover" />
            </div>
        );
    };

    const renderGodIcon = () => {
        const isHidden = data.godIcon?.isHidden;
        const hideStrategy = meta.godIconHideStrategy || 'visibility';

        const style: React.CSSProperties = {
            marginBottom: meta.godIconSpacing,
        };

        if (isHidden) {
            if (hideStrategy === 'display') {
                style.display = 'none';
            } else {
                style.visibility = 'hidden';
            }
        }

        return (
            <div
                className="flex flex-col items-center justify-center"
                style={style}
            >
                {data.godIcon?.url && (
                    <img src={data.godIcon.url} alt="God Icon" className="object-contain drop-shadow-md" style={{ width: '12cqi', height: '12cqi', marginBottom: '1cqi' }} />
                )}
                {data.godIcon?.text && (
                    <div className="font-bold font-serif drop-shadow-sm flex-shrink-0" style={{ color: meta.godIconTextColor, fontSize: meta.godIconFontSize }}>
                        {data.godIcon.text}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="w-full h-full flex flex-col items-center relative z-10" style={{ padding: meta.containerPadding, backgroundColor: meta.pageBackgroundColor }}>
            {renderGodIcon()}
            <div className="w-full text-left relative">
                {renderSections()}
                {renderProfilePhoto()}
            </div>
        </div>
    );
}
