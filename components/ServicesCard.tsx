"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/moving-border";
import { Service } from "@/types/services";

type Props = {
    service: Service;
    index: number;
    onSelect: (service: Service) => void;
    className?: string;
    role?: React.AriaRole; // np. "listitem"
};

export default function ServiceCard ({
                                service,
                                index,
                                onSelect,
                                className = "",
                                role,
                            }: Props) {
    const prefersReducedMotion = useReducedMotion();
    const Icon = service.icon;
    const headingId = React.useId();

    const open = () => onSelect(service);

    const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open();
        }
    };

    return (
        <motion.div
            role={role}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                delay: prefersReducedMotion ? 0 : index * 0.08,
            }}
            className="w-full"
        >
            <Button
                onClick={open}
                onKeyDown={onKeyDown}
                aria-haspopup="dialog"
                aria-labelledby={headingId}
                duration={12000 + index * 500}
                borderRadius="1.75rem"
                style={{
                    background:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    borderRadius: "1.68rem",
                }}
                className={`w-full max-w-xs mx-auto text-white border-neutral-200 dark:border-slate-800 
          transition-transform hover:scale-[1.02] focus-visible:outline-none 
          focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 
          flex items-stretch text-left ${className}`}
            >
                <div className="flex items-center p-6 w-full">
                    <div className="flex flex-col items-center text-center gap-2">
                        {Icon ? (
                            <Icon size={32} className="text-blue-600 mb-1" aria-hidden="true" />
                        ) : null}
                        <h3 id={headingId} className="text-lg font-semibold">
                            {service.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">
                            {service.description}
                        </p>
                    </div>
                </div>
            </Button>
        </motion.div>
    );
};
