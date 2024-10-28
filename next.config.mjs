const nextConfig = {
  /*   output: "export", */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
      },
    ],
  },
}

export default nextConfig
/** @type {import('next').NextConfig} */
