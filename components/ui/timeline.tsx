"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
    icon: string;
    date: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [lineOffset, setLineOffset] = useState(0);

    useEffect(() => {
        const compute = () => {
            const root = ref.current;
            if (!root) return;

            const rect = root.getBoundingClientRect();
            const icons = root.querySelectorAll<HTMLDivElement>(".timeline-icon");
            const rows = root.querySelectorAll<HTMLDivElement>(".timeline-row");
            if (!icons.length || !rows.length) return;

            const firstIcon = icons[0];
            const lastRow = rows[rows.length - 1];

            const firstIconRect = firstIcon.getBoundingClientRect();
            const lastRowRect = lastRow.getBoundingClientRect();

            const offset = firstIconRect.top - rect.top;
            const newHeight = lastRowRect.bottom - firstIconRect.top;

            setLineOffset(Math.max(0, offset));
            setHeight(Math.max(0, newHeight));
        };

        compute();

        const ro = new ResizeObserver(() => compute());
        if (ref.current) ro.observe(ref.current);

        const imgs = ref.current?.querySelectorAll("img") ?? [];
        imgs.forEach((img) => {
            if (!img.complete) {
                img.addEventListener("load", compute, { once: true });
                img.addEventListener("error", compute, { once: true });
            }
        });

        window.addEventListener("resize", compute);
        return () => {
            window.removeEventListener("resize", compute);
            ro.disconnect();
            imgs.forEach((img) => {
                img.removeEventListener("load", compute);
                img.removeEventListener("error", compute);
            });
        };
    }, [data]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full font-sans md:px-10" ref={containerRef}>
            <div ref={ref} className="relative max-w-7xl mx-auto pb-32">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="timeline-row flex justify-start pt-8 md:gap-10"
                    >
                        {/* lewa kolumna */}
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="timeline-icon h-10 absolute left-3 md:left-3 w-10 rounded-full dark:bg-black flex items-center justify-center">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div className="md:pl-20 text-center md:text-left">
                                <p className="hidden md:block text-blue-100 text-xl mt-2">
                                    {item.date}
                                </p>
                                <p className="hidden md:block font-bold text-blue-100 text-xl mt-2">
                                    {item.title}
                                </p>
                            </div>
                        </div>

                        {/* prawa kolumna */}
                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-2 font-bold text-white">
                                {item.title}
                            </h3>
                            <p className="md:hidden text-blue-100 text-sm mb-4">{item.date}</p>
                            {item.content}
                        </div>
                    </div>
                ))}

                {/* pionowa linia */}
                <div
                    style={{ height: `${height}px`, top: `${lineOffset}px` }}
                    className="absolute left-8 w-[2px] bg-gray-400/60 dark:bg-neutral-700"
                >
                    <motion.div
                        style={{ height: heightTransform, opacity: opacityTransform }}
                        className="absolute top-0 left-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-transparent rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
