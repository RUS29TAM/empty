'use client'; // Указываем, что это клиентский компонент

import React, { useEffect, useState } from 'react';
import styles from '../../page.module.css';

interface ProgressBarProps {
    percent: number; // Целевое значение прогресса
    peopleCount: number; // Количество людей
    each: string;
    title: string; // Заголовок блока
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent, peopleCount,each, title }) => {
    const [progress, setProgress] = useState(0); // Начальное значение прогресса
    const [currentPeopleCount, setCurrentPeopleCount] = useState(0); // Текущее количество людей

    useEffect(() => {
        // Сбрасываем анимацию при изменении resetTrigger
        setProgress(0);
        setCurrentPeopleCount(0);
        // Анимация прогресса до целевого значения
        const duration = 2500; // Длительность анимации в миллисекундах
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progressValue = Math.min((elapsedTime / duration) * percent, percent); // Ограничиваем до целевого значения

            const peopleCountValue = Math.min(
                Math.floor((elapsedTime / duration) * peopleCount),
                peopleCount
            ); // Ограничиваем до целевого количества людей

            setProgress(progressValue);
            setCurrentPeopleCount(peopleCountValue);


            if (progressValue < percent || peopleCountValue < peopleCount) {
                requestAnimationFrame(animate); // Продолжаем анимацию
            }
        };

        requestAnimationFrame(animate); // Запускаем анимацию
    }, [percent, peopleCount]);

    return (
        <div className={`${styles.skillItem} ${styles.padd15}`}>
            <h5>{title}</h5>
            <div className={`${styles.progress}`}>
                <div className={`${styles.progressIn}`} style={{ width: `${progress}%` }}></div>
                <div className={`${styles.skillPercent}`}>{currentPeopleCount} {each}</div>
            </div>
        </div>
    );
};

export default ProgressBar;
