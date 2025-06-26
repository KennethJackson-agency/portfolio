import { trackEvent } from "@/lib/global/ga/gtagEvents";
import ContactCard from "./ContactCard";

export default async function ContactWrapper({ contacts = [] }) {
	if (!contacts.length) return null

	const socialMedia = contacts?.[0]?.fields?.socialMedia || [];

	const filteredContacts = socialMedia.filter((item) => {
		const name = item.fields.socialMediaName.toLowerCase();
		return name === 'whatsapp' || name === 'email';
	});
	return (
		<section className="flex flex-wrap justify-center gap-10">
			{filteredContacts.map((item) => {
				const name = item.fields.socialMediaName.toLowerCase();
				const isWhatsApp = name === 'whatsapp';
				const isEmail = name === 'email';

				return (
					<ContactCard
						key={item.sys.id}
						title={isWhatsApp ? "💬 Quick chat?" : "📩 Prefer emails?"}
						description={
							isWhatsApp
								? "Hit us up on WhatsApp and let’s talk ideas, timelines, or just say hi — we don’t bite (unless you’re a deadline)."
								: "Drop us a message and we’ll get back faster than you can say “collaboration.” Attach your pitch, questions, or even memes — we welcome all."
						}
						href={item.fields.link}
						label={isWhatsApp ? "Contact via WhatsApp" : "Send an Email"}
						iconSrc={item.fields.fullColorIcon.fields.file.url}
						bgColor="bg-zinc-900"
						iconBg={isWhatsApp ? "bg-green-200" : "bg-red-200"}
						onClick={() => {
							trackEvent({
								action: isWhatsApp ? 'click_whatsapp_contact' : 'click_email_contact',
								category: 'Contact Section',
								label: isWhatsApp ? 'WhatsApp Button' : 'Email Button',
							});
						}}
					/>
				);
			})}
		</section>
	);
}
