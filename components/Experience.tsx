'use client';

import { Timeline } from '@/components/ui/timeline';
import { TextAnimate } from '@/components/magicui/text-animate';
import { SectionHeading } from '@/components/SectionHeading';
import { ExperienceCard } from '@/components/ExperienceCard';
import { experience } from '@/data/experience';

export const Experience = () => {
    const timelineData = (experience ?? []).map((exp) => ({
        title: exp.company ?? exp.role,
        icon: exp.icon?.src,
        date: exp.date,
        content: <ExperienceCard exp={exp} />,
    }));

    return (
        <section className="w-full bg-[#0f1319] py-16 px-4 relative">
            <SectionHeading title="EXPERIENCE" />

            <TextAnimate className="text-gray-300 p-8 text-2xl text-center">
                Companies and projects where I contributed my skills
            </TextAnimate>

            <Timeline data={timelineData} />

            {/* 🔹 Separator */}
            <div className="mt-16 h-[2px] w-full opacity-80
  bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </section>
    );
};
