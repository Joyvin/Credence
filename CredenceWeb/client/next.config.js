// /**
//  * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
//  * for Docker builds.
//  */
// await import("./src/env.js");

// /** @type {import("next").NextConfig} */
// const config = {};

// export default config;

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
    ],
},
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

export default nextConfig;
