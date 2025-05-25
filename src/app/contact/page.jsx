import Frame from '@/component/common/Frame'
import Contacts from "@/component/sections/contact/socmed/Contact";
import AnimatedInView from '@/component/animations/AnimatedInView';
import Link from 'next/link';

function Contact() {
	return (
		<div className="contactBg flex justify-center py-20">
			<div className='flex flex-col gap-10 px-4'>
				<div>
					<AnimatedInView>
						<Link
							href={`/`}
							className="flex items-center gap-1 bg-zinc-100 w-max rounded-full py-2 pl-3 pr-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								className="size-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 19.5 8.25 12l7.5-7.5"
								/>
							</svg>{" "}
							<p className="font-medium">Back</p>
						</Link>
					</AnimatedInView>
					<h1 className='text-[3rem] font-semibold'>Contact Us</h1>
				</div>
				<Contacts />
			</div>
		</div>
	)
}

export default Contact