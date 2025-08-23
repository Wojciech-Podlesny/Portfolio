"use client";

import React from "react";
import { projects } from "@/data/projects";
import { MagicButton } from "@/components/MagicButton";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectsCard";
import {TextAnimate} from "@/components/magicui/text-animate";
import {SectionHeading} from "@/components/SectionHeading";
import {useReducedMotion,motion} from "framer-motion";

export const Projects = () => {
    const shouldReduceMotion = useReducedMotion();
    return (
        <div className=" bg-[#12161d] py-16" id="projects">
            <SectionHeading title="FEATURED PROJECTS" />

            <TextAnimate className="text-gray-300 mb-12 text-2xl text-center px-4">
                A selection of my recent web development and programming projects.
            </TextAnimate>


            <motion.div
                className="flex flex-wrap items-center justify-center  gap-x-20 p-4 gap-y-10"
                initial="hidden"
                whileInView="show"
                variants={
                    shouldReduceMotion
                        ? undefined
                        : { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
                }
            >
                {projects.slice(0, 3).map((project) => (
                    <motion.div
                        key={project.id}
                        variants={
                            shouldReduceMotion
                                ? undefined
                                : { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }
                        }
                        transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>

            <div className="flex justify-center items-center mt-8">
                <Link href="/projects" aria-label="View all projects">
                    <MagicButton title="View more projects" position="center" />
                </Link>
            </div>
            <div className="mt-16 h-[2px] w-full opacity-80
  bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
    );
};
