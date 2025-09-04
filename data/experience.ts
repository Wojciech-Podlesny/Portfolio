import logoDevsMentoring from "@/assets/images/experience/logoDevsMentoring.webp";
import logoAlanSystems from "@/assets/images/experience/logoAlanSystems.webp";
import { Experience } from "@/types/experience";

export const experience: Experience[] = [
    {
        id: "devs",
        icon: logoDevsMentoring,
        img: logoDevsMentoring,
        company: "Devs-Mentoring",
        role: "experienceCard.devs.role",
        date: "experienceCard.devs.date",
        description: "experienceCard.devs.description",
        highlights: "experienceCard.devs.highlights",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "NextJs",
            "Redux"
        ]
    },
    {
        id: "alan",
        icon: logoAlanSystems,
        img: logoAlanSystems,
        company: "Alan Systems",
        role: "experienceCard.alan.role",
        date: "experienceCard.alan.date",
        description: "experienceCard.alan.description",
        highlights: "experienceCard.alan.highlights",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "CodeceptJS"]
    }
];
