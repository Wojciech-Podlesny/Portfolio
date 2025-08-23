import {StaticImageData} from "next/image";
import {IconType} from "react-icons";

export interface Service {
    id: number;
    title: string;
    description: string;
    details: string;
    features: string[];
    images: StaticImageData[];
    icon: IconType

}

