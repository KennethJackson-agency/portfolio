/* External Library */
import { fetchAllBlogs, getAbouts, getClients, getFaqs, getProjects, getServices, getStats, getTestimonies } from "@/lib/global/contentful/contentful"

/* Global Components */
import FloatingBar from "@/component/ui/floating_bar/FloatingBar"

/* Local Component */
import Header from "./components/Header"
import Footer from "@/component/ui/footer/Footer"
import BlogWrapper from "./components/BlogWrapper"
import AboutWrapper from "./components/AboutWrapper"
import ClientWrapper from "./components/ClientWrapper"
import FaqWrapper from "./components/FaqWrapper"
import ProjectWrapper from "./components/ProjectsWrapper"
import ServiceWrapper from "./components/ServiceWrapper"
import StatsWrapper from "./components/StatsWrapper"
import TestimonyWrapper from "./components/TestimonyWrapper"

async function Home() {
	// Fetch data on server
	const projects = (await getProjects()) || []
	const services = (await getServices()) || []
	const stats = (await getStats()) || []
	const clients = (await getClients()) || [];
	const faqs = (await getFaqs()) || [];
	const testimonies = (await getTestimonies()) || []
	const blogs = (await fetchAllBlogs()) || [];
	const abouts = (await getAbouts());

	return (
		<div>
			<FloatingBar />
			<div className="flex flex-col gap-32 lg:gap-56">
				<Header />
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
	)
}

export default Home