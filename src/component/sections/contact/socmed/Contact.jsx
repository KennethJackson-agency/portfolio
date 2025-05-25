import { getAbouts } from "@/lib/contentful";
import ContactWrapper from "./ContactWrapper";
import FooterContactWrapper from "./FooterContactWrapper";

export const revalidate = 1;

export default async function Contact() {
	const contacts = await getAbouts();
	return (
		<div>
			<ContactWrapper contacts={contacts ?? []} />
			{/* <FooterContactWrapper contacts={contacts ?? []} /> */}
		</div>
	);
}
