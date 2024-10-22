import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'raw-loader',
                }
            ]
        });

        return config;
    }
};

export default nextConfig;
