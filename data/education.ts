import {EducationItem} from "@/types/education";
import logoWsiz from '@/assets/images/education/LogoWsiz.webp';
import logoMegak from '@/assets/images/education/LogoFrontowcy.webp';
import logoWebAmigos from '@/assets/images/education/LogoWebAmigos.webp';
import logoSda from '@/assets/images/education/LogoSda.webp';
import logoSchoolDotneta from '@/assets/images/education/LohoSzkołaDotneta.webp';
import logoPolitechnika from "@/assets/images/education/logoPolitechnika.webp";



export const education: EducationItem[] = [
    {
        id: 1,
        type: 'university',
        school: 'University of Technology, Opole',
        image: logoPolitechnika,
        date: '10/2025 - present',
        degree: "Bachelor's Degree - Computer Science",
        description:
            'I am currently pursuing an Engineering degree in Computer Science. My coursework includes Data Structures, Algorithms, OOP, Databases, Operating Systems, and Computer Networks.',
        technologies: [
            { name: 'Data Structures' },
            { name: 'Algorithms' },
            { name: 'Software Engineering' },
            { name: 'Low-level programming' },
        ],
    },
    {
        id: 2,
        type: 'university',
        school: 'University of Information Technology and Management, Rzeszów',
        date: '10/2024 - 06/2025',
        image: logoWsiz,
        degree: "Bachelor's Degree - Computer Science",
        description:
            'I am currently pursuing an Engineering degree in Computer Science. My coursework includes Data Structures, Algorithms, OOP, Databases, Operating Systems, and Computer Networks.',
        technologies: [
            { name: 'Data Structures' },
            { name: 'Algorithms' },
            { name: 'Software Engineering' },
            { name: 'Low-level programming' },
        ],
    },
    {
        id: 3,
        type: 'course',
        title: 'Web Amigos - Fullstack Web Apps',
        date: '10/2024 - present',
        image: logoWebAmigos,
        description:
            'Master modern fullstack web development, covering component architecture, state management, backend integration, testing, and deployment.',
        technologies: [
            { name: 'React' },
            { name: 'TypeScript' },
            { name: 'Tailwind CSS' },
            { name: 'Storybook' },
            { name: 'NextJS' },
            { name: 'NestJS' },
        ],
    },
    {
        id: 4,
        type: 'course',
        title: 'Web Amigos - School of React',
        date: '05/2024 - 09/2024',
        image: logoWebAmigos,
        description:
            'A complete React course focused on real-world applications: setup, state management, testing, and optimization.',
        technologies: [
            { name: 'React' },
            { name: 'TypeScript' },
            { name: 'Tailwind CSS' },
            { name: 'Storybook' },
            { name: 'Vitest' },
            { name: 'React Testing Library' },
        ],
        certificateUrl: 'https://credsverse.com/credentials/ccd66be0-b4f3-4ef9-9fc7-625131dcf054',
    },
    {
        id: 5,
        type: 'course',
        title: 'MEGAK - Full-Stack Development Journey',
        date: '05/2023 - 10/2024',
        image: logoMegak,
        description:
            'Hands-on fullstack bootcamp with JavaScript, Node.js, MongoDB, TypeScript and React.',
        technologies: [
            { name: 'HTML5' },
            { name: 'CSS3' },
            { name: 'JavaScript' },
            { name: 'Node.js' },
            { name: 'Express' },
            { name: 'MongoDB' },
            { name: 'TypeScript' },
            { name: 'React' },
            { name: 'NestJS' },
        ],
    },
    {
        id: 6,
        type: 'course',
        title: 'Software Development Academy - Software Tester',
        date: '02/2021 - 05/2021',
        image: logoSda,
        description:
            'Covers testing fundamentals: manual/automated testing, REST API, SQL and Agile.',
        technologies: [
            { name: 'Testing applications' },
            { name: 'Testing REST API' },
            { name: 'Automation Testing' },
            { name: 'SQL' },
        ],
        certificateUrl: 'https://app.diplomasafe.com/pl-PL/diploma/df68a2bb02091c195cb940e7428f3d98943f2a862',
    },
    {
        id: 7,
        type: 'course',
        title: 'Szkoła Dotneta - Programmer ASP.NET Core',
        school: 'Szkoła Dotneta',
        date: '08/2025 - present',
        image: logoSchoolDotneta,
        description:
            'Comprehensive backend course using ASP.NET Core, C#, TDD, and SQL Server.',
        technologies: [
            { name: 'C#' },
            { name: 'ASP.NET Core' },
            { name: 'SQL Server' },
            { name: 'Entity Framework' },
            { name: 'TDD' },
        ],
    },
];
