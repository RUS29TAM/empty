'use client'; // Указываем, что это клиентский компонент

import React, {useState} from 'react';
import styles from '@/app/styles/aboutEvent.module.css';
import AccordionSection from "@/app/components/accordion-section/accordion-section";

const AboutEvent = () => {
    const [activeLink, setActiveLink] = useState<string>('#section-5');

    return (
        <section className={`${styles.aboutEvent} ${activeLink === '#section-5' ? styles.active : ''}`}>
            <div className={styles.container}>
                <h1 className={styles.title}>О событии</h1>

                {/* Цель мероприятия */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Цель мероприятия</h2>
                    <ul className={styles.list}>
                        <li className={styles.li}>
                            Формирование команды специалистов, готовых к выезду на труднодоступные территории с
                            целью информирования о региональных и федеральных мерах поддержки СМСП.
                        </li>
                        <li className={styles.li}>
                            Активизация предпринимательского сообщества в муниципальных образованиях
                            Архангельской области.
                        </li>
                        <li className={styles.li}>Решение проблемных вопросов предпринимателей профильными подразделениями и региональными органами исполнительной власти.</li>
                    </ul>
                </div>

                {/* Программа мероприятия */}
                <div className={styles.sectionProgram}>
                    <h2 className={styles.sectionTitle}>Встреча состоит из двух частей</h2>

                    {/* Презентационная часть */}
                    <div className={styles.programWrapperBlock}>

                    <div className={styles.programBlock}>
                        <div className={styles.card}>
                            <h3 className={styles.programTitle}>Презентационный блок</h3>
                            <p className={styles.programDescription}>
                                В этой части мероприятия участники узнают об актуальных мерах поддержки, а также о
                                федеральных и региональных требованиях к получателям мер государственной поддержки -
                                субъектам малого и среднего предпринимательства.
                            </p>
                        </div>
                    </div>

                    <div className={styles.programBlock}>
                        <div className={styles.card}>
                            <h3 className={styles.programTitle}>Консультационный блок</h3>
                            <p className={styles.programDescription}>
                                Участники смогут задать вопросы по интересующей проблематике, получить полную
                                консультацию и, при наличии документов, подписать договор на льготный кредит с МКК
                                «Развитие».
                            </p>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Целевая аудитория */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Для кого это встреча</h2>
                    <ul className={styles.list}>
                        <li>Действующие предприниматели</li>
                        <li>Самозанятые граждане</li>
                        <li>Лица, планирующие заключить социальный контакт</li>
                        <li>Лица, планирующие начало предпринимательской деятельности</li>
                    </ul>
                </div>

                {/* Что получат участники */}
                <AccordionSection />
            </div>
        </section>
    );
};

export default AboutEvent;
