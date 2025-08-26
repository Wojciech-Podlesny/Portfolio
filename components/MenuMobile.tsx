// 'use client';
//
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { HiBars3BottomRight } from "react-icons/hi2";
// import { motion, useReducedMotion } from "framer-motion";
// import { menuLinks } from "@/data/menuLinks";
// import { usePathname } from "next/navigation";
// import { Separator } from "@/components/ui/separator";
// import { GithubIcon, LinkedinIcon } from "@/data/icon";
//
//
// const MotionLink = motion(Link)
//
// export const MenuMobile = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const pathname = usePathname();
//     const prefersReducedMotion = useReducedMotion();
//
//     useEffect(() => {
//         setIsOpen(false);
//     }, [pathname]);
//
//     return (
//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger
//                 className="md:hidden text-white border-none focus:outline-none"
//                 aria-label="Open navigation menu"
//                 aria-expanded={isOpen}
//                 aria-controls="menu-mobile"
//             >
//                 <HiBars3BottomRight size={35} aria-hidden={true} className="text-black dark:text-white" />
//             </SheetTrigger>
//
//             <SheetContent
//                 side="left"
//                 className="flex flex-col items-center space-y-6 p-6 w-full bg-gray-900 z-[50] overflow-y-auto max-h-screen"
//                 aria-labelledby="mobile-menu-title"
//             >
//                 <nav aria-label="Main menu" className="mt-24 w-full max-w-xs">
//                     <ul className="flex flex-col space-y-4 text-center">
//                         {menuLinks.map((link) => {
//                             const isActive =
//                                 pathname === link.route ||
//                                 (link.route !== "/" && pathname?.startsWith(link.route));
//                             return (
//                                 <li key={link.id}>
//                                     <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.06 }}>
//                                         <MotionLink
//                                             href={link.route}
//                                             onClick={() => setIsOpen(false)}
//                                             aria-current={isActive ? "page" : undefined}
//                                             aria-label={`Go to ${link.name}`}
//                                             whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
//                                             whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
//                                             className={`relative block px-4 py-3 uppercase transition-colors duration-300 rounded-sm
//                                 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400
//                                 ${isActive
//                                                 ? "text-lime-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-24 after:h-0.5 after:bg-lime-500"
//                                                 : "text-white hover:text-lime-500"}`}
//                                         >
//                                             {link.name}
//                                         </MotionLink>
//                                     </motion.div>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </nav>
//                 <Separator className="bg-white/20 w-full max-w-xs" />
//
//                 <div className="flex flex-row gap-5 justify-center items-center w-full max-w-xs">
//                     <Link
//                         href="https://github.com/yourprofile"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label="GitHub"
//                         className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-full p-1.5"
//                     >
//                         <GithubIcon />
//                     </Link>
//                     <Link
//                         href="https://linkedin.com/in/yourprofile"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         aria-label="LinkedIn"
//                         className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-full p-1.5"
//                     >
//                         <LinkedinIcon />
//                     </Link>
//                 </div>
//             </SheetContent>
//         </Sheet>
//     );
// };

//dark
"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { menuLinks } from "@/data/menuLinks";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon } from "@/data/icon";

const MotionLink = motion(Link);

export const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
                className="md:hidden border-none focus:outline-none"
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
                aria-controls="menu-mobile"
            >
                <Menu size={35} className="text-gray-900 dark:text-white" aria-hidden />
            </SheetTrigger>

            <SheetContent
                side="left"
                className="flex flex-col items-center space-y-6 p-6 w-full
                           bg-white dark:bg-gray-900 text-gray-900 dark:text-white
                           z-[50] overflow-y-auto max-h-screen"
                aria-labelledby="mobile-menu-title"
            >
                <nav aria-label="Main menu" className="mt-24 w-full max-w-xs">
                    <ul className="flex flex-col space-y-4 text-center">
                        {menuLinks.map((link) => {
                            const isActive =
                                pathname === link.route ||
                                (link.route !== "/" && pathname?.startsWith(link.route));

                            return (
                                <li key={link.id}>
                                    <motion.div whileHover={prefersReducedMotion ? {} : { scale: 1.06 }}>
                                        <MotionLink
                                            href={link.route}
                                            onClick={() => setIsOpen(false)}
                                            aria-current={isActive ? "page" : undefined}
                                            aria-label={`Go to ${link.name}`}
                                            whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
                                            whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                                            className={`relative block px-4 py-3 uppercase transition-colors duration-300 rounded-sm
                                                focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400
                                                ${
                                                isActive
                                                    ? "text-lime-600 dark:text-lime-500 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:w-24 after:h-0.5 after:bg-lime-600 dark:after:bg-lime-500"
                                                    : "text-gray-900 dark:text-white hover:text-lime-600 dark:hover:text-lime-400"
                                            }`}
                                        >
                                            {link.name}
                                        </MotionLink>
                                    </motion.div>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <Separator className="bg-gray-300 dark:bg-white/20 w-full max-w-xs" />

                <div className="flex flex-row gap-5 justify-center items-center w-full max-w-xs">
                    <Link
                        href="https://github.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-full p-1.5"
                    >
                        <GithubIcon />
                    </Link>

                    <Link
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-full p-1.5"
                    >
                        <LinkedinIcon />
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    );
};
