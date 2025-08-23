"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { skills } from "@/data/skills";
import {SkillsCard} from "@/components/SkillsCard";

const formatTitle = (title: string) =>
    title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

export const SkillsTabs = () => {

    return (
        <Tabs defaultValue={skills[0].title} className="w-full max-w-6xl mx-auto">
            <TabsList
                role="tablist"
                className="flex flex-wrap justify-center gap-4 bg-transparent border-none mb-8"
                aria-label="Skills categories"
            >
                {skills.map((category) => (
                    <TabsTrigger
                        key={category.title}
                        value={category.title}
                        className="px-4 py-2 text-sm sm:text-base font-medium rounded-md border border-transparent transition-colors
              data-[state=active]:bg-indigo-600 data-[state=active]:text-white
              data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-400
              hover:text-white hover:border-indigo-500"
                    >
                        {formatTitle(category.title)}
                    </TabsTrigger>
                ))}
            </TabsList>

            {skills.map((category) => (
                <TabsContent
                    key={category.title}
                    value={category.title}
                    role="tabpanel"
                    className="mt-8 sm:mt-12 px-2 sm:px-0"
                >
                    <div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                        role="list"
                    >
                        {category.skills.map((tech) => (
                            <SkillsCard key={tech.name} name={tech.name} image={tech.image} />
                        ))}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    );
};
