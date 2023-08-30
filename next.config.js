/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
      "functions": {
        "pages/**/*": {
          "excludeFiles": "public/**"
        }
      },
    experimental: {
      legacyBrowsers: false,
      'experimental.outputFileTracingExcludes': ['**canvas**'],
      '*': [
        'node_modules/@swc/**/*',  
        'node_modules/next/dist',
      ],
    },
  }
   
  module.exports = nextConfig