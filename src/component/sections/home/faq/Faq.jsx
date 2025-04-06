import { getFaqs } from "@/lib/contentful";
import FaqWrapper from "./FaqWrapper";

export const revalidate = 3600;

export default async function Faq() {
    const faqs = await getFaqs();
    return <FaqWrapper faqs={faqs ?? []} />;
}
