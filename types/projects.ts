import {StaticImageData} from "next/image";
import {IconType} from "react-icons";


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
    iconList?: IconType[];
    keyFeatures: string[];
    shortDescription:string;
    status: ProjectStatus;

}