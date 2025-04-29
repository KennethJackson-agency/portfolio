/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // ⬅️ wajib kalau pakai app/ dan tidak ada pages/
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
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
