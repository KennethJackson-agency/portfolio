/**
 * createSlugParams is a higher-order function that generates a
 * generateStaticParams function for dynamic pages.
 * @param {Function} fetcher - Async function that returns an array of items with 'fields.slug'.
 * @returns {Function} generateStaticParams - Data-fetcher used at build time.
 */

export function createSlugParams(fetcher) {
	return async function generateStaticParams() {
		// Fetch all items
		const items = await fetcher();
		// Map each item to an object containing only the slug property. expects an array of objects like: [{ slug: 'first-post' }
		return items.map(({ fields: { slug } }) => ({ slug }));
	};
}
