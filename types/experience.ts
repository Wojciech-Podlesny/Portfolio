import {StaticImageData} from "next/image";

export type ExperienceId = "devs" | "alan";

export interface Experience {
    id: ExperienceId;
    icon: StaticImageData;
    img: StaticImageData;
    role: string;
    company: string;
    date: string;
    description: string;
    skills: string[];
    highlights: string;
}

