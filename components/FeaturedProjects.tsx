"use client";

import React, { useMemo } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectsCard";
import { TextAnimate } from "@/components/magicui/text-animate";
import { SectionHeading } from "@/components/SectionHeading";
import { useReducedMotion, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const FeaturedProjects = () => {
    const shouldReduceMotion = useReducedMotion();
    const t = useTranslations("featuredProjects");

    const containerVariants = useMemo(
        () =>
            shouldReduceMotion
                ? undefined
                : { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
        [shouldReduceMotion]
    );

    const itemVariants = useMemo(
        () =>
            shouldReduceMotion
                ? undefined
                : { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } },
        [shouldReduceMotion]
    );

    return (
        <section className="bg-white dark:bg-gray-900 py-16" id="projects">
            <SectionHeading title={t("title")} />

            <TextAnimate
                as="p"
                className="text-gray-800 dark:text-gray-300 mb-12 text-2xl text-center px-4"
            >
                {t("intro")}
            </TextAnimate>

            <motion.div
                className="flex flex-wrap items-center justify-center gap-x-20 p-4 gap-y-10"
                initial="hidden"
                whileInView="show"
                variants={containerVariants}
                viewport={{ once: true, amount: 0.25 }}
            >
                {projects.slice(0, 3).map((project) => (
                    <motion.div
                        key={project.id}
                        variants={itemVariants}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.35 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>

            <div className="flex justify-center items-center mt-8">
                <Button asChild>
                    <Link href="/projects">{t("cta")}</Link>
                </Button>
            </div>

            <div className="mt-16 h-[2px] w-full opacity-80 bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent"></div>
        </section>
    );
};
