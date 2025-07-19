import { format } from "date-fns";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import {biography} from "@/data/biography";

export const Footer = () => {
    const currentYear = format(new Date(), "yyyy");

    return (
        <footer className="bg-gray-800 text-white py-10 px-4 text-center">
            <h1 className="text-xl font-bold text-white-400 mb-4">
                {biography.name}
            </h1>

            <nav className="flex justify-center flex-wrap gap-6 mb-6 text-lg font-medium">
                <Link href="#journey" className="hover:text-purple-400 transition">My Journey</Link>
                <Link href="#projects" className="hover:text-purple-400 transition">Projects</Link>
                <Link href="#services" className="hover:text-purple-400 transition">Services</Link>
                <Link href="#contact" className="hover:text-purple-400 transition">Contact</Link>
            </nav>

            <div className="flex justify-center gap-6 mb-6 text-2xl">
                <Link
                    href="https://linkedin.com/in/wojciech-podlesny"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin"
                    className="hover:text-purple-400 transition-transform transform hover:scale-110"
                >
                    <FaLinkedin/>
                </Link>
                <Link
                    href="https://github.com/wojciech-podlesny"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:text-purple-400 transition-transform transform hover:scale-110"
                >
                    <FaGithub/>
                </Link>
            </div>

            <hr className="border-t border-white w-full mb-4"/>
            <p className="text-xl text-white">
                &copy; {currentYear} Wojciech Podleśny. All rights reserved.
            </p>
        </footer>
    );
};
