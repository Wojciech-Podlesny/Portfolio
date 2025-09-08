"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { menuLinks } from "@/data/menuLinks";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";
import {LanguageSwitcher} from "@/components/LanguageSwitcher";
import { HiBars3BottomRight } from "react-icons/hi2";
import NextLink from "next/link";
import {socialLinks} from "@/data/biography";
import {FaInstagram} from "react-icons/fa6";

export const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const prefersReducedMotion = useReducedMotion();
    const t = useTranslations("navbar")

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
                className="md:hidden border-none focus:outline-none"
                aria-label={t("ariaNav")}
                aria-expanded={isOpen}
                aria-controls="menu-mobile"
            >
                <HiBars3BottomRight size={35} className="text-gray-900 dark:text-white" aria-hidden />
            </SheetTrigger>

            <SheetContent
                side="left"
                className="flex flex-col items-center space-y-6 p-6 w-full
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                           z-[50] overflow-y-auto max-h-screen"
                aria-labelledby="mobile-menu-title"
            >

                <div className="absolute top-4 left-4 z-[60]">
                    <LanguageSwitcher />
                </div>
                <nav aria-label="Main menu" className="mt-24 w-full max-w-xs">
                    <ul className="flex flex-col space-y-4 text-center">
                        {menuLinks.map((link) => {
                            const routePath = typeof link.route === "string" ? link.route : link.route.pathname;
                            const isActive =
                                pathname === routePath ||
                                (routePath !== "/" && pathname?.startsWith(routePath));
                            return (
                                <li key={link.id}>
                                    <motion.div
                                        whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
                                        whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                                    >
                                        <Link
                                            href={link.route}
                                            onClick={() => setIsOpen(false)}
                                            aria-current={isActive ? "page" : undefined}
                                            aria-label={`Go to ${link.key}`}
                                            className={`relative block px-4 py-3 uppercase transition-colors duration-300 rounded-sm
focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400
${isActive
                                                ? "text-lime-600 dark:text-lime-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-24 after:h-0.5 after:bg-lime-600 dark:after:bg-lime-500"
                                                : "text-gray-900 dark:text-white hover:text-lime-600 dark:hover:text-lime-400"
                                            }`}
                                        >
                                            {t(`menu.${link.key}`)}
                                        </Link>
                                    </motion.div>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <Separator className="bg-black dark:bg-white w-full max-w-xs" />
                <ul className="flex flex-row gap-5 justify-center items-center w-full max-w-xs text-black dark:text-white">
                    {socialLinks.map(({ href, label, icon: Icon }) => (
                        <li key={href}>
                            <NextLink
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={t(label)}
                            >
                                <Icon size={35} className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none"   />
                            </NextLink>
                        </li>
                    ))}
                    <NextLink
                        href="https://www.instagram.com/wojciech.podlesny/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none"
                    >
                        <FaInstagram size={35} className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none" />
                    </NextLink>
                </ul>
            </SheetContent>
        </Sheet>
    );
};
