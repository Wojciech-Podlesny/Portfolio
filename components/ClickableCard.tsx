"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";
import { Variants } from "motion/react";
import type { Project } from "@/types/projects";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

type Props = Project & { index?: number };

export const ClickableCard = (props: Props)  => {
    const {
        id,
        title,
        description,
        image,
        technologies,
        slug,
        preview,
        status,
        index = 0,
    } = props;

    const t = useTranslations("projects");
    const rdm = useReducedMotion();

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const cover = React.useMemo(() => image?.[0] ?? "/placeholder.png", [image]);

    const statusClass = React.useMemo(
        () =>
            clsx(
                "absolute top-2 right-2 px-2.5 py-1 text-[11px] font-semibold rounded-full shadow-sm",
                status === "in-progress" && "bg-yellow-400 text-gray-900",
                status === "completed" && "bg-emerald-500 text-white",
                status === "paused" && "bg-gray-500 text-white"
            ),
        [status]
    );

    const transition = React.useMemo(
        () => (rdm ? { duration: 0 } : { duration: 0.35, delay: index * 0.08 }),
        [rdm, index]
    );

    const liftClass = React.useMemo(
        () => (!rdm ? "hover:-translate-y-2 focus:-translate-y-2" : ""),
        [rdm]
    );

    const imgHoverClass = React.useMemo(
        () => (!rdm ? "hover:scale-105" : ""),
        [rdm]
    );

    return (
        <motion.div
            key={id}
            variants={!rdm ? fadeUp : undefined}
            initial={!rdm ? "hidden" : undefined}
            whileInView={!rdm ? "show" : undefined}
            transition={transition}
            viewport={{ once: true, amount: 0.25 }}
            className="w-full max-w-sm"
        >
            <DialogTrigger asChild>
                <button
                    type="button"
                    aria-label={t("viewProject")}
                    className="w-full text-left"
                >
                    <Card
                        className={clsx(
                            "bg-white dark:bg-[#1E1E2A] rounded-2xl shadow-md transition-all duration-300 cursor-pointer",
                            liftClass,
                            "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
                            "ring-offset-white dark:ring-offset-[#1E1E2A]",
                            "min-h-[24rem] sm:min-h-[28rem] text-left"
                        )}
                    >
                        <CardContent className="flex h-full flex-col gap-4">
                            <div className="relative w-full overflow-hidden rounded-xl aspect-[16/9]">
                                <Image
                                    src={cover}
                                    alt={t(title)}
                                    fill
                                    className={clsx(
                                        "object-cover transition-transform duration-300",
                                        imgHoverClass
                                    )}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    priority={index < 3}
                                />
                                {status && (<span className={statusClass}>{status === "in-progress" ? t("status.inProgress") : status === "completed" ? t("status.completed") : t("status.paused")}</span>
                                )}
                            </div>

                            <h3 className="text-gray-900 dark:text-white font-semibold text-lg lg:text-xl line-clamp-1">
                                {t(title)}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base font-light line-clamp-3">
                                {t(description)}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {(technologies.map((tech) => (
                                    <Badge
                                        key={tech}
                                        className="bg-gray-200 dark:bg-white text-gray-950 transition-colors hover:bg-indigo-200 dark:hover:bg-indigo-300
                                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                    >
                                        {tech}
                                    </Badge>
                                )))}
                            </div>

                            {preview && (
                                <div className="flex justify-start pt-2">
                                    <Link
                                        href={{ pathname: "/projects/[slug]", params: { slug } }}
                                        onClick={(e) => e.stopPropagation()}
                                        aria-label={t("viewProject")}
                                        className="group text-purple-600 dark:text-purple-400 relative inline-block text-base lg:text-lg transition-colors
                    hover:text-purple-500 dark:hover:text-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-sm"
                                    >
                                        <span className="relative z-10">{t("viewProject")}</span>
                                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </Link>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </button>
            </DialogTrigger>
        </motion.div>
    );
}