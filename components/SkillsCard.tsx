"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { GlareCard } from "@/components/ui/glare-card";

interface SkillCardProps {
    name: string;
    image: React.ReactNode;
}

export const SkillsCard = ({ name, image }: SkillCardProps) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            role="listitem"
            variants={shouldReduceMotion ? undefined : fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
        >
            <GlareCard
                aria-label={`Technology: ${name}`}
                className="flex flex-col items-center justify-center p-3 sm:p-6 rounded-xl border transition-all duration-300 border-neutral-800 hover:border-indigo-500"
            >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-transform duration-300">
                    {image}
                </div>
                <p className="mt-2 sm:mt-3 text-sm font-medium text-white">{name}</p>
            </GlareCard>
        </motion.div>
    );
};
