import React from "react";
import ContactCard from "../contactCard/ContactCard";

export default async function ContactWrapper({ contacts }) {
	const socialMedia = contacts?.[0]?.fields?.socialMedia || [];

	const filteredContacts = socialMedia.filter((item) => {
		const name = item.fields.socialMediaName.toLowerCase();
		return name === 'whatsapp' || name === 'email';
	});
	return (
		<section className="flex flex-col items-center mx-auto">
			<div className="flex flex-col sm:flex-row justify-center gap-5 lg:gap-10 w-full p-5 lg:p-10 bg-white shadow-[0_1px_5px_rgba(0,0,0,0.2)] rounded-xl">
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
						/>
					);
				})}
			</div>
		</section>
	);
}
