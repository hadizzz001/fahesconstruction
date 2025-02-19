/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/index.html',
            permanent: true, // Set to false if it's a temporary redirect
          },
        ];
      },
};

export default nextConfig;
