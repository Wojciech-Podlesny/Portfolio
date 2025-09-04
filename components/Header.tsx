"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Profile } from "./Profile";
import { biography, socialLinks } from "@/data/biography";
import { Highlight } from "@/components/ui/hero-highlight";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import { useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";
import {ParticlesBackground} from "@/components/ParticlesBackground";
import NextLink from "next/link";

export const Header = () => {
    const prefersReducedMotion = useReducedMotion();
    const t = useTranslations("header");

    return (
        <header className="relative flex flex-col items-center justify-center h-screen w-full">
            <ParticlesBackground />
            <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 1 }}
                className="z-10 flex flex-col gap-2 mt-100 items-center max-w-4xl"
            >
                <Profile />
                <p className="text-2xl mt-8 mb-4 text-gray-800 dark:text-gray-300">
                    {t("hello")}
                </p>
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4 text-black dark:text-white text-center">
                    {t("iam", { name: biography.name })}
                </h1>
                <h2 className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl leading-snug text-center">
                    {t.rich("role", {
                        next: (chunks) => <Highlight>{chunks}</Highlight>,
                        react: (chunks) => <Highlight>{chunks}</Highlight>,
                        aurora: (chunks) => <AuroraText>{chunks}</AuroraText>,
                    })}
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button asChild>
                        <Button asChild>
                            <Link href="/contact">{t("contact")}</Link>
                        </Button>
                    </Button>
                    <Button asChild>
                        <Link href="/projects">{t("projects")}</Link>
                    </Button>
                </div>
                <ul className="flex justify-center gap-4 text-2xl  mb-84 md:mb-96 text-black dark:text-white">
                    {socialLinks.map(({ href, label, icon: Icon }) => (
                        <li key={href}>
                            <NextLink
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t(label)}
                            >
                                <Icon size={35} className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none"   />
                            </NextLink>
                        </li>
                    ))}
                </ul>

            </motion.div>

        </header>
    );
};
