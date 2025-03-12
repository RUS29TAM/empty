'use client'
import React, {useEffect, useState} from 'react';
import styles from "@/app/page.module.css";
import {GiStripedSun} from "react-icons/gi";
import { MdOutlineDarkMode} from "react-icons/md";
import {useTheme} from "@/app/ThemeContext";
// import {BsPalette} from "react-icons/bs";


const StyleSwitcher = () => {

    const [isOpen, setIsOpen] = useState(false);
    // const styleSwitcherRef = useRef<HTMLDivElement>(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const {toggleTheme, isDarkTheme} = useTheme();

    // Закрытие при скролле
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (isOpen && styleSwitcherRef.current) {
    //             setIsOpen(false);
    //         }
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [isOpen]);

    // const toggleStyleSwitcher = () => setIsOpen(!isOpen);
    //
    // const setActiveStyle = (color: string) => {
    //     document.querySelectorAll('.alternateStyle').forEach((style) => {
    //         if (color === style.getAttribute(styles.sectionTitle)) {
    //             style.removeAttribute('disabled');
    //         } else {
    //             style.setAttribute('disabled', 'true');
    //         }
    //     });
    // };


    useEffect(() => {
        if (document.body.classList.contains('dark')) {
            setIsDarkMode(true);
        }
    }, []);


    const handleButtonClick = () => {
        toggleTheme();
        document.querySelector("#toggle-theme")?.parentElement?.classList.toggle("checked");
    };

    return (
        <div className={`${styles.styleSwitcher} ${isOpen ? styles.open : ''}`}>
            {/*<div className={`${styles.styleSwitcherToggler} ${styles.sIcon}`} onClick={toggleStyleSwitcher}>*/}
            {/*    <i className={`${styles.dayNight} ${styles.sIconOne} `}><BsPalette/></i>*/}
            {/*</div>*/}

            <div className={`${styles.dayNight} ${styles.sIcon}`} onClick={handleButtonClick}>
                <i className={`${styles.dayNight}`}>{isDarkTheme ? <GiStripedSun/> :
                    <MdOutlineDarkMode/>}</i>
            </div>

            {/*<h4>Theme Colors</h4>*/}

            {/*<div className={`${styles.colors}`}>*/}
            {/*    <span className={`${styles.color1}`} onClick={() => setActiveStyle(styles.color1)}></span>*/}
            {/*    <span className={`${styles.color2}`} onClick={() => {*/}
            {/*        "setActiveStyle('color-2')"*/}
            {/*    }}></span>*/}
            {/*    <span className={`${styles.color3}`} onClick={() => {*/}
            {/*        "setActiveStyle('color-3')"*/}
            {/*    }}></span>*/}
            {/*    <span className={`${styles.color4}`} onClick={() => {*/}
            {/*        "setActiveStyle('color-4')"*/}
            {/*    }}></span>*/}
            {/*    <span className={`${styles.color5}`} onClick={() => {*/}
            {/*        "setActiveStyle('color-5')"*/}
            {/*    }}></span>*/}
            {/*</div>*/}
        </div>
    );
};

export default StyleSwitcher;
