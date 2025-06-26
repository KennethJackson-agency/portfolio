/* Next JS */
import Image from 'next/image'
import Link from 'next/link';

/* External Library */
import moment from 'moment/moment';

/* Component Animations */
import AnimatedInView from '@/lib/common/animations/AnimatedInView';

function BlogWrapper({ blogs = [] }) {
	if (!blogs.length) return null;

	const latestBlogs = [...blogs]
		.sort((a, b) => new Date(b.sys.updatedAt) - new Date(a.sys.updatedAt))
		.slice(0, 3);

	return (
		<section className='space-y-10 px-5 max-w-7xl w-full mx-auto'>
			<div className='space-y-2 max-w-full md:max-w-1/2'>
				<p className='text-[2rem] font-semibold'>Latest Insights</p>
				<p className='text-zinc-500'>
					Stay ahead of the curve with our freshest takes on design, tech, and creative strategies. These are our latest stories—handpicked to spark ideas and ignite action.
				</p>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
				{latestBlogs.map((blog) => (
					<AnimatedInView key={blog.sys.id}>
						<Link
							href={`/singleBlog/${blog.fields.slug}`}
							className='flex flex-row md:flex-col gap-3 max-w-96 group duration-200'
						>
							<Image
								src={`https:${blog.fields.thumbnail.fields.file.url}`}
								width={1920}
								height={1080}
								alt={blog.fields.title}
								priority
								className='w-[5rem] sm:w-full h-[5rem] md:h-[12rem] lg:h-[15rem] rounded-2xl'
							/>
							<div className='space-y-3'>
								<div className='flex justify-between items-center'>
									{blog.fields.tag.slice(0, 1).map((tag, i) => (
										<p
											key={i}
											className='hidden md:block bg-zinc-100 text-zinc-700 text-[0.85rem] font-medium px-4 py-1 rounded-full capitalize'
										>
											{tag}
										</p>
									))}
									<p className='text-[0.85rem] text-zinc-600'>
										{moment(blog.sys.createdAt).format('MMMM D, YYYY')}
									</p>
								</div>
								<div className='space-y-2'>
									<p className='font-medium text-[0.95rem] group-hover:text-blue-500 duration-200 line-clamp-2'>
										{blog.fields.title}
									</p>
									<p className='hidden md:block text-zinc-600 line-clamp-2'>
										{blog.fields.description.slice(0, 100)}…
									</p>
								</div>
							</div>
						</Link>
					</AnimatedInView>
				))}
			</div>
		</section>
	);
}

export default BlogWrapper;
