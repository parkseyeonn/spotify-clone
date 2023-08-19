/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "izjthgpojloqxintottk.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
