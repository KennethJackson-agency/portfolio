import { fetchProjectBySlug } from '@/lib/global/contentful/contentful';

export async function getProjectPageData(slug) {
	// Fetch main data
	const project = await fetchProjectBySlug(slug);

	// Prepare main project fields
	const projectName = project.fields.projectName;
	const projectDescription = project.fields.projectDescription;
	const projectAsset = project.fields.projectAsset;
	const projectScope = project.fields.projectScope || [];
	const date = project.fields.date;
	const gallery = project.fields.gallery;
	const projectAssetUrl = `https:${projectAsset.fields.file.url}`;

	return {
		projectData: {
			projectName,
			projectDescription,
			projectScope,
			projectAsset,
			projectAssetUrl,
			date,
			gallery,
		},
	};
}
