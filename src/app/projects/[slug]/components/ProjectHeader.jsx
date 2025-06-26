{/* Helper */ }
import { formatMonthYear } from '@/lib/common/helper/formatMonthYear'

{/* Animation Components */ }
import AnimatedCharacterText from '@/lib/common/animations/AnimatedCharacterText'
import AnimatedInView from '@/lib/common/animations/AnimatedInView'
import AnimatedParagraph from '@/lib/common/animations/AnimatedParagraph'

function ProjectHeader({ projectName, projectDescription, projectScope, date }) {
	return (
		<div className="flex flex-col md:flex-row gap-20">
			<div className="flex flex-col gap-4 w-full">
				<AnimatedCharacterText
					text={projectName}
					className="text-3xl font-bold justify-start"
				/>
				<AnimatedParagraph className="text-zinc-500 w-full lg:w-3/4">
					{projectDescription}
				</AnimatedParagraph>
			</div>
			<div className="flex gap-20 w-full md:w-1/2">
				<div className="flex flex-col gap-4 w-1/2">
					<AnimatedCharacterText
						text="Project Scope"
						className="text-zinc-500 justify-start"
					/>
					<div className="flex flex-wrap gap-2">
						{projectScope?.map(
							(scope, i) => (
								<AnimatedInView key={i}>
									<p className="text-sm font-medium bg-zinc-100 p-2 rounded-full w-max">
										{scope}
									</p>
								</AnimatedInView>
							)
						)}
					</div>
				</div>
				<div className="flex flex-col gap-4 w-1/2">
					<AnimatedCharacterText
						text="Date"
						className="text-zinc-500 justify-start"
					/>
					<AnimatedInView>
						<p className="whitespace-nowrap">
							{formatMonthYear(date)}
						</p>
					</AnimatedInView>
				</div>
			</div>
		</div>
	)
}

export default ProjectHeader