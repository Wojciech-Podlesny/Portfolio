"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EducationItem } from "@/types/education";
import { EducationCard } from "@/components/EducationCard";
import { useTranslations } from "next-intl";
import {compareEducationByDate} from "@/lib/sortDate";

const TAB_TYPES = ["university", "course"] as const;

export const EducationTabs = ({ education }: { education: EducationItem[] }) => {
    const [tab, setTab] = useState<(typeof TAB_TYPES)[number]>("university");
    const prefersReducedMotion = useReducedMotion();
    const t = useTranslations("EducationTabs");

    return (
        <Tabs
            defaultValue="university"
            className="w-full"
            onValueChange={(val) => setTab(val as (typeof TAB_TYPES)[number])}
        >
            <TabsList
                aria-label={t("aria")}
                className="w-full max-w-6xl mx-auto flex gap-2 sm:gap-4 bg-transparent border-none overflow-x-auto sm:overflow-visible px-1 sm:px-0 rounded-none scrollbar-none snap-x snap-mandatory mb-6 sm:mb-12"
            >
                {TAB_TYPES.map((type) => (
                    <TabsTrigger
                        key={type}
                        value={type}
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
                        {t(type)}
                    </TabsTrigger>
                ))}
            </TabsList>

            {TAB_TYPES.map((type) => (
                <TabsContent key={type} value={type} className="px-1 sm:px-0 mt-4 sm:mt-8">
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
                                    .sort(compareEducationByDate)
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
