import { Contact } from "@/components/Contact";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata" });
    return {
        title: t("contact.title"),
        description: t("contact.description"),
        keywords: t("contact.keywords"),
        openGraph: {
            title: t("contact.title"),
            description: t("contact.description"),
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/contact`,
            images: ["/opengraph-image.png"],
            locale: locale === "en" ? "en-US" : "pl-PL",
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/contact`,
            languages: {
                pl: `${process.env.NEXT_PUBLIC_BASE_URL}/pl/kontakt`,
                en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/contact`,
            },
        },
    };
}

const ContactPage = () => {
    return (
        <div className="mt-32 pb-38 g-gray-900">
            <Contact />
        </div>
    );
};

export default ContactPage;