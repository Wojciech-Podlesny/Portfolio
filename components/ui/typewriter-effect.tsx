"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ColourfulText } from "@/components/ui/colourful-text";

export const TypewriterEffect = ({
                                     words,
                                     className,
                                     cursorClassName,
                                 }: {
    words: { text: string; className?: string }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex].text;
        const speed = isDeleting ? 40 : 100; // Szybsze kasowanie, wolniejsze pisanie

        const handleTyping = () => {
            setDisplayedText((prev) => {
                if (!isDeleting) {
                    if (prev.length < currentWord.length) {
                        return currentWord.substring(0, prev.length + 1);
                    } else {
                        setTimeout(() => setIsDeleting(true), 1000);
                        return prev;
                    }
                } else {
                    if (prev.length > 0) {
                        return prev.substring(0, prev.length - 1);
                    } else {
                        setIsDeleting(false);
                        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                        return prev;
                    }
                }
            });
        };

        const typingInterval = setTimeout(handleTyping, speed);

        return () => clearTimeout(typingInterval);
    }, [displayedText, isDeleting, words, currentWordIndex]);

    return (
        <div className={cn("inline-block", className)}>
            <ColourfulText text={displayedText} />

            <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500", cursorClassName)}
            ></motion.span>
        </div>
    );
};
