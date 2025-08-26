// "use client";
//
// import { motion, useReducedMotion } from "framer-motion";
// import Image from "next/image";
// import { CheckCircle } from "lucide-react";
// import { Service } from "@/types/services";
// import { useRouter } from "next/navigation";
// import {
//     Dialog,
//     DialogContent,
//     DialogHeader,
//     DialogTitle,
//     DialogDescription,
//     DialogFooter,
// } from "@/components/ui/dialog";
// import {Button} from "@/components/ui/button";
// import Link from "next/link";
//
// export const ServiceModal = ({
//                                  selected,
//                                  onClose,
//                              }: {
//     selected: Service | null;
//     onClose: () => void;
// }) => {
//     const router = useRouter();
//     const open = !!selected;
//     const rdm = useReducedMotion();
//
//     const handleContact = () => {
//         onClose();
//         router.push("/#contact");
//     };
//
//     return (
//         <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
//             <DialogContent className="max-w-none sm:!max-w-[56rem] w-[calc(100vw-2rem)] sm:w-[min(90vw,56rem)] bg-[#0B0B12] text-white border border-white/10">
//                 {selected && (
//                     <motion.div
//                         initial={rdm ? undefined : { opacity: 0, scale: 0.96 }}
//                         animate={rdm ? undefined : { opacity: 1, scale: 1 }}
//                         transition={{ duration: rdm ? 0 : 0.25 }}
//                     >
//                         <DialogHeader className="mb-4">
//                             <DialogTitle className="text-3xl font-bold text-center">
//                                 Discover more about{" "}
//                                 <span className="text-white px-2 rounded">{selected.title}</span>
//                             </DialogTitle>
//                             <DialogDescription className="sr-only">
//                                 Details and features of {selected.title}
//                             </DialogDescription>
//                         </DialogHeader>
//
//
//                         <div className="flex flex-col sm:flex-row overflow-x-auto gap-4 py-2 px-1 mb-6 scrollbar-hide justify-center items-center">
//                             {selected.images.map((img, index) => (
//                                 <motion.div
//                                     key={`${img}-${index}`}
//                                     className="relative h-40 w-64 rounded-xl overflow-hidden shadow-md"
//                                     initial={rdm ? undefined : { opacity: 0 }}
//                                     animate={rdm ? undefined : { opacity: 1 }}
//                                     transition={rdm ? undefined : { delay: 0.08 * index }}
//                                 >
//                                     <Image
//                                         src={img}
//                                         alt={selected.title}
//                                         fill
//                                         className="object-cover"
//                                         sizes="256px"
//                                         priority={index === 0}
//                                     />
//                                 </motion.div>
//                             ))}
//                         </div>
//
//
//                         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-white text-sm">
//                             {selected.features.map((feature, i) => (
//                                 <div key={`${feature}-${i}`} className="flex items-center gap-2">
//                                     <CheckCircle className="w-4 h-4 text-green-500" />
//                                     {feature}
//                                 </div>
//                             ))}
//                         </div>
//
//                         <p className="text-center text-white mt-4">{selected.details}</p>
//
//                         <DialogFooter className="mt-10">
//                             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                                 <Button
//                                     onClick={handleContact}
//                                     asChild
//                                     variant="magic"
//                                     className="border border-white text-white font-semibold px-6 py-2 rounded-full transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
//                                 >
//                                     <Link href="/#contact" aria-label="Kontakt">Contact me</Link>
//                                 </Button>
//                             </div>
//                         </DialogFooter>
//                     </motion.div>
//                 )}
//             </DialogContent>
//         </Dialog>
//     );
// };


//dark
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Service } from "@/types/services";
import { useRouter } from "next/navigation";
import {
    Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React from "react";

const containerVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

const featureCardVariants = {
    initial: { opacity: 0, y: 8 },
    animate: (i: number) => ({
        opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.2 },
    }),
};

type FeatureItem =
    | string
    | { title: string; description?: string };

export const ServiceModal = ({
                                 selected,
                                 onClose,
                             }: { selected: Service | null; onClose: () => void }) => {
    const router = useRouter();
    const open = !!selected;
    const rdm = useReducedMotion();

    const handleContact = () => {
        onClose();
        router.push("/#contact");
    };


    const normalizeFeatures = (features: FeatureItem[] = []) =>
        features.map((f) =>
            typeof f === "string" ? { title: f, description: undefined } : f
        );

    return (
        <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
            <DialogContent
                className="max-w-none sm:!max-w-[56rem] w-[calc(100vw-2rem)] sm:w-[min(90vw,56rem)]
                   bg-white dark:bg-[#0B0B12] text-gray-900 dark:text-white
                   border border-gray-200 dark:border-white/10"
            >
                {selected && (
                    <motion.div
                        initial={rdm ? undefined : "initial"}
                        animate={rdm ? undefined : "animate"}
                        variants={containerVariants}
                    >
                        <DialogHeader className="mb-4">
                            <DialogTitle className="text-3xl font-bold text-center leading-tight">
                                Discover more about{" "}
                                <span className="px-2 py-0.5 rounded bg-muted/40">
                  {selected.title}
                </span>
                            </DialogTitle>
                            <DialogDescription className="sr-only">
                                Details and features of {selected.title}
                            </DialogDescription>
                        </DialogHeader>

                        <div
                            className="relative flex gap-4 py-2 px-1 mb-6 justify-center items-center overflow-x-auto"
                            role="group"
                            aria-roledescription="carousel"
                            aria-label={`${selected.title} images`}
                        >
                            {selected.images.map((img, index) => (
                                <motion.div
                                    key={index}
                                    className="relative w-64 aspect-[16/10] rounded-xl overflow-hidden shadow-md shrink-0 focus:outline-none focus:ring-2 focus:ring-ring"
                                    initial={rdm ? undefined : { opacity: 0 }}
                                    animate={rdm ? undefined : { opacity: 1 }}
                                    transition={rdm ? undefined : { delay: 0.06 * index }}
                                    tabIndex={0}
                                >
                                    <Image
                                        src={img}
                                        alt={`${selected.title} – image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 256px"
                                        priority={index === 0}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <section
                            aria-labelledby="service-description"
                            className="mb-8"
                        >
                            <h2 id="service-description" className="sr-only">Description</h2>
                            <p className="text-center text-lg text-gray-700 dark:text-gray-100 max-w-prose mx-auto">
                                {selected.details}
                            </p>
                        </section>

                        <section aria-labelledby="service-features">
                            <h2 id="service-features" className="text-xl font-semibold text-center mb-4">
                                Key benefits
                            </h2>

                            <div
                                className="grid gap-6
                           [grid-template-columns:repeat(auto-fit,minmax(14rem,1fr))]"
                            >
                                {normalizeFeatures(selected.features as unknown as FeatureItem[]).map((feature, i) => (
                                    <motion.article
                                        key={`${feature.title}-${i}`}
                                        className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#101018] p-4 shadow-sm"
                                        initial={rdm ? undefined : "initial"}
                                        whileInView={rdm ? undefined : "animate"}
                                        viewport={{ once: true, amount: 0.2 }}
                                        variants={featureCardVariants}
                                        custom={i}
                                    >
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 mt-0.5 text-green-500" aria-hidden="true" />
                                            <div>
                                                <h3 className="font-medium leading-snug">
                                                    {feature.title}
                                                </h3>
                                                {feature.description ? (
                                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                                                        {feature.description}
                                                    </p>
                                                ) : (
                                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </section>

                        <DialogFooter className="mt-10 mb-5">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button onClick={handleContact} aria-label="Go to Contact">
                                   Contact me
                                </Button>
                            </div>
                        </DialogFooter>
                    </motion.div>
                )}
            </DialogContent>
        </Dialog>
    );
};
//
// "use client";
//
// import { motion, useReducedMotion } from "framer-motion";
// import Image from "next/image";
// import { CheckCircle } from "lucide-react";
// import { Service } from "@/types/services";
// import { useRouter } from "next/navigation";
// import {
//     Dialog,
//     DialogContent,
//     DialogHeader,
//     DialogTitle,
//     DialogDescription,
//     DialogFooter,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import React from "react";
//
// const containerVariants = {
//     initial: { opacity: 0, scale: 0.98 },
//     animate: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
// };
//
// const featureCardVariants = {
//     initial: { opacity: 0, y: 8 },
//     animate: (i: number) => ({
//         opacity: 1, y: 0, transition: { delay: 0.05 * i, duration: 0.2 },
//     }),
// };
//
// type FeatureItem = string | { title: string; description?: string };
//
// export const ServiceModal = ({
//                                  selected,
//                                  onClose,
//                              }: {
//     selected: Service | null;
//     onClose: () => void;
// }) => {
//     const router = useRouter();
//     const open = !!selected;
//     const rdm = useReducedMotion();
//
//     const handleContact = () => {
//         onClose();
//         router.push("/#contact");
//     };
//
//     const normalizeFeatures = (features: FeatureItem[] = []) =>
//         features.map((f) => (typeof f === "string" ? { title: f } : f));
//
//     return (
//         <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
//             <DialogContent
//                 className="max-w-none sm:!max-w-[56rem] w-[calc(100vw-2rem)] sm:w-[min(92vw,56rem)]
//                    bg-white dark:bg-[#0B0B12] text-gray-900 dark:text-white
//                    border border-gray-200 dark:border-white/10 p-0"
//             >
//                 {selected && (
//                     <motion.div
//                         initial={rdm ? undefined : "initial"}
//                         animate={rdm ? undefined : "animate"}
//                         variants={containerVariants}
//                         className="max-w-4xl mx-auto px-5 sm:px-6 py-6"
//                     >
//                         <DialogHeader className="mb-5">
//                             <DialogTitle className="text-2xl sm:text-3xl font-bold text-center leading-tight">
//                                 Discover more about{" "}
//                                 <span className="px-2 py-0.5 rounded bg-muted/30">
//                   {selected.title}
//                 </span>
//                             </DialogTitle>
//                             <DialogDescription className="sr-only">
//                                 Details and features of {selected.title}
//                             </DialogDescription>
//                         </DialogHeader>
//
//                         {/* MEDIA: 1 obraz -> hero, więcej -> karuzela */}
//                         {selected.images.length <= 1 ? (
//                             <div className="mx-auto mb-7 w-full max-w-2xl">
//                                 <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5">
//                                     <Image
//                                         src={selected.images[0]}
//                                         alt={`${selected.title} – preview`}
//                                         fill
//                                         className="object-cover"
//                                         sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 768px"
//                                         priority
//                                     />
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="relative mb-7">
//                                 <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/80 dark:from-[#0B0B12]/80 to-transparent rounded-l-xl" />
//                                 <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/80 dark:from-[#0B0B12]/80 to-transparent rounded-r-xl" />
//
//                                 <div
//                                     className="relative flex gap-4 px-2 py-2 overflow-x-auto
//                              scroll-px-6 snap-x snap-mandatory justify-center"
//                                     role="group"
//                                     aria-roledescription="carousel"
//                                     aria-label={`${selected.title} images`}
//                                 >
//                                     {selected.images.map((img, index) => (
//                                         <motion.div
//                                             key={img ?? index}
//                                             className="relative w-[16rem] md:w-[18rem]
//                                  aspect-[4/3] rounded-2xl overflow-hidden shadow-lg
//                                  shrink-0 snap-start focus:outline-none focus:ring-2 focus:ring-ring"
//                                             initial={rdm ? undefined : { opacity: 0 }}
//                                             animate={rdm ? undefined : { opacity: 1 }}
//                                             transition={rdm ? undefined : { delay: 0.05 * index }}
//                                             tabIndex={0}
//                                         >
//                                             <Image
//                                                 src={img}
//                                                 alt={`${selected.title} – image ${index + 1}`}
//                                                 fill
//                                                 className="object-cover"
//                                                 sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 288px"
//                                                 priority={index === 0}
//                                             />
//                                         </motion.div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}
//
//                         {/* OPIS */}
//                         <section aria-labelledby="service-description" className="mb-8">
//                             <h2 id="service-description" className="sr-only">Description</h2>
//                             <p className="text-center text-base sm:text-lg text-gray-700 dark:text-gray-100 max-w-prose mx-auto px-3 [text-wrap:balance] leading-relaxed">
//                                 {selected.details}
//                             </p>
//                         </section>
//
//                         {/* BENEFITY */}
//                         <section aria-labelledby="service-features" className="mb-10">
//                             <h2 id="service-features" className="text-lg sm:text-xl font-semibold text-center mb-5">
//                                 Key benefits
//                             </h2>
//
//                             <div
//                                 className="grid gap-5
//                            [grid-template-columns:repeat(auto-fit,minmax(14rem,1fr))]"
//                             >
//                                 {normalizeFeatures(selected.features as unknown as FeatureItem[]).map((feature, i) => (
//                                     <motion.article
//                                         key={`${feature.title}-${i}`}
//                                         className="rounded-2xl border border-gray-200 dark:border-white/10
//                                bg-white dark:bg-[#101018] p-4 shadow-sm"
//                                         initial={rdm ? undefined : "initial"}
//                                         whileInView={rdm ? undefined : "animate"}
//                                         viewport={{ once: true, amount: 0.2 }}
//                                         variants={featureCardVariants}
//                                         custom={i}
//                                     >
//                                         <div className="flex items-start gap-3">
//                                             <CheckCircle className="w-5 h-5 mt-0.5 text-green-500" aria-hidden="true" />
//                                             <div>
//                                                 <h3 className="font-medium leading-snug text-gray-900 dark:text-white">
//                                                     {feature.title}
//                                                 </h3>
//                                                 {"description" in feature && feature.description ? (
//                                                     <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
//                                                         {feature.description}
//                                                     </p>
//                                                 ) : null}
//                                             </div>
//                                         </div>
//                                     </motion.article>
//                                 ))}
//                             </div>
//                         </section>
//
//                         <DialogFooter className="mt-6">
//                             <Button
//                                 onClick={handleContact}
//                                 aria-label="Contact me"
//                                 className="px-5 py-4"
//                             >
//                                 Contact me
//                             </Button>
//                         </DialogFooter>
//                     </motion.div>
//                 )}
//             </DialogContent>
//         </Dialog>
//     );
// };
