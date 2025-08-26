// "use client";
//
// import { useCallback, useEffect, useMemo, useState } from "react";
// import { TextAnimate } from "@/components/magicui/text-animate";
// import { FilterBarProjects } from "@/components/FilterBarProjects";
// import { useProjectFilter } from "@/hooks/useProjectFilter";
// import { ProjectsList } from "@/components/ProjectList";
// import { ProjectsPagination } from "@/components/ProjectsPagination";
// import {useDebouncedValue} from "@/hooks/useDebounceSearch";
// import {SectionHeading} from "@/components/SectionHeading";
//
// const ALL_TECHNOLOGIES = [
//     "All Projects",
//     "React",
//     "NextJS",
//     "Tailwind CSS",
//     "MongoDB",
//     "ExpressJS",
// ];
//
// const Projects = () => {
//     const [selectedFilter, setSelectedFilter] = useState("All Projects");
//     const [searchTerm, setSearchTerm] = useState("");
//     const [page, setPage] = useState(1);
//     const projectsPerPage = 6;
//
//     const debouncedSearch = useDebouncedValue(searchTerm, 300);
//
//     const { filteredProjects, paginatedProjects } = useProjectFilter(
//         selectedFilter,
//         debouncedSearch,
//         page,
//         projectsPerPage
//     );
//
//     const totalPages = useMemo(
//         () => Math.max(1, Math.ceil(filteredProjects.length / projectsPerPage)),
//         [filteredProjects.length, projectsPerPage]
//     );
//
//     useEffect(() => {
//         if (page > totalPages) setPage(totalPages);
//         if (page < 1) setPage(1);
//     }, [totalPages, page]);
//
//     const handleFilterChange = useCallback((v: string) => {
//         setSelectedFilter(v);
//         setPage(1);
//     }, []);
//
//     const handleSearchChange = useCallback((v: string) => {
//         setSearchTerm(v);
//         setPage(1);
//     }, []);
//
//     return (
//         <section className="py-16 px-6 mt-24 bg-gray-900 text-white">
//             <SectionHeading title="All Projects" />
//             <TextAnimate className="text-gray-300 px-4 md:px-12 text-2xl text-center mb-16">
//                 Explore a collection of my recent work across various technologies and domains.
//             </TextAnimate>
//
//             <FilterBarProjects
//                 allTechnologies={ALL_TECHNOLOGIES}
//                 selectedFilter={selectedFilter}
//                 setSelectedFilter={handleFilterChange}
//                 searchTerm={searchTerm}
//                 setSearchTerm={handleSearchChange}
//                 setPage={setPage}
//             />
//
//             {paginatedProjects.length === 0 ? (
//                 <p className="text-center text-gray-400 mt-12">
//                     No projects found. Try a different keyword or filter.
//                 </p>
//             ) : (
//                 <ProjectsList projects={paginatedProjects} />
//             )}
//
//             <ProjectsPagination
//                 totalItems={filteredProjects.length}
//                 itemsPerPage={projectsPerPage}
//                 currentPage={page}
//                 onPageChange={setPage}
//             />
//         </section>
//     );
// };
//
// export default Projects;


//dark
// "use client";
//
// import { useCallback, useEffect, useMemo, useState } from "react";
// import { TextAnimate } from "@/components/magicui/text-animate";
// import { FilterBarProjects } from "@/components/FilterBarProjects";
// import { useProjectFilter } from "@/hooks/useProjectFilter";
// import { ProjectsList } from "@/components/ProjectList";
// import { ProjectsPagination } from "@/components/ProjectsPagination";
// import { useDebouncedValue } from "@/hooks/useDebounceSearch";
// import { SectionHeading } from "@/components/SectionHeading";
//
//
// const ALL_TECHNOLOGIES = [
//     "All Projects",
//     "React",
//     "NextJS",
//     "Tailwind CSS",
//     "MongoDB",
//     "ExpressJS",
// ];
//
// const Projects = () => {
//     const [selectedFilter, setSelectedFilter] = useState("All Projects");
//     const [searchTerm, setSearchTerm] = useState("");
//     const [page, setPage] = useState(1);
//     const projectsPerPage = 6;
//
//     const debouncedSearch = useDebouncedValue(searchTerm, 300);
//
//     const { filteredProjects, paginatedProjects } = useProjectFilter(selectedFilter, debouncedSearch, page, projectsPerPage);
//
//     const totalPages = useMemo(
//         () => Math.max(1, Math.ceil(filteredProjects.length / projectsPerPage)),
//         [filteredProjects.length, projectsPerPage]
//     );
//
//     useEffect(() => {
//         if (page > totalPages) setPage(totalPages);
//         if (page < 1) setPage(1);
//     }, [totalPages, page]);
//
//     const handleFilterChange = useCallback((v: string) => {
//         setSelectedFilter(v);
//         setPage(1);
//     }, []);
//
//     const handleSearchChange = useCallback((v: string) => {
//         setSearchTerm(v);
//         setPage(1);
//     }, []);
//
//     return (
//         <section className="py-16 px-6 mt-24 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
//             <SectionHeading title="All Projects" />
//
//             <TextAnimate className="text-gray-600 dark:text-gray-300 px-4 md:px-12 text-2xl text-center mb-16">
//                 Explore a collection of my recent work across various technologies and domains.
//             </TextAnimate>
//
//             <FilterBarProjects
//                 allTechnologies={ALL_TECHNOLOGIES}
//                 selectedFilter={selectedFilter}
//                 setSelectedFilter={handleFilterChange}
//                 searchTerm={searchTerm}
//                 setSearchTerm={handleSearchChange}
//                 setPage={setPage}
//             />
//
//             {paginatedProjects.length === 0 ? (
//                 <p className="text-center text-gray-500 dark:text-gray-400 mt-12">
//                     No projects found. Try a different keyword or filter.
//                 </p>
//             ) : (
//                 <ProjectsList projects={paginatedProjects} />
//             )}
//
//             <ProjectsPagination
//                 totalItems={filteredProjects.length}
//                 itemsPerPage={projectsPerPage}
//                 currentPage={page}
//                 onPageChange={setPage}
//             />
//         </section>
//     );
// };
//
// export default Projects;
//

import {SectionHeading} from "@/components/SectionHeading";
import {projects as allProjects} from "@/data/projects";;
import {Metadata} from "next";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
    title: "All Projects",
    description: "Browse projects including Next.js, React, Tailwind CSS, MongoDB, Express and more"
}

const Projects = ({searchParams}: { searchParams?: { q?: string; tech?: string; page?: string }; }) => {

    const projects = allProjects;

    const initialSearch = searchParams?.q ?? "";
    const initialFilter = searchParams?.tech ?? "All Projects";
    const initialPage = Number(searchParams?.page ?? 1);

    return (
        <section
            className="py-16 px-6 mt-24 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
            <SectionHeading title="All Projects"/>
            <ProjectsSection
                initialProjects={projects}
                initialFilter={initialFilter}
                initialSearch={initialSearch}
                initialPage={initialPage}
            />
        </section>
    );
}

export default Projects;