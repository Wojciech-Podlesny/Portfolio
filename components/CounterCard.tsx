// "use client";
//
// import { motion, useReducedMotion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { AnimatedCounter } from "@/components/AboutCounter";
// import { fadeUp } from "@/lib/animations";
//
// export const aboutStats = [
//     { value: 12, label: "Projects", delay: 0.0 },
//     { value: 3, label: "Experiences", delay: 0.08 },
//     { value: 12, label: "Technologies", delay: 0.16 },
// ] as const;
//
//
// interface CounterCardProps {
//     value: number;
//     label: string;
//     delay?: number;
//     duration?: number;
//     prefix?: string;
//     suffix?: string;
//     locale?: string;
//     className?: string;
// }
//
// export const CounterCard = ({
//                                 value,
//                                 label,
//                                 delay = 0,
//                                 duration = 1.2,
//                                 prefix = "",
//                                 suffix = "+",
//                                 locale,
//                                 className = "",
//                             }: CounterCardProps)=> {
//     const shouldReduceMotion = useReducedMotion();
//
//     return (
//         <motion.div
//             role="listitem"
//             variants={shouldReduceMotion ? undefined : fadeUp}
//             whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }}
//             transition={{ type: "spring", stiffness: 200, damping: 18 }}
//         >
//             <Card
//                 className={`w-full max-w-xs mx-auto bg-gray-800 border border-gray-700 text-white shadow-md hover:shadow-xl transition-shadow ${className}`}
//             >
//                 <CardContent className="p-6 text-center">
//                     <h2 className="text-3xl font-bold text-indigo-500 font-mono tracking-tight">
//                         <AnimatedCounter
//                             to={value}
//                             suffix={suffix}
//                             prefix={prefix}
//                             duration={duration}
//                             delay={delay}
//                             locale={locale}
//                         />
//                     </h2>
//                     <p className="mt-2 text-gray-300">{label}</p>
//                 </CardContent>
//             </Card>
//         </motion.div>
//     );
// }
//
// export const CounterGrid = () => {
//     const shouldReduceMotion = useReducedMotion();
//
//     return (
//         <motion.div
//             role="list"
//             variants={
//                 shouldReduceMotion
//                     ? undefined
//                     : {
//                         hidden: {},
//                         show: { transition: { staggerChildren: 0.12 } },
//                     }
//             }
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.2 }}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 justify-center"
//         >
//             {aboutStats.map((s, i) => (
//                 <CounterCard
//                     key={s.label}
//                     value={s.value}
//                     label={s.label}
//                     delay={s.delay}
//                     duration={1.1 + i * 0.1}
//                 />
//             ))}
//         </motion.div>
//     );
// }


//dark
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/AboutCounter";
import { fadeUp } from "@/lib/animations";

export const aboutStats = [
    { value: 12, label: "Projects", delay: 0.0 },
    { value: 3, label: "Experiences", delay: 0.08 },
    { value: 12, label: "Technologies", delay: 0.16 },
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
                                className = "",
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
                    <h2 className="text-3xl font-bold font-mono tracking-tight text-indigo-600 dark:text-indigo-400">
                        <AnimatedCounter
                            to={value}
                            suffix={suffix}
                            prefix={prefix}
                            duration={duration}
                            delay={delay}
                            locale={locale}
                        />
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{label}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export const CounterGrid = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            role="list"
            variants={
                shouldReduceMotion
                    ? undefined
                    : {
                        hidden: {},
                        show: { transition: { staggerChildren: 0.12 } },
                    }
            }
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 justify-center"
        >
            {aboutStats.map((s, i) => (
                <CounterCard
                    key={s.label}
                    value={s.value}
                    label={s.label}
                    delay={s.delay}
                    duration={1.1 + i * 0.1}
                />
            ))}
        </motion.div>
    );
};
