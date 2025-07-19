// education.ts
import photo1 from "../assets/images/education/LogoWsiz.jpg";
import photo3 from "../assets/images/education/LogoWebAmigos.jpg";
import photo4 from "@/assets/images/education/LogoFrontowcy.jpg";
import photo5 from "@/assets/images/education/LogoSda.jpg";
import photo6 from "@/assets/images/education/LohoSzkołaDotneta.png";
import {EducationItem} from "@/types/education";


export const education: EducationItem[] = [
    {
        id: 1,
        img: photo1,
        type:"university",
        school: "University of Information Technology and Management, Rzeszów",
        date: "10/2024 - present",
        description:
            "I am currently pursuing an Engineering degree in Computer Science at the University of Information Technology and Management in Rzeszów. My coursework includes subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks. I actively engage in university projects and technical workshops to develop practical skills and deepen my understanding of modern technologies.",
        degree: "Bachelor of Engineering - BEng, Computer Science"
    },
    {
        id: 2,
        img: photo3,
        title: "Web Amigos - Fullstack Web Apps",
        type:'course',
        date: "10/2024 - present",
        description:
            "Master modern and efficient web application development, covering advanced component architecture, styling, state management, and more. Learn to build fullstack web applications using the latest technologies and best practices.",
        modules: [
            { name: "Component creation and architecture" },
            { name: "Component styling in various variants" },
            { name: "Component composition and state management" },
            { name: "Correct form handling" },
            { name: "Interface building and Component Driven Development" },
            { name: "API integration and data fetching" },
            { name: "Authentication and security in web apps" },
            { name: "Performance optimization" },
            { name: "Deployment strategies and CI/CD pipelines" }
        ],
        technologies: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
            { name: "Storybook" },
            { name: "NextJS" },
            { name: "NestJS" },
            { name: "GraphQL" },
            { name: "Docker" },
            { name: "Vitest/React Testing Library" }
        ]
    },
    {
        id: 3,
        img: photo3,
        type:"course",
        title: "Web Amigos - Szkoła Reacta",
        date: "05/2024 - 09/2024",
        description:
            "Szkoła Reacta is a complete React course that allows you to build a solid foundation in working with this popular framework. The program covers project configuration, state management, component testing and application optimization. The course prepares you to develop modern web applications.",
        modules: [
            { name: "Tools and project setup" },
            { name: "Form management and user interface" },
            { name: "State management, hooks, and contexts" },
            { name: "Asynchronous operations and API communication" },
            { name: "Component testing" },
            { name: "Optimization and best practices" }
        ],
        technologies: [
            { name: "React" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
            { name: "Storybook" },
            { name: "Vitest" },
            { name: "React Testing Library" }
        ],
        certificateUrl: "https://credsverse.com/credentials/ccd66be0-b4f3-4ef9-9fc7-625131dcf054"
    },
    {
        id: 4,
        img: photo4,
        type:'course',
        title: "MEGAK - Full-Stack Development Journey",
        date: "05/2023 - 10/2024",
        description:
            "MEGAK is a one-year full-stack bootcamp covering JavaScript, Node.js, Express, MongoDB, TypeScript and React. The course emphasizes practical application of the technologies in real-world projects.",
        modules: [
            { name: "Introduction to JavaScript and ES6+" },
            { name: "Backend Fundamentals with Node.js" },
            { name: "Building APIs with Express.js" },
            { name: "Database Management with MongoDB" },
            { name: "Advanced Javascript with Typescript" },
            { name: "Building User Interfaces with React" },
            { name: "Scaling Backend Applications - Node.js Advanced" },
            { name: "Developing backend applications with NestJS" }
        ],
        technologies: [
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Javascript" },
            { name: "Node.js" },
            { name: "Express" },
            { name: "MongoDB" },
            { name: "Typescript" },
            { name: "React" },
            { name: "NestJS" }
        ]
    },
    {
        id: 5,
        img: photo5,
        type:'course',
        title: "Software Development Academy - Software Tester",
        date: "02/2021 - 05/2021",
        description:
            "Comprehensive course covering the fundamentals of software testing, including testing tools, databases, Agile methodologies, and test design and implementation. Focused on practical skills and industry-relevant tools.",
        modules: [
            { name: "Software Testing Fundamentals: Introduction to testing, test design techniques, risk-based testing" },
            { name: "Testing tools: Knowledge of JIRA, Postman, TestRail, Chrome DevTools" },
            { name: "Databases: SQL basics, MySQL Workbench" },
            { name: "Agile Methodologies: SCRUM workshop, understanding of project management process and team collaboration" },
            { name: "Test Design and Implementation: Ability to create effective tests and testing strategies based on risk analysis" },
            { name: "Use of testing tools: Experience working with popular test management and quality monitoring tools" }
        ],
        certificateUrl: "https://app.diplomasafe.com/pl-PL/diploma/df68a2bb02091c195cb940e7428f3d98943f2a862"
    },
    {
        id: 6,
        img: photo6,
        type:'university',
        school: "Silesian University of Technology, Gliwice",
        date: "10/2009 - 04/2015",
        description:
            "I completed a Master's degree in Mining and Geological Engineering at the Silesian University of Technology in Gliwice. My studies focused on advanced topics in mining technology, geology, and engineering practices.",
        degree: "Master of Science - MSc, Mining and Geological Engineering"
    },
    {
        id: 6,
        img: photo6,
        type:'course',
        school: "Szkoła Dotneta - Programmer ASP.NET Core",
        date: "05/2025 - current",
        description:
            "I completed a Master's degree in Mining and Geological Engineering at the Silesian University of Technology in Gliwice. My studies focused on advanced topics in mining technology, geology, and engineering practices.",
        degree: "Master of Science - MSc, Mining and Geological Engineering"
    }
];
