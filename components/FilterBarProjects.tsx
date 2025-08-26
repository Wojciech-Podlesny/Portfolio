// import React from "react";
// import { FiFilter, FiSearch } from "react-icons/fi";
//
// interface FilterBarProjectsProps {
//     allTechnologies: string[];
//     selectedFilter: string;
//     setSelectedFilter: (tech: string) => void;
//     searchTerm: string;
//     setSearchTerm: (term: string) => void;
//     setPage: (page: number) => void;
// }
//
// export const FilterBarProjects = ({
//                                                         allTechnologies,
//                                                         selectedFilter,
//                                                         setSelectedFilter,
//                                                         searchTerm,
//                                                         setSearchTerm,
//                                                         setPage,
//                                                     }: FilterBarProjectsProps) => {
//     return (
//         <div className="flex flex-wrap items-center justify-between bg-[#1F1F2E] px-6 py-4 rounded-xl border border-gray-700 mb-12">
//             <div className="flex items-center gap-3 flex-wrap">
//                 <span className="flex items-center text-gray-400 font-medium text-sm mr-2">
//                     <FiFilter className="mr-2" /> Filter:
//                 </span>
//                 {allTechnologies.map((tech) => (
//                     <button
//                         key={tech}
//                         onClick={() => {
//                             setSelectedFilter(tech);
//                             setSearchTerm("");
//                             setPage(1);
//                         }}
//                         className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
//                             selectedFilter === tech
//                                 ? "bg-purple-500 text-white"
//                                 : "bg-[#12121C] text-gray-300 hover:bg-[#2A2A3C]"
//                         }`}
//                     >
//                         {tech}
//                     </button>
//                 ))}
//             </div>
//
//             <div className="relative mt-4 sm:mt-0">
//                 <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                 <input
//                     type="text"
//                     placeholder="Search projects..."
//                     className="pl-10 pr-4 py-2 bg-[#12121C] text-sm text-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
//                     value={searchTerm}
//                     onChange={(e) => {
//                         setSearchTerm(e.target.value);
//                         setPage(1);
//                     }}
//                 />
//             </div>
//         </div>
//     );
// };


//dark

import React from "react";
import { Filter, Search } from "lucide-react";

interface FilterBarProjectsProps {
    allTechnologies: string[];
    selectedFilter: string;
    setSelectedFilter: (tech: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    setPage: (page: number) => void;
}

export const FilterBarProjects = ({
                                      allTechnologies,
                                      selectedFilter,
                                      setSelectedFilter,
                                      searchTerm,
                                      setSearchTerm,
                                      setPage,
                                  }: FilterBarProjectsProps) => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-[#1F1F2E] px-6 py-4 rounded-xl border border-gray-300 dark:border-gray-700 mb-12 transition-colors duration-300">
            <div className="flex items-center gap-3 flex-wrap">
        <span className="flex items-center text-gray-600 dark:text-gray-400 font-medium text-sm mr-2">
          <Filter className="mr-2" /> Filter:
        </span>
                {allTechnologies.map((tech) => (
                    <button
                        key={tech}
                        onClick={() => {
                            setSelectedFilter(tech);
                            setSearchTerm("");
                            setPage(1);
                        }}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
                            selectedFilter === tech
                                ? "bg-purple-600 text-white"
                                : "bg-gray-200 dark:bg-[#12121C] text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#2A2A3C]"
                        }`}
                    >
                        {tech}
                    </button>
                ))}
            </div>

            <div className="relative w-full sm:w-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <input
                    type="text"
                    placeholder="Search projects..."
                    className="w-full sm:w-[240px] pl-10 pr-4 py-2 bg-gray-100 dark:bg-[#12121C] text-sm text-gray-900 dark:text-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 transition"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setPage(1);
                    }}
                />
            </div>
        </div>
    );
};
