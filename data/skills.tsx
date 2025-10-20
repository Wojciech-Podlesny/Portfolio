import {
    HTMLIcon,
    CSSIcon,
    JavaSciptIcon,
    TypeScriptIcon,
    ReactIcon,
    TailwindIcon,
    ShadCNIcon,
    AceternityIcon,
    NodeJsIcon,
    ExpressIcon,
    MySQLIcon,
    MongoDBIcon,
    DockerIcon,
    PostmanIcon,
    ReduxIcon,
    GitIcon,
    JestIcon,
    CypressIcon,
    PlaywrightIcon,
    FirebaseIcon,
    MaterialIcon,
    VitestIcon,
    NextJsIcon,
    WordpressIcon,
    GithubIcon,
    PythonIcon,
    GithubActionsIcon,
    JenkinsIcon,
    TDDIcon, ReactTestingLibraryIcon, CsharpIcon,
} from "./icon";

export const skills = [
    {
        title: "FRONTEND",
        skills: [
            { name: "HTML", image: <HTMLIcon /> },
            { name: "CSS", image: <CSSIcon /> },
            { name: "JavaScript", image: <JavaSciptIcon /> },
            { name: "TypeScript", image: <TypeScriptIcon /> },
            { name: "React", image: <ReactIcon /> },
            { name: "Redux", image: <ReduxIcon /> },
            { name: "Next.js", image: <NextJsIcon /> },
            { name: "MaterialUI", image: <MaterialIcon /> },
            { name: "Tailwind CSS", image: <TailwindIcon /> },
            { name: "Shadcn UI", image: <ShadCNIcon /> },
            { name: "Aceternity UI", image: <AceternityIcon /> },
            {name: "Wordpress", image: <WordpressIcon />}

        ],
    },
    {
        title: "BACKEND",
        skills: [
            { name: "Node.js", image: <NodeJsIcon /> },
            { name: "Express.js", image: <ExpressIcon /> },
            { name: "MySQL", image: <MySQLIcon /> },
            { name: "MongoDB", image: <MongoDBIcon /> },
            { name: "Firebase", image: <FirebaseIcon /> },
            { name: "C#", image: <CsharpIcon /> },
            { name: "Python", image: <PythonIcon /> },


        ],
    },
    {
        title: "TESTING",
        skills: [
            { name: "Jest", image: <JestIcon /> },
            { name: "Cypress", image: <CypressIcon /> },
            { name: "Playwright", image: <PlaywrightIcon /> },
            { name: "Vitest", image: <VitestIcon /> },
            { name: "TDD", image: <TDDIcon /> },
            { name: "React Testing Library", image: <ReactTestingLibraryIcon /> },

        ],
    },
    {
        title: "DEVOPS",
        skills: [
            { name: "Docker", image: <DockerIcon /> },
            { name: "Postman", image: <PostmanIcon /> },
            { name: "Git", image: <GitIcon /> },
            { name: "GitHub", image: <GithubIcon /> },
            { name: "GitHub Actions", image: <GithubActionsIcon /> },
            { name: "Jenkins", image: <JenkinsIcon /> },

        ],
    },
];
