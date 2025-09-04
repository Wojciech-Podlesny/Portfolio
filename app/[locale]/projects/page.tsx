import { SectionHeading } from "@/components/SectionHeading";
import { projects as allProjects } from "@/data/projects";
import type { Metadata } from "next";
import {ProjectsSection} from "@/components/ProjectsSection";
import {getTranslations} from "next-intl/server";
import React from "react";
import {TextAnimate} from "@/components/magicui/text-animate";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata" });
    return {
        title: t("projects.title"),
        description: t("projects.description"),
        keywords: t("projects.keywords"),
        openGraph: {
            title: t("projects.title"),
            description: t("projects.description"),
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/projects`,
            images: ["/opengraph-image.png"],
            locale: locale === "en" ? "en-US" : "pl-PL",
        },
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/projects`,
            languages: {
                pl: `${process.env.NEXT_PUBLIC_BASE_URL}/pl/projekty`,
                en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/projects`,
            },
        },
    };
}

export default async function Projects({searchParams}: { searchParams?: Promise<{ query?: string; tech?: string; page?: string }>; }) {
    const sp = (await searchParams) ?? {};
    const t = await getTranslations("allProjects")
    const projects = allProjects;
    const initialSearch = sp.query ?? "";
    const initialFilter = sp.tech ?? "All Projects";
    const initialPage = Number(sp.page ?? 1);

    return (
        <>
            <section
                className="py-16 px-6 mt-24 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
                <SectionHeading title={t("title")}/>
                <TextAnimate as="h2"
                             className="text-gray-600 dark:text-gray-300 px-4 md:px-12 text-2xl text-center mb-16">
                    {t("intro")}
                </TextAnimate>
                <ProjectsSection
                    initialProjects={projects}
                    initialFilter={initialFilter}
                    initialSearch={initialSearch}
                    initialPage={initialPage}/>

            </section>

        </>
    );
}
