'use client'
import React, {useEffect, useState} from 'react';
import {
    BsCamera,
    BsCameraReels,
    BsGear,
    BsHouse,
    BsTelephoneInbound,
    BsTextLeft,
    BsTicketPerforated
} from "react-icons/bs";
import styles from "@/app/page.module.css";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation"

const navLinks = [
    { href: '/pages/main', icon: <BsHouse />, label: 'Главная' },
    { href: '/pages/about', icon: <BsTextLeft />, label: 'О проекте' },
    { href: '/pages/offer', icon: <BsGear />, label: 'Услуги' },
    { href: '/pages/vhs', icon: <BsCameraReels />, label: 'Видео' },
    { href: '/pages/photo', icon: <BsCamera />, label: 'Фото' },
    { href: '/pages/tickets', icon: <BsTicketPerforated />, label: 'Участвовать' },
    { href: '/pages/contacts', icon: <BsTelephoneInbound />, label: 'Контакты' },
];
const Aside = () => {
    const [isAsideOpen, setIsAsideOpen] = useState(false); // Состояние для боковой панели
    const [activeSectionIndex, setActiveSectionIndex] = useState(0);


    const router = useRouter(); // Используем useRouter
    const pathname = usePathname(); // Используем usePathname для получения текущего пути

    useEffect(() => {
        // Перенаправляем на /pages/main при первой загрузке
        if(pathname === '/')  {
            router.push('/pages/main');
        }
    }, [router]);

    // Функция-заглушка для тогглера боковой панели
    const asideSectionTogglerBtn = () => {

        setIsAsideOpen((prevIsOpen) => !prevIsOpen); // Переключаем состояние
    };

    //
    const handleNavClick = (index: number) => {
        setActiveSectionIndex(index);
    };

    return (

        <div className={styles.page}>
            <div className={`${styles.mainContainer}`}>
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
                                        onClick={() => handleNavClick(index)}
                                        href={link.href}
                                        className={`${pathname === link.href ? styles.active : ''}`}
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

