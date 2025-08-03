// @ts-nocheck
// next.config.mjs

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

// We'll keep the PWA wrapper for now, as it doesn't hurt anything.
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import("next").NextConfig} */
const config = {
  // This is the crucial part that fixes the build error.
  webpack: (config, { isServer }) => {
    // If we are on the server during the build process, we tell webpack
    // to treat the 'canvas' module as an external dependency, effectively
    // ignoring it and preventing the error.
    if (isServer) {
      config.externals.push('canvas');
    }
    return config;
  },
};

export default withPWA(config);
