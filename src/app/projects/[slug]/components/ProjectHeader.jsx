{/* Animation Components */ }
import AnimatedCharacterText from '@/lib/common/animations/AnimatedCharacterText'

function ProjectHeader({ projectName, projectDescription, services }) {
	return (
		<div className="flex flex-col lg:flex-row justify-between space-y-10 w-full">
			<div className='space-y-4 w-full md:w-2/3'>
				<AnimatedCharacterText
					text={projectName}
					className="text-xl md:text-3xl font-medium md:font-semibold justify-start"
				/>
				<p className="text-zinc-500 text-base md:text-xl w-full lg:w-3/4">
					{projectDescription}
				</p>
			</div>
			<div className='space-y-2 w-max'>
				<p className='text-zinc-500 text-base'>Services</p>
				<div>
					{
						services.map((service, i) => (
							<p key={i} className='text-base md:text-xl'>{service}</p>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default ProjectHeader