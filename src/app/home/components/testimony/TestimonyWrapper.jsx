/* Local Client Components */
import TestimonySlider from "./client/TestimonySlider";

export default function TestimonyWrapper({ testimonies = [] }) {
    if (!testimonies?.length) return null;

    const allTestimonies = testimonies.flatMap(
        (item) => item.fields.testimonyList || []
    );

    return (
        <section className="relative group px-5 mx-auto">
            <TestimonySlider testimonies={allTestimonies} />
        </section>
    );
}
