type DateRange = { start: Date; end: Date | null };

const parseMonthYear = (str: string): Date => {
    const [m, y] = str.split("/").map((n) => parseInt(n, 10));
    if (Number.isNaN(m) || Number.isNaN(y)) return new Date(0);
    return new Date(y, m - 1, 1);
};

const toRange = (dateStr: string): DateRange => {
    const [startStr, endStrRaw] = dateStr.split("-").map((s) => s.trim());
    const endStr = endStrRaw?.toLowerCase?.() ?? "";
    const start = parseMonthYear(startStr);
    const end = endStr === "present" ? null : parseMonthYear(endStr);
    return { start, end };
};

export const compareEducationByDate = (a: { date: string }, b: { date: string }) => {
    const ra = toRange(a.date);
    const rb = toRange(b.date);
    const endA = ra.end ? ra.end.getTime() : Infinity;
    const endB = rb.end ? rb.end.getTime() : Infinity;
    if (endA !== endB) return endB - endA;
    return rb.start.getTime() - ra.start.getTime();
};
