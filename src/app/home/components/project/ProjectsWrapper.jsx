import ProjectIndexClient from "./client/ProjectIndexClient";

export default function ProjectWrapper({ projects = [] }) {
    return (
        <section id="work">
            <ProjectIndexClient projects={projects} />
        </section>
    );
}
