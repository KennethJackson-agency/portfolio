/* Next JS */
'use client'
import Image from 'next/image';
import Link from 'next/link';

/* External Library */
import moment from 'moment/moment';

/* Internal Library */
import { getReadingTime } from '@/lib/common/helper/getReadingTime';
import { trackEvent } from '@/lib/global/ga/gtagEvents';

/* Component Animations */
import AnimatedInView from '@/lib/common/animations/AnimatedInView';

function BlogCard({ blog }) {
	const handleTrackEvent = () => {
		trackEvent({
			action: `click_blog_${blog.fields.title.replace(/\s+/g, "_").toLowerCase()}`,
			category: 'Blog',
			label: blog.fields.title,
		});
	};

	return (
		<AnimatedInView>
			<Link
				href={`/singleBlog/${blog.fields.slug}`}
				onClick={handleTrackEvent}
				className='group flex flex-col gap-4 w-[400px]'
			>
				<div className="space-y-3">
					<div className="relative">
						<div className="opacity-0 group-hover:opacity-100 absolute top-10 group-hover:top-5 right-10 group-hover:right-5 bg-white p-3 rounded-full w-max duration-300">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
							</svg>
						</div>
						<p className="opacity-0 group-hover:opacity-100 absolute bottom-10 group-hover:bottom-5 left-10 group-hover:left-5 bg-white text-xs capitalize px-3 py-2 rounded-2xl w-max duration-300">{blog.fields.author.fields.name}</p>
						<Image src={"https:" + blog.fields.thumbnail.fields.file.url} width={1920} height={1080} className="w-[400px] h-[250px] rounded-2xl" alt="thumbnail" />
					</div>
					<div className='space-y-2'>
						<p className='font-medium text-base md:text-[1.25rem]'>
							{blog.fields.title}
						</p>
						<p className='text-sm text-zinc-500 line-clamp-2'>
							{blog.fields.description}
						</p>
					</div>
				</div>
				<div className="space-y-3">
					<div className='flex items-center gap-2 text-[0.85rem] text-zinc-600'>
						<p>
							{moment(blog.sys.createdAt).format('MMMM D, YYYY')}
						</p>
						<div className="bg-zinc-300 w-1 h-1 rounded-full"></div>
						<p>{getReadingTime(blog.fields.content)}</p>
					</div>
					<div className="flex items-center justify-center gap-2 group-hover:gap-4 duration-300 w-max">
						<p className="text-sm">Read more</p>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
						</svg>
					</div>
				</div>
			</Link>
		</AnimatedInView>
	)
}

export default BlogCard