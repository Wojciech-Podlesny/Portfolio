'use client';

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { HiCodeBracket } from "react-icons/hi2";
import Link from "next/link";
import { menuLinks } from "@/data/menuLinks";
import { usePathname } from "next/navigation";
import { MenuMobile } from "@/components/MenuMobile";
import { useState } from "react";

export const Navbar = () => {
    const pathname = usePathname();
    const [showNavbar, setShowNavbar] = useState(true);
    const { scrollY } = useScroll();
    const [lastY, setLastY] = useState(0);

    useMotionValueEvent(scrollY, "change", (current) => {
        if (current < 100 || current < lastY) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
        setLastY(current);
    });

    return (
        <motion.nav
            animate={{ y: showNavbar ? 0 : -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between rounded-full border bg-[#0f0f0f]/90 backdrop-blur-md px-6 py-4 md:px-12 shadow-[0_0_40px_10px_rgba(168,85,247,0.3)]"
        >
            <div className="flex items-center gap-2">
                <HiCodeBracket size={35} className="text-lime-500" />
                <Link
                    href="/"
                    className="text-2xl font-bold text-white"
                    aria-label="Go to home"
                >
                    Dev .
                </Link>
            </div>

            <div className="flex items-center">
                <div className="block md:hidden">
                    <MenuMobile />
                </div>

                <ul className="hidden md:flex items-center gap-12 ml-8">
                    {menuLinks.map((link) => (
                        <motion.div key={link.id} whileHover={{ scale: 1.1 }}>
                            <Link
                                href={link.route}
                                className={`relative uppercase transition-colors duration-500 ${
                                    pathname === link.route
                                        ? "text-lime-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-lime-500 after:transition-all after:duration-300"
                                        : "text-white hover:text-lime-500"
                                }`}
                                aria-label={`Link to ${link.name}`}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};
