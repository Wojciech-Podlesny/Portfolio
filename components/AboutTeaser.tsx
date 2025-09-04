'use client'

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { fadeUp } from "@/lib/animations";
import { useTranslations } from "next-intl";
import {CounterGrid} from "@/components/CounterGrid";
import {CodeBlocks} from "@/components/CodeBlock";
import {Button} from "@/components/ui/button";
import {Link} from "@/i18n/routing";

export const AboutTeaser = () => {
    const shouldReduceMotion = useReducedMotion();
    const t = useTranslations("whoIam");
    return (
        <section
            id="about"
            className="px-4 py-12 md:px-12
       dark:bg-[#12161d];
        text-gray-900 dark:text-gray-100 antialiased relative"
        >
            <SectionHeading title={t("title")}/>

            <div className="flex flex-col md:flex-row md:justify-between gap-24 md:mx-16">
                <div className="md:w-1/2 w-full space-y-6">
                    <motion.p
                        variants={shouldReduceMotion ? undefined : fadeUp}
                        initial={shouldReduceMotion ? undefined : "hidden"}
                        whileInView={shouldReduceMotion ? undefined : "show"}
                        viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.2 }}
                        className="text-lg leading-relaxed text-gray-800 dark:text-gray-200"
                    >
                        {t.rich("description", {
                            strong: (chunks) => <strong>{chunks}</strong>,
                             br: () => <br />
                         })}
                    </motion.p>

                    <CounterGrid />
                </div>
                <motion.div
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <div className="rounded-xl shadow-lg overflow-hidden max-w-full">
                        <CodeBlocks />

                    </div>
                </motion.div>
            </div>
            <div className=" flex justify-center items-center mt-12">
                <Button asChild>
                    <Link href="/about">{t("readMore")}</Link>
                </Button>
            </div>
            <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent dark:via-white/10"></div>
        </section>
    );
};