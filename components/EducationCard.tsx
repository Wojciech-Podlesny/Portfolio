"use client";

import React from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { EducationItem } from "@/types/education";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";


export const EducationCard = (item: EducationItem) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <Card
                className="
          bg-black text-white border border-gray-800 rounded-xl
          p-4 sm:p-6 lg:p-8 transition-shadow
        "
            >
                <CardContent className="space-y-3 sm:space-y-4">
                    <motion.div
                        custom={0}

                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
                    >
                        <div className="flex items-start gap-3 min-w-0 space-y-3">
                            {item.image ? (
                                <motion.div
                                    custom={0.1}
                                    className="hidden sm:block"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.school || item.title || item.degree || "Institution"}
                                        width={40}
                                        height={40}
                                        sizes="40px"
                                        className="rounded-full object-cover w-10 h-10 flex-shrink-0"
                                        priority={false}
                                    />
                                </motion.div>
                            ) : null}

                            <div className="space-y-3 min-w-0">
                                <motion.h3
                                    custom={0.2}
                                    className="text-base sm:text-lg lg:text-xl font-semibold truncate"
                                >
                                    {item.degree || item.title}
                                </motion.h3>

                                {item.school ? (
                                    <motion.div
                                        custom={0.3}
                                        className="flex items-center text-xs sm:text-sm text-white/80 min-w-0"
                                    >
                                        <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
                                        <span className="truncate">{item.school}</span>
                                    </motion.div>
                                ) : null}
                            </div>
                        </div>

                        <motion.div
                            custom={0.35}

                            className="
                inline-flex items-center gap-1.5 text-xs sm:text-sm
                bg-white text-black font-medium
                px-2.5 py-1.5 sm:px-3 sm:py-1.5
                rounded-full w-fit self-start
              "
                            aria-label="Okres nauki"
                        >
                            <Calendar className="w-4 h-4" />
                            <span className="whitespace-nowrap">{item.date}</span>
                        </motion.div>
                    </motion.div>

                    {item.description ? (
                        <motion.p
                            custom={0.45}
                            initial="hidden"
                            animate="visible"
                            className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-5 sm:line-clamp-none"
                        >
                            {item.description}
                        </motion.p>
                    ) : null}

                    {item.technologies && item.technologies.length > 0 ? (
                        <motion.div
                            custom={0.55}
                            initial="hidden"
                            animate="visible"
                            className="pt-1"
                        >
                            <div
                                className="flex flex-wrap gap-2"
                                role="list"
                                aria-label="Wykorzystane technologie"
                            >
                                {item.technologies.map((tech, idx) => (
                                    <motion.div
                                        key={`${tech.name}-${idx}`}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.04 * idx, duration: 0.2, ease: "easeOut" }}
                                    >
                                        <Badge
                                            role="listitem"
                                            className="
                        relative z-10 bg-white text-black
                        hover:bg-lime-300 transition-colors duration-200
                        whitespace-nowrap
                        will-change-transform
                      "
                                        >
                                            {tech.name}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : null}
                </CardContent>
            </Card>
        </motion.div>
    );
};
