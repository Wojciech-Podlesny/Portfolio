"use client";

import React, { useState, useCallback, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { servicesData } from "@/data/services";
import { SectionUseTechnologies } from "@/components/SectionUseTechnologies";
import { SectionHeading } from "@/components/SectionHeading";
import { Service } from "@/types/services";
import { ServiceModal } from "@/components/ServicesModal";
import { ServiceCard } from "@/components/ServicesCard";
import {TextAnimate} from "@/components/magicui/text-animate";
import {useTranslations} from "next-intl";

export const Services = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const shouldReduceMotion = useReducedMotion();
    const t = useTranslations("services")
    const handleSelect = useCallback((svc: Service) => setSelectedService(svc), []);
    const handleClose = useCallback(() => setSelectedService(null), []);

    const listVariants = useMemo(
        () =>
            shouldReduceMotion
                ? undefined
                : { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
        [shouldReduceMotion]
    );

    const fadeUp = useMemo(
        () =>
            shouldReduceMotion
                ? undefined
                : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } },
        [shouldReduceMotion]
    );

    return (
        <section
            id="services"
            className="relative bg-white dark:bg-gray-900 transition-colors"
        >
            <div className="px-4 md:px-10 py-20 relative">
                <SectionHeading title={t("title")} />

                <TextAnimate as="p" className="text-gray-800 dark:text-gray-300 mb-12 text-2xl text-center px-4">
                    {t("intro")}
                </TextAnimate>

                <motion.ul
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={listVariants}
                >
                    {servicesData.map((service, index) => (
                        <li key={service.id} role="listitem" className="flex justify-center">
                            <ServiceCard
                                service={service}
                                index={index}
                                onSelect={handleSelect}
                            />
                        </li>
                    ))}
                </motion.ul>

                <ServiceModal selected={selectedService} onClose={handleClose} />
            </div>

            <div className="px-4">
                <motion.h3
                    className="text-center text-3xl md:text-4xl font-semibold pt-4 md:pt-0 text-gray-800 dark:text-white"
                    initial={fadeUp?.initial}
                    whileInView={fadeUp?.animate}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
                    viewport={{ once: true, amount: 0.25 }}
                >
          <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-teal-300 bg-clip-text text-transparent">
            {t("technologiesTitle")}
          </span>
                </motion.h3>

                <div className="mx-auto mt-4 mb-8 h-px w-24 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

                <div className="mx-auto max-w-6xl pb-24">
                    <SectionUseTechnologies />
                </div>
            </div>
        </section>
    );
};
