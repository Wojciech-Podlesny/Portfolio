import React from "react";
import { FiFilter, FiSearch } from "react-icons/fi";

interface FilterBarProps {
    allTechnologies: string[];
    selectedFilter: string;
    setSelectedFilter: (tech: string) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    setPage: (page: number) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
                                                        allTechnologies,
                                                        selectedFilter,
                                                        setSelectedFilter,
                                                        searchTerm,
                                                        setSearchTerm,
                                                        setPage,
                                                    }) => {
    return (
        <div className="flex flex-wrap items-center justify-between bg-[#1F1F2E] px-6 py-4 rounded-xl border border-gray-700 mb-12">
            <div className="flex items-center gap-3 flex-wrap">
                <span className="flex items-center text-gray-400 font-medium text-sm mr-2">
                    <FiFilter className="mr-2" /> Filter:
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
                                ? "bg-purple-500 text-white"
                                : "bg-[#12121C] text-gray-300 hover:bg-[#2A2A3C]"
                        }`}
                    >
                        {tech}
                    </button>
                ))}
            </div>

            <div className="relative mt-4 sm:mt-0">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search projects..."
                    className="pl-10 pr-4 py-2 bg-[#12121C] text-sm text-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
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
