/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'g-x0ne832xhr0.vusercontent.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
