// "use client";
//
// import React from "react";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { skills } from "@/data/skills";
// import {SkillsCard} from "@/components/SkillsCard";
//
// const formatTitle = (title: string) =>
//     title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
//
// export const SkillsTabs = () => {
//
//     return (
//         <Tabs defaultValue={skills[0].title} className="w-full max-w-6xl mx-auto">
//             <TabsList
//                 className="flex flex-wrap justify-center gap-4 bg-transparent border-none mb-8"
//                 aria-label="Skills categories"
//             >
//                 {skills.map((category) => (
//                     <TabsTrigger
//                         key={category.title}
//                         value={category.title}
//                         aria-label={category.title}
//
//                     className="
//                         snap-start flex-shrink-0
//                         px-4 py-2 sm:px-5 sm:py-2.5
//                         text-sm sm:text-base font-medium rounded-md border
//                         transition-all
//                         data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-400
//                         hover:text-white
//                         ">
//                         {formatTitle(category.title)}
//                     </TabsTrigger>
//                 ))}
//             </TabsList>
//
//             {skills.map((category) => (
//                 <TabsContent
//                     key={category.title}
//                     value={category.title}
//                     className="mt-8 sm:mt-12 px-2 sm:px-0"
//                     aria-label={category.title}
//                 >
//                     <div
//                         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
//                     >
//                         {category.skills.map((tech) => (
//                             <SkillsCard key={tech.name} name={tech.name} image={tech.image} />
//                         ))}
//                     </div>
//                 </TabsContent>
//             ))}
//         </Tabs>
//     );
// };

//dark
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
                className="flex flex-wrap justify-center gap-4 bg-transparent border-none mb-8"
                role="tablist"
            >
                {skills.map(({ title }) => (
                    <TabsTrigger
                        key={title}
                        value={title}
                        aria-label={`${formatTitle(title)} tab`}
                        className="snap-start flex-shrink-0
                            px-4 py-2 sm:px-5 sm:py-2.5
                            text-sm sm:text-base font-medium rounded-md border
                            transition-all
                            data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-400
                            hover:text-white"
                    >
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
