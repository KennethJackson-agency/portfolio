import { getFaqs } from "@/lib/contentful";
import FaqWrapper from "./FaqWrapper";

export const revalidate = 1;

export default async function Faq() {
    const faqs = await getFaqs();
    return <FaqWrapper faqs={faqs ?? []} />;
}
