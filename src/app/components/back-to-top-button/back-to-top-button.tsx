'use client'; // Указываем, что это клиентский компонент

import React, { useState, useEffect } from 'react';
import styles from './back-to-top-button.module.css';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Функция для проверки положения скролла
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            console.log('scroll')

            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Функция для прокрутки страницы наверх
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Плавная прокрутка
        });
    };

    // Добавляем обработчик события скролла
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            className={`${styles.button} ${isVisible ? styles.visible : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;
