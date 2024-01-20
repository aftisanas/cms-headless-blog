export const postDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}