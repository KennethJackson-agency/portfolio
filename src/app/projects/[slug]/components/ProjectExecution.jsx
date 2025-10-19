import Image from 'next/image';
import React from 'react'

function ProjectExecution({ projectExecution, projectExecutionAsset }) {
	return (
		<div className='space-y-6'>
			<p className='text-base md:text-xl text-zinc-800'>{projectExecution}</p>
			{projectExecutionAsset.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{projectExecutionAsset.map((asset, index) => {
						const file = asset?.fields?.file;
						const mime = file.contentType;
						const isImage = mime.startsWith("image/");
						const isVideo = mime.startsWith("video/");

						return (
							<div key={index}>
								{isImage ? (
									<Image
										src={`https:${file.url}`}
										width={1920}
										height={1080}
										alt={asset.fields.title || "Execution Asset"}
										className="aspect-video rounded-xl object-cover w-full max-w-7xl"
										priority
									/>
								) : isVideo ? (
									<video
										src={`https:${file.url}`}
										className="aspect-video rounded-xl object-cover w-full max-w-7xl"
										autoPlay
										muted
										loop
										playsInline
									/>
								) : (
									<p className="text-center text-zinc-500">Unsupported media type</p>
								)}
							</div>
						);
					})}
				</div>
			) : (
				<p className="text-center text-zinc-500">No project media available.</p>
			)}
		</div>
	)
}

export default ProjectExecution