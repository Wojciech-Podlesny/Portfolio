"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp } from "@/lib/animations";
import { useTranslations } from "next-intl";
import { Profile } from "@/components/Profile";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { socialLinks } from "@/data/biography";
import NextLink from "next/link";

export const About = () => {
    const shouldReduceMotion = useReducedMotion();
    const t = useTranslations("about");

    return (
        <section
            id="about"
            className="px-4 py-12 md:px-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased relative"
        >
            <SectionHeading title={t("title")} />
            <motion.div
                variants={shouldReduceMotion ? undefined : fadeUp}
                initial={shouldReduceMotion ? undefined : "hidden"}
                whileInView={shouldReduceMotion ? undefined : "show"}
                viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.2 }}
            >
                <TextAnimate
                    as="p"
                    className="text-gray-800 dark:text-gray-200 px-2 md:px-12 text-2xl text-center mb-16"
                >
                    {t("intro")}
                </TextAnimate>
            </motion.div>
            <div className="flex flex-col-reverse md:flex-row md:justify-between gap-12 md:mx-16 items-center">
                <div className="md:w-1/2 w-full space-y-6 flex flex-col justify-between h-full">
                    <div>
                        <blockquote className="text-base md:text-lg italic text-zinc-600 dark:text-zinc-400 mb-4 border-l border-zinc-300 dark:border-zinc-700 pl-4">
                            {t("quote")}
                        </blockquote>
                        <motion.p
                            variants={shouldReduceMotion ? undefined : fadeUp}
                            initial={shouldReduceMotion ? undefined : "hidden"}
                            whileInView={shouldReduceMotion ? undefined : "show"}
                            viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.2 }}
                            className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 space-y-4"
                        >
                            {t("description")}
                        </motion.p>
                    </div>
                    <ul className="flex justify-center md:justify-start items-center gap-6 mt-8">
                        {socialLinks.map(({ href, label, icon: Icon }) => (
                            <li key={label}>
                                <NextLink
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none"
                                >
                                    <Icon size={35} className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none" />
                                </NextLink>
                            </li>
                        ))}
                        <Link
                            href="mailto:wojciech.podlesny1@gmail.com"
                            aria-label="Email"
                        >
                            <MdOutlineEmail size={35} className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none" />
                        </Link>
                    </ul>
                </div>
                <motion.div
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <div className="rounded-xl overflow-hidden max-w-full">
                        <Profile />
                    </div>
                </motion.div>
            </div>
            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent dark:via-white/10"></div>
        </section>
    );
};