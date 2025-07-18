'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Spotlight } from "./ui/Spotlight";
import { biography } from "@/data/biography";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {TypewriterEffect} from "@/components/ui/typewriter-effect";
import {MagicButton} from "@/components/MagicButton";
import {Profile} from "@/components/Profile";

export const Header = () => {
    return (
        <div className="relative flex flex-col h-screen w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white antialiased">
            <div className="absolute inset-0 pointer-events-none select-none bg-[size:40px_40px] bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]" />
            <Spotlight className="absolute -top-40 left-0 md:-top-20 md:left-60" fill="white" />
            <div className="relative flex flex-col items-center justify-center gap-6 px-5 py-64 md:py-10 md:flex-row md:justify-around md:h-full">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    className="text-center md:text-left text-lg sm:text-xl md:text-4xl order-2 xl:order-none"
                >
                    <p className="font-bold text-4xl md:text-5xl transition-all duration-500 shadow-text-green"
                       style={{textShadow: "0px 0px 10px rgba(0, 255, 0, 0.8)"}}>Hi, I am  </p>
                    <span
                        className="font-bold text-4xl md:text-5xl transition-all duration-500 shadow-text-green"
                        style={{textShadow: "0px 0px 10px rgba(0, 255, 0, 0.8)"}}>
                        {biography.name}
                    </span>
                    <div className="text-4xl mt-2">
                        I am a {" "}
                        <TypewriterEffect words={biography.roles.map((role, index) => ({
                            text: role,
                            className: `font-bold transition-all duration-500 ${index % 2 === 0 ? "text-blue-400" : "text-pink-400"}`
                        }))}/>
                    </div>
                    <h3 className="pt-4 text-3xl">I build, clean, creative code with NextJS, <br/>React, Typescript, Tailwind
                        CSS.</h3>

                    <div className="flex justify-center md:justify-start items-center gap-6 mt-12">
                        <Link href="#contact" className="flex items-center">
                            <MagicButton title="CONTACT ME"  position="center"/>
                        </Link>

                        <div className="flex justify-start gap-6 mb-6 pt-6 text-2xl">
                            <Link
                                href="https://linkedin.com/in/wojciech-podlesny"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Linkedin"
                                className="hover:text-purple-400 transition-transform transform hover:scale-110"
                            >
                                <FaLinkedin size={40}/>
                            </Link>
                            <Link
                                href="https://github.com/wojciech-podlesny"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="hover:text-purple-400 transition-transform transform hover:scale-110"
                            >
                                <FaGithub size={40}/>
                            </Link>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1.2, delay: 0.2}}
                    className="order-1 xl:order-none mb-6 md:mb-0"
                >
                    <Profile />
                </motion.div>


                <motion.div
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1.2, delay: 0.5}}
                    className="absolute bottom-6 flex justify-center w-full"
                >
                    <Link href="/public#about" aria-label="Scroll to About">
                        <MdOutlineKeyboardArrowDown size={35} className="animate-bounce cursor-pointer text-white"/>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};