import Image from 'next/image';

function ProjectGallery({ gallery }) {
	return (
		<section className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
			{gallery.map((item, index) => {
				const file = item.fields.file;
				const url = `https:${file.url}`;
				const title = item.fields.title || project.fields.projectName;
				const isImage = file.contentType.startsWith('image/');
				const isVideo = file.contentType.startsWith('video/');

				return (
					<div key={index} className="break-inside-avoid overflow-hidden rounded-xl">
						{isImage ? (
							<Image
								src={url}
								alt={title}
								width={800}
								height={600}
								className="w-full h-auto rounded-xl object-cover"
							/>
						) : isVideo ? (
							<video
								src={url}
								autoPlay
								muted
								loop
								playsInline
								className="aspect-[16/8] object-cover w-full rounded-xl"
							/>
						) : null}
					</div>
				);
			})}
		</section>
	)
}

export default ProjectGallery