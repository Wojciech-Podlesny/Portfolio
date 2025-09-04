"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AboutCounter";
import { fadeUp } from "@/lib/animations";

export const aboutStats = [
    { value: 12, key: "projects", delay: 0.0 },
    { value: 3, key: "experience", delay: 0.08 },
    { value: 12, key: "technologies", delay: 0.16 }
] as const;

interface CounterCardProps {
    value: number;
    label: string;
    delay?: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    locale?: string;
    className?: string;
}

export const CounterCard = ({
                                value,
                                label,
                                delay = 0,
                                duration = 1.2,
                                prefix = "",
                                suffix = "+",
                                locale,
                                className = ""
                            }: CounterCardProps) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            role="listitem"
            variants={shouldReduceMotion ? undefined : fadeUp}
            whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
            <Card
                className={`w-full max-w-xs mx-auto 
          bg-white dark:bg-gray-800 
          border border-gray-200 dark:border-gray-700 
          text-black dark:text-white 
          shadow-md hover:shadow-xl transition-shadow ${className}`}
            >
                <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold font-mono tracking-tight text-indigo-600 dark:text-indigo-400">
                        <AnimatedCounter
                            to={value}
                            suffix={suffix}
                            prefix={prefix}
                            duration={duration}
                            delay={delay}
                            locale={locale}
                        />
                    </p>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{label}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
};