import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Property photos are uploaded to Cloudinary by the CRM (see mathura-crm's
    // api/upload.js) — this is the only external image host the site serves.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
