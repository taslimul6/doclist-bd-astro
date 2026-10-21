import type {NextConfig} from 'next';

const banglaDirectoryPaths = ['doctors','doctor','specialty','specialties','locations','hospitals','hospital','my-doc','privacy-policy','terms-of-use','contact','sponsorship'];

const config: NextConfig = {
  reactStrictMode: true,
  htmlLimitedBots: /.*/,
  experimental: {globalNotFound: true},
  async redirects() {
    return [
      {source: '/bn', destination: '/', permanent: true},
      {source: '/bn/:path*', destination: '/:path*', permanent: true},
    ];
  },
  async rewrites() {
    return {
      beforeFiles: banglaDirectoryPaths.flatMap((path) => [
        {source: `/${path}`, destination: `/bn/${path}`},
        {source: `/${path}/:path*`, destination: `/bn/${path}/:path*`},
      ]),
      afterFiles: [],
      fallback: [],
    };
  },
};

export default config;
