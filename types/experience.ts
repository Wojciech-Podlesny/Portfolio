import {StaticImageData} from "next/image";

export interface Experience {
    id: number;
    icon: StaticImageData;
    img: StaticImageData;
    role: string;
    company: string;
    date: string;
    description: string;
    skills: string[];
    highlights: string[];
}

