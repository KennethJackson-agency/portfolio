/* External Library */
import { fetchAllBlogs } from "@/lib/global/contentful/contentful";
import FilterableBlogs from "./components/FilterableBlogs";

/* Global Component */
import Footer from "@/component/ui/footer/Footer";

export const revalidate = 1;

export default async function Page() {
	const blogs = (await fetchAllBlogs()) || [];
	return (
		<div className="space-y-72 pt-20 -z-10 w-full 2xl:max-w-[90rem] mx-auto">
			<div className="z-10">
				<FilterableBlogs blogs={blogs} />
			</div>
			<Footer />
		</div>
	);
}
