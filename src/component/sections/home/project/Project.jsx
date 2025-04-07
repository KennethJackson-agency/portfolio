import { getProjects } from "@/lib/contentful";
import Project from "./ProjectsWrapper";

export const revalidate = 1;

export default async function Projects() {
    const projects = await getProjects();
    return <Project projects={projects ?? []} />;
}
