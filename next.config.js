/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      formats: ['image/avif', 'image/webp'],
      domains:['firebasestorage.googleapis.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'icons8.com',
          port: '',
          pathname: '**',
          
        },
        
      ],
    },
  }