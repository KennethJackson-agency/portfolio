'use client';

import Link from 'next/link';
import Image from 'next/image';
import { trackEvent } from '@/lib/global/ga/gtagEvents';
import Frame from '@/lib/common/components/Frame';
import AnimatedCharacterText from '@/lib/common/animations/AnimatedCharacterText';
import AnimatedParagraph from '@/lib/common/animations/AnimatedParagraph';
import { formatMonthYear } from '@/lib/common/helper/formatMonthYear';

export default function ProjectCard({ project }) {
	if (!project || !project.fields) return null;

	const thumbnail = project.fields.thumbnailAsset;
	const isImage = thumbnail.fields.file.contentType.startsWith('image/');
	const isVideo = thumbnail.fields.file.contentType.startsWith('video/');

	const handleTrackEvent = () => {
		trackEvent({
			action: `click_project_${project.fields.projectName.replace(/\s+/g, "_").toLowerCase()}`,
			category: 'Project',
			label: project.fields.projectName,
		});
	};

	return (
		<Link
			href={`/projects/${project.fields.slug}`}
			onClick={handleTrackEvent}
			className="inline-block w-max break-inside-avoid cursor-pointer"
		>
			<Frame
				tag={project.fields.tag}
				frameContainerStyle="mb-6"
				tagStyle="text-white text-xs font-normal tracking-wide px-1.5 py-1 w-max rounded-tl-sm rounded-tr-sm"
				frameStyle="border-2 w-max"
				style={{
					frameColor: project.fields.frameColor || "#ec4899",
				}}
			>
				{isImage && (
					<Image
						src={`https:${thumbnail.fields.file.url}`}
						width={1920}
						height={1080}
						alt={project.fields.projectName}
						className="w-[315px] sm:w-[400px] md:w-[315px] lg:w-[400px] h-auto"
						priority
					/>
				)}
				{isVideo && (
					<video
						src={`https:${thumbnail.fields.file.url}`}
						className="w-[315px] sm:w-[400px] md:w-[315px] lg:w-[400px] h-auto"
						autoPlay
						muted
						loop
						playsInline
					/>
				)}
			</Frame>

			<div className="space-y-4 w-[300px] sm:w-[450px] md:w-[350px] lg:w-[400px]">
				<AnimatedCharacterText
					text={project.fields.projectName}
					className="text-2xl sm:text-3xl font-semibold justify-start whitespace-nowrap"
				/>
				<p className="text-zinc-500 text-sm uppercase tracking-widest justify-start">
					{formatMonthYear(project.fields.date)}
				</p>
				<AnimatedParagraph className="text-gray-700">
					{project.fields.projectDescription}
				</AnimatedParagraph>
			</div>
		</Link>
	);
}
