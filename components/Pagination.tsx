interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
                                                          totalItems,
                                                          itemsPerPage,
                                                          currentPage,
                                                          onPageChange,
                                                      }) => {
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    return (
        <div className="mt-24 flex justify-center gap-3 flex-wrap">
            {Array.from({ length: pageCount }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    className={`min-w-[40px] px-4 py-2 text-sm font-medium ${
                        currentPage === i + 1 ? "bg-purple-500" : "bg-gray-700"
                    } text-white rounded-lg transition`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};
