"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Project } from "@/types/projects";
import { useProjectFilter } from "@/hooks/useProjectFilter";
import { ProjectsList } from "@/components/ProjectList";
import { ProjectsPagination } from "@/components/ProjectsPagination";
import { useDebouncedValue } from "@/hooks/useDebounceSearch";
import {FilterBarProjects} from "@/components/FilterBarProjects";

const ALL_TECHNOLOGIES = [
    "All Projects",
    "React",
    "TypeScript",
    "JavaScript",
    "NextJS",
    "Tailwind CSS",
];

export type ProjectsSectionProps = {
    initialProjects: Project[];
    initialFilter?: string;
    initialSearch?: string;
    initialPage?: number;
}

export const ProjectsSection = ({initialProjects, initialFilter = "All Projects", initialSearch = "", initialPage = 1}:
                                ProjectsSectionProps) =>  {
    const [selectedFilter, setSelectedFilter] = useState(initialFilter);
    const [searchTerm, setSearchTerm] = useState(initialSearch);
    const [page, setPage] = useState(initialPage);
    const projectsPerPage = 6;

    const debouncedSearch = useDebouncedValue(searchTerm, 300);

    const { filteredProjects, paginatedProjects } = useProjectFilter(
        initialProjects,
        selectedFilter,
        debouncedSearch,
        page,
        projectsPerPage
    );

    const totalPages = useMemo(
        () => Math.max(1, Math.ceil(filteredProjects.length / projectsPerPage)),
        [filteredProjects.length, projectsPerPage]
    );

    useEffect(() => {
        if (page > totalPages) setPage(totalPages);
        if (page < 1) setPage(1);
    }, [totalPages, page]);

    const handleFilterChange = useCallback((v: string) => {
        setSelectedFilter(v);
        setPage(1);
    }, []);

    const handleSearchChange = useCallback((v: string) => {
        setSearchTerm(v);
        setPage(1);
    }, []);

    return (
        <>
            <FilterBarProjects
                allTechnologies={ALL_TECHNOLOGIES}
                selectedFilter={selectedFilter}
                setSelectedFilter={handleFilterChange}
                searchTerm={searchTerm}
                setSearchTerm={handleSearchChange}
                setPage={setPage}
            />

            {paginatedProjects.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400 mt-12">
                    No projects found. Try a different keyword or filter.
                </p>
            ) : (
                <ProjectsList projects={paginatedProjects} />
            )}

            <ProjectsPagination
                totalItems={filteredProjects.length}
                itemsPerPage={projectsPerPage}
                currentPage={page}
                onPageChange={setPage}
            />
        </>
    );
}
