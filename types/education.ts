import {StaticImageData} from "next/image";

export type EducationItem = {
    id: number;
    type: 'university' | 'course';
    title?: string;
    image?:StaticImageData,
    degree?: string;
    school?: string;
    date: string;
    description: string;
    certificateUrl?: string;
    technologies?: { name: string }[];
};