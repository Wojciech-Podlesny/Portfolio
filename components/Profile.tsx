'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../assets/images/profile/profilePhoto.webp";

export const Profile = () => {
    return (
        <div className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] flex items-center justify-center">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeIn", delay: 0 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="w-[260px] h-[260px] xl:w-[450px] xl:h-[450px] overflow-hidden rounded-full relative">
                    <Image
                        src={photo}
                        alt="Personal Image"
                        quality={100}
                        loading="lazy"
                    />
                </div>
            </motion.div>

            <motion.svg
                className="absolute inset-0"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#00ff99"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                />
            </motion.svg>
        </div>
    );
};



















