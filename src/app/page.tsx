'use client'
import styles from "./page.module.css";
import {useEffect, useState} from "react";
import About from "@/app/components/about";
import Hero from "@/app/components/hero";
import Service from '@/app/components/service';
import Portfolio from '@/app/components/portfolio'
import Contact from '@/app/components/contact'
import {BsBriefcase, BsDatabase, BsGear, BsHouse, BsTelephoneInbound, BsTextLeft} from "react-icons/bs";
import StyleSwitcher from "@/app/components/style-switcher";
import CountdownTimer from "@/app/components/countdown-timer/countdown-timer";



const Home = () => {
    const [, setActiveLink] = useState<string>('#home'); // Состояние для активной ссылки
    const [isAsideOpen, setIsAsideOpen] = useState(false); // Состояние для боковой панели
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Функция обработки клика по ссылке
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault(); // Предотвращаем стандартное поведение перехода
        setActiveLink(href); // Устанавливаем новую активную ссылку
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); // Плавный скролл к секции
    };

    // Список секций
    const sections = [
        { id: 1, title: 'Главная', page: <Hero />, icon: <BsHouse /> },
        { id: 2, title: 'О нас', page: <About />, icon: <BsTextLeft   />},
        { id: 3, title: 'Услуги', page: <Service />, icon: <BsGear /> },
        { id: 4, title: 'Портфолио', page: <Portfolio />, icon: <BsBriefcase /> },
        { id: 5, title: 'Контакты', page: <Contact />, icon: <BsTelephoneInbound /> },
        { id: 6, title: 'Регистрация', page: <CountdownTimer />, icon: <BsDatabase  /> },
    ];

    // Функция для обработки клика по пункту меню
    const handleNavClick = (index: number) => {
        setActiveSectionIndex(index);
        removeBackSection();
        addBackSection(index);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    };

    // Функция для добавления "backSection" к предыдущей секции
    const addBackSection = (index: number) => {
        const sectionElement = document.querySelector(`#section-${index}`);
        if (sectionElement) {
            sectionElement.classList.add('backSection');
        }
    };

    // Функция для удаления "backSection" со всех секций
    const removeBackSection = () => {
        const allSections = document.querySelectorAll('.section');
        allSections.forEach((section) => {
            section.classList.remove('backSection');
        });
    };

    // Функция-заглушка для тогглера боковой панели
    const asideSectionTogglerBtn = () => {

        setIsAsideOpen((prevIsOpen) => !prevIsOpen); // Переключаем состояние
    };

    // Функция для показа секции
    const showSection = (index: number) => {
        const sectionElement = document.querySelector(`#section-${index}`);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // При изменении состояния activeSectionIndex, прокручиваем к соответствующей секции
        showSection(activeSectionIndex);
    }, [activeSectionIndex]);


    return (

    <div className={styles.page}>
            <div className={styles.mainContainer}>
                <div className={`${styles.aside} ${isAsideOpen ? styles.open : ''}`}>
                    <div className={styles.logo}>
                        <a href="#"><span>A</span>tlas</a>
                    </div>

                    <div onClick={asideSectionTogglerBtn} className={styles.navToggler}>
                        <span></span>
                    </div>

                    <nav className={`${styles.nav}`}>
                        <ul>
                            {sections.map((section, index) => (
                                <li style={{display: "flex", alignItems: "center"}} key={section.id}>
                                    <div className={styles.navIconColor}>{section.icon}</div>
                                    <a
                                        href={`#section-${index}`}
                                        className={activeSectionIndex === index ? styles.active : ''}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(index);
                                            handleLinkClick(e, `${`#section-${index}`}`)
                                        }}
                                    >
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className={styles.mainContent} >

                    {sections.map((section, index) => (
                        <div
                            key={section.id}
                            id={`section-${index}`}
                            className={`${styles.section} ${activeSectionIndex === index ? styles.active : ''}`}
                        >
                            {section.page}
                        </div>
                    ))}
                </div>
                <StyleSwitcher />
            </div>
    </div>
);
}
export default Home;
