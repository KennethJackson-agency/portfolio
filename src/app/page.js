import ShootingStar from "@/component/animations/ShootingStart";
import FloatingBar from "@/component/layout/FloatingBar";
import Footer from "@/component/layout/footer/Footer";
import About from "@/component/sections/home/About";
import Clients from "@/component/sections/home/Clients";
import Faq from "@/component/sections/home/Faq";
import Header from "@/component/sections/home/Header";
import Marquee from "@/component/sections/home/Marquee";
import Project from "@/component/sections/home/Project";
import Service from "@/component/sections/home/Service";
import Testimoni from "@/component/sections/home/Testimoni";

export default function Home() {
    return (
        <div>
            <FloatingBar />
            <div className="flex flex-col gap-52">
                <div className="flex flex-col gap-40">
                    <Header />
                    <ShootingStar
                        width={2}
                        fallDistance="100px"
                        height={50}
                        style="absolute left-1/2 -translate-x-1/2 bottom-80 z-10 pointer-events-none rounded-full"
                    />
                </div>
                <Project />
                <Service />
                <Clients />
                <Marquee />
                <Testimoni />
                <About />
                <Faq />
            </div>
            <Footer />
        </div>
    );
}
