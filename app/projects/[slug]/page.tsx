//
//
// import { notFound } from "next/navigation";
// import MotionSection from "@/components/MotionSection";
// import { ProjectCard } from "@/components/ProjectsCard";
// import ProjectGallery from "@/components/ProjectGallery";
// import { Card } from "@/components/ui/card";
// import { getProjectBySlug, getSimilarProjects, getMockupSrc } from "@/utils/project-helpers";
// import {ProjectDetailsHeader} from "@/components/ProjectDetails/ProejctDetailsHeader";
// import {HeroMockup} from "@/components/ProjectDetails/HeroMockup";
// import {FeaturesGrid} from "@/components/ProjectDetails/FeaturesGrid";
//
// type RouteParams = { slug: string };
//
// export default async function ProjectDetailsPage({ params }: { params: Promise<RouteParams> }) {
//     const { slug } = await params;
//     const project = getProjectBySlug(slug);
//     if (!project) notFound();
//
//     const similarProjects = getSimilarProjects(project);
//     const mockupSrc = getMockupSrc(project);
//
//     return (
//         <MotionSection className="bg-gray-900 text-white min-h-screen">
//             <ProjectDetailsHeader
//                 title={project.title}
//                 date={project.date}
//                 status={project.status}
//                 preview={project.preview}
//                 github={project.github}
//             />
//
//             <HeroMockup src={mockupSrc} alt={`${project.title} main preview`} />
//
//             <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
//                 {project.description && (
//                     <section>
//                         <h3 className="text-2xl font-semibold mb-4">Description:</h3>
//                         <p className="text-gray-300 text-lg leading-relaxed text-center">{project.description}</p>
//                     </section>
//                 )}
//
//                 {!!project.keyFeatures?.length && <FeaturesGrid features={project.keyFeatures} />}
//
//                 {!!project.image?.length && (
//                     <section className="max-w-6xl mx-auto px-6 py-10">
//                         <ProjectGallery images={project.image} />
//                     </section>
//                 )}
//
//                 {!!project.technologies?.length && (
//                     <section aria-labelledby="stack-heading">
//                         <Card className="bg-gray-900/70 border border-white/10 overflow-hidden">
//                             {/* ...TechStackChips jeśli chcesz jeszcze wydzielić... */}
//                         </Card>
//                     </section>
//                 )}
//             </div>
//
//             {!!similarProjects.length && (
//                 <div className="pt-16 pb-12">
//                     <h3 className="text-2xl font-semibold text-center mb-10">Similar Projects</h3>
//                     <div className="flex flex-col md:flex-row justify-center items-center gap-12">
//                         {similarProjects.map(p => <ProjectCard key={p.slug} {...p} />)}
//                     </div>
//                 </div>
//             )}
//         </MotionSection>
//     );
// }


//dark
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
import { HeroMockup } from "@/components/ProjectDetails/HeroMockup";
import { FeaturesGrid } from "@/components/ProjectDetails/FeaturesGrid";
import { ProjectDetailsHeader } from "@/components/ProjectDetails/ProjectDetailsHeader";

type RouteParams = { slug: string };

export default async function ProjectDetailsPage({
                                                     params,
                                                 }: {
    params: Promise<RouteParams>;
}) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);
    if (!project) notFound();

    const similarProjects = getSimilarProjects(project);
    const mockupSrc = getMockupSrc(project);

    return (
        <MotionSection className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
            <ProjectDetailsHeader
                title={project.title}
                date={project.date}
                status={project.status}
                preview={project.preview}
                github={project.github}
            />

            <HeroMockup src={mockupSrc} alt={`${project.title} main preview`} />

            <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
                {project.description && (
                    <section>
                        <h3 className="text-2xl font-semibold mb-4">Description:</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center">
                            {project.description}
                        </p>
                    </section>
                )}

                {!!project.keyFeatures?.length && (
                    <FeaturesGrid features={project.keyFeatures} />
                )}

                {!!project.image?.length && (
                    <section className="max-w-6xl mx-auto px-6 py-10">
                        <ProjectGallery images={project.image} />
                    </section>
                )}

                {!!project.technologies?.length && (
                    <section aria-labelledby="stack-heading">
                        <Card className="bg-gray-100 dark:bg-gray-900/70 border border-gray-200 dark:border-white/10 overflow-hidden">
                            <div className="px-4 py-5">
                                <h3
                                    id="stack-heading"
                                    className="text-gray-900 dark:text-white text-lg font-semibold mb-4"
                                >
                                    Tech Stack
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
                        Similar Projects
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
