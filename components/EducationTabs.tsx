"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EducationItem } from "@/types/education";
import { EducationCard } from "@/components/EducationCard";

export const EducationTabs = ({ education }: { education: EducationItem[] }) => {
    const [tab, setTab] = useState<"university" | "course">("university");
    const prefersReducedMotion = useReducedMotion();

    return (
        <Tabs
            defaultValue="university"
            className="w-full"
            onValueChange={(val) => setTab(val as "university" | "course")}
        >
            <TabsList
                className="
          w-full max-w-6xl mx-auto
          flex gap-2 sm:gap-4
          bg-transparent border-none
          overflow-x-auto sm:overflow-visible
          px-1 sm:px-0
          rounded-none
          scrollbar-none
          snap-x snap-mandatory
          mb-6 sm:mb-12
        "
                aria-label="Category education"
            >
                <TabsTrigger
                    value="university"
                    className="
            snap-start flex-shrink-0
            px-4 py-2 sm:px-5 sm:py-2.5
            text-sm sm:text-base font-medium rounded-md border
            transition-all
            data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-400
            hover:text-white
          "
                >
                    UNIVERSITY
                </TabsTrigger>
                <TabsTrigger
                    value="course"
                    className="
            snap-start flex-shrink-0
            px-4 py-2 sm:px-5 sm:py-2.5
            text-sm sm:text-base font-medium rounded-md border
            transition-all
            data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-400
            hover:text-white
          "
                >
                    COURSE
                </TabsTrigger>
            </TabsList>

            {(["university", "course"] as const).map((type) => (
                <TabsContent
                    key={type}
                    value={type}
                    className={`${type === "university" ? "mt-4 sm:mt-8" : ""} px-1 sm:px-0`}
                >
                    <AnimatePresence mode="wait">
                        {tab === type && (
                            <motion.div
                                key={type}
                                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
                                transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
                                className="space-y-4 sm:space-y-6 max-w-6xl mx-auto"
                            >
                                {education
                                    .filter((entry) => entry.type === type)
                                    .map((entry) => (
                                        <EducationCard key={entry.id} {...entry} />
                                    ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </TabsContent>
            ))}
        </Tabs>
    );
};
