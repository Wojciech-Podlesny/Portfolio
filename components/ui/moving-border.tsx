"use client";
import React, { useRef } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionTemplate,
    useMotionValue,
    useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
    borderRadius?: string;
    children: React.ReactNode;
    as?: React.ElementType;
    containerClassName?: string;
    borderClassName?: string;
    duration?: number;
    className?: string;
} & React.ComponentPropsWithoutRef<React.ElementType>;

export function Button({
                           borderRadius = "1.75rem",
                           children,
                           as: Component = "button",
                           containerClassName,
                           borderClassName,
                           duration,
                           className,
                           ...otherProps
                       }: ButtonProps) {
    return (
        <Component
            className={cn(
                "bg-transparent relative text-xl p-[1px] overflow-hidden md:col-span-2 md:row-span-1",
                containerClassName
            )}
            style={{
                borderRadius: borderRadius,
            }}
            {...otherProps}
        >
            <div
                className="absolute inset-0 rounde-[1.75rem]"
                style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
            >
                <MovingBorder duration={duration} rx="30%" ry="30%">
                    <div
                        className={cn(
                            "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]",
                            borderClassName
                        )}
                    />
                </MovingBorder>
            </div>

            <div
                className={cn(
                    "relative bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
                    className
                )}
                style={{
                    borderRadius: `calc(${borderRadius} * 0.96)`,
                }}
            >
                {children}
            </div>
        </Component>
    );
}

type MovingBorderProps = {
    children: React.ReactNode;
    duration?: number;
    rx?: string;
    ry?: string;
} & React.SVGProps<SVGSVGElement>;

export const MovingBorder = ({
                                 children,
                                 duration = 2000,
                                 rx,
                                 ry,
                                 ...otherProps
                             }: MovingBorderProps) => {
    const pathRef = useRef<SVGRectElement>(null);
    const progress = useMotionValue<number>(0);

    useAnimationFrame((time) => {
        const length = pathRef.current?.getTotalLength();
        if (length) {
            const pxPerMillisecond = length / duration;
            progress.set((time * pxPerMillisecond) % length);
        }
    });

    const x = useTransform(
        progress,
        (val) => pathRef.current?.getPointAtLength(val).x
    );
    const y = useTransform(
        progress,
        (val) => pathRef.current?.getPointAtLength(val).y
    );

    const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="absolute h-full w-full"
                width="100%"
                height="100%"
                {...otherProps}
            >
                <rect
                    fill="none"
                    width="100%"
                    height="100%"
                    rx={rx}
                    ry={ry}
                    ref={pathRef}
                />
            </svg>
            <motion.div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    transform,
                }}
            >
                {children}
            </motion.div>
        </>
    );
};