/* Internal Library */
import { contentfulApi } from "@/lib/global/contentful/contentful";

/* Global UI Components */
import FloatingBar from "@/lib/component/ui/floating_bar/FloatingBar";
import Footer from "@/lib/component/ui/footer/Footer";

/* Page Specific Wrappers */
import HeaderWrapper from "./components/header/HeaderWrapper";
import BlogWrapper from "./components/blog/BlogWrapper";
import AboutWrapper from "./components/about/AboutWrapper";
import ClientWrapper from "./components/client/ClientWrapper";
import FaqWrapper from "./components/faq/FaqWrapper";
import ProjectWrapper from "./components/project/ProjectsWrapper";
import ServiceWrapper from "./components/service/ServiceWrapper";
import StatsWrapper from "./components/stats/StatsWrapper";
import TestimonyWrapper from "./components/testimony/TestimonyWrapper";

/* Config Data */
import { navItemsHome } from "@/config/config";

async function Home() {
    // Fetch data on server
    const [
        projects,
        services,
        stats,
        clients,
        faqs,
        testimonies,
        blogs,
        abouts,
    ] = await Promise.all([
        contentfulApi.getProjects(),
        contentfulApi.getServices(),
        contentfulApi.getStats(),
        contentfulApi.getClients(),
        contentfulApi.getFaqs(),
        contentfulApi.getTestimonies(),
        contentfulApi.getBlogs(),
        contentfulApi.getAbouts(),
    ]);

    return (
        <div>
            <FloatingBar navItems={navItemsHome} />
            <div className="flex flex-col gap-32 lg:gap-56">
                <HeaderWrapper />
                <ProjectWrapper projects={projects} />
                <ServiceWrapper services={services} />
                <div>
                    <StatsWrapper stats={stats} />
                    <ClientWrapper clients={clients} />
                </div>
                <TestimonyWrapper testimonies={testimonies} />
                <AboutWrapper abouts={abouts} />
                <FaqWrapper faqs={faqs} />
                <BlogWrapper blogs={blogs} />
            </div>
            <div className="pt-72">
                <Footer />
            </div>
        </div>
    );
}

export default Home;
