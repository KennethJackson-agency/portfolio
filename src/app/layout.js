import "@/styles/globals.css";
import "@/styles/style.css";
import { Instrument_Sans } from "next/font/google";
import FaviconAnimator from "@/component/animations/FaviconAnimator";
import PageTransitionWrapper from "@/component/animations/PageTransitionWrapper";
import Script from "next/script";
import AnalyticsProvider from "@/component/analytic/AnalyticProvider";

const instrumentSans = Instrument_Sans({
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
        <html lang="en" className={`${instrumentSans.variable} font-sans`}>
            <head>
                <link rel="icon" href={metadata.icons.icon} />
                <meta name="description" content={metadata.description} />
                <title>{metadata.title}</title>
                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-C7R89RDYSC"
                    strategy="afterInteractive"
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-C7R89RDYSC', {
                        page_path: window.location.pathname,
                        });
                    `}
                </Script>
            </head>
            <body style={{ fontFamily: "var(--font-instrument)" }}>
                <AnalyticsProvider />
                <FaviconAnimator />
                <PageTransitionWrapper>{children}</PageTransitionWrapper>
            </body>
        </html>
    );
}
