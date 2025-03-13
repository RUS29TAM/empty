import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['images.dog.ceo', 'plus.unsplash.com', 's31vla.storage.yandex.net', '4.downloader.disk.yandex.ru', 'downloader.disk.yandex.ru', 'images.unsplash.com', "disk.yandex.ru", "streaming.disk.yandex.net"]
    },
    /* config options here */
    experimental: {
        serverActions: {
            allowedOrigins: ["desant.online", "localhost:3000"],
        },
    },
};

export default nextConfig;
