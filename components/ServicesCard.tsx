// "use client";
//
// import * as React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import { Button } from "@/components/ui/moving-border";
// import { Service } from "@/types/services";
// import clsx from "clsx";
//
// type ServicesCardProps = {
//     service: Service;
//     index: number;
//     onSelect: (service: Service) => void;
//     className?: string;
//     disableHover?: boolean;
// };
//
// export const ServiceCard = ({
//                                         service,
//                                         index,
//                                         onSelect,
//                                         className = "",
//                                         disableHover,
//                                     }: ServicesCardProps) => {
//     const prefersReducedMotion = useReducedMotion();
//     const Icon = service.icon;
//
//     const open = React.useCallback(() => onSelect(service), [onSelect, service]);
//
//     const motionConfig = React.useMemo(() => {
//         if (prefersReducedMotion) {
//             return {
//                 initial: undefined,
//                 animate: undefined,
//                 transition: { duration: 0 },
//             } as const;
//         }
//         return {
//             initial: { opacity: 0, y: 16 },
//             animate: { opacity: 1, y: 0 },
//             transition: { duration: 0.4, delay: index * 0.08 },
//         } as const;
//     }, [prefersReducedMotion, index]);
//
//     const hoverClass = React.useMemo(
//         () => (!(disableHover || prefersReducedMotion) ? "hover:scale-[1.02]" : ""),
//         [disableHover, prefersReducedMotion]
//     );
//
//     return (
//         <motion.div
//             initial={motionConfig.initial}
//             whileInView={motionConfig.animate}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={motionConfig.transition}
//             className="w-full"
//         >
//             <Button
//                 type="button"
//                 onClick={open}
//                 aria-haspopup="dialog"
//                 duration={12000 + index * 500}
//                 borderRadius="1.75rem"
//                 style={{
//                     background:
//                         "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//                     borderRadius: "1.68rem",
//                 }}
//                 className={clsx(
//                     "w-full max-w-xs mx-auto text-white border-neutral-200 dark:border-slate-800",
//                     "transition-transform focus-visible:outline-none",
//                     "focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
//                     "flex items-stretch text-left",
//                     hoverClass,
//                     className
//                 )}
//             >
//                 <div className="flex items-center p-6 w-full">
//                     <div className="flex flex-col items-center text-center gap-2">
//                         {Icon ? (
//                             <Icon
//                                 size={32}
//                                 className="text-blue-600 mb-1"
//                                 aria-hidden="true"
//                                 focusable="false"
//                             />
//                         ) : null}
//                         <h3 className="text-lg font-semibold">{service.title}</h3>
//                         <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">
//                             {service.description}
//                         </p>
//                     </div>
//                 </div>
//             </Button>
//         </motion.div>
//     );
// }

//dark

"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/moving-border";
import { Service } from "@/types/services";
import clsx from "clsx";

type ServicesCardProps = {
    service: Service;
    index: number;
    onSelect: (service: Service) => void;
    className?: string;
    disableHover?: boolean;
};

export const ServiceCard = ({
                                service,
                                index,
                                onSelect,
                                className = "",
                                disableHover,
                            }: ServicesCardProps) => {
    const prefersReducedMotion = useReducedMotion();
    const Icon = service.icon;

    const open = React.useCallback(() => onSelect(service), [onSelect, service]);

    const motionConfig = React.useMemo(() => {
        if (prefersReducedMotion) {
            return {
                initial: undefined,
                animate: undefined,
                transition: { duration: 0 },
            } as const;
        }
        return {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: index * 0.08 },
        } as const;
    }, [prefersReducedMotion, index]);

    const hoverClass = React.useMemo(
        () => (!(disableHover || prefersReducedMotion) ? "hover:scale-[1.02]" : ""),
        [disableHover, prefersReducedMotion]
    );

    return (
        <motion.div
            initial={motionConfig.initial}
            whileInView={motionConfig.animate}
            viewport={{ once: true, amount: 0.2 }}
            transition={motionConfig.transition}
            className="w-full"
        >
            <Button
                type="button"
                onClick={open}
                aria-haspopup="dialog"
                duration={12000 + index * 500}
                borderRadius="1.75rem"
                style={{
                    borderRadius: "1.68rem",
                }}
                className={clsx(
                    "w-full max-w-xs mx-auto text-gray-900 dark:text-white",
                    "border border-gray-200 dark:border-slate-800",
                    "transition-transform focus-visible:outline-none",
                    "focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2",
                    "flex items-stretch text-left",
                    "bg-white dark:bg-[#0c0e23]",
                    hoverClass,
                    className
                )}
            >
                <div className="flex items-center p-6 w-full">
                    <div className="flex flex-col items-center text-center gap-2">
                        {Icon && (
                            <Icon
                                size={32}
                                className="text-blue-600 dark:text-blue-400 mb-1"
                                aria-hidden="true"
                                focusable="false"
                            />
                        )}
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4">
                            {service.description}
                        </p>
                    </div>
                </div>
            </Button>
        </motion.div>
    );
};
