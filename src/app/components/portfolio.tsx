'use client'
import React, {useState} from 'react';
import styles from "@/app/page.module.css";
const Portfolio = () => {
    const [activeLink, setActiveLink] = useState<string>('#home'); // Состояние для активной ссылки

    return (
        <section className={`${styles.portfolio} ${activeLink === '#section-3' ? styles.active : ''} `} id={"portfolio"}>
            <div className={`${styles.container}`}>
            <div className={styles.row}>
                <div className={`${styles.sectionTitle} ${styles.padd15}`}>
                    <h2>Фото</h2>
                </div>
            </div>

            <div className={styles.row}>
                <div className={`${styles.portfolioHeading} ${styles.padd15}`}>
                    <h2>My Last Projects: </h2>
                </div>
            </div>

            <div className={styles.row}>
                <div className={`${styles.portfolioItem} ${styles.padd15}`}>
                    <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                        <div className={`${styles.portfolioImg}`}>
                            <img src="https://i.postimg.cc/NGkQB1Y0/portfolio-1.jpg"
                                 alt="portfolio image" />
                        </div>
                    </div>
                </div>

                <div className={`${styles.portfolioItem} ${styles.padd15}`}>
                    <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                        <div className={`${styles.portfolioImg}`}>
                            <img src="https://i.postimg.cc/ydg49Z3w/portfolio-2.jpg"
                                 alt="portfolio image" />
                        </div>
                    </div>
                </div>

                <div className={`${styles.portfolioItem} ${styles.padd15}`}>
                    <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                        <div className={`${styles.portfolioImg}`}>
                            <img src="https://i.postimg.cc/RVPdrbDL/portfolio-3.jpg"
                                 alt="portfolio image" />
                        </div>
                    </div>
                </div>

                <div className={`${styles.portfolioItem} ${styles.padd15}`}>
                    <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                        <div className={`${styles.portfolioImg}`}>
                            <img src="https://i.postimg.cc/25dBY15N/portfolio-4.jpg"
                                 alt="portfolio image" />
                        </div>
                    </div>
                </div>

                <div className={`${styles.portfolioItem} ${styles.padd15}`}>
                    <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                        <div className={`${styles.portfolioImg}`}>
                            <img src="https://i.postimg.cc/RZBHD1ML/portfolio-5.jpg"
                                 alt="portfolio image" />
                        </div>
                    </div>
                </div>

                <div className={`${styles.portfolioItem} ${styles.padd15}`}>
                    <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                        <div className={`${styles.portfolioImg}`}>
                            <img src="https://i.postimg.cc/3wP7t1hK/portfolio-6.jpg"
                                 alt="portfolio image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Portfolio;
