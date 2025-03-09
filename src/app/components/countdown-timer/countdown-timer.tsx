'use client'
import React, {useEffect, useState} from 'react';
import styles from './countdown-timer.module.css';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('#section-5');

    // Устанавливаем время события на 7 дней вперед
    const eventDate = new Date(new Date().getFullYear(), 2, 28, 10, 0, 0);
    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date();
        const difference = eventDate.getTime() - now.getTime();

        const timeLeft: TimeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };

        return timeLeft;
    };

    // Стейт для хранения оставшегося времени
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    // Обновляем таймер каждую секунду
    useEffect(() => {
        setTimeLeft(calculateTimeLeft()); // Инициализируем таймер только на клиенте
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) {
        return null; // Возвращаем null при серверной рендеринга, пока данные не инициализировались на клиенте
    }

    // Функция для правильного склонения слов
    const getWordDeclension = (num: number, words: [string, string, string]) => {
        const cases = [2, 0, 1, 1, 1, 2];
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[Math.min(num % 10, 5)]];
    };

    // Функция для расчета процента для конусного градиента
    const getGradientPercentage = (current: number, total: number) => {
        return 360 - (current / total) * 360;
    };

    return (
        <div className={`${styles.countdown} ${activeLink === '#section-5' ? styles.active : ''}`}>
            <h1 className={styles.h1}>Следующий бизнес десант состоится 28 марта в Онежском округе <br/><br/>
                <span>через:</span></h1>
            <div className={styles.timer}>
                <div id={'count_days'}
                    className={styles.timeBox}
                    style={{
                        // background: `conic-gradient(#101010 0deg, #7f4cff ${getGradientPercentage(timeLeft.days, 7)}deg, transparent 0deg)`
                    }}
                >
                    <span className={styles.number}>{timeLeft.days}</span>
                    <span className={styles.label}>
                        {getWordDeclension(timeLeft.days, ['день', 'дня', 'дней'])}
                    </span>
                </div>
                <div id={'count_hours'}
                    className={styles.timeBox}
                    style={{
                        // background: `conic-gradient(#101010 0deg, #7f4cff ${getGradientPercentage(timeLeft.hours, 24)}deg, transparent 0deg)`
                    }}
                >
                    <span className={styles.number}>{timeLeft.hours}</span>
                    <span className={styles.label}>
                        {getWordDeclension(timeLeft.hours, ['час', 'часа', 'часов'])}
                    </span>
                </div>
                <div id={'count_minute'}
                    className={styles.timeBox}
                    style={{
                        // background: `conic-gradient(#101010 0deg, #7f4cff ${getGradientPercentage(timeLeft.minutes, 60)}deg, transparent 0deg)`
                    }}
                >
                    <span className={styles.number}>{timeLeft.minutes}</span>
                    <span className={styles.label}>
                        {getWordDeclension(timeLeft.minutes, ['минута', 'минуты', 'минут'])}
                    </span>
                </div>
                <div id={'count_seconds'}
                    className={styles.timeBox}
                    style={{
                        borderRadius: '50%', color: 'rgba(171,255,137,0.5)',
                        background: `conic-gradient(rgba(127, 76, 255, 0.1) 0deg,  var(--skin-color) ${getGradientPercentage(timeLeft.seconds, 60)}deg, transparent 0deg)`
                    }}
                >
                    <span className={styles.number}>{timeLeft.seconds}</span>
                    <span className={styles.label}>
                        {getWordDeclension(timeLeft.seconds, ['секунда', 'секунды', 'секунд'])}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
