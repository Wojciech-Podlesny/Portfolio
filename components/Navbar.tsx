'use client';

import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { HiCodeBracket } from "react-icons/hi2";
import Link from "next/link";
import { menuLinks } from "@/data/menuLinks";
import { usePathname } from "next/navigation";
import { MenuMobile } from "@/components/MenuMobile";
import { useState, useRef } from "react";
import {Button} from "@/components/ui/button";

export const Navbar = () => {
    const pathname = usePathname();
    const [showNavbar, setShowNavbar] = useState(true);
    const { scrollY } = useScroll();
    const lastY = useRef(0);
    const prefersReducedMotion = useReducedMotion();

    useMotionValueEvent(scrollY, "change", (current) => {
        if (current < 100 || current < lastY.current) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
        lastY.current = current;
    });

    return (
        <motion.nav
            role="navigation"
            animate={prefersReducedMotion ? {} : { y: showNavbar ? 0 : -100 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: 'easeInOut' }}
            className="fixed top-4 w-full z-50 px-4"
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto rounded-full border bg-[#0f0f0f]/90 backdrop-blur-md px-6 py-4 md:px-12 shadow-[0_0_40px_10px_rgba(168,85,247,0.3)]">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <HiCodeBracket size={35} className="text-lime-500" />
                    <Link
                        href="/"
                        className="text-2xl font-bold text-white rounded"
                        aria-label="Go to home"
                    >
                        Dev .
                    </Link>
                </div>

                {/* Menu + switcher */}
                <div className="flex items-center">
                    {/* Mobile menu */}
                    <div className="block md:hidden">
                        <MenuMobile />
                    </div>

                    {/* Desktop menu */}
                    <ul className="hidden md:flex items-center gap-12 ml-8">
                        {menuLinks.map((link) => (
                            <li key={link.id}>
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    className={`relative uppercase transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 rounded ${
                                        pathname === link.route
                                            ? "text-lime-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-lime-500 after:transition-all after:duration-300"
                                            : "text-white hover:text-lime-500"
                                    }`}
                                    href={link.route}
                                    aria-label={`Link to ${link.name}`}
                                >
                                    {link.name}
                                </motion.a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden md:flex items-center gap-4 ml-8">
                        <Link href="/#contact" aria-label="Contact">
                            <Button variant="magic" className="text-white font-semibold px-6 py-2 rounded-full transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                            >
                                Hire Me
                            </Button>

                        </Link>
                    </div>


                </div>
            </div>
        </motion.nav>
    );
};
