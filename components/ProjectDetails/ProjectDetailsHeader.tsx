// import Link from "next/link";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import StatusBadge from "./StatusBadge";
//
// export const ProjectDetailsHeader = ({
//                                   title, date, status, preview, github,
//                               }: {
//     title: string; date?: string; status?: "in-progress"|"completed"|"paused";
//     preview?: string; github?: string;
// }) => {
//     return (
//         <header className="flex flex-col items-center text-center px-4 pt-24 pb-8">
//             <h1 id="project-title" className="text-3xl md:text-5xl font-bold">{title}</h1>
//             {date && <p className="mt-2 text-gray-400 text-base md:text-lg">{date}</p>}
//             {status && <div className="mt-3"><StatusBadge status={status} /></div>}
//
//             {(preview || github) && (
//                 <div className="mt-6 flex flex-wrap justify-center gap-3">
//                     {preview && (
//                         <Link href={preview} target="_blank" rael="noopener noreferrer"
//                               className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 px-5 py-3 font-semibold"
//                               aria-label={`${title} — Live Demo`}>
//                             <FaExternalLinkAlt aria-hidden /> Live Demo
//                         </Link>
//                     )}
//                     {github && (
//                         <Link href={github} target="_blank" rel="noopener noreferrer"
//                               className="inline-flex items-center gap-2 rounded-lg bg-gray-700 hover:bg-gray-800 px-5 py-3 font-semibold"
//                               aria-label={`${title} — GitHub Repository`}>
//                             <FaGithub aria-hidden /> GitHub
//                         </Link>
//                     )}
//                 </div>
//             )}
//         </header>
//     );
// }

//dark
"use client";

import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import StatusBadge from "./StatusBadge";

type Props = {
    title: string;
    date?: string;
    status?: "in-progress" | "completed" | "paused";
    preview?: string;
    github?: string;
};

export const ProjectDetailsHeader: React.FC<Props> = ({
                                                          title,
                                                          date,
                                                          status,
                                                          preview,
                                                          github,
                                                      }) => {
    return (
        <header className="flex flex-col items-center text-center px-4 pt-24 pb-8">
            <h1
                id="project-title"
                className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
                {title}
            </h1>

            {date && (
                <p className="mt-2 text-gray-600 dark:text-gray-400 text-base md:text-lg">
                    {date}
                </p>
            )}

            {status && (
                <div className="mt-3">
                    <StatusBadge status={status} />
                </div>
            )}

            {(preview || github) && (
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {preview && (
                        <Link
                            href={preview}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} — Live Demo`}
                            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-600 px-5 py-3 font-semibold text-white transition-colors"
                        >
                            <FaExternalLinkAlt aria-hidden /> Live Demo
                        </Link>
                    )}

                    {github && (
                        <Link
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${title} — GitHub Repository`}
                            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 hover:bg-gray-300 px-5 py-3 font-semibold text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white transition-colors"
                        >
                            <FaGithub aria-hidden /> GitHub
                        </Link>
                    )}
                </div>
            )}
        </header>
    );
};
