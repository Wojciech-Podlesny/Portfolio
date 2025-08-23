"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/data/icon";
import {Separator} from "@/components/ui/separator";

const navLinks = [
    { href: "#journey", label: "My Journey" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
];

const socialLinks = [
    { href: "https://linkedin.com/in/wojciech-podlesny", label: "LinkedIn", icon: <LinkedinIcon /> },
    { href: "https://github.com/wojciech-podlesny", label: "GitHub", icon: <GithubIcon /> },
];

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-[#1b2140] to-[#111723]  text-gray-400  py-6 sm:py-8">
            {/* nav */}
            <nav aria-label="Footer navigation" className="mx-auto mb-4 sm:mb-6 max-w-5xl">
                <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-6 text-sm sm:text-lg font-medium">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="inline-block px-2 py-2 sm:px-0 text-white/90 hover:text-purple-400 transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* socials */}
            <div className="mx-auto mb-5 sm:mb-6 max-w-5xl">
                <ul className="flex justify-center gap-3 sm:gap-4">
                    {socialLinks.map(({ href, label, icon }) => (
                        <li key={label}>
                            <Link
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                title={label}
                                className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full
                           text-white/90 hover:text-white transition-transform
                           hover:scale-110 focus:scale-110 focus:outline-none
                           focus-visible:ring-2 focus-visible:ring-purple-500"
                            >
                                {icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* divider */}
            <Separator className="mx-auto mb-3 sm:mb-4 w-full border-t border-white" />

            {/* copyright */}
            <p className="text-xs sm:text-sm  text-center text-white/70">
                &copy; {year} Wojciech Podleśny. All rights reserved.
            </p>
        </footer>
    );
};
