import {StaticImageData} from "next/image";
import {LucideIcon} from "lucide-react";

export interface Service {
    id: number;
    title: string;
    description: string;
    details: string;
    features: string[];
    images: StaticImageData[];
    icon: LucideIcon

}

