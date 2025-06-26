/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // required when using the App Router without a pages/ directory
  },
  images: {
    domains: [
      'images.ctfassets.net',
      'assets.ctfassets.net',    // if you pull assets from this host
      'videos.ctfassets.net',    // needed if you ever wrap a video thumbnail in <Image>
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, s-maxage=3600, stale-while-revalidate=59',
          },
        ],
      },
    ];
  },
  webpack(config) {
    // Add SVGR loader to handle SVG imports as React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.(js|ts)x?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [{ removeViewBox: false }]
            }
          }
        }
      ]
    });
    return config;
  }
};

export default nextConfig;
