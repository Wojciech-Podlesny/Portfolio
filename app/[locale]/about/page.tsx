import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata" });
    return {
        title: t("about.title"),
        description: t("about.description"),
        keywords: t("about.keywords"),
        openGraph: {
            title: t("about.title"),
            description: t("about.description"),
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/about`,
            images: ["/opengraph-image.png"],
            locale: locale === "en" ? "en-US" : "pl-PL",
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/about`,
            languages: {
                pl: `${process.env.NEXT_PUBLIC_BASE_URL}/pl/about`,
                en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/about`,
            },
        },
    };
}

const AboutPage = () => {
    return (
        <main className="mt-32 ">
            <About />
            <Skills />
            <Experience />
            <Education />
        </main>
    );
};

export default AboutPage;
