/* External Library */
import { contentfulApi } from "@/lib/global/contentful/contentful";

/* Local Components */
import ContactWrapper from "./components/ContactWrapper";
import FloatingBar from "@/lib/component/ui/floating_bar/FloatingBar";

/* Config Data */
import { navItemsContact } from "@/config/config";
import WaveText from "@/lib/component/animation/WaveText";
import Fade from "@/lib/component/animation/Fade";

async function Contact() {
    const contacts = (await contentfulApi.getAbouts()) || [];
    return (
        <>
            <FloatingBar navItems={navItemsContact} />
            <div className="flex justify-center py-32">
                <div className="space-y-10 px-4">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <WaveText
                            as="h1"
                            text="Get in touch with our team"
                            className="text-[1.5rem] sm:text-[2.5rem] font-semibold capitalize"
                        />
                        <WaveText
                            as="h1"
                            text="We are here to answer your questions💬. Send us a
                            WhatsApp message to unlock bespoke design,
                            marketing, and content strategies that excite🚀."
                            className="w-full sm:w-1/2 text-zinc-500"
                        />
                    </div>
                    <Fade>
                        <ContactWrapper contacts={contacts} />
                    </Fade>
                </div>
            </div>
        </>
    );
}

export default Contact;
