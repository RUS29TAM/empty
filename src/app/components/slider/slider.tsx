'use client'
import React, {useEffect, useRef, useState} from 'react';
import styles from './slider.module.css';
import slideData from './slideData';

const Slider = () => {
    const [activeLink, setActiveLink] = useState<string>('#section-4');
    const [currentSlide, setCurrentSlide] = useState(1);

    const handleChangeSlide = (slideNumber: React.SetStateAction<number>) => {
        setCurrentSlide(slideNumber);
    };

    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startTranslate, setStartTranslate] = useState(0);

    const sliderContainerRef = useRef<HTMLDivElement>(null);

    // Обработчики touch
    const handleTouchStart = (e: React.TouchEvent) => {
        if (!sliderContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setStartTranslate(currentTranslate);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !sliderContainerRef.current) return;
        const currentX = e.touches[0].clientX;
        const dx = currentX - startX;
        const newTranslate = startTranslate + dx;
        setCurrentTranslate(newTranslate);
    };

    const handleTouchEnd = () => {
        if (!sliderContainerRef.current) return;
        setIsDragging(false);
        const containerWidth = sliderContainerRef.current.clientWidth;
        const slideCount = slideData.length;
        const threshold = containerWidth * 0.05;

        const dx = currentTranslate - startTranslate;
        if (Math.abs(dx) > threshold) {
            const direction = dx > 0 ? -1 : 1;
            const newSlide = Math.max(
                1,
                Math.min(currentSlide + direction, slideCount)
            );
            setCurrentSlide(newSlide);
            setCurrentTranslate(0);
        } else {
            setCurrentTranslate(0);
        }
    };

    // Обработчики mouse
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!sliderContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.clientX);
        setStartTranslate(currentTranslate);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !sliderContainerRef.current) return;
        const currentX = e.clientX;
        const dx = currentX - startX;
        const newTranslate = startTranslate + dx;
        setCurrentTranslate(newTranslate);
    };

    const handleMouseUp = () => {
        handleTouchEnd();
    };

    // Автоматическое обновление позиции
    useEffect(() => {
        const containerWidth = sliderContainerRef.current?.clientWidth || 0;
        const translate = -currentSlide * containerWidth;
        setCurrentTranslate(translate);
    }, [currentSlide]);

    return (
        <div className={`${styles.container} ${styles.section} ${activeLink === '#section-4' ? styles.active : ''}`}
             ref={sliderContainerRef}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}
             onMouseDown={handleMouseDown}
             onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp}
             id="slider">
            {slideData.map((_, index) => (
                <input
                    key={`slide${index + 1}`}
                    className={styles.input}
                    id={`slide${index + 1}`}
                    type="radio"
                    name="group"
                    checked={currentSlide === index + 1}
                    onChange={() => handleChangeSlide(index + 1)}
                />
            ))}
            <div className={styles.dots}>
                {slideData.map((_, index) => (
                    <label
                        key={`label${index + 1}`}
                        className={styles.label}
                        htmlFor={`slide${index + 1}`}
                    ></label>
                ))}
            </div>
            <div className={styles.slider}>
                {slideData.map(({ src, description,title }, index) => (
                    <div
                        key={`slide${index + 1}`}
                        className={`${styles.slide} ${
                            currentSlide === index + 1 ? styles.active : ''
                        }`}
                        data-id={`slide${index + 1}`}
                        style={{ backgroundImage: `url('${src}')` }}
                    >
                        <div className={styles.content}>
                            <h2 className={styles.h2}>{title}</h2>
                            <p className={styles.p}>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
