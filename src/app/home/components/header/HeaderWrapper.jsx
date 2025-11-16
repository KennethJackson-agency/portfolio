/* Local Client Components */
import CTAButton from "./client/CtaButton";

/* Internal Animation Components */
import WaveText from "@/lib/component/animation/WaveText";

export default function HeaderWrapper() {
    return (
        <section className="relative">
            <div className="backgroundHeader"></div>

            <div className="space-y-10 sm:space-y-5 md:space-y-8 w-full sm:w-[550px] md:w-[750px] px-3 mx-auto text-center mt-[200px] md:mt-[250px] text-zinc-900">
                <div className="space-y-3 sm:space-y-5 md:space-y-8">
                    <div className="space-y-1 md:space-y-8 items-center">
                        <WaveText
                            as="h1"
                            text="Amplify Your Impact Transform Your Brand Today"
                            className="font-medium text-3xl sm:text-4xl md:text-5xl leading-snug"
                        />
                        <WaveText
                            as="h2"
                            text="
                            We're the powerhouse behind your digital presence
                            🚀, specializing in seamless IT integration 💻,
                            vibrant video production 🎬, irresistible copy ✍️,
                            and impactful digital marketing 📈. Propel your
                            brand forward.✨"
                            className="text-zinc-500"
                        />
                    </div>
                </div>

                <div className="tooltip-wrapper relative inline-block mx-auto duration-300">
                    <CTAButton />
                </div>
            </div>
        </section>
    );
}
