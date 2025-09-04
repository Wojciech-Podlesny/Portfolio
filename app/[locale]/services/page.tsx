import { Services } from "@/components/Services";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata" });
    return {
        title: t("services.title"),
        description: t("services.description"),
        keywords: t("services.keywords"),
        openGraph: {
            title: t("services.title"),
            description: t("services.description"),
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/services`,
            images: ["/opengraph-image.png"],
            locale: locale === "en" ? "en-US" : "pl-PL",
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/services`,
            languages: {
                pl: `${process.env.NEXT_PUBLIC_BASE_URL}/pl/uslugi`,
                en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/services`,
            },
        },
    };
}

const ServicesPage = () => {
    return (
        <div className="mt-32 bg-gray-900">
            <Services />
        </div>
    );
};

export default ServicesPage;