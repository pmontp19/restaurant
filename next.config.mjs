/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/menu',
        destination: 'https://app.cartamovil.com/calgallisa/14384/',
      },
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/calgallisa/',
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/cal_gallisa/',
      },
      {
        source: '/virtual',
        destination: 'https://goo.gl/maps/sA5NtgZAaX5CDJic9',
      },
      {
        source: '/maps',
        destination: 'https://maps.google.com/?q=Cal+Gallisa+Reus',
      },
    ];
  },
};

export default nextConfig;
