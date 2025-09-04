'use client'
import {motion, useReducedMotion} from "framer-motion";
import {useTranslations} from "next-intl";
import {aboutStats, CounterCard} from "@/components/CounterCard";

export const CounterGrid = () => {
    const shouldReduceMotion = useReducedMotion();
    const t = useTranslations("about");

    return (
        <motion.div
            role="list"
            variants={
                shouldReduceMotion
                    ? undefined
                    : {
                        hidden: {},
                        show: { transition: { staggerChildren: 0.12 } }
                    }
            }
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 justify-center"
        >
            {aboutStats.map((s, i) => (
                <CounterCard
                    key={s.key}
                    value={s.value}
                    label={t(`counter.${s.key}`)}
                    delay={s.delay}
                    duration={1.1 + i * 0.1}
                />
            ))}
        </motion.div>
    );
};
