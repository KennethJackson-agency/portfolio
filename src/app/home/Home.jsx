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
import ServiceGridSection from "./components/service/ServiceGridSection";
import ProcessWrapper from "./components/process/ProcessWrapper";
import StatsWrapper from "./components/stats/StatsWrapper";
import TestimonyWrapper from "./components/testimony/TestimonyWrapper";

/* Config Data */
import { navItemsHome } from "@/config/config";
import Marquee from "./components/marquee/Marquee";

async function Home() {
    // Fetch data on server
    const [
        projects,
        services,
        servicesGrid,
        processes,
        stats,
        clients,
        faqs,
        testimonies,
        blogs,
        abouts,
    ] = await Promise.all([
        contentfulApi.getProjects(),
        contentfulApi.getServices(),
        contentfulApi.getServicesGrid(),
        contentfulApi.getProcesses(),
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
            <div className="flex flex-col gap-[150px] pt-[150px]">
                <HeaderWrapper />
                <Marquee />
                <ProjectWrapper projects={projects} />
                <ServiceGridSection services={servicesGrid} />
                <ProcessWrapper processes={processes} />
                <TestimonyWrapper testimonies={testimonies} />
                <AboutWrapper abouts={abouts} />
                <FaqWrapper faqs={faqs} />
                <BlogWrapper blogs={blogs} />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
