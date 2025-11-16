import "@/styles/globals.css";
import "@/styles/style.css";
import { Outfit } from "next/font/google";
import FaviconAnimator from "@/lib/common/animations/FaviconAnimator";
import Script from "next/script";
import AnalyticsProvider from "@/lib/global/analytic/AnalyticProvider";
import { GA_MEASUREMENT_ID } from "@/lib/global/ga/gtag";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-instrument",
    display: "swap",
});

export const metadata = {
    title: "KJ Agency",
    description:
        "We're the powerhouse behind your digital presence 🚀, specializing in seamless IT integration 💻, vibrant video production 🎬, irresistible copy ✍️, and impactful digital marketing 📈. Propel your brand forward.✨",
    icons: {
        icon: "/logo.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${outfit.variable} font-sans`}>
            <head>
                <link rel="icon" href={metadata.icons.icon} />
                <meta name="description" content={metadata.description} />
                <title>{metadata.title}</title>
                {/* Google Analytics */}
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                />
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_MEASUREMENT_ID}');
                        `,
                    }}
                />
            </head>
            <body style={{ fontFamily: "var(--font-instrument)" }}>
                <AnalyticsProvider />
                <FaviconAnimator />
                {children}
            </body>
        </html>
    );
}
