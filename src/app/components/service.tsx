'use client'
import React, {useState} from 'react';
import styles from "@/app/page.module.css";
import {
    BsBookmarkStar,
    BsFiletypeDocx, BsFillMortarboardFill, BsFillTrainFreightFrontFill,
    BsInfoCircle, BsMegaphone,
    BsPcDisplayHorizontal,
    BsShop,
    BsShopWindow, BsStack, BsTrainFreightFront
} from "react-icons/bs";
import {PiStudent, PiStudentLight, PiStudentThin, PiTrademark, PiTrademarkLight} from "react-icons/pi";
import {HiOutlineSquare3Stack3D} from "react-icons/hi2";
import {SiHelpscout} from "react-icons/si";
import {GrCertificate} from "react-icons/gr";
import {LiaTrademarkSolid} from "react-icons/lia";
import {GiCargoShip} from "react-icons/gi";

const Service = () => {
    const [activeLink, setActiveLink] = useState<string>('#home'); // Состояние для активной ссылки

    return (
        <section className={`${styles.service} ${activeLink === '#section-2' ? styles.active : ''} `} id={"service"}>
            <div className={`${styles.container}`}>
                <div className={styles.row}>
                    <div className={`${styles.sectionTitle} ${styles.padd15}`}>
                        <h2>Услуги</h2>
                    </div>
                </div>

                <div className={styles.row}>

                    <div className={`${styles.serviceItem} ${styles.padd15}`}>
                        <div className={`${styles.serviceItemInner}`}>
                            <div className={`${styles.icon}`}>
                                <i className={`${styles.fa} ${'fa-laptop-code'}`}><SiHelpscout/></i>
                            </div>
                            <h4>Консалтинг</h4>
                            <p>Подбор актуальных программ субсидий, грантов и льготных кредитов.
                                Консультации по условиям участия в поддержке.
                                Помощь в оформлении необходимых документов.</p>
                        </div>
                    </div>

                    <div className={`${styles.serviceItem} ${styles.padd15}`}>
                        <div className={`${styles.serviceItemInner}`}>
                            <div className={`${styles.icon}`}>
                                <i className={`${styles.fa} ${'fa-palette'}`}><GrCertificate/></i>
                            </div>
                            <h4>Сертификация</h4>
                            <p>Мы предлагаем профессиональные услуги по сертификации и декларированию продукции,
                                необходимые для выхода на рынок и соответствия требованиям законодательства.</p>
                        </div>
                    </div>

                    <div className={`${styles.serviceItem} ${styles.padd15}`}>
                        <div className={`${styles.serviceItemInner}`}>
                            <div className={`${styles.icon}`}>
                                <i className={`${styles.fa} ${'fa-code'}`}><BsPcDisplayHorizontal/></i>
                            </div>
                            <h4>Регистрация на цифровой платформе</h4>
                            <p>Мы помогаем субъектам малого и среднего предпринимательства зарегистрироваться на
                                цифровой платформе, которая открывает доступ к государственным мерам поддержки,
                                образовательным ресурсам и инструментам для развития бизнеса.</p>
                        </div>
                    </div>

                    <div className={`${styles.serviceItem} ${styles.padd15}`}>
                        <div className={`${styles.serviceItemInner}`}>
                            <div className={`${styles.icon}`}>
                                <i className={`${styles.fa} ${'fa-search'}`}><BsShopWindow/></i>
                            </div>
                            <h4>Участие в выставках</h4>
                            <p>Мы помогаем субъектам малого и среднего бизнеса принимать участие в выставках любого
                                уровня, чтобы представить свою продукцию или услуги, найти новых партнеров и клиентов, а
                                также укрепить свои позиции на рынке. </p>
                        </div>
                    </div>

                    <div className={`${styles.serviceItem} ${styles.padd15}`}>
                        <div className={`${styles.serviceItemInner}`}>
                            <div className={`${styles.icon}`}>
                                <i className={`${styles.fa} ${'fa-bullhorn'}`}><PiStudent/></i>
                            </div>
                            <h4>Образовательные мероприятия</h4>
                            <p>Мы предлагаем профессиональные образовательные программы и тренинги для субъектов малого
                                и среднего предпринимательства, направленные на развитие ключевых навыков и повышение
                                эффективности бизнеса. </p>
                        </div>
                    </div>

                    <div className={`${styles.serviceItem} ${styles.padd15}`}>
                        <div className={`${styles.serviceItemInner}`}>
                            <div className={`${styles.icon}`}>
                                <i className={`${styles.fa} ${'fa-bullhorn'}`}><HiOutlineSquare3Stack3D/></i>
                            </div>
                            <h4>Комплексные услуги для бизнеса</h4>
                            <p>Мы предоставляем профессиональную поддержку субъектам малого и среднего
                                предпринимательства в ключевых аспектах ведения бизнеса. Юридические, финансовые,
                                кадровые и бухгалтерские услуги.</p>
                        </div>
                    </div>

                    <div className={`${styles.serviceItem} ${styles.padd15}`}>
                        <div className={`${styles.serviceItemInner}`}>
                            <div className={`${styles.icon}`}>
                                <i className={`${styles.fa} ${'fa-mobile-alt'}`}><BsInfoCircle/></i>
                            </div>
                            <h4>Информирование</h4>
                            <p>Мы помогаем субъектам малого и среднего предпринимательства, а также тем, кто планирует
                                начать собственное дело, быть в курсе всех доступных мер государственной и региональной
                                поддержки.</p>
                        </div>
                    </div>

                    <div className={`${styles.serviceItem} ${styles.padd15}`}>
                        <div className={`${styles.serviceItemInner}`}>
                            <div className={`${styles.icon}`}>
                                <i className={`${styles.fa} ${'fa-mobile-alt'}`}><GiCargoShip /></i>
                            </div>
                            <h4>Вывод товаров и услуг на экспорт</h4>
                            <p>Мы помогаем субъектам малого и среднего предпринимательства успешно выходить на
                                международные рынки, расширяя границы бизнеса и увеличивая объемы продаж.</p>
                        </div>
                    </div>

                    <div className={`${styles.serviceItem} ${styles.padd15}`}>
                        <div className={`${styles.serviceItemInner}`}>
                            <div className={`${styles.icon}`}>
                                <i className={`${styles.fa} ${'fa-mobile-alt'}`}><BsMegaphone/></i>
                            </div>
                            <h4>Продвижение бизнеса в СМИ</h4>
                            <p>Мы предлагаем комплексные услуги по продвижению вашего бизнеса через авторитетные
                                медиаканалы, чтобы повысить узнаваемость бренда, привлечь новых клиентов и укрепить
                                репутацию на рынке.</p>
                        </div>
                    </div>

                    <div className={`${styles.serviceItem} ${styles.padd15}`}>
                        <div className={`${styles.serviceItemInner}`}>
                            <div className={`${styles.icon}`}>
                                <i className={`${styles.fa} ${'fa-mobile-alt'}`}><PiTrademarkLight  /></i>
                            </div>
                            <h4>Регистрация торговой марки</h4>
                            <p>Мы предлагаем профессиональные услуги по регистрации торговой марки (товарного знака),
                                чтобы защитить ваш бренд и обеспечить его юридическую охрану. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
