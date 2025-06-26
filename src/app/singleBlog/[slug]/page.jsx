/* Next JS */
import Image from 'next/image';

/* Internal Library */
import { fetchAllBlogs, fetchBlogBySlug } from '@/lib/global/contentful/contentful.js';
import { getBlogPageData } from './lib/getBlogPageData.js';
import { createSlugParams } from '@/lib/global/contentful/createSlugParams.js';

/* Global Components */
import BackBtn from '@/lib/common/components/BackBtn.jsx';
import Footer from '@/component/ui/footer/Footer.jsx';

/* Local Components */
import BlogHeader from './components/BlogHeader.jsx'
import BlogContent from './components/BlogContent.jsx';
import RelatedBlogs from './components/RelatedBlogs.jsx';
import { notFound } from 'next/navigation.js';

export const generateStaticParams = createSlugParams(fetchAllBlogs);

export default async function Blog({ params }) {
	const { slug } = await params;

	const blogRaw = await fetchBlogBySlug(slug);
	if (!blogRaw || !blogRaw.fields) return notFound();

	const data = await getBlogPageData(slug);
	const { blogData, relatedBlogs } = data;

	const { titleText, thumbnailUrl } = blogData;

	return (
		<div>
			<div className="flex flex-col items-center gap-10 pt-0 sm:pt-10">
				{/* Back button – mobile */}
				<div className='absolute top-5 left-5 block sm:hidden'>
					<BackBtn />
				</div>

				{/* Mobile Thumbnail */}
				<Image
					src={thumbnailUrl}
					width={1920}
					height={1080}
					alt={titleText}
					priority
					className="block sm:hidden absolute w-full h-[25rem] object-cover mx-auto -z-10"
				/>

				<div className="bg-white mt-64 sm:mt-0 rounded-3xl px-5 pt-10">
					<BlogHeader
						tagList={blogData.tagList}
						titleText={blogData.titleText}
						authorName={blogData.authorName}
						authorRole={blogData.authorRole}
						authorProfileImageUrl={blogData.authorProfileImageUrl}
						blogCreatedAt={blogData.blogCreatedAt}
						contentText={blogData.contentText} />

					{/* Thumbnail – desktop */}
					<Image
						src={thumbnailUrl}
						width={1920}
						height={1080}
						alt={titleText}
						priority
						className="hidden sm:block w-[75rem] aspect-video mx-auto rounded-2xl"
					/>

					{/* Content */}
					<BlogContent
						description={blogData.descriptionText}
						content={blogData.contentText}
						referenceList={blogData.referenceList} />

					{/* Related Blogs */}
					<div>
						<div className="bg-zinc-300 w-full h-px my-16" />
						<RelatedBlogs relatedBlogs={relatedBlogs} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}