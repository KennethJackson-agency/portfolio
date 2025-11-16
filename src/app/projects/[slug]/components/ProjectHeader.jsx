import WaveText from "@/lib/component/animation/WaveText";

function ProjectHeader({ projectName, projectDescription, services }) {
    return (
        <div className="flex flex-col lg:flex-row justify-between space-y-10 w-full">
            <div className="space-y-4 w-full md:w-2/3">
                <WaveText
                    className="text-xl md:text-3xl font-medium md:font-semibold
                    justify-start"
                    text={projectName}
                />
                <WaveText
                    className="text-zinc-500 text-base md:text-xl w-full lg:w-3/4"
                    text={projectDescription}
                />
            </div>
            <div className="space-y-2 w-max">
                <p className="text-zinc-500 text-base">Services</p>
                <div>
                    {services.map((service, i) => (
                        <p key={i} className="text-base md:text-xl">
                            {service}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectHeader;
