import { getServices } from "@/lib/contentful";
import ServiceWrapper from "./ServiceWrapper";

export const revalidate = 1;

export default async function Service() {
    const services = await getServices();
    return <ServiceWrapper services={services ?? []} />;
}
