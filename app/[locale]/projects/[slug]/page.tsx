import { notFound } from "next/navigation";
import MotionSection from "@/components/MotionSection";
import { ProjectCard } from "@/components/ProjectsCard";
import ProjectGallery from "@/components/ProjectGallery";
import { Card } from "@/components/ui/card";
import {
    getProjectBySlug,
    getSimilarProjects,
    getMockupSrc,
} from "@/utils/project-helpers";
import { HeroMockup } from "@/components/HeroMockup";
import { ProjectDetailsHeader } from "@/components/ProjectDetailsHeader";
import { getTranslations } from "next-intl/server";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Metadata } from "next";
import { projects } from "@/data/projects";

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }): Promise<Metadata> {
    const { slug, locale } = await params;
    const t = await getTranslations({ locale, namespace: "metadata" });
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project not found | Portfolio",
            description: "The requested project could not be found.",
        };
    }

    return {
        title: t(`projectsSlug.${project.slug}.title`),
        description: t(`projectsSlug.${project.slug}.description`),
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: {
            title: t(`projectsSlug.${project.slug}.title`),
            description: t(`projectsSlug.${project.slug}.description`),
        },
        twitter: {
            card: "summary_large_image",
            title: t(`projectsSlug.${project.slug}.title`),
            description: t(`projectsSlug.${project.slug}.description`),
            images: project.image?.length ? [project.image[0].src] : undefined,
        },
    };
}

export function generateStaticParams() {
    const locales = ["pl", "en"];
    return projects.flatMap(project =>
        locales.map(locale => ({
            slug: project.slug,
            locale,
        }))
    );
}

export default async function ProjectDetails({ params }: { params: Promise<{ locale: string, slug: string }> }) {
    const { slug, locale } = await params;
    const project = getProjectBySlug(slug);
    const t = await getTranslations({ locale, namespace: "projects" });

    if (!project) notFound();

    const similarProjects = getSimilarProjects(project);
    const mockupImage = getMockupSrc(project);

    return (
        <MotionSection className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
            <ProjectDetailsHeader
                title={t(project.title)}
                date={t(project.date)}
                status={project.status}
                preview={project.preview}
                github={project.github}
            />

            <HeroMockup src={mockupImage} alt={t(project.title)} />

            <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
                <section>
                    <h3 className="text-2xl font-semibold mb-4">
                        {t("labels.description")}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center">
                        {t(project.description)}
                    </p>
                </section>
                {!!project.image?.length && (
                    <section className="max-w-6xl mx-auto px-6 py-10">
                        <ProjectGallery images={project.image} />
                    </section>
                )}
                {!!project.keyFeatures?.length && <FeaturesGrid features={project.keyFeatures} />}

                {!!project.technologies?.length && (
                    <section aria-labelledby="stack-heading">
                        <Card className="bg-gray-100 dark:bg-gray-900/70 border border-gray-200 dark:border-white/10 overflow-hidden">
                            <div className="px-4 py-5">
                                <h3
                                    id="stack-heading"
                                    className="text-gray-900 dark:text-white text-lg font-semibold mb-4"
                                >
                                    {t("labels.techStack")}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full px-4 py-2 text-sm font-medium bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-white/10 transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </section>
                )}
            </div>
            {!!similarProjects.length && (
                <div className="pt-16 pb-12">
                    <h3 className="text-2xl font-semibold text-center mb-10">
                        {t("labels.similarProjects")}
                    </h3>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                        {similarProjects.map((p) => (
                            <ProjectCard key={p.slug} {...p} />
                        ))}
                    </div>
                </div>
            )}
        </MotionSection>
    );
}