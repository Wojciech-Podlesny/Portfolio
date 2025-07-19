'use client';

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { skills } from "@/data/skills";
import { GlareCard } from "@/components/ui/glare-card";
import React from "react";

export const Skills = () => {
    return (
        <section className="text-center bg-gradient-to-b from-black via-gray-900 to-black text-white antialiased py-12 px-4 sm:px-6">
            <div className="flex items-center justify-center my-8 flex-wrap">
                <div className="flex-grow h-px bg-indigo-500 max-w-[200px] sm:max-w-[500px] mb-4 sm:mb-0"/>
                <h1 className="text-white px-6 sm:px-12 text-3xl sm:text-4xl">SKILLS</h1>
                <div className="flex-grow h-px bg-indigo-500 max-w-[200px] sm:max-w-[500px] mt-4 sm:mt-0"/>
            </div>
            <h1 className="text-gray-300 p-12 text-2xl text-center" >I believe that continuous learning is key to staying relevant. Here is a selection of academic and
                professional courses that shaped my skills.</h1>

            <Tabs defaultValue="FRONTEND" className="w-full max-w-6xl mx-auto pb-12">
                <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-transparent border-none mb-8 sm:mb-12">
                    {skills.map((category) => (
                        <TabsTrigger
                            key={category.title}
                            value={category.title}
                            className="px-4 py-2 text-base sm:text-lg font-medium rounded-md border transition-all data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-400 hover:text-white"
                        >
                            {category.title}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {skills.map((category) => (
                    <TabsContent
                        key={category.title}
                        value={category.title}
                        className="mt-8 sm:mt-16 px-2 sm:px-0"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto">
                            {category.skills.map((tech) => (
                                <GlareCard
                                    key={tech.name}
                                    className="flex flex-col items-center justify-center p-3 sm:p-6"
                                >
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                                        <Image
                                            src={tech.image}
                                            alt={tech.name}
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                    <p className="mt-2 sm:mt-3 text-sm font-medium text-white">{tech.name}</p>
                                </GlareCard>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
};
