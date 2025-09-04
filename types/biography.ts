import {StaticImageData} from "next/image";
import {IconType} from "react-icons";

export type Biography =  {
    image: StaticImageData;
    name: string;
}

export type SocialLinks = {
    href: string;
    label: string;
    icon: IconType;
};