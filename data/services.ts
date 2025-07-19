import { FaCode, FaMobileAlt, FaGlobe, FaServer, FaPaintBrush, FaLayerGroup } from "react-icons/fa";
import { Services } from "@/types/services";

export const services: Services[] = [
    {
        id: 1,
        title: "Frontend Developer",
        description: "Creating modern, responsive interfaces in React.",
        icon: FaCode,
    },
    {
        id: 2,
        title: "Freelance Developer",
        description: "Delivering custom web and mobile projects.",
        icon: FaGlobe,
    },
    {
        id: 3,
        title: "Backend Developer",
        description: "Building APIs and server-side logic in Node.js.",
        icon: FaServer,
    },
    {
        id: 4,
        title: "UI/UX Designer",
        description: "Designing intuitive and visually appealing user interfaces.",
        icon: FaPaintBrush,
    },
    {
        id: 5,
        title: "Fullstack Developer",
        description: "Complete project implementation from frontend to backend.",
        icon: FaLayerGroup,
    },
];
