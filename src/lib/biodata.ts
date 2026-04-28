/**
 * Shared Biodata type definition and default data.
 * Importing from here keeps the /create/page.tsx as a server component
 * and avoids circular dependencies.
 */

export type Biodata = {
    profilePhoto?: {
        url: string;
        shape: 'square' | 'circle';
        isHidden: boolean;
    };
    godIcon?: {
        url: string;
        isHidden: boolean;
        text: string;
    };
    personalDetails: {
        title: string;
        fullName: { label: string; value: string };
        dateOfBirth: { label: string; value: string };
        height: { label: string; value: string };
        bloodGroup: { label: string; value: string };
        complexion: { label: string; value: string };
        maritalStatus: { label: string; value: string };
        education: { label: string; value: string };
        occupation: { label: string; value: string };
        annualIncome: { label: string; value: string };
        [key: string]: any;
    };
    familyDetails: {
        title: string;
        fatherName: { label: string; value: string };
        fatherOccupation: { label: string; value: string };
        motherName: { label: string; value: string };
        motherOccupation: { label: string; value: string };
        siblings: { label: string; value: string };
        [key: string]: any;
    };
    contactDetails: {
        title: string;
        contactNumber: { label: string; value: string };
        email: { label: string; value: string };
        address: { label: string; value: string };
        [key: string]: any;
    };
};

export const initialData: Biodata = {
    profilePhoto: {
        url: "",
        shape: "circle",
        isHidden: false,
    },
    godIcon: {
        url: "/god_icons/god-icon-1.png",
        isHidden: false,
        text: "|| Shree Ganeshay Namah ||",
    },
    personalDetails: {
        title: "Personal Details",
        fullName: { label: "Full Name", value: "" },
        dateOfBirth: { label: "Date of Birth & Time", value: "" },
        height: { label: "Height", value: "" },
        bloodGroup: { label: "Blood Group", value: "" },
        complexion: { label: "Complexion", value: "" },
        maritalStatus: { label: "Marital Status", value: "" },
        education: { label: "Highest Education", value: "" },
        occupation: { label: "Occupation / Job", value: "" },
        annualIncome: { label: "Annual Income", value: "" },
    },
    familyDetails: {
        title: "Family Details",
        fatherName: { label: "Father's Name", value: "" },
        fatherOccupation: { label: "Father's Occupation", value: "" },
        motherName: { label: "Mother's Name", value: "" },
        motherOccupation: { label: "Mother's Occupation", value: "" },
        siblings: { label: "Siblings", value: "" },
    },
    contactDetails: {
        title: "Contact Info",
        contactNumber: { label: "Contact Number", value: "" },
        email: { label: "Email Address", value: "" },
        address: { label: "Address", value: "" },
    },
};
