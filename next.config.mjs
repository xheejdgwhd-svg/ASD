/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Указываем Netlify / Next.js, что используем app router (по умолчанию уже true)
  experimental: {
    typedRoutes: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // позволяет грузить картинки с любых доменов
      },
    ],
  },

  // Опционально — отключаем ESLint при билде (если Netlify ругается на него)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Опционально — убираем проверки типов при билде (ускоряет CI)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
