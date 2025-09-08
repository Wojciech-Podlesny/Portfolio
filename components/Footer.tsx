"use client";


import { Separator } from "@/components/ui/separator";
import { menuLinks } from "@/data/menuLinks";
import { useTranslations } from "next-intl";
import {Link} from "@/i18n/routing";
import NextLink from "next/link";
import {biography, socialLinks} from "@/data/biography"

export const Footer = () => {
    const year = new Date().getFullYear();
    const t = useTranslations("footer");
    return (
        <footer
            className=" text-gray-700 dark:text-gray-400 py-6 sm:py-8 bg-white dark:bg-gray-800"
        >
            <nav aria-label="Footer navigation" className="mx-auto mb-4 sm:mb-6 max-w-5xl">
                <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-6 text-sm sm:text-lg font-medium">
                    {menuLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                href={link.route}
                                className="inline-block px-2 py-2 sm:px-0
                           text-black/80 dark:text-white/90 hover:text-lime-500 transition-all"
                            >
                                {t(`menu.${link.key}`)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mx-auto mb-5 sm:mb-6 max-w-5xl">
                <ul className="flex justify-center gap-3 sm:gap-4 text-black dark:text-white">
                    {socialLinks.map(({ href, label, icon: Icon }) => (
                        <li key={label}>
                            <NextLink
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none"
                            >
                                <Icon size={35} className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none"/>
                            </NextLink>
                        </li>
                    ))}
                </ul>
            </div>

            <Separator className="mx-auto mb-3 sm:mb-4 w-full border-black/10 dark:border-white/20" />

            <p className="text-xs sm:text-sm text-center text-black/60 dark:text-white/70">
                &copy; {year} {biography.name}. {t("allRightsReserved")}
            </p>
        </footer>
    );
};
