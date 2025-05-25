import { getTestimonies } from "@/lib/contentful";
import TestimonyWrapper from "./TestimonyWrapper";

export const revalidate = 1;

export default async function Testimony() {
	const testimonies = await getTestimonies();

	return <TestimonyWrapper testimonies={testimonies ?? []} />;
}