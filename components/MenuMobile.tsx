'use client'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { menuLinks } from "@/data/menuLinks";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {usePathname} from "next/navigation";


export const MenuMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
                className="md:hidden text-white border-none focus:outline-none"
                onClick={() => setIsOpen(true)}
            >
                <HiBars3BottomRight size={35} />
                
            </SheetTrigger>

            <SheetContent
                side="right"
                className="flex flex-col items-center space-y-6 p-6 w-full bg-gray-900 z-[50] overflow-y-auto max-h-screen"
            >

            <nav className="mt-24 flex-col space-y-6 text-center">
                    {menuLinks.map((link) => (
                        <motion.div key={link.id} whileHover={{scale: 1.1}}>
                            <Link href={link.route} onClick={() => setIsOpen(false)} className={`relative uppercase transition-colors duration-500 ${pathname === link.route? "text-lime-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-lime-500 after:transition-all after:duration-300"
                                : 'text-white hover:text-lime-500' }`} aria-label={`Link to ${link.name}`}>{link.name}</Link>
                        </motion.div>
                    ))}

                </nav>
                <div className="flex flex-row gap-4 justify-center items-center w-full">
                    <Link
                        href="https://github.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub
                            className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
                            size={24}
                        />
                    </Link>
                    <Link
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin
                            className="text-gray-400 hover:text-blue-500 transition-transform transform hover:scale-125"
                            size={24}
                        />
                    </Link>
                </div>



            </SheetContent>
        </Sheet>
    );
};