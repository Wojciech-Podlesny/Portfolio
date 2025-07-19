import html from "../assets/icons/html5-original.svg";
import css from "../assets/icons/css3-original.svg";
import scss from "../assets/icons/sass-original.svg";
import javascript from "../assets/icons/javascript-original.svg";
import typescript from "../assets/icons/typescript-original.svg";
import react from "../assets/icons/react-original.svg";
import nextjs from "../assets/icons/nextjs-original.svg";
import tailwind from "../assets/icons/tailwindcss-original.svg";
import materialui from "../assets/icons/materialui-original.svg";
import bootstrap from "../assets/icons/bootstrap-original.svg";
import shadcnUi from "../assets/icons/shadcnui.svg";
import aceternityUi from "../assets/icons/logo.png";

import node from "../assets/icons/node.svg";
import express from "../assets/icons/express.svg";
import mysql from "../assets/icons/mysql-original-wordmark.svg";
import firebase from "../assets/icons/firebase-original.svg";
import mongo from "../assets/icons/mongodb.svg";

import jest from "../assets/icons/jest-plain.svg";
import vitest from "../assets/icons/vitest-original.svg";
import rtl from "../assets/icons/react-testing-library.png";
import cypress from "../assets/icons/cypressio-original.svg";
import playwright from "../assets/icons/playwright-original.svg";
/*import pom from "../assets/skills/page-object-model.webp";*/
import tdd from "../assets/icons/tdd.png";

import git from "../assets/icons/git-original.svg";
import gitHub from "../assets/icons/github-original.svg";
import docker from "../assets/icons/docker-original.svg";
import figma from "../assets/icons/figma-original.svg";
import postman from "../assets/icons/postman-original.svg";
import netlify from "../assets/icons/netlify.svg";
import vercel from "../assets/icons/vercel-original.svg";

import {SkillsCategory} from "@/types/skills";



export const skills: SkillsCategory[] = [
    {
        title: "FRONTEND",
        skills: [
            { name: "HTML", image: html },
            { name: "CSS", image: css },
            { name: "SCSS", image: scss },
            { name: "JavaScript", image: javascript },
            { name: "TypeScript", image: typescript },
            { name: "React", image: react },
            { name: "Next.js", image: nextjs },
            { name: "Tailwind CSS", image: tailwind },
            { name: "Shadcn UI", image: shadcnUi },
            { name: "Aceternity UI", image: aceternityUi },
            { name: "Material UI", image: materialui },
            { name: "Bootstrap", image: bootstrap },
        ],
    },
    {
        title: "BACKEND",
        skills: [
            { name: "Node.js", image: node },
            { name: "Express.js", image: express },
            { name: "MySQL", image: mysql },
            { name: "MongoDb", image: mongo },
            { name: "Firebase", image: firebase },

        ],
    },
    {
        title: "TESTING",
        skills: [
            { name: "Jest", image: jest },
            { name: "Vitest", image: vitest },
            { name: "React Testing Library", image: rtl },
            { name: "Cypress", image: cypress },
            { name: "Playwright", image: playwright },
            { name: "TDD", image: tdd },
          /*  { name: "Page Object Model", image: pom },*/
        ],
    },
    {
        title: "OTHERS",
        skills: [
            { name: "Git", image: git },
            { name: "GitHub", image: gitHub },
            { name: "Docker", image: docker },
            { name: "Figma", image: figma },
            { name: "Postman", image: postman },
            { name: "Netlify", image: netlify },
            { name: "Vercel", image: vercel },
        ],
    },
];