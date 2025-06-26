export async function formatMonthYear(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });
}
