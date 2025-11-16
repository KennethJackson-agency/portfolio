import { contentfulApi } from "@/lib/global/contentful/contentful";

export async function getProjectPageData(slug) {
    // Fetch main data
    const project = await contentfulApi.getProjectBySlug(slug);

    // Prepare main project fields
    const projectName = project.fields.projectName;
    const projectDescription = project.fields.projectDescription;
    const services = project.fields.services;
    const previewAsset = project.fields.previewAsset;
    const gallery = project.fields.gallery;
    const projectChallenge = project.fields.projectChallenge;
    const projectStrategy = project.fields.projectStrategy;
    const projectStrategyAsset = project.fields.projectStrategyAsset;
    const projectExecution = project.fields.projectExecution;
    const projectExecutionAsset = project.fields.projectExecutionAsset;

    return {
        projectName,
        projectDescription,
        services,
        previewAsset,
        gallery,
        projectChallenge,
        projectStrategy,
        projectStrategyAsset,
        projectExecution,
        projectExecutionAsset,
    };
}
