import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { GoogleAnalytics } from '@next/third-parties/google'
import ThemeProvider from "@/app/[locale]/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await props.params;
    const t = await getTranslations({ locale, namespace: "metadata" });
    return {
        title: {
            default: t("layout.titleDefault"),
            template: `%s | ${t("layout.titleTemplate")}`,
        },
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        description: t("layout.description"),
        keywords: t("layout.keywords"),
        authors: [{ name: "Wojciech Podleśny" }],
        openGraph: {
            type: "website",
            title: t("layout.ogTitle"),
            description: t("layout.ogDescription"),
            locale: locale === "en" ? "en-US" : "pl-PL",
            images: ["/opengraph-image.png"],
        },
        twitter: {
            card: "summary_large_image",
            site: "@wojtekp90",
            creator: "@wojtekp90",
            title: t("layout.twitterTitle"),
            description: t("layout.twitterDescription"),
            images: ["/opengraph-image.png"],
        },
        robots: { index: true, follow: true },
    };
}

export default async function RootLayout(props: { children: ReactNode; params: Promise<{ locale: string }> }) {
    const { children, params } = props;
    const { locale } = await params;
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
        notFound();
    }

    return (
        <html lang={locale}>
        <body className={inter.className}>
        <ThemeProvider>
            <GoogleAnalytics gaId={`${process.env.GOOGLE_ANALYTICS_ID}`} />
            <NextIntlClientProvider locale={locale} messages={messages}>
                <Navbar />
                {children}
                <ToastContainer position="bottom-right" autoClose={3000} />
                <Footer />
            </NextIntlClientProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}