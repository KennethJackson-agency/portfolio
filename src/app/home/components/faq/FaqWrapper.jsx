import FaqList from "./client/FaqList";

export default function FaqWrapper({ faqs = [] }) {
    if (!faqs.length) return null;

    return (
        <section id="faq" className="px-5 md:px-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-primary mb-10">
                Got{" "}
                <em className="font-normal italic text-zinc-400">questions?</em>
            </h2>
            <FaqList faqs={faqs} />
        </section>
    );
}
