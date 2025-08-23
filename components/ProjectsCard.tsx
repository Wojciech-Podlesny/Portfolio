"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/types/projects";
import ModalCard from "@/components/ProjectModal";

type Props = Project & { index?: number };

export const ProjectCard: React.FC<Props> = (props) => {
    return (
        <Dialog>
            <ClickableCard {...props} />
            <ModalCard {...props} />
        </Dialog>
    );
};

function ClickableCard(props: Props) {
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

    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            key={id}
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
                duration: shouldReduceMotion ? 0 : 0.35,
                delay: shouldReduceMotion ? 0 : index * 0.08,
            }}
            viewport={{ once: true, amount: 0.25 }}
            className="w-full max-w-sm"
        >
            <DialogTrigger asChild>
                <Card
                    role="button"
                    aria-label={`Open quick view for ${title}`}
                    className="bg-[#1E1E2A] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300
                     hover:-translate-y-2 focus:-translate-y-2 focus:outline-none
                     focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                     cursor-pointer min-h-[24rem] sm:min-h-[28rem] text-left"
                >
                    <CardContent className="flex h-full flex-col gap-3">
                        <div className="relative w-full overflow-hidden rounded-xl aspect-[16/9]">
                            <Image
                                src={image[0]}
                                alt={`${title} cover`}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority
                            />
                            {status && (
                                <span
                                    className={`absolute top-2 right-2 px-2.5 py-1 text-[11px] font-semibold rounded-full shadow-sm
                    ${
                                        status === "in-progress"
                                            ? "bg-yellow-400 text-gray-900"
                                            : status === "completed"
                                                ? "bg-emerald-500 text-white"
                                                : "bg-gray-500 text-white"
                                    }`}
                                >
                  {status === "in-progress"
                      ? "In Progress"
                      : status === "completed"
                          ? "Completed"
                          : "Paused"}
                </span>
                            )}
                        </div>

                        <h3 className="text-white font-semibold text-lg lg:text-xl line-clamp-1">
                            {title}
                        </h3>

                        <p className="text-gray-300 text-sm lg:text-base font-light line-clamp-3">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-1">
                            {technologies.slice(0, 6).map((tech) => (
                                <Badge
                                    key={tech}
                                    className="bg-white text-gray-950 transition-colors hover:bg-indigo-200
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>

                        {preview && (
                            <div className="flex justify-start pt-1">
                                <Link
                                    href={`/projects/${slug}`}
                                    onClick={(e) => e.stopPropagation()} // nie otwieraj modala przy kliknięciu w link
                                    aria-label={`Go to ${title} details`}
                                    className="group text-purple-400 relative inline-block text-base lg:text-lg transition-colors
                             hover:text-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-sm"
                                >
                                    <span className="relative z-10">View Project</span>
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </Link>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </DialogTrigger>
        </motion.div>
    );
}
