export type StatusBadgeProps = {
    status: "in-progress" | "completed" | "paused";
}

export const StatusBadge = ({status}: StatusBadgeProps) => {
    const styles = {
        "in-progress":
            "bg-yellow-400 text-black dark:bg-yellow-300 dark:text-black",
        "completed":
            "bg-emerald-500 text-white dark:bg-emerald-400 dark:text-black",
        "paused": "bg-gray-500 text-white dark:bg-gray-400 dark:text-black",
    } as const;

    const label = {
        "in-progress": "In Progress",
        "completed": "Completed",
        "paused": "Paused",
    }[status];

    return (
        <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status]}`}
        >
      {label}
    </span>
    );
}

