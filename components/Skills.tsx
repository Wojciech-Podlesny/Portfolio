"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { SkillsTabs } from "@/components/SkillsTabs";
import { SectionHeading } from "@/components/SectionHeading";
import { useTranslations } from "next-intl";

export const Skills = () => {
    const t = useTranslations("skills");

    return (
        <section
            className="
        text-center
        antialiased
        py-16 px-4 sm:px-8 relative
        bg-[#f9fafb] dark:bg-gray-900
        {/*bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.1),transparent_60%)]*/}
        {/*dark:bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent_60%)]*/}
      "
        >
            <SectionHeading title={t("title")} />

            <TextAnimate
                as="p"
                className="text-gray-800 dark:text-gray-300 px-4 sm:px-12 text-2xl text-center mb-12"
            >
                {t("intro")}
            </TextAnimate>
            <SkillsTabs />
            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"></div>
        </section>
    );
};
