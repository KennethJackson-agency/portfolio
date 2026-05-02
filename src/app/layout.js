import "@/styles/globals.css";
import "@/styles/style.css";
import { Outfit, JetBrains_Mono } from "next/font/google";
import FaviconAnimator from "@/lib/common/animations/FaviconAnimator";
import Script from "next/script";
import AnalyticsProvider from "@/lib/global/analytic/AnalyticProvider";
import { GA_MEASUREMENT_ID } from "@/lib/global/ga/gtag";
import { metadata } from "@/config/config";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-instrument",
    display: "swap",
});

const jetbrains_mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${outfit.variable} ${jetbrains_mono.variable} font-sans`}>
            <head>
                <link rel="icon" href={metadata.icons.icon} />
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
            <body style={{ fontFamily: "var(--font-instrument)" }} className="bg-stone-100">
                <AnalyticsProvider />
                <FaviconAnimator />
                {children}
            </body>
        </html>
    );
}
