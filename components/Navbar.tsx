'use client';

import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { Code2 } from "lucide-react";
import { menuLinks } from "@/data/menuLinks";
import { usePathname } from "next/navigation";
import { MenuMobile } from "@/components/MenuMobile";
import { useState, useRef } from "react";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";

export const Navbar = () => {
    const pathname = usePathname();
    const [showNavbar, setShowNavbar] = useState(true);
    const { scrollY } = useScroll();
    const lastY = useRef(0);
    const prefersReducedMotion = useReducedMotion();
    const t = useTranslations("navbar")
    const MotionLink = motion(Link);

    useMotionValueEvent(scrollY, "change", (current) => {
        if (current < 100 || current < lastY.current) setShowNavbar(true);
        else setShowNavbar(false);
        lastY.current = current;
    });
    return (
        <motion.nav
            aria-label={t("ariaNav")}
            animate={prefersReducedMotion ? {} : { y: showNavbar ? 0 : -100 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeInOut" }}
            className="fixed top-4 w-full z-50 px-4 will-change-transform"
        >
            <div
                className="flex items-center justify-between max-w-7xl mx-auto rounded-full border
        bg-white/80 dark:bg-[#0f0f0f]/90 backdrop-blur-md
        px-6 py-4 md:px-12 shadow-[0_0_40px_10px_rgba(168,85,247,0.3)]
        border-gray-200 dark:border-gray-700"
            >
                <div className="flex items-center gap-2">
                    <Code2 size={35} className="text-lime-500" aria-hidden="true" />
                    <Link
                        href="/"
                        className="text-2xl font-bold text-black dark:text-white rounded"
                        aria-label={t("ariaLogo")}
                    >
                        Dev .
                    </Link>
                </div>

                <ul className="hidden md:flex items-center gap-12">
                    {menuLinks.map((link) => {
                        const routePath = typeof link.route === "string" ? link.route : link.route.pathname;
                        const isActive =
                            pathname === link.route ||
                            (link.route !== "/" && pathname?.startsWith(routePath));

                        return (
                            <li key={link.id} className="flex items-center">
                                <MotionLink
                                    href={link.route}
                                    aria-label={`Go to: ${link.key}`}
                                    aria-current={isActive ? "page" : undefined}
                                    whileHover={prefersReducedMotion ? undefined : { scale: 1.06 }}
                                    className={`relative uppercase transition-colors duration-500 rounded
    focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-1/2 after:h-0.5 after:bg-lime-500 after:origin-left after:transition-transform after:duration-300
    ${
                                        isActive
                                            ? "text-lime-500 after:scale-x-100"
                                            : "text-black dark:text-white dark:hover:text-lime-500 after:scale-x-0 hover:after:scale-x-100"
                                    }`}
                                >
                                    {t(`menu.${link.key}`)}
                                </MotionLink>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex items-center gap-4">
                    <div className="flex md:hidden items-center gap-1" aria-label="Mobile controls">
                        <ThemeSwitcher />
                        <MenuMobile />
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                        <ThemeSwitcher />
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};
