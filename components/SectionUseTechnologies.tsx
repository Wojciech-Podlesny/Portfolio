"use client";

import React, { useMemo } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { skills } from "@/data/skills";
import { useReducedMotion } from "framer-motion";
import clsx from "clsx";

const allowedTechnologies = ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Tailwind CSS"];

export const SectionUseTechnologies = () => {
    const shouldReduceMotion = useReducedMotion();

    const allowSet = useMemo(
        () => new Set(allowedTechnologies.map((t) => t.toLowerCase())),
        []
    );

    const selectedSkills = useMemo(
        () =>
            skills
                .flatMap((category) => category.skills)
                .filter((skill) => allowSet.has(skill.name.toLowerCase())),
        [allowSet]
    );

    const items = useMemo(
        () =>
            selectedSkills.map((skill) => (
                <div
                    key={skill.name}
                    className={clsx(
                        "w-40 h-40 p-8 text-white",
                        "flex flex-col items-center justify-center text-center",
                        !shouldReduceMotion && "transition-transform duration-500 hover:scale-105 will-change-transform"
                    )}
                    aria-label={skill.name}
                    title={skill.name}
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <span className="w-12 h-12 [&>*]:w-12 [&>*]:h-12 [&>*]:text-white/90 [&>svg]:w-12 [&>svg]:h-12 [&>svg]:text-white/90">
              {skill.image}
            </span>
                        <span className="text-xs text-white/70 mt-1">{skill.name}</span>
                    </div>
                </div>
            )),
        [selectedSkills, shouldReduceMotion]
    );

    return (
        <section className="w-full">
            <div className="w-full max-w-6xl mx-auto h-[160px] sm:h-[180px] md:h-[200px]">
                <div role="list" aria-label="Technologies I’ve used">
                    <InfiniteMovingCards
                        speed="slow"
                        direction="right"
                        items={items}
                    />
                </div>
            </div>

            <div
                aria-hidden
                className="relative z-10 mx-auto mt-16 h-[2px] w-full max-w-6xl
                   bg-gradient-to-r from-transparent via-white/35 to-transparent"
            />
        </section>
    );
};
