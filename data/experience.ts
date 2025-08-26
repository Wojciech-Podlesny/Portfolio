import logoDevsMentoring from "@/assets/images/experience/logoDevsMentoring.webp";
import logoAlanSystems from "@/assets/images/experience/logoAlanSystems.webp";
import {Experience} from "@/types/experience";


export const experience: Experience[] = [
    {
        id: 1,
        icon: logoDevsMentoring,
        img: logoDevsMentoring,
        role: 'Frontend Developer Internship',
        company: 'Devs-Mentoring',
        date: 'July 2023 - present',
        description:
            'Contributed to hands-on commercial projects using HTML, CSS, JavaScript, TypeScript, React, and Next.js. Focused on building modern, responsive interfaces with robust test coverage. Collaborated closely with a Senior Frontend Developer and participated in Agile ceremonies including code reviews and sprint planning.',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'React',
            'NextJs',
            'Redux',
        ],
        highlights: [
            'Built and optimized scalable web applications used by over 1,000 users',
            'Improved performance of key components, reducing load time by 30%',
            'Developed features in a modern frontend stack with 85% test coverage using RTL',
            'Actively participated in daily stand-ups and pair programming sessions',
        ],
    },
    {
        id: 2,
        img: logoAlanSystems,
        icon: logoAlanSystems,
        role: 'Junior Software Tester',
        company: 'Alan Systems',
        date: '03/2022 - 05/2022',
        description:
            'Developed and maintained automated end-to-end tests using CodeceptJS and JavaScript. Conducted functional and regression testing of web applications. Worked in a SCRUM team to ensure product quality and timely delivery. Reported bugs and collaborated with developers to ensure fast resolution.',
        skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'CodeceptJS'],
        highlights: [
            'Automated over 100 regression test cases using CodeceptJS',
            'Reduced manual testing time by 60% through test automation',
            'Tested core production features including login and payment flows',
        ],
    },
];
