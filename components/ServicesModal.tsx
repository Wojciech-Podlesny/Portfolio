"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Service } from "@/types/services";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export const ServiceModal = ({
                                 selected,
                                 onClose,
                             }: {
    selected: Service | null;
    onClose: () => void;
}) => {
    const router = useRouter();
    const open = !!selected;
    const rdm = useReducedMotion();

    const handleContact = () => {
        onClose();
        router.push("/#contact");
    };

    return (
        <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
            <DialogContent className="max-w-none sm:!max-w-[56rem] w-[calc(100vw-2rem)] sm:w-[min(90vw,56rem)] bg-[#0B0B12] text-white border border-white/10">
                {selected && (
                    <motion.div
                        initial={rdm ? undefined : { opacity: 0, scale: 0.96 }}
                        animate={rdm ? undefined : { opacity: 1, scale: 1 }}
                        transition={{ duration: rdm ? 0 : 0.25 }}
                    >
                        <DialogHeader className="mb-4">
                            <DialogTitle className="text-3xl font-bold text-center">
                                Discover more about{" "}
                                <span className="text-white px-2 rounded">{selected.title}</span>
                            </DialogTitle>
                            <DialogDescription className="sr-only">
                                Details and features of {selected.title}
                            </DialogDescription>
                        </DialogHeader>


                        <div className="flex flex-col sm:flex-row overflow-x-auto gap-4 py-2 px-1 mb-6 scrollbar-hide justify-center items-center">
                            {selected.images.map((img, index) => (
                                <motion.div
                                    key={`${img}-${index}`}
                                    className="relative h-40 w-64 rounded-xl overflow-hidden shadow-md"
                                    initial={rdm ? undefined : { opacity: 0 }}
                                    animate={rdm ? undefined : { opacity: 1 }}
                                    transition={rdm ? undefined : { delay: 0.08 * index }}
                                >
                                    <Image
                                        src={img}
                                        alt={selected.title}
                                        fill
                                        className="object-cover"
                                        sizes="256px"
                                        priority={index === 0}
                                    />
                                </motion.div>
                            ))}
                        </div>


                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-white text-sm">
                            {selected.features.map((feature, i) => (
                                <div key={`${feature}-${i}`} className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-white mt-4">{selected.details}</p>

                        <DialogFooter className="mt-10">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button
                                    onClick={handleContact}
                                    asChild
                                    variant="magic"
                                    className="border border-white text-white font-semibold px-6 py-2 rounded-full transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                                >
                                    <Link href="/#contact" aria-label="Kontakt">Contact me</Link>
                                </Button>
                            </div>
                        </DialogFooter>
                    </motion.div>
                )}
            </DialogContent>
        </Dialog>
    );
};
