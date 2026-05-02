// lib/seo.js
const BASE_URL = "https://kjagency.id";
const DEFAULT_IMAGE = "/logo.png";

export function generateBaseMetadata({
    title = "KJ Agency",
    description = "We're the powerhouse behind your digital presence 🚀, specializing in seamless IT integration 💻, vibrant video production 🎬, irresistible copy ✍️, and impactful digital marketing 📈.",
    keywords = "digital marketing, IT integration, video production, copywriting, brand growth",
    image = DEFAULT_IMAGE,
} = {}) {
    return {
        title,
        description,
        keywords,
        icons: {
            icon: DEFAULT_IMAGE,
        },
        openGraph: {
            title,
            description,
            url: BASE_URL,
            siteName: "KJ Agency",
            images: [
                {
                    url: image,
                    width: 800,
                    height: 600,
                    alt: title,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@KJAgency",
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        verification: {
            google: "your-google-verification-token",
        },
    };
}

// Home Page
export function generateHomeMetadata() {
    return generateBaseMetadata({
        title: "KJ Agency | Digital Powerhouse for IT, Video & Marketing",
        description:
            "Transform your digital presence with KJ Agency 🚀. Expert IT integration, video production, copywriting, and digital marketing services.",
        keywords:
            "digital agency, IT integration, video production, copywriting, digital marketing, KJ Agency",
        image: "/hero-home.jpg",
    });
}

// About Page
export function generateAboutMetadata() {
    return generateBaseMetadata({
        title: "About KJ Agency | Our Team & Mission",
        description:
            "Meet the KJ Agency team and learn about our mission to empower brands through innovative digital solutions.",
        keywords: "about KJ Agency, team, mission, digital agency Indonesia",
        image: "/team-about.jpg",
    });
}

// Services Page
export function generateServicesMetadata() {
    return generateBaseMetadata({
        title: "Services | IT Integration, Video Production & Digital Marketing",
        description:
            "Comprehensive services: IT integration, professional video production, persuasive copywriting, and results-driven digital marketing.",
        keywords:
            "IT services, video production services, copywriting services, digital marketing agency",
        image: "/services-hero.jpg",
    });
}

// Projects/Portfolio
export function generateProjectsMetadata({
    projectName = "",
    projectDescription = "",
} = {}) {
    return generateBaseMetadata({
        title: projectName
            ? `${projectName} | KJ Agency Portfolio`
            : "Projects | KJ Agency Portfolio",
        description:
            projectDescription ||
            "Explore our latest projects showcasing IT integration, video production, and digital marketing excellence.",
        keywords: "portfolio, projects, case studies, digital agency portfolio",
        image: "/projects-hero.jpg",
    });
}

// Blog Page
export function generateBlogMetadata({
    postTitle = "",
    postExcerpt = "",
    postSlug = "",
} = {}) {
    return generateBaseMetadata({
        title: postTitle
            ? `${postTitle} | KJ Agency Blog`
            : "Blog | Digital Marketing & IT Insights",
        description:
            postExcerpt ||
            "Latest insights on digital marketing, IT integration, video production, and business growth strategies.",
        keywords: "digital marketing blog, IT blog, video production tips",
        image: "/blog-hero.jpg",
        openGraph: {
            ...generateBaseMetadata().openGraph,
            type: postTitle ? "article" : "website",
            publishedTime: postTitle ? new Date().toISOString() : undefined,
            authors: postTitle ? ["KJ Agency"] : undefined,
            tags: postTitle
                ? ["digital-marketing", "IT", "video-production"]
                : undefined,
        },
    });
}

// Contact Page
export function generateContactMetadata() {
    return generateBaseMetadata({
        title: "Contact KJ Agency | Get Your Free Consultation",
        description:
            "Ready to elevate your brand? Contact KJ Agency for IT solutions, video production, and digital marketing services.",
        keywords: "contact KJ Agency, digital agency contact, IT consultation",
        image: "/contact-hero.jpg",
    });
}

// 404 Page
export function generateNotFoundMetadata() {
    return generateBaseMetadata({
        title: "Page Not Found | KJ Agency",
        description:
            "The page you are looking for does not exist. Explore our services in IT integration, video production, and digital marketing.",
        keywords: "404, page not found, KJ Agency",
    });
}
