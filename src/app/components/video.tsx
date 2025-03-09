'use client'
import React, {useEffect, useState} from 'react';
import styles from "@/app/page.module.css";
import {videos} from "@/app/utils/video-links";


const Video = () => {
    const [activeLink, setActiveLink] = useState<string>('#section-3');

    useEffect(() => {
        console.clear()
    })

    return (
        <section className={`${styles.portfolio} ${activeLink === '#section-3' ? styles.active : ''}`} id={"portfolio"}>
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
                        <div className={`${styles.portfolioItem} ${styles.padd15}`} key={index}>
                            <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                                <div className={`${styles.portfolioImg}`}>
                                    {video.type === 'direct' ? (
                                        <video width="100%" height="250" controls>
                                            <source src={video.src} type="video/mp4"/>
                                            Ваш браузер не поддерживает видео.
                                        </video>
                                    ) : (
                                        <iframe style={{padding: "0"}}
                                                src={video.src}
                                                width="100%" height="250" frameBorder="0" allowFullScreen
                                                allow="encrypted-media; fullscreen; picture-in-picture; controls"></iframe>
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
