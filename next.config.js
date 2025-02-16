process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'fontmeme.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'icons8.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};