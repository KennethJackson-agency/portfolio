import { getClients } from "@/lib/contentful";
import ClientWrapper from "./ClientWrapper";

export const revalidate = 1;

export default async function Clients() {
    const clients = await getClients();
    return <ClientWrapper clients={clients ?? []} />;
}
