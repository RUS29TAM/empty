'use client'
import React, {useEffect, useState} from 'react';
import {useTheme} from "@/app/ThemeContext";
import Hero from "@/app/components/hero";
import {useRouter} from "next/router";
import {
    BsCamera,
    BsCameraReels,
    BsGear,
    BsHouse,
    BsTelephoneInbound,
    BsTextLeft,
    BsTicketPerforated
} from "react-icons/bs";
import About from "@/app/components/about";
import Service from "@/app/components/service";
import Video from "@/app/components/video";
import Slider from "@/app/components/slider/slider";
import CountdownTimer from "@/app/components/countdown-timer/countdown-timer";
import Contact from "@/app/components/contact";
import styles from "@/app/page.module.css";
import StyleSwitcher from "@/app/components/style-switcher";
import Link from "next/link";

const navLinks = [
    { href: '/pages/main', icon: <BsHouse />, label: 'Главная' },
    { href: '/pages/about', icon: <BsTextLeft />, label: 'О проекте' },
    { href: '/pages/offer', icon: <BsGear />, label: 'Услуги' },
    // { href: '/pages/video-page', icon: <BsCameraReels />, label: 'Video' },
    { href: '/pages/vhs', icon: <BsCameraReels />, label: 'Видео' },

    { href: '/pages/photo', icon: <BsCamera />, label: 'Фото' },
    { href: '/pages/tickets', icon: <BsTicketPerforated />, label: 'Участвовать' },
    { href: '/pages/contacts', icon: <BsTelephoneInbound />, label: 'Контакты' },
];
const Aside = () => {
    const [activeLink, setActiveLink] = useState('')
    const [isAsideOpen, setIsAsideOpen] = useState(false); // Состояние для боковой панели
    const { isDarkTheme } = useTheme();

// useEffect(() => {
//     setActiveLink('/pages/contacts')
// },[])

    // Функция-заглушка для тогглера боковой панели
    const asideSectionTogglerBtn = () => {

        setIsAsideOpen((prevIsOpen) => !prevIsOpen); // Переключаем состояние
    };

    return (

        <div className={styles.page}>
            <div className={styles.mainContainer}>
                <div className={`${styles.aside} ${isAsideOpen ? styles.open : ''}`}>
                    <div className={styles.logo}>
                        <Link href={navLinks[0].href}><span>B</span><span>T</span></Link>
                    </div>

                    <div onClick={asideSectionTogglerBtn} className={styles.navToggler}>
                        <span></span>
                    </div>

                    <nav className={styles.nav}>
                        <ul>
                            {navLinks.map((link, index) => (
                                <li key={index} style={{ display: "flex", alignItems: "center" }}>
                                    <div className={styles.navIconColor}>{link.icon}</div>
                                    <Link
                                        href={link.href}
                                        className={activeLink === link.href ? styles.active : ''}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Aside;

