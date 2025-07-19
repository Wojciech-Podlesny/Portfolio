
"use client";

import {MagicCard} from "@/components/ui/magic-card";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import Image from "next/image";
import {skills} from "@/data/skills";

const allowedTechnologies = ["React", "Next.js", "TypeScript", "Tailwind CSS"];

export const SectionUseTechnologies = () => {
    const selectedSkills =
        skills
            .flatMap((category) => category.skills)
            .filter((skill) => allowedTechnologies.includes(skill.name));
    return (
        <section className="w-full py-20">
            <div className="relative w-full max-w-6xl mx-auto h-[160px]">
                <InfiniteMovingCards
                    speed="fast"
                    direction="right"
                    items={selectedSkills.map((skill, index) => (
                        <MagicCard
                            key={index}
                            className="hover:scale-105 transition-all duration-500 w-40  h-40 flex-col items-center justify-center  text-center p-8 bg-gray-950 text-gray-700"
                            gradientColor="#262626"
                        >
                            <div className="flex flex-col items-center justify-center gap-2">
                                <Image src={skill.image} alt={skill.name} width={45} height={45} />
                            </div>
                        </MagicCard>
                    ))}
                />
            </div>
        </section>
    );
};
