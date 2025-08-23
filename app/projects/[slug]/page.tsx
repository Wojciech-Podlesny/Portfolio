
"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectsCard";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectGallery from "@/components/ProjectGallery";


type Img = string | StaticImageData;

const toArray = (img?: Img | Img[]): Img[] =>
    Array.isArray(img) ? img : img ? [img] : [];

export default  function ProjectDetails ({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);

    const laptopImages = toArray(project?.imageLaptop as Img | Img[] | undefined);
    const galleryImages = toArray(project?.image as Img | Img[] | undefined);

    const mockupSrc = (laptopImages[0] ?? galleryImages[0]) as Img | undefined;

    if (!project) return notFound();

    const similarProjects =
        projects
            .filter(
                (p) =>
                    p.slug !== project.slug &&
                    p.technologies?.some((tech) => project.technologies?.includes(tech))
            )
            .slice(0, 3) ?? [];

    return (
        <motion.section
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="bg-gray-900 text-white min-h-screen"
        >
            {/* HEADER */}
            <header className="flex flex-col items-center text-center px-4 pt-24 pb-8">
                <h1 id="project-title" className="text-3xl md:text-5xl font-bold">
                    {project.title}
                </h1>

                {project.date && (
                    <p className="mt-2 text-gray-400 text-base md:text-lg">{project.date}</p>
                )}

                {project.status && (
                    <div className="mt-3">
            <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "in-progress"
                        ? "bg-yellow-400 text-black"
                        : project.status === "completed"
                            ? "bg-emerald-500 text-white"
                            : "bg-gray-500 text-white"
                }`}
            >
              {project.status === "in-progress"
                  ? "In Progress"
                  : project.status === "completed"
                      ? "Completed"
                      : "Paused"}
            </span>
                    </div>
                )}

                {(project.preview || project.github) && (
                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                        {project.preview && (
                            <Link
                                href={project.preview}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 px-5 py-3 font-semibold"
                                aria-label={`${project.title} — Live Demo`}
                            >
                                <FaExternalLinkAlt aria-hidden/> Live Demo
                            </Link>
                        )}
                        {project.github && (
                            <Link
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-gray-700 hover:bg-gray-800 px-5 py-3 font-semibold"
                                aria-label={`${project.title} — GitHub Repository`}
                            >
                                <FaGithub aria-hidden/> GitHub
                            </Link>
                        )}
                    </div>
                )}
            </header>

            {mockupSrc && (
                <div className="max-w-5xl mx-auto px-6 mb-16">
                    <div
                        className="relative mx-auto w-full rounded-2xl overflow-hidden h-[28rem] md:h-[40rem] bg-gray-900 ring-1 ring-white/10">
                        <Image
                            src={mockupSrc}
                            alt={`${project.title} main preview`}
                            fill
                            className="object-contain p-3 md:p-4"
                            sizes="(max-width: 768px) 100vw, 1280px"
                            priority
                        />
                    </div>
                </div>
            )}



            <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
                {project.description && (
                    <section>
                        <h3 className="text-2xl font-semibold mb-4">Description:</h3>
                        <p className="text-gray-300 text-lg leading-relaxed text-center">
                            {project.description}
                        </p>
                    </section>
                )}


                {project.keyFeatures?.length > 0 && (
                    <section>
                        <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
                        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {project.keyFeatures.map((feature, i) => (
                                <Card
                                    key={i}
                                    className="bg-gray-800/60 border border-gray-700 hover:bg-gray-800 transition"
                                >
                                    <CardHeader className="p-5 flex items-start gap-3">
                                        <div
                                            className="h-10 w-10 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center shrink-0">
                                            <FaCheckCircle className="text-emerald-400"/>
                                        </div>
                                        <CardTitle className="text-white leading-relaxed break-words">
                                            {feature}
                                        </CardTitle>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </section>
                )}



                {Array.isArray(project.image) && (
                    <section className="max-w-6xl mx-auto px-6 py-10">
                        <ProjectGallery images={project.image} />
                    </section>
                )}
                {/* Tech Stack */}
                {project.technologies?.length > 0 && (
                    <section aria-labelledby="stack-heading">
                        <Card className="bg-gray-900/70 border border-white/10 overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                                <h3 id="stack-heading" className="text-sm font-semibold text-white/80">
                                    Tech Stack
                                </h3>
                            </div>
                            <div className="p-4">
                                <ul className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <li
                                            key={tech}
                                            className="rounded-full px-4 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 text-white/90 ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </section>
                )}

            </div>

            {similarProjects.length > 0 && (
                <div className="pt-16 pb-12">
                    <h3 className="text-2xl font-semibold text-center mb-10">Similar Projects</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                        {similarProjects.map((simProject) => (
                            <ProjectCard key={simProject.slug} {...simProject} />
                        ))}
                    </div>
                </div>
            )}
        </motion.section>
    );
}
