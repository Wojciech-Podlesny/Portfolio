import {StaticImageData} from "next/image";

export type EducationItem = {
    id: number;
    type: string;
    img: StaticImageData;
    title?: string;
    school?: string;
    date: string;
    description: string;
    degree?: string;
    modules?: { name: string }[];
    technologies?: { name: string }[];
    certificateUrl?: string;
};