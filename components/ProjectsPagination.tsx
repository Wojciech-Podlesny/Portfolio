"use client";

import { useMemo } from "react";
import {
    Pagination as UIPagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

function useVisiblePages(current: number, total: number) {
    return useMemo(() => {
        if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

        const pages: (number | "ellipsis")[] = [1];
        const start = Math.max(2, current - 1);
        const end = Math.min(total - 1, current + 1);

        if (start > 2) pages.push("ellipsis");
        for (let p = start; p <= end; p++) pages.push(p);
        if (end < total - 1) pages.push("ellipsis");
        pages.push(total);

        return pages;
    }, [current, total]);
}

interface ProjectsPaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export function ProjectsPagination({
                                       totalItems,
                                       itemsPerPage,
                                       currentPage,
                                       onPageChange,
                                   }: ProjectsPaginationProps) {
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    const visiblePages = useVisiblePages(currentPage, totalPages);

    const canPrev = currentPage > 1;
    const canNext = currentPage < totalPages;

    return (
        <div className="mt-10 flex justify-center">
            <UIPagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                if (canPrev) onPageChange(currentPage - 1);
                            }}
                            aria-disabled={!canPrev}
                            className={!canPrev ? "pointer-events-none opacity-50" : ""}
                        />
                    </PaginationItem>

                    {visiblePages.map((p, idx) => (
                        <PaginationItem key={`${p}-${idx}`}>
                            {p === "ellipsis" ? (
                                <PaginationEllipsis />
                            ) : (
                                <PaginationLink
                                    href="#"
                                    isActive={p === currentPage}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onPageChange(p as number);
                                    }}
                                >
                                    {p}
                                </PaginationLink>
                            )}
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                if (canNext) onPageChange(currentPage + 1);
                            }}
                            aria-disabled={!canNext}
                            className={!canNext ? "pointer-events-none opacity-50" : ""}
                        />
                    </PaginationItem>
                </PaginationContent>
            </UIPagination>
        </div>
    );
}
