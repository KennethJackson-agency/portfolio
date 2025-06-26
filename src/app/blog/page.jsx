// app/blogs/page.jsx
import { fetchAllBlogs } from "@/lib/global/contentful/contentful";
import FilterableBlogs from "./components/FilterableBlogs";
import Header from "./components/Header";

export const revalidate = 1;

export default async function Page() {
	const blogs = (await fetchAllBlogs()) || [];
	return (
		<div className="space-y-12 px-4 lg:px-20 py-10">
			<Header />
			<FilterableBlogs blogs={blogs} />
		</div>
	);
}
