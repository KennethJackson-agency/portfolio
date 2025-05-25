"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";

export default function TestimonyWrapper({ testimonies }) {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

	const allTestimonies = testimonies.flatMap(
		(item) => item.fields.testimonyList
	);

	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (!inView) return;
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % allTestimonies.length);
		}, 4000);
		return () => clearInterval(interval);
	}, [inView, allTestimonies.length]);

	const current = allTestimonies[index];

	return (
		<section className="relative group px-5 mx-auto">
			<div ref={ref} className="flex flex-col items-center gap-16 px-5 min-h-[200px]">
				<p className="hidden lg:block absolute -top-20 -left-32 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-t-xl rounded-bl-xl p-2.5 group-hover:scale-[115%] group-hover:-rotate-[25deg] duration-300">
					High-key blushing rn 😳❤️
				</p>
				<p className="hidden lg:block absolute -top-16 -right-44 text-xs bg-zinc-900 text-white rounded-t-xl rounded-br-xl p-2.5 w-[200px] group-hover:scale-[115%] group-hover:rotate-[25deg] duration-300">
					Best kind of feedback? Honest & hyped. Thank you!
				</p>
				<p className="hidden lg:block absolute -bottom-10 -left-0 text-xs whitespace-nowrap bg-zinc-900 text-white rounded-tl-xl rounded-b-xl p-2.5 group-hover:scale-[115%] group-hover:rotate-[15deg] duration-300">
					Fast, smart, creative... you just described yourself 👀
				</p>
				<AnimatePresence mode="wait">
					<motion.div
						key={current.sys.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
						className="text-center max-w-xl"
					>
						<p className="text-lg font-semibold italic text-zinc-800">
							"{current.fields.testimony}"
						</p>
						<p className="text-md text-zinc-500 mt-2">— {current.fields.name}</p>
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}