"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Profile } from "./Profile";
import { Spotlight } from "./ui/Spotlight";
import { biography } from "@/data/biography";
import { MagicButton } from "@/components/MagicButton";
import { Highlight } from "@/components/ui/hero-highlight";
import { AuroraText } from "@/components/magicui/aurora-text";
import { GithubIcon, LinkedinIcon } from "@/data/icon";

export const Header = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div
            className="relative flex flex-col items-center justify-center h-screen w-full overflow-hidden
      bg-[#0c0f14] bg-grid-white/[0.04] text-center px-4"
        >
            <div
                className="absolute inset-0 pointer-events-none select-none
          bg-[size:40px_40px]
          bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
            />

            {/* Spotlight */}
            <Spotlight className="absolute -top-40 left-0 md:-top-20 md:left-60" fill="white" />

            {/* Treść główna */}
            <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 1 }}
                className="z-10 flex flex-col gap-4 items-center max-w-4xl"
            >
                <Profile />

                <p className="text-2xl mt-8 mb-4 text-gray-700 dark:text-gray-300">Hello,</p>

                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4 text-black dark:text-white">
                    I am {biography.name}
                </h1>

                <h2 className="text-xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-snug">
                    <AuroraText>Frontend Developer</AuroraText> building clean, creative apps with{" "}
                    <Highlight>Next.js</Highlight> and <Highlight>React</Highlight>
                </h2>

                <nav className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                    <Link href="/#contact" aria-label="Contact">
                        <MagicButton title="Contact me" position="center" />
                    </Link>
                    <Link href="/projects" aria-label="Contact">
                        <MagicButton title="View my projects" position="center" />
                    </Link>
                </nav>

                <div className="flex justify-center gap-6 text-2xl mb-6">
                    <Link
                        href="https://linkedin.com/in/wojciech-podlesny"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn – profil"
                        className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none"
                    >
                        <LinkedinIcon />
                    </Link>
                    <Link
                        href="https://github.com/wojciech-podlesny"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub – profil"
                        className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none"
                    >
                        <GithubIcon />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
