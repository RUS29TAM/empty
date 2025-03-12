import React, { useState } from 'react';
import styles from './styles.module.css';
import Link from "next/link";

const redirect = '/pages/offer'
const AccordionSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const items = [
        {
            title: 'Воспользоваться услугами агентства',
            content:  <span>Участники смогут узнать об <Link style={{color: 'steelblue', textDecoration: 'underline', fontWeight: 'bold'}} href={redirect}>услугах агентства</Link>, и воспользоваться ими после оформления заявки</span>,
        },
        {
            title: 'Возможность задать интересующий вопрос',
            content: 'Участники смогут задать вопросы экспертам и получить развернутые ответы.',
        },
        {
            title: 'Смогут подобрать источники финансирования для развития своего проекта',
            content: 'Например участники смогут получить полную консультацию и, при наличии документов, оформить на месте необходимый комплект для заключения договора на кредит со сниженными процентными ставками в МКК «Развитие».',
        },
        {
            title: 'Построить партнерские отношения с представителями смежного бизнеса на территории района',
            content: 'Мероприятие предоставляет площадку для networking и установления деловых связей.',
        },
        {
            title: 'Узнать об актуальных и действующих мерах поддержки',
            content: 'Эксперты расскажут о доступных мерах государственной поддержки СМСП федерального и регионального характера, а также какие требования предъявляются к получателям поддержки.',
        },
    ];

    return (
        <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Что могут получить участники от этой встречи</h2>
            <ul className={styles.accordionList}>
                {items.map((item, index) => (
                    <li key={index} className={styles.accordionItem}>
                        <button
                            className={`${styles.accordionButton} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.title}
                        </button>
                        {activeIndex === index && (
                            <div className={styles.accordionContent}>
                                <p>{item.content}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccordionSection;
