/* Next JS */
import Image from 'next/image';

{/* External Library */ }
import moment from 'moment';

/* Internal Library */
import { getReadingTime } from '@/lib/common/helper/getReadingTime';

{/* Assets */ }
import clockIcon from '../../../../assets/icon/clock.svg';

export default function BlogHeader({ tagList, titleText, authorName, authorRole, authorProfileImageUrl, blogCreatedAt, contentText }) {
	return (
		<div className="flex flex-col gap-5 w-full max-w-[50rem] mx-auto pb-10">
			<div className="flex flex-wrap gap-2">
				{tagList.map((tag, i) => (
					<p
						key={i}
						className="block bg-zinc-100 text-zinc-700 text-[0.85rem] font-medium px-4 py-1 rounded-full capitalize"
					>
						{tag}
					</p>
				))}
			</div>

			<p className="text-[1.5rem] sm:text-[1.75rem] font-medium">{titleText}</p>

			<div className="flex justify-between items-center">
				<div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
					<div className="flex gap-2 items-center">
						<Image
							src={authorProfileImageUrl}
							width={1920}
							height={1080}
							alt={authorName}
							priority
							className="w-[2rem] h-[2rem] aspect-square rounded-full"
						/>
						<div>
							<p className="text-sm font-medium capitalize">{authorName}</p>
							<p className="text-xs text-zinc-700">{authorRole}</p>
						</div>
					</div>

					<div className="hidden sm:block bg-zinc-300 w-1 h-1 rounded-full" />
					<p className="text-[0.85rem] text-zinc-600">{moment(blogCreatedAt).format('MMMM D, YYYY')}</p>
				</div>

				<div className="flex items-center gap-1">
					<Image src={clockIcon} width={1080} height={1080} alt="Clock icon" priority className="w-4" />
					<p className="text-sm text-zinc-700">{getReadingTime(contentText)}</p>
				</div>
			</div>
		</div>
	);
}