export const MagicButton = ({
                                title,

                                position,
                                handleClick,
                                otherClasses,
                            }: {
    title: string;
    position: "left" | "right" | "center";
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button
            className="relative inline-flex items-center h-12 min-w-[160px] overflow-hidden rounded-lg p-[1px] focus:outline-none align-middle"
            onClick={handleClick}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            <span
                className={`relative z-10 inline-flex h-full w-full items-center justify-center gap-2 rounded-lg
        bg-slate-950 px-5 text-base font-medium text-white backdrop-blur-3xl ${otherClasses}`}
            >
        {position === "left"}
                {title}
                {position === "right"}
                {position === "center"}
      </span>
        </button>
    );
};
