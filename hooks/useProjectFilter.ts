import { useMemo } from "react";
import { projects } from "@/data/projects";

export const useProjectFilter = (
    selectedFilter: string,
    searchTerm: string,
    page: number,
    projectsPerPage: number
) => {
    const filteredProjects = useMemo(() => {
        const lowerSearch = searchTerm.toLowerCase();

        return projects.filter((project) => {
            const matchesFilter =
                selectedFilter === "All Projects" ||
                project.technologies.includes(selectedFilter);

            const matchesSearch =
                project.title.toLowerCase().includes(lowerSearch) ||
                project.description.toLowerCase().includes(lowerSearch) ||
                project.technologies.some((tech) =>
                    tech.toLowerCase().includes(lowerSearch)
                );

            return matchesFilter && matchesSearch;
        });
    }, [selectedFilter, searchTerm]);

    const paginatedProjects = useMemo(() => {
        return filteredProjects.slice(
            (page - 1) * projectsPerPage,
            page * projectsPerPage
        );
    }, [filteredProjects, page, projectsPerPage]);

    return {
        filteredProjects,
        paginatedProjects,
    };
};
