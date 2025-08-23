import {StaticImageData} from "next/image";

export type Biography =  {
    image: StaticImageData;
    name: string;
    roles: string[];
    github: string;
    linkedin: string;
}