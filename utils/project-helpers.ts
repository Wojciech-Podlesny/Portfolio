import { projects } from "@/data/projects";
import {Project} from "@/types/projects";


export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}

export function getSimilarProjects(project: Project, limit = 3): Project[] {
    const techs = new Set(project.technologies ?? []);
    return projects
        .filter(p => p.slug !== project.slug && p.technologies?.some(t => techs.has(t)))
        .slice(0, limit);
}

export function getMockupSrc(project: Project) {
    const laptop = project.imageLaptop?.[0];
    const gallery = project.image?.[0];
    return laptop ?? gallery;
}
