"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { EducationItem } from "@/types/education";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

export const EducationCard = ({image, school, title, degree, date, description, technologies,highlights, certificateUrl}: EducationItem) => {
    const t = useTranslations("education");
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <Card className="bg-white dark:bg-[#1E1E2A]  text-black dark:text-white border border-gray-200 dark:border-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 transition-shadow">
                <CardContent className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-3 min-w-0 space-y-3">
                            {image && (
                                <div className="hidden sm:block">
                                    <Image
                                        src={image}
                                        alt={t(school ?? title ?? degree ?? "title")}
                                        width={40}
                                        height={40}
                                        sizes="40px"
                                        className="rounded-full object-cover w-10 h-10 flex-shrink-0"
                                    />
                                </div>
                            )}
                            <div className="space-y-3 min-w-0">
                                <h3 className="text-base sm:text-lg lg:text-xl font-semibold truncate">
                                    {degree ? t(degree) : title ? t(title) : ""}
                                </h3>

                                {school && (
                                    <div className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-white/80 min-w-0">
                                        <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
                                        <span className="truncate">{t(school)}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        {date && (
                            <div
                                className="inline-flex items-center gap-1.5 text-xs sm:text-sm bg-gray-100 dark:bg-white text-black font-medium px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full w-fit self-start"
                                aria-label="Study period"
                            >
                                <Calendar className="w-4 h-4" />
                                <span className="whitespace-nowrap">{date}</span>
                            </div>
                        )}
                    </div>
                    {description && (
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t(description)}
                        </p>
                    )}

                    {technologies && (
                        <div className="pt-1">
                            <div className="flex flex-wrap gap-2" role="list" aria-label="Used technologies">
                                {(t.raw(technologies)).map((tech: string, idx: number) => (
                                    <motion.div
                                        key={`${tech}-${idx}`}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.04 * idx, duration: 0.2, ease: "easeOut" }}
                                    >
                                        <Badge className="bg-gray-100 text-black dark:bg-white dark:text-black hover:bg-neutral-200 dark:hover:bg-white/90 transition-colors duration-200">
                                            {tech}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                    {t.raw(highlights).length > 0 && (
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="highlights">
                                <AccordionTrigger className="text-base sm:text-lg font-semibold text-black dark:text-neutral-100 pl-254">

                                </AccordionTrigger>
                                <AccordionContent>
                                    <h4 className="text-base sm:text-lg font-semibold pb-2 text-neutral-900 dark:text-neutral-100">
                                        {t("highlights")}
                                    </h4>
                                    <ul className="list-disc pl-5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 space-y-1.5">
                                        {t.raw(highlights).map((point: string, i: number) => (
                                            <li key={i}>
                                                <span className="text-neutral-800 dark:text-neutral-100">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {certificateUrl && (
                                        <Link
                                            href={certificateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-6 inline-block"
                                        >
                                            <Button className="text-sm sm:text-base text-black hover:underline w-full">
                                                {t("viewCertificate")}
                                            </Button>
                                        </Link>
                                    )}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    )}

                </CardContent>
            </Card>
        </motion.div>
    );
};
