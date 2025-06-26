/* Next JS */
import Image from 'next/image';
import Link from 'next/link';

{/* External Library */ }
import moment from 'moment';

export default function RelatedBlogs({ relatedBlogs }) {
	if (!relatedBlogs || !relatedBlogs.length) return null;
	return (
		<section className="max-w-6xl w-full mx-auto">
			<div className="flex flex-col justify-center gap-5">
				<p className="text-2xl font-semibold">You might also like</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
					{relatedBlogs.map(({ id, slug, thumbnailUrl, updatedAt, title }) => (
						<Link
							key={id}
							href={`/blog/${slug}`}
							className="group flex flex-row sm:flex-col gap-3 w-full overflow-hidden"
						>
							<Image
								src={thumbnailUrl}
								width={1920}
								height={1080}
								alt={title}
								className="w-[5rem] sm:w-full h-[5rem] sm:h-[200px] object-cover rounded-xl"
							/>
							<div>
								<p className="text-sm text-zinc-500 mb-1">
									{moment(updatedAt).format('MMMM D, YYYY')}
								</p>
								<p className="font-semibold text-base group-hover:text-blue-500 duration-200 line-clamp-2">
									{title}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
