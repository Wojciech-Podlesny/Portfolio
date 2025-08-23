"use client";

import  { useState } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FilterBar } from "@/components/FilterBar";
import { Pagination } from "@/components/Pagination";
import { useProjectFilter } from "@/hooks/useProjectFilter";
import {ProjectsList} from "@/components/ProjectList";

const ProjectsPage = () => {
    const [selectedFilter, setSelectedFilter] = useState("All Projects");
    const [searchTerm, setSearchTerm] = useState("");
    const [page, setPage] = useState(1);
    const projectsPerPage = 6;

    const allTechnologies = [
        "All Projects",
        "React",
        "NextJS",
        "Tailwind CSS",
        "MongoDB",
        "ExpressJS",
    ];

    const { filteredProjects, paginatedProjects } = useProjectFilter(
        selectedFilter,
        searchTerm,
        page,
        projectsPerPage
    );

    return (
        <section className="py-16 px-6 bg-gray-900 text-white">
            <h2 className="text-4xl font-bold mb-12 text-center mt-24">My Projects</h2>
            <TextAnimate className="text-gray-300 px-4 md:px-12 text-2xl text-center mb-16">
                Explore a collection of my recent work across various technologies and domains.
            </TextAnimate>

            <FilterBar
                allTechnologies={allTechnologies}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setPage={setPage}
            />

            {paginatedProjects.length === 0 ? (
                <p className="text-center text-gray-400 mt-12">
                    No projects found. Try a different keyword or filter.
                </p>
            ) : (
                <ProjectsList projects={paginatedProjects} />
            )}


                <Pagination
                    totalItems={filteredProjects.length}
                    itemsPerPage={projectsPerPage}
                    currentPage={page}
                    onPageChange={setPage}
                />

        </section>
    );
}

export default ProjectsPage;