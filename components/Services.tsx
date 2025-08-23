"use client";

import React, { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { servicesData } from "@/data/services";
import { SectionUseTechnologies } from "@/components/SectionUseTechnologies";
import { SectionHeading } from "@/components/SectionHeading";
import { Service } from "@/types/services";
import { ServiceModal } from "@/components/ServicesModal";
import ServiceCard from "@/components/ServicesCard";


export const Services = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const shouldReduceMotion = useReducedMotion();

    const handleSelect = useCallback((svc: Service) => setSelectedService(svc), []);
    const handleClose = useCallback(() => setSelectedService(null), []);

    return (
        <section id="services" className="relative bg-[#141a23] bg-grid-white/[0.03]">
            <div className="px-4 md:px-10 py-20 relative">
                <SectionHeading title="SERVICES" />

                <motion.h2
                    className="text-gray-300 pb-12 md:pb-20 text-2xl text-center max-w-3xl mx-auto"
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
                    viewport={{ once: true, amount: 0.25 }}
                >
                    I offer a range of services to help you build and maintain your web applications!
                </motion.h2>

                <motion.div
                    role="list"
                    className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-6 md:gap-8 max-w-7xl mx-auto"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={
                        shouldReduceMotion ? undefined : { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
                    }
                >
                    {servicesData.map((service, index) => (
                        <div key={service.id} className="w-full max-w-xs md:w-1/3 flex justify-center">
                            <ServiceCard service={service} index={index} onSelect={handleSelect} />
                        </div>
                    ))}
                </motion.div>

                {/* Modal z detalami usług */}
                <ServiceModal selected={selectedService} onClose={handleClose} />
            </div>

            <div className="px-4">
                <motion.h2
                    className="text-center text-3xl md:text-4xl font-semibold pt-4 md:pt-0"
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                        Technologies I’ve used in projects
                    </span>
                </motion.h2>

                <div className="mx-auto mt-4 mb-8 h-px w-24 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

                <div className="mx-auto max-w-6xl pb-24">
                    <SectionUseTechnologies />
                </div>
            </div>
        </section>
    );
};
