import { EducationItem } from "@/types/education";
import logoWsiz from '@/assets/images/education/LogoWsiz.webp';
import logoMegak from '@/assets/images/education/LogoFrontowcy.webp';
import logoWebAmigos from '@/assets/images/education/LogoWebAmigos.webp';
import logoSda from '@/assets/images/education/LogoSda.webp';
import logoPolitechnika from "@/assets/images/education/logoPolitechnika.webp";
import logoJSMastery from "@/assets/images/education/JSMastery.webp";

export const education: EducationItem[] = [
    {
        id: 1,
        type: "university",
        image: logoPolitechnika,
        school: "opole.school",
        degree: "opole.degree",
        date: '10/2025 - present',
        description: "opole.description",
        technologies: "opole.technologies",
        highlights: "opole.highlights"
    },
    {
        id: 2,
        type: "university",
        image: logoWsiz,
        school: "wsiz.school",
        degree: "wsiz.degree",
        date: '10/2024 - 06/2025',
        description: "wsiz.description",
        technologies: "wsiz.technologies",
        highlights: "wsiz.highlights"
    },
    {
        id: 3,
        type: "course",
        image: logoWebAmigos,
        title: "webamigosFullstack.title",
        date: '10/2024 - present',
        description: "webamigosFullstack.description",
        technologies: "webamigosFullstack.technologies",
        highlights: "webamigosFullstack.highlights",
    },
    {
        id: 4,
        type: "course",
        image: logoWebAmigos,
        title: "webamigosReact.title",
        date: '05/2024 - 09/2024',
        description: "webamigosReact.description",
        technologies: "webamigosReact.technologies",
        certificateUrl: "https://credsverse.com/credentials/ccd66be0-b4f3-4ef9-9fc7-625131dcf054",
        highlights: "webamigosReact.highlights",
    },
    {
        id: 5,
        type: "course",
        image: logoMegak,
        title: "megak.title",
        date: '05/2023 - 10/2024',
        description: "megak.description",
        technologies: "megak.technologies",
        highlights: "megak.highlights"
    },
    {
        id: 6,
        type: "course",
        image: logoSda,
        title: "sda.title",
        date: '02/2021 - 05/2021',
        description: "sda.description",
        technologies: "sda.technologies",
        highlights:"sda.highlights",
        certificateUrl: "https://app.diplomasafe.com/pl-PL/diploma/df68a2bb02091c195cb940e7428f3d98943f2a862"
    },
    {
        id: 7,
        type: "course",
        image: logoJSMastery,
        title: "nextJsUltimate.title",
        date: '09/2025 - present',
        description: "nextJsUltimate.description",
        technologies: "nextJsUltimate.technologies",
        highlights:"nextJsUltimate.highlights",
        // certificateUrl: "https://app.diplomasafe.com/pl-PL/diploma/df68a2bb02091c195cb940e7428f3d98943f2a862"
    }
];
