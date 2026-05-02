import { contentfulApi } from "@/lib/global/contentful/contentful";
import FilterableProjects from "./components/FilterableProjects";
import Footer from "@/lib/component/ui/footer/Footer";
import FloatingBar from "@/lib/component/ui/floating_bar/FloatingBar";
import { navItemsProjects } from "@/config/config";

export const revalidate = 1;

export const metadata = {
    title: "Work — KJ Agency",
    description:
        "Selected projects from KJ Agency — Web Development, IT Networking, Digital Marketing, and Brand Strategy.",
};

export default async function Page() {
    const projects = (await contentfulApi.getProjects()) || [];

    return (
        <>
            <FloatingBar navItems={navItemsProjects} />
            <div className="w-full 2xl:max-w-360 mx-auto -z-10">
                <FilterableProjects projects={projects} />
                <Footer />
            </div>
        </>
    );
}
