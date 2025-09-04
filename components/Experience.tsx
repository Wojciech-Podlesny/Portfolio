"use client";

import { Timeline } from "@/components/ui/timeline";
import { TextAnimate } from "@/components/magicui/text-animate";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceCard } from "@/components/ExperienceCard";
import { experience } from "@/data/experience";
import { useTranslations } from "next-intl";

export const Experience = () => {
    const t = useTranslations("experience");

    const timelineData = experience.map((exp) => ({
        title: exp.company,
        icon: exp.icon?.src,
        date: t(exp.date),
        content: <ExperienceCard exp={exp} />
    }));

    return (
        <section className="text-center py-16 px-4 sm:px-8 relative bg-zinc-100 dark:bg-gray-900 text-black dark:text-white">
            <SectionHeading title={t("title")} />
            <TextAnimate
                as="p"
                className="text-gray-800 dark:text-gray-300 px-4 sm:px-12 text-2xl text-center mb-12"
            >
                {t("intro")}
            </TextAnimate>
            <Timeline data={timelineData} />
            <div className="mt-16 h-[2px] w-full opacity-80 bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent" />
        </section>
    );
};
