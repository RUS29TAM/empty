'use client'
import React, {useState} from 'react';
import styles from "@/app/page.module.css";
const Contact = () => {
    const [activeLink, setActiveLink] = useState<string>('#section-6'); // Состояние для активной ссылки

    return (
        <section className={`${styles.contact} ${styles.section} ${activeLink === '#section-6' ? styles.active : ''} `} id={"contact"}>
        <div className={`${styles.container}`}>
            <div className={styles.row}>
                <div className={`${styles.sectionTitle} ${styles.padd15}`}>
                    <h2>Контакты</h2>
                </div>
            </div>

            <h3 className={`${styles.contactTitle} ${styles.padd15}`}>Есть вопросы? Свяжитесь с нами!</h3>
            <h4 className={`${styles.contactSubtitle} ${styles.padd15}`}>К вашим услугам</h4>

            <div className={styles.row}>
                <div className={`${styles.contactInfoItem} ${styles.padd15}`}>
                    <div className={`${styles.icon}`}><i className={`${styles.fa} ${'fa-phone'}`}></i></div>
                    <h4>Телефон</h4>
                    <p>+8 800 100 7000</p>
                </div>


                <div className={`${styles.contactInfoItem} ${styles.padd15}`}>
                    <div className={`${styles.icon}`}><i className={`${'fa'} ${'fa-map-marker-alt'}`}></i></div>
                    <h4>Офис</h4>
                    <p>Набережная Северной Двины, 71</p>
                </div>

                <div className={`${styles.contactInfoItem} ${styles.padd15}`}>
                    <div className={`${styles.icon}`}><i className={`${'fa'} ${'fa-envelope'}`}></i></div>
                    <h4>Email</h4>
                    <p>info@gmail.com</p>
                </div>

                <div className={`${styles.contactInfoItem} ${styles.padd15}`}>
                    <div className={`${styles.icon}`}><i className={`${'fa'} ${'fa-globe'}`}></i></div>
                    <h4>Сайт</h4>
                    <p>www.domain.com</p>
                </div>
            </div>
            <h3 className={`${styles.contactTitle} ${styles.padd15}`}>Отправьте нам сообщение</h3>
            <h4 className={`${styles.contactSubtitle} ${styles.padd15}`}>Мы свяжемся с вами как только у нас появиться возможность</h4>

            <div className={styles.row}>
                <div className={`${styles.contactForm} ${styles.padd15}`}>
                    <div className={styles.row}>
                        <div className={`${styles.formItem} ${styles.col6} ${styles.padd15}`}>
                            <div className={`${styles.formGroup}`}>
                                <input type="text" className={`${styles.formControl}`} placeholder="Имя" />
                            </div>
                        </div>

                        <div className={`${styles.formItem} ${styles.col6} ${styles.padd15}`}>
                            <div className={`${styles.formGroup}`}>
                                <input type="email" className={`${styles.formControl}`} placeholder="Электронная почта" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                            <div className={`${styles.formGroup}`}>
                                <input type="text" className={`${styles.formControl}`} placeholder="Тема" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                            <div className={`${styles.formGroup}`}>
                                <textarea name="message" id="message" className={`${styles.formControl}`}
                                          placeholder="Сообщение"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                            <div className={`${styles.formGroup}`}>
                                <button type="submit" className={`${styles.btn}`}>Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Contact;
