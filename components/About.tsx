'use client';
import Link from "next/link";
import React from "react";
import { MagicButton } from "@/components/MagicButton";
import { CodeBlock } from "@/components/CodeBlock";
import { code } from "@/data/code";
import {HiCheck} from "react-icons/hi";


const qualities = [
    "Problem-Solving Mindset",
    "Continuous Learning & Growth",
    "User-Centric Approach",
    "Optimized for Speed & Scalability",
];

export const About = () => {
    return (
        <section
            className="p-12 bg-gradient-to-b from-black via-gray-900 to-black text-white antialiased"
            id="about"
        >
            <div className="flex items-center justify-center my-8">
                <div className="flex-grow h-px bg-indigo-500 max-w-[500px]" />
                <h1 className="text-white px-12 text-4xl">ABOUT ME</h1>
                <div className="flex-grow h-px bg-indigo-500 max-w-[500px]" />
            </div>
            <h1 className="text-gray-300 p-12 text-2xl text-center" >I believe that continuous learning is key to staying relevant. Here is a selection of academic and
                professional courses that shaped my skills.</h1>


            <div className="flex flex-col md:flex-row justify-center md:justify-between gap-12 m-16">
                <div className="md:w-1/2 w-full text-center md:text-left space-y-6">
                    <p className="text-lg leading-relaxed">
                        I am a <strong>Full-Stack Developer</strong> with expertise in{" "}
                        <strong>Next.js, TypeScript, and Tailwind CSS</strong>. I love solving problems, building
                        dynamic applications, and creating seamless user experiences. My goal is to turn innovative ideas into
                        real-world solutions.
                    </p>

                    <ul className="text-lg flex flex-col justify-center items-start md:items-start
                 space-y-2 mt-12">
                        {qualities.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <HiCheck className="text-green-500" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-12">
                        <Link href="/#services" target="_blank" rel="noopener noreferrer">
                            <MagicButton title="Services" position="center" />
                        </Link>
                        <Link href="/#projects">
                            <MagicButton title="View My Projects" position="center" />
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <div className="rounded-xl shadow-lg overflow-hidden max-w-full">
                        <CodeBlock code={code} language="javascript" />
                    </div>
                </div>
            </div>
        </section>
    );
};
