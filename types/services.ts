import {StaticImageData} from "next/image";
import {LucideIcon} from "lucide-react";

export interface Service {
    id: number;
    key:string,
    images: StaticImageData[];
    icon: LucideIcon

}

