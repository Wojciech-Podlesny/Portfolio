"use client";

import React from "react";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

type BaseProps = {
    control: any; // RHF control
    name: string;
    label: string;
    placeholder?: string;
    className?: string;
    delay?: number;
    required?: boolean;
    // a11y
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    autoComplete?: string;
};

type InputProps = BaseProps & {
    as?: "input";
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
};

type TextareaProps = BaseProps & {
    as: "textarea";
    rows?: number;
};

type ContactFieldProps = InputProps | TextareaProps;

export const ContactField: React.FC<ContactFieldProps> = (props) => {
    const {
        control,
        name,
        label,
        placeholder,
        className,
        delay = 0,
        required,
        inputMode,
        autoComplete,
    } = props;
    const shouldReduceMotion = useReducedMotion();

    const isTextarea = props.as === "textarea";
    const Component = isTextarea ? Textarea : Input;

    const motionProps = shouldReduceMotion
        ? {}
        : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 } };

    return (
        <FormField
            control={control}
            name={name}
            render={({ field, formState }) => {
                const errorMsg = (formState.errors as any)?.[name]?.message as
                    | string
                    | undefined;
                const errId = `${name}-error`;

                return (
                    <FormItem>
                        <FormLabel htmlFor={name} className="text-sm text-white">
                            {label}
                        </FormLabel>
                        <FormControl>
                            <motion.div
                                {...motionProps}
                                transition={{ duration: 0.2, delay }}
                            >
                                <Component
                                    id={name}
                                    placeholder={placeholder}
                                    // @ts-expect-error RHF types union ok
                                    {...field}
                                    {...(isTextarea ? { rows: (props as TextareaProps).rows ?? 5 } : {})}
                                    // usability / mobile-friendly
                                    className={clsx(
                                        "bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition hover:border-indigo-400",
                                        !isTextarea && "text-base min-h-[44px]",
                                        className
                                    )}
                                    // a11y
                                    aria-invalid={!!errorMsg}
                                    aria-describedby={errorMsg ? errId : undefined}
                                    // hints
                                    inputMode={inputMode}
                                    autoComplete={autoComplete}
                                    required={required}
                                />
                            </motion.div>
                        </FormControl>

                        <AnimatePresence mode="wait">
                            {errorMsg && (
                                <motion.p
                                    id={errId}
                                    className="text-red-400 text-sm mt-1"
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {errorMsg}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </FormItem>
                );
            }}
        />
    );
};
