import { Biodata } from "@/app/create/page";
import { SUPPORTED_LANGUAGES } from "@/components/LanguageSelector";

// Helper to fully translate a Biodata object from currentLang to targetLang
// It fetches necessary translation files and applies them, preserving user customizations
export async function translateBiodata(
    data: Biodata,
    currentLang: string,
    targetLang: string
): Promise<Biodata> {
    if (currentLang === targetLang) return data;

    const [enMap, currentMap, targetMap] = await Promise.all([
        fetch("/translations/en.json").then((r) => r.json()),
        fetch(`/translations/${currentLang}.json`).then((r) => r.json()),
        fetch(`/translations/${targetLang}.json`).then((r) => r.json()),
    ]);

    const translateField = (
        key: string,
        field: { label: string; value: string } | undefined
    ): { label: string; value: string } | undefined => {
        if (!field) return field;
        const enDefault = enMap[key] as string | undefined;
        const currentDefault = currentMap[key] as string | undefined;
        const translated = targetMap[key] as string | undefined;
        if (!translated) return field;
        const isDefault = field.label === enDefault || field.label === currentDefault;
        return { ...field, label: isDefault ? translated : field.label };
    };

    const translateTitle = (key: string, current: string): string => {
        const enDefault = enMap[key] as string | undefined;
        const currentDefault = currentMap[key] as string | undefined;
        const translated = targetMap[key] as string | undefined;
        if (!translated) return current;
        const isDefault = current === enDefault || current === currentDefault;
        return isDefault ? translated : current;
    };

    return {
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
}
