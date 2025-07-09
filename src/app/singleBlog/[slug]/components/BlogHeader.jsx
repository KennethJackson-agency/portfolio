'use client'

/* Next JS */
import Image from 'next/image';
import { useState } from 'react';

{/* External Library */ }
import moment from 'moment';

/* Internal Library */
import { getReadingTime } from '@/lib/common/helper/getReadingTime';

export default function BlogHeader({ titleText, authorName, authorRole, authorProfileImageUrl, blogCreatedAt, contentText }) {
	const [copied, setCopied] = useState(false);

	const handleShare = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000); // reset tooltip after 2s
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};
	return (
		<div className="space-y-10 px-5 md:px-10 w-full max-w-[70rem]">
			<div className='space-y-5'>
				<div className='flex items-center gap-10'>
					<p className="text-[0.85rem] text-blue-500">{moment(blogCreatedAt).format('MMMM D, YYYY')}</p>
					<p className="text-sm text-zinc-500">{getReadingTime(contentText)}</p>
				</div>
				<p className="text-xl sm:text-4xl font-medium leading-snug w-full sm:w-5/6">{titleText}</p>
			</div>
			<div className='flex justify-between items-center'>
				<div className="flex gap-2 md:gap-5 items-center">
					<Image
						src={authorProfileImageUrl}
						width={1920}
						height={1080}
						alt={authorName}
						priority
						className="w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] aspect-square rounded-full"
					/>
					<div>
						<p className="font-medium capitalize">{authorName}</p>
						<p className="text-sm text-zinc-500">{authorRole}</p>
					</div>
				</div>
				<div className='hidden md:flex items-center gap-2 cursor-pointer' onClick={handleShare}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
						<path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
					</svg>
					<p className='text-zinc-500'>Share this</p>
				</div>
			</div>
		</div>
	);
}