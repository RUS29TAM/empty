'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/app/page.module.css';
import { videos } from '@/app/utils/video-links';
import { useVideoContext } from '@/app/VideoProvider';
import Anima from "@/app/components/anima/anima";

type VideoData = {
    type: string;
    src: string;
    isLoaded?: boolean; // Новое поле (необязательное)
};

const Video = () => {
    const { videos: loadedVideos, setVideos } = useVideoContext();
    const [activeLink, setActiveLink] = useState<string>('#section-3');
    const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Поочередная загрузка видео
    useEffect(() => {
        const loadNextVideo = () => {
            const nextVideoIndex = loadedVideos.length;
            if (nextVideoIndex < videos.length) {
                setVideos((prev) => [
                    ...prev,
                    { type: videos[nextVideoIndex].type, src: videos[nextVideoIndex].src, isLoaded: false, isVisible: true },
                ]);
            } else {
                clearInterval(timer); // Останавливаем таймер, если все видео загружены
            }
        };

        const timer = setInterval(loadNextVideo, 300); // Подгрузка каждые 0,3 секунды

        // Очистка таймера при размонтировании компонента
        return () => clearInterval(timer);
    }, [loadedVideos, videos.length, setVideos]);

    // Обработка загрузки iframe
    const handleIframeLoad = (index: number) => {
        setVideos((prev) =>
            prev.map((video, i) =>
                i === index ? { ...video, isLoaded: true } : video
            )
        );
    };

    return (
        <section
            className={`${styles.portfolio} ${styles.section} ${
                activeLink === '#section-3' ? styles.active : ''
            }`}
            id="portfolio"
        >
            <div className={`${styles.container}`}>
                <div className={styles.row}>
                    <div className={`${styles.sectionTitle} ${styles.padd15}`}>
                        <h2>Видеоотчет</h2>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={`${styles.portfolioHeading} ${styles.padd15}`}>
                        <h2>Отзывы клиентов, интервью, комментарии и репортажи: </h2>
                    </div>
                </div>

                <div className={styles.row}>
                    {videos.map((video, index) => (
                        <div
                            className={`${styles.portfolioItem} ${styles.padd15}`}
                            key={index}
                            ref={(el) => {
                                videoRefs.current[index] = el;
                            }}
                            data-video-src={video.src}
                        >
                            <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                                <div className={`${styles.portfolioImg}`}>
                                    {loadedVideos.some((v) => v.src === video.src) && (
                                        <>
                                            {!loadedVideos[index]?.isLoaded && (
                                                <div className={styles.loader}>
                                                    {/* Ваша анимация загрузки (например, спиннер) */}
                                                    <div className={styles.spinner}></div>
                                                </div>
                                            )}
                                            <iframe
                                                style={{ padding: '0', display: loadedVideos[index]?.isLoaded ? 'block' : 'none' }}
                                                src={video.src}
                                                width="100%"
                                                height="250"
                                                frameBorder="0"
                                                allowFullScreen
                                                allow="encrypted-media; fullscreen; picture-in-picture; controls; X-Frame-Options"
                                                onLoad={() => handleIframeLoad(index)} // Обработка загрузки
                                            ></iframe>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Video;
