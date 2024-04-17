/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: "default",
    // path: "/",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resi.uatz.view.com.au",
      },
      {
        protocol: "https",
        hostname: "d126h31mg8tzcs.cloudfront.net",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/new-developments",
        destination: "/conveyancing",
        permanent: true,
      },
      {
        source: "/new-developments/:slug",
        destination: "/conveyancing",
        permanent: true,
      },
      {
        source: "/new-developments/:slug/development-details",
        destination: "/conveyancing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
