import {StaticImageData} from "next/image";


export type Img = string | StaticImageData;

export type ProjectStatus = "in-progress" | "completed" | "paused";

export type ProjectSection = {
    title: string;
    description: string;
    src: string | StaticImageData;
};

export interface Project {
    id: number;
    title: string;
    slug: string;
    date: string;
    technologies: string[];
    description: string;
    sections?: ProjectSection[];
    image: StaticImageData[];
    imageLaptop: StaticImageData[];
    github?: string;
    preview?: string;
    keyFeatures: string[];
    shortDescription:string;
    status: ProjectStatus;

}