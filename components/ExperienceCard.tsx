// 'use client';
// import { Experience } from "@/types/experience";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from "framer-motion";
//
// export const ExperienceCard = ({ exp }: { exp: Experience }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true }}
//         >
//             <Card className="w-full bg-black border border-neutral-800 rounded-xl p-4 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
//                 <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
//                     <CardTitle className="text-2xl font-bold text-white">
//                         {exp.role}
//                     </CardTitle>
//                 </CardHeader>
//
//                 <CardContent className="flex flex-col gap-y-6 mt-2">
//                     <motion.p
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ delay: 0.2 }}
//                         className="text-sm text-gray-300 leading-relaxed"
//                     >
//                         {exp.description}
//                     </motion.p>
//
//                     {exp.highlights.length > 0 && (
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.3 }}
//                             className="flex flex-col gap-y-2"
//                         >
//                             <h4 className="text-xl font-semibold text-white mb-2 sm:mb-3">
//                                 Key Contributions:
//                             </h4>
//                             <ul className="list-disc pl-4 text-sm text-gray-400 space-y-1">
//                                 {exp.highlights.map((point, i) => (
//                                     <motion.li
//                                         key={i}
//                                         initial={{ opacity: 0, x: -10 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         transition={{ delay: 0.4 + i * 0.1 }}
//                                     >
//                                         <span className="text-gray-100">{point}</span>
//                                     </motion.li>
//                                 ))}
//                             </ul>
//                         </motion.div>
//                     )}
//
//                     {exp.skills.length > 0 && (
//                         <motion.div
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ delay: 0.5 }}
//                             className="flex flex-col gap-y-2"
//                         >
//                             <h4 className="text-xl font-semibold text-white mb-2 sm:mb-3">
//                                 Technologies:
//                             </h4>
//                             <div className="flex flex-wrap gap-2">
//                                 {exp.skills.map((skill,i) => (
//                                     <motion.div
//                                         key={skill}
//                                         initial={{ scale: 0.8, opacity: 0 }}
//                                         animate={{ scale: 1, opacity: 1 }}
//                                         transition={{ delay: 0.6 + i * 0.1 }}
//                                     >
//                                         <Badge className="bg-white text-black hover:bg-neutral-200 transition-colors duration-200">
//                                             {skill}
//                                         </Badge>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     )}
//                 </CardContent>
//             </Card>
//         </motion.div>
//     );
// };


//dark
'use client';

import { Experience } from "@/types/experience";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export const ExperienceCard = ({ exp }: { exp: Experience }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <Card className="w-full bg-white dark:bg-black border border-gray-200 dark:border-neutral-800 rounded-xl p-4 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <CardTitle className="text-2xl font-bold text-black dark:text-white">
                        {exp.role}
                    </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col gap-y-6 mt-2">
                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                    >
                        {exp.description}
                    </motion.p>

                    {/* Highlights */}
                    {exp.highlights.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-y-2"
                        >
                            <h4 className="text-xl font-semibold text-black dark:text-white mb-2 sm:mb-3">
                                Key Contributions:
                            </h4>
                            <ul className="list-disc pl-4 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                                {exp.highlights.map((point, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                    >
                                        <span className="text-gray-800 dark:text-gray-100">{point}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Skills */}
                    {exp.skills.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col gap-y-2"
                        >
                            <h4 className="text-xl font-semibold text-black dark:text-white mb-2 sm:mb-3">
                                Technologies:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.6 + i * 0.1 }}
                                    >
                                        <Badge className="bg-gray-100 dark:bg-white text-black hover:bg-neutral-200 transition-colors duration-200">
                                            {skill}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
};
