export default function StatusBadge({ status }: { status: "in-progress" | "completed" | "paused" }) {
    const map = {
        "in-progress": "bg-yellow-400 text-black",
        "completed": "bg-emerald-500 text-white",
        "paused": "bg-gray-500 text-white",
    } as const;

    const label = {
        "in-progress": "In Progress",
        "completed": "Completed",
        "paused": "Paused",
    }[status];

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${map[status]}`}>
      {label}
    </span>
    );
}
