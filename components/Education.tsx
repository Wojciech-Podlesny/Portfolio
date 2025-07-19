"use client";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education } from "../data/education";
import Image from "next/image";
import { motion } from "framer-motion";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";


export const Education = () => {
    return (
        <div className="text-center bg-gradient-to-b from-black via-gray-900 to-black text-white antialiased py-12 px-4 sm:px-6" >
            <div className="flex items-center justify-center my-6 pb-14">
                <div className="flex-grow h-px bg-indigo-500 max-w-[500px]" />
                <h1 className="text-white px-12 text-4xl">EDUCATION</h1>
                <div className="flex-grow h-px bg-indigo-500 max-w-[500px]" />
            </div>

            <div className="m-12">
                <h2 className="text-gray-300 px-12 text-2xl text-center">
                    I believe that continuous learning is key to staying relevant. Here is a selection of academic and professional courses that shaped my skills.
                </h2>
            </div>

            <VerticalTimeline>
                {education.map((item, index) => (
                    <VerticalTimelineElement
                        key={item.id}
                        date={item.date}
                        iconStyle={{
                            background: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                        }}
                        icon={
                            <Image
                                src={item.img}
                                alt="icon"
                                width={60}
                                height={60}
                                className="rounded-full"
                            />
                        }
                        contentStyle={{
                            background: "transparent",
                            padding: 0,
                            boxShadow: "none",
                        }}
                        contentArrowStyle={{ display: "none" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <Card className="bg-gray-800 text-white shadow-none border-none">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <Image
                                        src={item.img}
                                        alt={item.title || item.school || "Education"}
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <CardTitle className="text-white text-lg">
                                            {item.title || item.school}
                                        </CardTitle>
                                        <CardDescription className="text-gray-400 text-sm">
                                            {item.date}
                                        </CardDescription>
                                    </div>
                                </CardHeader>

                                <CardContent className="pt-2">
                                    <p className="text-gray-300 text-sm mb-3">{item.description}</p>

                                    {item.type === "course" && (
                                        <Accordion type="single" collapsible>
                                            <AccordionItem value="details">
                                                <AccordionTrigger className="text-sm">
                                                    Course Details
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    {item.modules && (
                                                        <div className="mb-3">
                                                            <p className="text-white font-medium text-sm mb-1">
                                                                Modules:
                                                            </p>
                                                            <ul className="list-disc pl-5 text-sm text-gray-300">
                                                                {item.modules.map((mod, i) => (
                                                                    <li key={i}>{mod.name}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {item.technologies && (
                                                        <div className="mb-2">
                                                            <p className="text-white font-medium text-sm mb-1">
                                                                Technologies:
                                                            </p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {item.technologies.map((tech, i) => (
                                                                    <Badge
                                                                        key={i}
                                                                        variant="secondary"
                                                                        className="text-xs"
                                                                    >
                                                                        {tech.name}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {item.certificateUrl && (
                                                        <button

                                                            className="mt-2 p-0 h-auto text-blue-400 text-sm"
                                                        >
                                                            <Link
                                                                href={item.certificateUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                View Certificate
                                                            </Link>
                                                        </button>
                                                    )}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

/*
"use client";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { education } from "../data/education";
import Image from "next/image";
import { motion } from "framer-motion";

import { EducationCard } from "./EducationCard";

export const Education = () => {
    return (
        <div className="text-center bg-gradient-to-b from-black via-gray-900 to-black text-white antialiased py-12 px-4 sm:px-6">
            {/!* Header *!/}
            <div className="flex items-center justify-center my-6 pb-14">
                <div className="flex-grow h-px bg-indigo-500 max-w-[500px]" />
                <h1 className="text-white px-12 text-4xl">EDUCATION</h1>
                <div className="flex-grow h-px bg-indigo-500 max-w-[500px]" />
            </div>

            {/!* Subheading *!/}
            <div className="m-12">
                <h2 className="text-gray-300 px-12 text-2xl text-center">
                    I believe that continuous learning is key to staying relevant. Here is a selection of academic and professional courses that shaped my skills.
                </h2>
            </div>

            {/!* Timeline *!/}
            <VerticalTimeline>
                {education.map((item, index) => (
                    <VerticalTimelineElement
                        key={item.id}
                        date={item.date}
                        iconStyle={{
                            background: "#ffffff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                        }}
                        icon={
                            <Image
                                src={item.img}
                                alt="icon"
                                width={60}
                                height={60}
                                className="rounded-full"
                            />
                        }
                        contentStyle={{
                            background: "transparent",
                            padding: 0,
                            boxShadow: "none",
                        }}
                        contentArrowStyle={{ display: "none" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <EducationCard item={item} />
                        </motion.div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};
*/
