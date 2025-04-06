import FloatingBar from "@/component/layout/FloatingBar";
import Header from "@/component/sections/home/Header";
import Project from "@/component/sections/home/project/Project";
import Service from "@/component/sections/home/service/Service";
import Stats from "@/component/sections/home/stats/Stats";
import Marquee from "@/component/sections/home/Marquee";
import Testimoni from "@/component/sections/home/Testimoni";
import About from "@/component/sections/home/about/About";
import Faq from "@/component/sections/home/faq/Faq";
import Footer from "@/component/layout/footer/Footer";

export default function Home() {
    return (
        <div>
            <FloatingBar />
            <div className="flex flex-col gap-52">
                <Header />
                <Project />
                <Service />
                <Stats />
                <Marquee />
                <Testimoni />
                <About />
                <Faq />
            </div>
            <Footer />
        </div>
    );
}
