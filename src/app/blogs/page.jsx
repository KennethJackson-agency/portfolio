/* External Libraries */
import { contentfulApi } from "@/lib/global/contentful/contentful";
import FilterableBlogs from "./components/FilterableBlogs";

/* Global UI Components */
import Footer from "@/lib/component/ui/footer/Footer";
import FloatingBar from "@/lib/component/ui/floating_bar/FloatingBar";

/* Configuration Data */
import { navItemsBlogs } from "@/config/config";

export const revalidate = 1;

export default async function Page() {
    const blogs = (await contentfulApi.getBlogs()) || [];
    return (
        <>
            <FloatingBar navItems={navItemsBlogs} />
            <div className="w-full 2xl:max-w-360 mx-auto -z-10">
                <FilterableBlogs blogs={blogs} />
                <Footer />
            </div>
        </>
    );
}
