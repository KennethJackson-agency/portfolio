/* Analytics Utilities */
import { trackEvent } from "@/lib/global/ga/gtagEvents";

/* Local UI Components */
import ContactCard from "./ContactCard";

/* Local Data */
import filteredContacts from "@/app/contact/data/filteredContacts.json";

export default function ContactWrapper() {
    return (
        <section className="flex flex-wrap justify-center gap-10">
            {filteredContacts.map((contact, index) => (
                <ContactCard
                    key={index}
                    title={contact.title}
                    description={contact.description}
                    href={contact.href}
                    label={contact.label}
                    iconSrc={contact.iconSrc}
                    bgColor={contact.bgColor}
                    iconBg={contact.iconBg}
                    onClick={() => {
                        trackEvent({
                            action: contact.isWhatsApp
                                ? "click_whatsapp_contact"
                                : "click_email_contact",
                            category: "Contact Section",
                            label: contact.isWhatsApp
                                ? "WhatsApp Button"
                                : "Email Button",
                        });
                    }}
                />
            ))}
        </section>
    );
}
