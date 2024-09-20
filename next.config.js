// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  //basePath: '/ii-encuentro-internacional', // Set basePath to '.' for relative paths
  output: "export",
  images: {
    domains: ["localhost"],
  },
};
