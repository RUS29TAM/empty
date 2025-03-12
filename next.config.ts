import type { NextConfig } from "next";
module.exports = {
    distDir: 'dist', // Указываем, что сборка должна быть в директории dist
};
const nextConfig: NextConfig = {
    images: {
        domains: ['images.dog.ceo', 'plus.unsplash.com', 's31vla.storage.yandex.net', '4.downloader.disk.yandex.ru', 'downloader.disk.yandex.ru', 'images.unsplash.com', "disk.yandex.ru", "streaming.disk.yandex.net"]
    },
    /* config options here */
};

export default nextConfig;
