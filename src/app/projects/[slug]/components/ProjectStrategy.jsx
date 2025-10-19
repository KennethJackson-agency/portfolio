import Image from 'next/image';
import React from 'react'

function ProjectStrategy({ projectStrategy, projectStrategyAsset }) {
	return (
		<div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0'>
			<div className='space-y-4 w-full md:w-1/2'>
				<p className='uppercase tracking-wider text-zinc-400'>Strategy</p>
				<p className='text-base md:text-xl text-zinc-800'>{projectStrategy}</p>
			</div>
			{projectStrategyAsset.length > 0 ? (
				<div className="flex flex-col gap-4 w-full md:w-1/3">
					{projectStrategyAsset.map((asset, index) => {
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
										alt={asset.fields.title || "Strategy Asset"}
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

export default ProjectStrategy