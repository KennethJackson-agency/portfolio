import Link from 'next/link'
import React from 'react'
import AnimatedInView from '../animations/AnimatedInView'

function BackBtn() {
	return (
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
	)
}

export default BackBtn