import {projects} from "@/data/projects";

export default async function sitemap() {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    return [
        {
            url: baseURL,
            lastModified: new Date()
        },
        {
            url: `${baseURL}/projects`,
            lastModified: new Date(),
        },
        {
            ...projects.map((project) => ({
                url: `${baseURL}/projects/${project.slug}`,
                lastModified: new Date(),
            }))
        }
    ]
}