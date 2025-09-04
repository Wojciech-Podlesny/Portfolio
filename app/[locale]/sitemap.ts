import { projects } from "@/data/projects";

export default async function sitemap() {
    const locales = ["pl", "en"];
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    const items = locales.flatMap((locale) => [
        {
            url: `${baseURL}/${locale}`,
            lastModified: new Date(),
        },
        {
            url: `${baseURL}/${locale}/projects`,
            lastModified: new Date(),
        },
        ...projects.map((project) => ({
            url: `${baseURL}/${locale}/projects/${project.slug}`,
            lastModified: new Date(),
        })),
    ]);

    return items;
}