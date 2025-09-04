"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Service } from "@/types/services";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";


export const ServiceModal = ({selected, onClose}: { selected: Service | null; onClose: () => void }) => {
    const open = !!selected;
    const rdm = useReducedMotion();
    const t = useTranslations("services.items");
    const t2 = useTranslations("services")


    return (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
            <DialogContent className="max-w-3xl bg-white dark:bg-[#0B0B12] text-gray-900 dark:text-white">
                {selected && (
                    <motion.div initial={rdm ? undefined : { opacity: 0, scale: 0.95 }} animate={rdm ? undefined : { opacity: 1, scale: 1 }}>
                        <DialogHeader>
                            <DialogTitle className="text-3xl font-bold text-center">
                                {t(`${selected.key}.title`)}
                            </DialogTitle>
                            <DialogDescription className="sr-only">
                                {t(`${selected.key}.description`)}
                            </DialogDescription>
                        </DialogHeader>

                        <div className="flex gap-4 overflow-x-auto py-4 justify-center">
                            {selected.images.map((img, i) => (
                                <Image
                                    key={i}
                                    src={img}
                                    alt={`${t(`${selected.key}.title`)} image ${i + 1}`}
                                    width={256}
                                    height={160}
                                    className="rounded-xl object-cover"
                                />
                            ))}
                        </div>

                        <p className="text-center text-lg mb-6">{t(`${selected.key}.details`)}</p>

                        <h3 className="text-xl font-semibold text-center mb-4">
                            {t("featuresTitle")}
                        </h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {t.raw(`${selected.key}.features`).map((feature: string, i: number) => (
                                <div key={i} className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <DialogFooter className="mt-8 flex justify-center">
                            <Button asChild>
                                <Link href="/contact">{t2("contact")}</Link>
                            </Button>
                        </DialogFooter>

                    </motion.div>
                )}
            </DialogContent>
        </Dialog>
    );
};
