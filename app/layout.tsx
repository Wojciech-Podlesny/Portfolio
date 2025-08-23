// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import React from "react";
import { Footer } from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "@/app/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio App",
    description: "Portfolio develop by Wojciech Podleśny",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider>
                <Navbar />
                {children}
                <ToastContainer position="bottom-right" autoClose={3000} />
                <Footer />

        </ThemeProvider>
        </body>
        </html>
    );
}
