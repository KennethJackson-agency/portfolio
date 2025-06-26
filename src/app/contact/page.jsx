/* External Library */
import { getAbouts } from "@/lib/global/contentful/contentful";

/* Global Components */
import BackBtn from "@/lib/common/components/BackBtn";

/* Local Components */
import ContactWrapper from "./components/ContactWrapper";

async function Contact() {
	const contacts = (await getAbouts()) || []
	return (
		<div className="flex justify-center py-32">
			<div className='space-y-10 px-4'>
				<div className="flex flex-col items-center gap-2 text-center">
					<h1 className='text-[1.5rem] sm:text-[2.5rem] font-semibold capitalize'>Get in touch with our team</h1>
					<p className="w-full sm:w-1/2 text-zinc-500">We are here to answer your questions💬. Send us a WhatsApp message to unlock bespoke design, marketing, and content strategies that excite🚀.</p>
				</div>
				<ContactWrapper contacts={contacts} />
			</div>
		</div>
	)
}

export default Contact