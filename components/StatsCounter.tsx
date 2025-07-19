"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FaClock, FaProjectDiagram, FaTools } from "react-icons/fa";
import photo from "@/assets/images/counterHero.jpg";

export const StatsCounter = () => {
    return (
        <div className="relative w-full py-16  flex justify-center">
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={photo}
                    alt="Background"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover", opacity: 1 }}
                    priority
                />
            </div>
          {/*  <div className="absolute inset-0 bg-black bg-opacity-50"></div>*/}
            <div className="relative max-w-4xl w-full flex flex-col md:flex-row justify-around text-center gap-6 px-4">
                <StatItem
                    icon={<FaClock className="text-yellow-400 text-5xl mb-2" />}
                    end={4}
                    label="Years Experience"
                />
                <StatItem
                    icon={<FaProjectDiagram className="text-green-400 text-5xl mb-2" />}
                    end={15}
                    label="Projects"
                />
                <StatItem
                    icon={<FaTools className="text-blue-400 text-5xl mb-2" />}
                    end={30}
                    label="Technologies"
                />
            </div>
        </div>
    );
}

function StatItem({
                      icon,
                      end,
                      label,
                      duration = 200,
                  }: {
    icon: React.ReactNode;
    end: number;
    label: string;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!inView) return;

        let animationFrame: number;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * end);
            setCount(value);
            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        setCount(0); // reset na start
        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [inView, end, duration]);

    return (
        <motion.div
            ref={ref}
            className="flex flex-col items-center gap-4 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {icon}
            <h3 className="text-4xl font-bold">{count}+</h3>
            <p className="text-lg">{label}</p>
        </motion.div>
    );
}