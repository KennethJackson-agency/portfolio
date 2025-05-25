import React from "react";
import Image from "next/image";

export default async function FooterContactWrapper({ contacts }) {
	return (
		<section className="fixed bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-10 sm:gap-20 mx-auto">
			<div className="flex flex-wrap gap-5 w-max px-4 py-3 bg-white shadow-[0_1px_5px_rgba(0,0,0,0.2)] rounded-xl">
				{contacts?.[0]?.fields?.socialMedia?.map((contact) => (
					<a key={contact.sys.id} href={contact.fields.link}>
						{contact.fields?.fullColorIcon?.fields?.file?.url ? (
							<Image
								src={`https:${contact.fields.fullColorIcon.fields.file.url}`}
								alt={contact.fields.socialMediaName || 'contact icon'}
								width={24}
								height={24}
								className="w-5 h-5"
							/>
						) : (
							<span className="text-sm text-zinc-400">No icon</span>
						)}
					</a>
				))}
			</div>
		</section>
	);
}
