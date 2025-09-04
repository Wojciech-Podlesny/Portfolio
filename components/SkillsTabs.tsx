"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { skills } from "@/data/skills";
import { SkillsCard } from "@/components/SkillsCard";

const formatTitle = (title: string) =>
    title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();

export const SkillsTabs = () => {
    const firstCategory = skills[0]?.title ?? "";

    return (
        <Tabs
            defaultValue={firstCategory}
            className="w-full max-w-6xl mx-auto"
            aria-label="Skills Categories Tabs"
        >
            <TabsList
                role="tablist"
                className="
    flex flex-wrap justify-center gap-4 bg-transparent border-none mb-8
  "
            >
                {skills.map(({ title }) => (
                    <TabsTrigger
                        key={title}
                        value={title}
                        aria-label={`${formatTitle(title)} tab`}
                        className="
        snap-start flex-shrink-0 px-4 py-2 sm:px-5 sm:py-2.5
        text-sm sm:text-base font-medium rounded-md border transition-all
        border-gray-200 dark:border-gray-700
        data-[state=inactive]:bg-gray-100
        data-[state=inactive]:text-gray-600
        hover:data-[state=inactive]:text-gray-900
        dark:data-[state=inactive]:bg-gray-800
        dark:data-[state=inactive]:text-gray-400
        dark:hover:data-[state=inactive]:text-white
        data-[state=active]:bg-white
        data-[state=active]:text-gray-900
        dark:data-[state=active]:bg-white/10
        dark:data-[state=active]:text-white
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-gray-300
        dark:focus-visible:ring-gray-600
      ">
                        {formatTitle(title)}
                    </TabsTrigger>
                ))}
            </TabsList>

            {skills.map(({ title, skills: techList }) => (
                <TabsContent
                    key={title}
                    value={title}
                    className="mt-8 sm:mt-12 px-2 sm:px-0"
                    role="tabpanel"
                    aria-labelledby={`tab-${title}`}
                >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {techList.map(({ name, image }) => (
                            <SkillsCard key={name} name={name} image={image} />
                        ))}
                    </div>
                </TabsContent>
            ))}
        </Tabs>
    );
};
