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
import FloatingBar from '@/component/ui/floating_bar/FloatingBar.jsx';

export const generateStaticParams = createSlugParams(fetchAllBlogs);

export default async function Blog({ params }) {
	const { slug } = await params;

	const blogRaw = await fetchBlogBySlug(slug);
	if (!blogRaw || !blogRaw.fields) return notFound();

	const data = await getBlogPageData(slug);
	const { blogData, relatedBlogs } = data;

	const { titleText, thumbnailUrl } = blogData;

	return (
		<div className=''>
			<FloatingBar />
			<div className="flex flex-col gap-10 pt-0 sm:pt-32">
				{/* Mobile Thumbnail */}
				<Image
					src={thumbnailUrl}
					width={1920}
					height={1080}
					alt={titleText}
					priority
					className="block sm:hidden absolute w-full h-[25rem] object-cover mx-auto -z-10"
				/>

				<div className="relative bg-white flex flex-col items-center space-y-0 md:space-y-20 mt-64 sm:mt-0 rounded-3xl pt-10 mx-auto">
					<div className='space-y-10'>
						<BlogHeader
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
							className="hidden sm:block aspect-video w-full max-w-[70rem] mx-auto"
						/>
					</div>

					{/* Content */}
					<BlogContent
						description={blogData.descriptionText}
						content={blogData.contentText}
						referenceList={blogData.referenceList} />
				</div>

				{/* Related Blogs */}
				<RelatedBlogs relatedBlogs={relatedBlogs} />
			</div>
			<div className='mt-72'>
				<Footer />
			</div>
		</div>
	);
}