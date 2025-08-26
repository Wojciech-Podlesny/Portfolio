// import { useMemo } from "react";
// import { projects } from "@/data/projects";
//
// export const useProjectFilter = (
//     selectedFilter: string,
//     searchTerm: string,
//     page: number,
//     projectsPerPage: number
// ) => {
//     const filteredProjects = useMemo(() => {
//         const lowerSearch = searchTerm.toLowerCase();
//
//         return projects.filter((project) => {
//             const matchesFilter =
//                 selectedFilter === "All Projects" ||
//                 project.technologies.includes(selectedFilter);
//
//             const matchesSearch =
//                 project.title.toLowerCase().includes(lowerSearch) ||
//                 project.description.toLowerCase().includes(lowerSearch) ||
//                 project.technologies.some((tech) =>
//                     tech.toLowerCase().includes(lowerSearch)
//                 );
//
//             return matchesFilter && matchesSearch;
//         });
//     }, [selectedFilter, searchTerm]);
//
//     const paginatedProjects = useMemo(() => {
//         return filteredProjects.slice(
//             (page - 1) * projectsPerPage,
//             page * projectsPerPage
//         );
//     }, [filteredProjects, page, projectsPerPage]);
//
//     return {
//         filteredProjects,
//         paginatedProjects,
//     };
// };
// /hooks/useProjectFilter.ts
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
