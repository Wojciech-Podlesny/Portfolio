'use client';

import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { HiCodeBracket } from "react-icons/hi2";
import Link from "next/link";
import { menuLinks } from "@/data/menuLinks";
import { usePathname } from "next/navigation";
import { MenuMobile } from "@/components/MenuMobile";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const MotionLink = motion(Link);

export const Navbar = () => {
    const pathname = usePathname();
    const [showNavbar, setShowNavbar] = useState(true);
    const { scrollY } = useScroll();
    const lastY = useRef(0);
    const prefersReducedMotion = useReducedMotion();

    useMotionValueEvent(scrollY, "change", (current) => {
        if (current < 100 || current < lastY.current) setShowNavbar(true);
        else setShowNavbar(false);
        lastY.current = current;
    });

    return (
        <motion.nav
            aria-label="Main navigation"
            animate={prefersReducedMotion ? {} : { y: showNavbar ? 0 : -100 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeInOut" }}
            className="fixed top-4 w-full z-50 px-4 will-change-transform"
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto rounded-full border bg-[#0f0f0f]/90 backdrop-blur-md px-6 py-4 md:px-12 shadow-[0_0_40px_10px_rgba(168,85,247,0.3)]">
                <div className="flex items-center gap-2">
                    <HiCodeBracket size={35} className="text-lime-500" aria-hidden="true" />
                    <Link href="/" className="text-2xl font-bold text-white rounded" aria-label="Main page">
                        Dev .
                    </Link>
                </div>

                <div className="flex items-center">
                    <div className="block md:hidden">
                        <MenuMobile />
                    </div>

                    <ul className="hidden md:flex items-center gap-12 ml-8">
                        {menuLinks.map((link) => {
                            const isActive =
                                pathname === link.route ||
                                (link.route !== "/" && pathname?.startsWith(link.route));
                            return (
                                <li key={link.id}>
                                    <MotionLink
                                        href={link.route}
                                        aria-label={`Przejdź do: ${link.name}`}
                                        aria-current={isActive ? "page" : undefined}
                                        whileHover={prefersReducedMotion ? undefined : { scale: 1.06 }}
                                        className={`relative uppercase transition-colors duration-500 rounded
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2
                      ${isActive
                                            ? "text-lime-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-lime-500"
                                            : "text-white hover:text-lime-500"}`}
                                    >
                                        {link.name}
                                    </MotionLink>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="hidden md:flex items-center gap-4 ml-8">
                        <Button
                            asChild
                            variant="magic"
                            className="border border-white text-white font-semibold px-6 py-2 rounded-full transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                        >
                            <Link href="/#contact" aria-label="Kontakt">Hire Me</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};
