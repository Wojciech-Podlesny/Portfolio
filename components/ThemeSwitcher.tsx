"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            className="p-2 rounded-md transition-colors flex items-center justify-center"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            {resolvedTheme === "dark" ? (

                <Moon className="w-5 h-5 text-white" />
            ) : (
                <Sun className="w-5 h-5 text-yellow-500" />

            )}
        </button>
    );
};
