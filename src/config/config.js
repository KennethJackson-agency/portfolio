export const metadata = {
    title: "KJ Agency",
    description:
        "We're the powerhouse behind your digital presence 🚀, specializing in seamless IT integration 💻, vibrant video production 🎬, irresistible copy ✍️, and impactful digital marketing 📈. Propel your brand forward.✨",
    icons: {
        icon: "/logo.png",
    },
    keywords:
        "digital marketing, IT integration, video production, copywriting, brand growth",
    openGraph: {
        type: "website",
        url: "https://kjagency.id",
        title: "KJ Agency",
        description:
            "We're the powerhouse behind your digital presence 🚀 with top IT integration & digital marketing services.",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "KJ Agency Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@KJAgency",
        title: "KJ Agency",
        description:
            "Explore expert IT integration, video production, and digital marketing with KJ Agency.",
        image: "/logo.png",
    },
};

export const CACHE_TIME = 60 * 5;

export const COLORS_TOP = [
    "#FFE2E2",
    "#FFD6A8",
    "#FEF3C6",
    "#FEF9C2",
    "#ECFCCA",
    "#DCFCE7",
    "#D0FAE5",
    "#CBFBF1",
    "#CEFAFE",
    "#DBEAFE",
    "#E0E7FF",
    "#FAE8FF",
    "#FCE7F3",
];

export const navItemsHome = [
    { label: "About", id: "about" },
    { label: "Work", id: "work" },
    { label: "Service", id: "service" },
    { label: "Blogs", id: "blogs" },
    { label: "Contact", href: "/contact" },
];

export const navItemsContact = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
];

export const navItemsBlogs = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
];

export const navItemsSingleBlogs = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
];

export const navItemsProjects = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
];
