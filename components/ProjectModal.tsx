// "use client";
//
// import Image from "next/image";
// import Link from "next/link";
// import { Badge } from "@/components/ui/badge";
// import {
//     DialogContent,
//     DialogHeader,
//     DialogTitle,
//     DialogDescription,
//     DialogFooter,
// } from "@/components/ui/dialog";
// import type { Project } from "@/types/projects";
//
// export const ProjectModal= ({
//                                           title,
//                                           date,
//                                           description,
//                                           image,
//                                           technologies,
//                                           github,
//                                           preview,
//                                           slug,
//                                       }: Project) => {
//     return (
//         <DialogContent className="max-w-2xl sm:max-w-3xl bg-[#0B0B12] text-white border border-white/10">
//             <DialogHeader>
//                 <DialogTitle className="text-2xl md:text-3xl font-semibold tracking-tight">
//                     {title}
//                 </DialogTitle>
//                 {date && (
//                     <DialogDescription className="text-gray-400 text-sm">
//                         {date}
//                     </DialogDescription>
//                 )}
//             </DialogHeader>
//
//             <div className="relative w-full h-96 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
//                 <Image
//                     src={image[0]}
//                     alt={`${title} preview`}
//                     className="object-cover"
//                     sizes="(max-width: 768px) 90vw, 900px"
//
//
//                 />
//             </div>
//
//             <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
//                 {description}
//             </p>
//
//             <div className="flex flex-wrap gap-2">
//                 {technologies.map((t) => (
//                     <Badge key={t} className="bg-white text-gray-900">
//                         {t}
//                     </Badge>
//                 ))}
//             </div>
//
//             <DialogFooter className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-4">
//                 <Link
//                     href={`/projects/${slug}`}
//                     className="group inline-flex items-center gap-2 text-sm md:text-[15px] text-gray-300 hover:text-white transition"
//                 >
//                     Read full case study
//                     <svg
//                         className="h-4 w-4 translate-x-0 group-hover:translate-x-0.5 transition-transform"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                     >
//                         <path d="M5 12h14" />
//                         <path d="M12 5l7 7-7 7" />
//                     </svg>
//                 </Link>
//
//                 <div className="flex items-center gap-2 sm:gap-3">
//                     {preview && (
//                         <Link
//                             href={preview}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium"
//                             aria-label="Open live demo"
//                         >
//                             <svg
//                                 className="h-4 w-4"
//                                 viewBox="0 0 24 24"
//                                 fill="currentColor"
//                             >
//                                 <path d="M8 5v14l11-7-11-7z" />
//                             </svg>
//                             Live Demo
//                         </Link>
//                     )}
//                     {github && (
//                         <Link
//                             href={github}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-gray-900 hover:bg-gray-100 text-sm font-medium"
//                             aria-label="Open GitHub repository"
//                         >
//                             <svg
//                                 className="h-4 w-4"
//                                 viewBox="0 0 24 24"
//                                 fill="currentColor"
//                             >
//                                 <path
//                                     fillRule="evenodd"
//                                     clipRule="evenodd"
//                                     d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.97.1-.76.41-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.69.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"
//                                 />
//                             </svg>
//                             GitHub
//                         </Link>
//                     )}
//                 </div>
//             </DialogFooter>
//         </DialogContent>
//     );
// };
//

//dark
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import type { Project } from "@/types/projects";
import {useTranslations} from "next-intl";
import { Link } from "@/i18n/routing";
import NextLink from "next/link";

export const ProjectModal = ({
                                 title,
                                 date,
                                 description,
                                 image,
                                 technologies,
                                 github,
                                 preview,
                                 slug,
                             }: Project) => {
    const t = useTranslations("projects")
    return (
        <DialogContent className="max-w-2xl sm:max-w-3xl bg-white dark:bg-[#0B0B12] text-gray-900 dark:text-white border border-gray-200 dark:border-white/10">
            <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-semibold tracking-tight">
                    {t(title)}
                </DialogTitle>
                {date && (
                    <DialogDescription className="text-gray-600 dark:text-gray-400 text-sm">
                        {t(date)}
                    </DialogDescription>
                )}
            </DialogHeader>

            <div className="relative w-full h-96 rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
                <Image
                    src={image[0]}
                    alt={`${title} preview`}
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 900px"
                    fill
                />
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-[15px] md:text-base">
                {t(description)}
            </p>

            <div className="flex flex-wrap gap-2">
                {technologies.map((t) => (
                    <Badge
                        key={t}
                        className="bg-gray-100 text-gray-900 dark:bg-white dark:text-black"
                    >
                        {t}
                    </Badge>
                ))}
            </div>

            <DialogFooter className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-4">
                <Link
                    href={{ pathname: "/projects/[slug]", params: { slug } }}
                    className="group inline-flex items-center gap-2 text-sm md:text-[15px] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                    {t("detailsProject")}
                    <svg
                        className="h-4 w-4 translate-x-0 group-hover:translate-x-0.5 transition-transform"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </Link>

                <div className="flex items-center gap-2 sm:gap-3">
                    {preview && (
                        <NextLink
                            href={preview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-colors"
                            aria-label="Open live demo"
                        >
                            <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M8 5v14l11-7-11-7z" />
                            </svg>
                            Live Demo
                        </NextLink>
                    )}

                    {github && (
                        <NextLink
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-white dark:hover:bg-gray-100 text-gray-900 text-sm font-medium transition-colors"
                            aria-label="Open GitHub repository"
                        >
                            <svg
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.97.1-.76.41-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.69.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"
                                />
                            </svg>
                            GitHub
                        </NextLink>
                    )}
                </div>
            </DialogFooter>
        </DialogContent>
    );
};
