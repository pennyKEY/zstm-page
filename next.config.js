const withVideos = require("next-videos");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  // your Next.js configuration
});
module.exports = withVideos();
