'use client';
import React from "react";
import { animate, useMotionValue, useReducedMotion, useInView } from "framer-motion";

type AnimatedCounterProps = {
    to: number;
    duration?: number;
    delay?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
    startOnView?: boolean;
    locale?: string;
    formatOptions?: Intl.NumberFormatOptions;
    decimals?: number;
    onComplete?: () => void;
};

export function AnimatedCounter({
                                    to,
                                    duration = 1.2,
                                    delay = 0,
                                    prefix = "",
                                    suffix = "",
                                    className = "",
                                    startOnView = true,
                                    locale,
                                    formatOptions,
                                    decimals,
                                    onComplete,
                                }: AnimatedCounterProps) {
    const ref = React.useRef<HTMLSpanElement | null>(null);
    const mv = useMotionValue(0);
    const [value, setValue] = React.useState(0);
    const prefersReducedMotion = useReducedMotion();
    const isInView = useInView(ref, { amount: 0.3, once: true });

    const formatter = React.useMemo(() => {
        const opts: Intl.NumberFormatOptions = {
            ...(decimals != null ? { minimumFractionDigits: decimals, maximumFractionDigits: decimals } : {}),
            ...formatOptions,
        };
        return new Intl.NumberFormat(locale, opts);
    }, [locale, formatOptions, decimals]);

    React.useEffect(() => {
        const unsub = mv.on("change", (v) => {
            const rounded = decimals != null ? Number(v.toFixed(decimals)) : Math.round(v);
            setValue(rounded);
        });
        return () => unsub();
    }, [mv, decimals]);

    const start = React.useCallback(() => {
        if (prefersReducedMotion) {
            mv.set(to);
            setValue(decimals != null ? Number(to.toFixed(decimals)) : Math.round(to));
            onComplete?.();
            return;
        }
        const controls = animate(mv, to, { duration, delay, ease: "easeOut" });
        controls.then(() => onComplete?.());
        return () => controls.stop();
    }, [to, duration, delay, prefersReducedMotion, mv, decimals, onComplete]);

    React.useEffect(() => {
        if (startOnView) {
            if (isInView) start();
        } else {
            start();
        }
    }, [isInView, start, startOnView, to]);

    return (
        <span
            ref={ref}
            className={className}
            aria-label={`${prefix}${to}${suffix ?? ""}`}
        >
      {prefix}
            {formatter.format(value)}
            {suffix}
    </span>
    );
}
