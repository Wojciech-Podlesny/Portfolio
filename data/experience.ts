import photo1 from "@/assets/images/experience/305501536_465939668883191_3151695317284406465_n.jpg";
import photo2 from "@/assets/images/experience/430109080_901814671953425_8618473567185964744_n.jpg";
import {Experience} from "@/types/experience";

export const experience : Experience[] = [
    {
        id: 1,
        icon: photo1,
        img: photo1,
        role: "Frontend Developer Internship",
        company: "Devs-Mentoring",
        date: "Aug 2023 - present",
        description: "Contributed to hands-on commercial projects using HTML, CSS, JavaScript, TypeScript, React, and Next.js. Focused on building modern, responsive interfaces with robust test coverage. Collaborated closely with a Senior Frontend Developer and participated in Agile ceremonies including code reviews and sprint planning.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "NextJs",
            "Redux",
            "React-Testing-Library",
        ],
        highlights: [
            "Built and optimized scalable web applications used by over 1,000 users",
            "Improved performance of key components, reducing load time by 30%",
            "Developed features in a modern frontend stack with 85% test coverage using React Testing Library",
            "Actively participated in daily stand-ups and pair programming sessions",
        ],
    },
    {
        id: 1,
        img: photo2,
        icon: photo2,
        role: "Junior Software Tester",
        company: "Alan Systems",
        date: "03/2022 - 05/2022",
        description: "Developed and maintained automated end-to-end tests using CodeceptJS and JavaScript. Conducted functional and regression testing of web applications. Worked in a SCRUM team to ensure product quality and timely delivery. Reported bugs and collaborated with developers to ensure fast resolution.",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "CodeceptJS"],
        highlights: [
            "Automated over 100 regression test cases using CodeceptJS",
            "Reduced manual testing time by 60% through test automation",
            "Tested core production features including login and payment flows",
            "Worked with GitLab CI/CD pipelines to run automated tests",
        ],
    },

];