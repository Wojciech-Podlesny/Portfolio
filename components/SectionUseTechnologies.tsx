
"use client";

import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {skills} from "@/data/skills";

const allowedTechnologies = ["React", "Next.js", "TypeScript", "JavaScript","Node.js", "Tailwind CSS"];


export const SectionUseTechnologies = () => {
    const selectedSkills =
        skills
            .flatMap((category) => category.skills)
            .filter((skill) => allowedTechnologies.includes(skill.name));
    return (
        <section className="w-full">
            <div className="bg -gw-full max-w-6xl mx-auto h-[160px]">
                <InfiniteMovingCards
                    speed="fast"
                    direction="right"
                    items={selectedSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="hover:scale-105 transition-all duration-500 w-40  h-40 flex-col items-center justify-center  text-center p-8"
                        >
                            <div className="flex flex-col items-center justify-center gap-2">
                                {skill.image}
                            </div>
                        </div>
                    ))}
                />
            </div>
        </section>
    );
};
