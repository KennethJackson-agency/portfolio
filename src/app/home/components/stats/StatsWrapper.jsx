/* Local Client Components */
import StatsClient from "./client/StatsClient";

export default async function StatsWrapper({ stats = [] }) {
    if (!stats.length) return null;

    return (
        <section className="flex flex-col items-center gap-16 px-5">
            <StatsClient stats={stats} />
        </section>
    );
}
