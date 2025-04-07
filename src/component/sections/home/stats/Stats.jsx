import { getStats } from "@/lib/contentful";
import StatsWrapper from "./StatsWrapper";

export const revalidate = 1;

export default async function Stats() {
    const stats = await getStats();
    return <StatsWrapper stats={stats ?? []} />;
}
