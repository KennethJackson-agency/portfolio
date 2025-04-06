/** @type {import('next').NextConfig} */
const nextConfig = {
    // ✅ Contentful image optimization
    images: {
      domains: ["images.ctfassets.net"],
    },
  
    // ✅ Cache headers for ISR-friendly behavior (with stale-while-revalidate)
    async headers() {
      return [
        {
          source: "/(.*)", // apply to all routes
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=0, s-maxage=3600, stale-while-revalidate=59",
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  