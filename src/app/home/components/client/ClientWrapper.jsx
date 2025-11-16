/* Local Assets */
import ClientLogo from "./client/ClientLogo";

export default function ClientWrapper({ clients = [] }) {
    if (!clients?.length) return null;

    return (
        <section className="flex flex-wrap gap-10 justify-center px-5">
            <ClientLogo clients={clients} />
        </section>
    );
}
