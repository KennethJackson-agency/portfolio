import ProjectCard from './ProjectCard';

export default async function ProjectWrapper({ projects = [] }) {
    if (!projects.length) return null;

    return (
        <section id="work" className="relative max-w-min mx-auto">
            <div className="columns-1 md:columns-2 gap-x-20 md:gap-x-10 lg:gap-x-32 space-y-20">
                {projects.map((project) => (
                    <ProjectCard key={project.sys.id} project={project} />
                ))}
            </div>
        </section>
    );
}
