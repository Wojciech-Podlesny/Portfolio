// "use client";
//
// import React, { useState, useCallback, useMemo } from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { servicesData } from "@/data/services";
// import { SectionUseTechnologies } from "@/components/SectionUseTechnologies";
// import { SectionHeading } from "@/components/SectionHeading";
// import { Service } from "@/types/services";
// import { ServiceModal } from "@/components/ServicesModal";
// import {ServiceCard} from "@/components/ServicesCard";
//
//
// export const Services = () => {
//     const [selectedService, setSelectedService] = useState<Service | null>(null);
//     const shouldReduceMotion = useReducedMotion();
//
//     const handleSelect = useCallback((svc: Service) => setSelectedService(svc), []);
//     const handleClose = useCallback(() => setSelectedService(null), []);
//
//     const listVariants = useMemo(
//         () =>
//             shouldReduceMotion
//                 ? undefined
//                 : { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
//         [shouldReduceMotion]
//     );
//
//     const fadeUp = useMemo(
//         () =>
//             shouldReduceMotion
//                 ? undefined
//                 : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } },
//         [shouldReduceMotion]
//     );
//
//     return (
//         <section id="services" className="relative bg-[#141a23] bg-grid-white/[0.03]">
//             <div className="px-4 md:px-10 py-20 relative">
//                 <SectionHeading title="SERVICES" />
//
//                 <motion.h2
//                     className="text-gray-300 pb-12 md:pb-20 text-2xl text-center max-w-3xl mx-auto"
//                     initial={fadeUp?.initial}
//                     whileInView={fadeUp?.animate}
//                     transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
//                     viewport={{ once: true, amount: 0.25 }}
//                 >
//                     I offer a range of services to help you build and maintain your web applications!
//                 </motion.h2>
//
//                 <motion.ul
//                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
//                     initial="hidden"
//                     whileInView="show"
//                     viewport={{ once: true, amount: 0.2 }}
//                     variants={listVariants}
//                 >
//                     {servicesData.map((service, index) => (
//                         <li key={service.id} role="listitem" className="flex justify-center">
//                             <ServiceCard
//                                 service={service}
//                                 index={index}
//                                 onSelect={handleSelect}
//                             />
//                         </li>
//                     ))}
//                 </motion.ul>
//
//                 <ServiceModal selected={selectedService} onClose={handleClose} />
//             </div>
//
//             <div className="px-4">
//                 <motion.h2
//                     className="text-center text-3xl md:text-4xl font-semibold pt-4 md:pt-0"
//                     initial={fadeUp?.initial}
//                     whileInView={fadeUp?.animate}
//                     transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
//                     viewport={{ once: true, amount: 0.25 }}
//                 >
//           <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
//             Technologies I’ve used in projects
//           </span>
//                 </motion.h2>
//
//                 <div className="mx-auto mt-4 mb-8 h-px w-24 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
//
//                 <div className="mx-auto max-w-6xl pb-24">
//                     <SectionUseTechnologies />
//                 </div>
//             </div>
//         </section>
//     );
// };
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

export const Services = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const shouldReduceMotion = useReducedMotion();

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
            className="relative bg-white dark:bg-[#141a23] bg-grid-black/[0.03] dark:bg-grid-white/[0.02] transition-colors"
        >
            <div className="px-4 md:px-10 py-20 relative">
                <SectionHeading title="SERVICES" />

                <TextAnimate as="p" className="text-gray-800 dark:text-gray-300 mb-12 text-2xl text-center px-4">
                    I offer a range of services to help you build and maintain your web applications!
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
            Technologies I’ve used in projects
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
