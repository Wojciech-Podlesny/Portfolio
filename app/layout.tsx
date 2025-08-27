import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "@/app/ThemeProvider";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "Wojciech Podleśny | Frontend Developer Portfolio",
        template: "%s | Wojciech Podleśny",
    },
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    description:
        "Portfolio Wojciecha Podleśnego – Frontend Developer specjalizujący się w React, Next.js i Tailwind CSS. Tworzę nowoczesne, responsywne strony WWW i aplikacje.",
    keywords: [
        "Frontend Developer",
        "Web Developer",
        "Portfolio",
        "React",
        "Next.js",
        "JavaScript",
        "Node.js",
        "Tworzenie stron WWW",
        "Programista Frontend",
    ],
    authors: [{ name: "Wojciech Podleśny" }],
    openGraph: {
        images: "/opengraph-image.png",
        description:
            "Portfolio Frontend Developera – Wojciech Podleśny. Nowoczesne strony internetowe i aplikacje w React, Next.js i JavaScript.",
        type: "website",
        locale: "pl-PL",
        title: "Wojciech Podleśny | Frontend Developer",
        siteName: "Portfolio Wojciecha Podleśnego",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    },
    robots: {
        index: true,
        follow: true,
    },
    twitter: {
        card: "summary_large_image",
        site: "@wojtekp90",
        creator: "@wojtekp90",
        title: "Wojciech Podleśny | Frontend Developer Portfolio",
        description:
            "Frontend Developer – Wojciech Podleśny. Specjalizacja: React, Next.js, JavaScript. Tworzę nowoczesne strony www i responsywne aplikacje webowe.",
        images: ["/opengraph-image.png"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <GoogleAnalytics gaId={`${process.env.GOOGLE_ANALYTICS_ID}`} />
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
