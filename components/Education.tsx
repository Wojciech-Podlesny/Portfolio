// "use client";
//
// import React from "react";
// import { TextAnimate } from "@/components/magicui/text-animate";
// import { education } from "@/data/education";
// import { EducationTabs } from "@/components/EducationTabs";
// import { SectionHeading } from "@/components/SectionHeading";
//
// export const Education = () => {
//     return (
//         <section className="w-full   bg-[#161d29] py-10 sm:py-16 px-4">
//             <div className="max-w-6xl mx-auto">
//                 <SectionHeading title="EDUCATION" />
//                 <TextAnimate className="text-gray-300 mt-3 sm:mt-4 mb-6 sm:mb-8 text-base sm:text-xl text-center px-2 sm:px-8">
//                     My academic journey, courses, and educational achievements that have shaped my technical expertise.
//                 </TextAnimate>
//                 <EducationTabs education={education} />
//             </div>
//             <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
//         </section>
//     );
// };


//dark
"use client";

import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { education } from "@/data/education";
import { EducationTabs } from "@/components/EducationTabs";
import { SectionHeading } from "@/components/SectionHeading";

export const Education = () => {
    return (
        <section className="w-full bg-zinc-100 dark:bg-[#161d29] py-10 sm:py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <SectionHeading title="EDUCATION" />

                <TextAnimate as="p" className="text-gray-800 dark:text-gray-300 mt-3 sm:mt-4 mb-6 sm:mb-8 text-base sm:text-xl text-center px-2 sm:px-8">
                    My academic journey, courses, and educational achievements that have shaped my technical expertise.
                </TextAnimate>

                <EducationTabs education={education} />
            </div>

            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"></div>
        </section>
    );
};
