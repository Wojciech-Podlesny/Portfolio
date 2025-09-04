"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { education } from "@/data/education";
import { EducationTabs } from "@/components/EducationTabs";
import { SectionHeading } from "@/components/SectionHeading";
import { useTranslations } from "next-intl";

export const Education = () => {
    const t = useTranslations("education");

    return (
        <section className="w-full bg-zinc-100 dark:bg-gray-900 py-10 sm:py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <SectionHeading title={t("title")} />
                <TextAnimate
                    as="p"
                    className="text-gray-800 dark:text-gray-300 mt-3 sm:mt-4 mb-6 sm:mb-8 text-base sm:text-xl text-center px-2 sm:px-8"
                >
                    {t("intro")}
                </TextAnimate>
                <EducationTabs education={education} />
            </div>
            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />
        </section>
    );
};
