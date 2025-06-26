import AnimatedInView from "@/lib/common/animations/AnimatedInView"
import { getReadingTime } from "@/lib/common/helper/getReadingTime"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"

function Blogs({ blogs = [] }) {
	if (!blogs.length) return null
	return (
		<div className='flex flex-wrap justify-center gap-10 max-w-[calc(424px*5)] mx-auto'>
			{blogs.map((blog) => (
				<AnimatedInView key={blog.sys.id}>
					<Link
						href={`/singleBlog/${blog.fields.slug}`}
						className='flex flex-row-reverse md:flex-col justify-between gap-3 max-w-72 w-[300px] sm:max-w-[425px] sm:w-[360px] md:max-w-96 group duration-200'
					>
						<div className="hidden md:flex items-center gap-1">
							<Image
								src={"https:" + blog.fields.author.fields.profileImage.fields.file.url}
								width={1920}
								height={1080}
								alt={blog.fields.author.fields.name}
								priority
								className="w-[1.5rem] h-[1.5rem] aspect-square rounded-full"
							/>
							<p className="text-sm font-medium capitalize">{blog.fields.author.fields.name}</p>
						</div>
						<Image
							src={`https:${blog.fields.thumbnail.fields.file.url}`}
							width={1920}
							height={1080}
							alt={blog.fields.title}
							priority
							className='w-[5rem] md:w-[360px] h-[5rem] md:h-[15rem] rounded-2xl'
						/>
						<div className='space-y-3'>
							<div className='space-y-2'>
								<p className='font-medium text-base md:text-[1.25rem] group-hover:text-blue-500 duration-200 line-clamp-2 md:line-clamp-4'>
									{blog.fields.title}
								</p>
							</div>
							<div className='flex items-center gap-2 text-[0.85rem] text-zinc-600'>
								<p>
									{moment(blog.sys.createdAt).format('MMMM D, YYYY')}
								</p>
								<div className="bg-zinc-300 w-1 h-1 rounded-full"></div>
								<p>{getReadingTime(blog.fields.content)}</p>
							</div>
						</div>
					</Link>
				</AnimatedInView>
			))}
		</div>
	)
}

export default Blogs