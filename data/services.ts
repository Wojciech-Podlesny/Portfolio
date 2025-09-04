import {Code, Smartphone, Search, Gauge, Server, Accessibility} from "lucide-react";

import { servicesImages } from "@/assets/images/services";
import {Service} from "@/types/services";

export const servicesData: Service[] = [
    { id: 1, key: "webDevelopment", icon: Code, images: servicesImages.webDevelopment },
    { id: 2, key: "responsiveDesign", icon: Smartphone, images: servicesImages.responsiveDesign },
    { id: 3, key: "seoOptimization", icon: Search, images: servicesImages.seoOptimization },
    { id: 4, key: "performanceOptimization", icon: Gauge, images: servicesImages.performanceOptimization },
    { id: 5, key: "apiIntegration", icon: Server, images: servicesImages.apiIntegration },
    { id: 6, key: "accessibility", icon: Accessibility, images: servicesImages.accessibility },
];
