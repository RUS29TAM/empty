'use client';
import React, { useState } from 'react';
import styles from "@/app/page.module.css";

const Contact = () => {
    const [activeLink, setActiveLink] = useState<string>('#section-6');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Простая валидация
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={`${styles.contact} ${styles.section} ${activeLink === '#section-6' ? styles.active : ''}`} id="contact">
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
                        <p>office@msp29.ru</p>
                    </div>

                    <div className={`${styles.contactInfoItem} ${styles.padd15}`}>
                        <div className={`${styles.icon}`}><i className={`${'fa'} ${'fa-globe'}`}></i></div>
                        <h4>Сайт</h4>
                        <p>www.msp29.ru</p>
                    </div>
                </div>

                <h3 className={`${styles.contactTitle} ${styles.padd15}`}>Отправьте нам сообщение</h3>
                <h4 className={`${styles.contactSubtitle} ${styles.padd15}`}>Мы свяжемся с вами как только у нас появится возможность</h4>

                <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <div className={`${styles.contactForm} ${styles.padd15}`}>
                            <div className={styles.row}>
                                <div className={`${styles.formItem} ${styles.col6} ${styles.padd15}`}>
                                    <div className={`${styles.formGroup}`}>
                                        <input
                                            type="text"
                                            className={`${styles.formControl}`}
                                            placeholder="Имя"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={`${styles.formItem} ${styles.col6} ${styles.padd15}`}>
                                    <div className={`${styles.formGroup}`}>
                                        <input
                                            type="email"
                                            className={`${styles.formControl}`}
                                            placeholder="Электронная почта"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                                    <div className={`${styles.formGroup}`}>
                                        <input
                                            type="text"
                                            className={`${styles.formControl}`}
                                            placeholder="Тема"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                                    <div className={`${styles.formGroup}`}>
                                        <textarea
                                            name="message"
                                            id="message"
                                            className={`${styles.formControl}`}
                                            placeholder="Сообщение"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                                    <div className={`${styles.formGroup}`}>
                                        <button
                                            type="submit"
                                            className={`${styles.btn}`}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Отправка...' : 'Отправить'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {submitStatus === 'success' && (
                                <div className={`${styles.successMessage}`}>
                                    Сообщение успешно отправлено!
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className={`${styles.errorMessage}`}>
                                    Произошла ошибка при отправке. Попробуйте еще раз.
                                </div>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
