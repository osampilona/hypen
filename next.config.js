const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    additionalData: `
      @import "@/styles/variables.scss";
      @import "@/styles/mixins.scss";
    `,
  },
  images: {
    domains: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.unsplash.com",
        port: "",
        pathname: "src/services",
      },
    ],
  },
  webpack: function (
    config,
    { buildId, dev, isServer, defaultLoaders, webpack },
  ) {
    // Important: return the modified config
    config.resolve.alias["@styles"] = path.join(__dirname, "styles");
    return config;
  },
};

module.exports = nextConfig;
