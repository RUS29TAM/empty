'use client'
import React, { useState, useEffect } from 'react';
import styles from "@/app/page.module.css";
import { videos } from "@/app/utils/video-links";

const Video = () => {
    const [activeLink, setActiveLink] = useState<string>('#section-3');
    const [loadedVideos, setLoadedVideos] = useState<string[]>([]);

    // Загрузка сохраненных видео из localStorage при монтировании компонента
    useEffect(() => {
        const savedVideos = localStorage.getItem('loadedVideos');
        if (savedVideos) {
            setLoadedVideos(JSON.parse(savedVideos));
        }
    }, []);

    // Сохранение загруженных видео в localStorage
    useEffect(() => {
        localStorage.setItem('loadedVideos', JSON.stringify(loadedVideos));
    }, [loadedVideos]);

    // Поочередная подгрузка видео
    useEffect(() => {
        const loadNextVideo = () => {
            const nextVideoIndex = loadedVideos.length;
            if (nextVideoIndex < videos.length) {
                setLoadedVideos(prev => [...prev, videos[nextVideoIndex].src]);
            }
        };

        const timer = setInterval(loadNextVideo, 2000); // Подгрузка каждые 2 секунды
        return () => clearInterval(timer);
    }, [loadedVideos]);

    return (
        <section className={`${styles.portfolio} ${styles.section} ${activeLink === '#section-3' ? styles.active : ''}`} id={"portfolio"}>
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
                    {loadedVideos.map((src, index) => (
                        <div className={`${styles.portfolioItem} ${styles.padd15}`} key={index}>
                            <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                                <div className={`${styles.portfolioImg}`}>
                                    <iframe
                                        style={{ padding: "0" }}
                                        src={src}
                                        width="100%" height="250" frameBorder="0" allowFullScreen
                                        allow="encrypted-media; fullscreen; picture-in-picture; controls; X-Frame-Options"
                                    ></iframe>
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
