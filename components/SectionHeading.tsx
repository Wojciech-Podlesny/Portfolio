"use client";

import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";

interface SectionHeadingProps {
    title: string;
    className?: string;
}

export const SectionHeading = ({ title, className }: SectionHeadingProps) => (
    <div className={`flex items-center justify-center mb-12 ${className ?? ""}`}>
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-px bg-indigo-500 w-full max-w-[500px] origin-left"
        />
        <TextAnimate as="h1" className="px-6 text-4xl text-center">
            {title}
        </TextAnimate>
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-px bg-indigo-500 w-full max-w-[500px] origin-right"
        />
    </div>
);
