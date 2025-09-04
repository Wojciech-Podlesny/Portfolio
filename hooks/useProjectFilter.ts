import { useMemo } from "react";
import type { Project } from "@/types/projects";

export function useProjectFilter(
    projects: Project[],
    selectedFilter: string,
    search: string,
    page: number,
    perPage: number
) {
    const filteredProjects = useMemo(() => {
        const q = search.trim().toLowerCase();
        return projects.filter((p) => {
            const byTech =
                selectedFilter === "All Projects" ||
                p.technologies.includes(selectedFilter);
            const byQuery =
                !q ||
                p.title.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q);
            return byTech && byQuery;
        });
    }, [projects, selectedFilter, search]);

    const paginatedProjects = useMemo(() => {
        const start = (page - 1) * perPage;
        return filteredProjects.slice(start, start + perPage);
    }, [filteredProjects, page, perPage]);

    return { filteredProjects, paginatedProjects };
}
