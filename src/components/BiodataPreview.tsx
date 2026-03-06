"use client";

import { Biodata } from "@/app/create/page";

export interface ThemeMeta {
    containerPadding: string;
    godIconTextColor: string;
    headingColor: string;
    labelColor: string;
    valueColor: string;
    pageBackgroundColor: string;
    profilePhotoTop: string;
    profilePhotoRight: string;
    fontFamily: string;
    baseFontSize: string;
    sectionTitleFontSize: string;
    sectionSpacing: string;
    fieldSpacing: string;
    godIconSpacing: string;
}

interface Props {
    data: Biodata;
    template: string; // The selected background image name
    themeMeta?: ThemeMeta; // Optional to prevent crashes before fetch
}

export default function BiodataPreview({ data, template, themeMeta }: Props) {
    const defaultMeta: ThemeMeta = {
        containerPadding: "50px 30px 30px 30px",
        godIconTextColor: "#8b0000",
        headingColor: "#333333",
        labelColor: "#555555",
        valueColor: "#111111",
        pageBackgroundColor: "#ffffff",
        profilePhotoTop: "3rem",
        profilePhotoRight: "3rem",
        fontFamily: "'Noto Serif', Georgia, serif",
        baseFontSize: "13px",
        sectionTitleFontSize: "17px",
        sectionSpacing: "20px",
        fieldSpacing: "5px",
        godIconSpacing: "16px",
    };

    const meta: ThemeMeta = { ...defaultMeta, ...themeMeta };

    const DetailRow = ({ label, value }: { label: string; value: string }) => {
        if (!value) return null;
        return (
            <div
                className="flex flex-col sm:flex-row sm:items-start"
                style={{ paddingBottom: meta.fieldSpacing, fontSize: meta.baseFontSize, fontFamily: meta.fontFamily }}
            >
                <span className="w-40 sm:w-48 min-w-[10rem] sm:min-w-[12rem] font-semibold shrink-0 pr-2 flex justify-between" style={{ color: meta.labelColor }}>
                    <span>{label}</span>
                    <span>:</span>
                </span>
                <span className="font-medium" style={{ color: meta.valueColor }}>
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
                    <h2 className="font-bold tracking-wider mb-1" style={{ color: meta.headingColor, fontSize: meta.sectionTitleFontSize, fontFamily: meta.fontFamily }}>
                        {data.familyDetails.title}
                    </h2>
                    {renderSectionRows("familyDetails", ["fatherName", "fatherOccupation", "motherName", "motherOccupation", "siblings"])}
                </section>
            )}

            {hasAnyValue(data.contactDetails) && (
                <section>
                    <h2 className="font-bold tracking-wider mb-1" style={{ color: meta.headingColor, fontSize: meta.sectionTitleFontSize, fontFamily: meta.fontFamily }}>
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
                className={`absolute z-20 shrink-0 ${data.profilePhoto.shape === 'circle' ? 'rounded-full' : 'rounded-2xl'} overflow-hidden shadow-sm w-32 h-32 md:w-36 md:h-36`}
                style={{ top: meta.profilePhotoTop, right: meta.profilePhotoRight }}
            >
                <img src={data.profilePhoto.url} alt="Profile" className="w-full h-full object-cover" />
            </div>
        );
    };

    const renderGodIcon = () => {
        const isHidden = data.godIcon?.isHidden;
        return (
            <div
                className="flex flex-col items-center justify-center"
                style={{ marginBottom: meta.godIconSpacing, visibility: isHidden ? 'hidden' : 'visible' }}
            >
                {data.godIcon?.url && (
                    <img src={data.godIcon.url} alt="God Icon" className="w-16 h-16 md:w-20 md:h-20 object-contain mb-2 drop-shadow-md" />
                )}
                {data.godIcon?.text && (
                    <div className="text-lg md:text-xl font-bold font-serif drop-shadow-sm" style={{ color: meta.godIconTextColor }}>
                        {data.godIcon.text}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="w-full h-full flex flex-col items-center relative" style={{ padding: meta.containerPadding, backgroundColor: meta.pageBackgroundColor }}>
            {renderProfilePhoto()}
            {renderGodIcon()}
            <div className="w-full text-left">
                <div className="space-y-4 px-2 mt-2">
                    {renderSections()}
                </div>
            </div>
        </div>
    );
}
