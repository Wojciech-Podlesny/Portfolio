import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "@/app/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default:"Wojciech Podleśny",
        template:"Wojciech Podleśny"
    },
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
    description: "Wojciech Podleśny - Front-end Developer. I specialize " +
        "in creating responsive and user-friendly applications. ",
    keywords: ["Web Developer",'Frontend Developer',"Programming","React","Next.js","Javascript","Node.js"],
    authors: [{name: "Wojciech Podleśny"}],
    openGraph: {
        images: "/opengraph-image.png",
        description: "Open Graph",
        type:"website",
        locale: "en-US",
        title: "Open Graph",
        siteName: "OpenGraph",
        url: `${process.env.NEXT_PUBLIC_URL}`,
    },
    robots: {
        index: true,
        follow: true,
    },
    twitter: {
        card: "summary",
        site: "@wojtekp90",
        creator:"@wojtekp90",
        title:"Wojciech Podleśny",
        description:"Wojciech Podleśny - Front-end Developer. I specialize " +
            "in creating responsive and user-friendly applications. ",
    }
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
