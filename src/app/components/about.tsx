'use client'
import React, {useState} from 'react';
import styles from "@/app/page.module.css";
import ProgressBar from "@/app/components/progress-bar/progress-bar";

const About = () => {
    const [activeLink, setActiveLink] = useState<string>('#section-2'); // Состояние для активной ссылки
    const [progress, setProgress] = useState(0); // Начальное значение прогресса

    return (
        <section className={`${styles.about} ${activeLink === '#section-2' ? styles.active : ''} `} id={"about"}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={`${styles.sectionTitle} ${styles.padd15} ${styles.alternateStyle}`}>
                        <h2>О нас</h2>
                    </div>
                </div>
                {/*Описание*/}
                <div className={styles.row}>
                    <div className={`${styles.aboutContent} ${styles.padd15}`}>
                        <div className={styles.row}>
                            <div className={`${styles.aboutText} ${styles.padd15}`}>
                                <h3>Проект <span>Бизнес Десант</span></h3>
                                <p className={styles.p}>Стартовал в марте 2023 года по инициативе Губернатора
                                    Архангельской о бласти Александра Витальевича Цыбульского.

                                    В ходе реализации проекта в нем приняли участие более 500 человек, и более
                                    половины из них смогли достичь ожидаемых результатов, воспользовавшись доступными
                                    мерами поддержки как федерального, так и регионального уровня.

                                    В 2025 году «Бизнес-десант» продолжает свою работу, и мы уверены, что вновь
                                    продемонстрируем высокую эффективность в поддержке и развитии малого и среднего
                                    бизнеса. Участники наших мероприятий получают ценные знания, практические навыки и
                                    комплексные услуги, которые способствуют их профессиональному росту и успешному
                                    развитию бизнеса.

                                    Регистрация новых субъектов предпринимательства и положительные отзывы участников
                                    подтверждают, что проект оказывает значительное влияние на предпринимательскую
                                    активность и экономическое развитие Архангельской области. Мы гордимся тем, что на
                                    муниципальном уровне
                                    помогаем малому бизнесу региона становиться сильнее и конкурентоспособнее!
                                </p>
                            </div>
                        </div>

                        <div className={styles.row}>
                            {/*сетка*/}
                            <div className={`${styles.personalInfo} ${styles.padd15}`}>
                                {/*<div className={styles.row}>*/}
                                {/*    <div className={`${styles.infoItem} ${styles.padd15}`}>*/}
                                {/*        <p>Date: <span>14 Feb 2025</span></p>*/}
                                {/*    </div>*/}

                                {/*    <div className={`${styles.infoItem} ${styles.padd15}`}>*/}
                                {/*        <p>Spin: <span>24</span></p>*/}
                                {/*    </div>*/}

                                {/*    <div className={`${styles.infoItem} ${styles.padd15}`}>*/}
                                {/*        <p>Website: <span>www.domain.com</span></p>*/}
                                {/*    </div>*/}

                                {/*    <div className={`${styles.infoItem} ${styles.padd15}`}>*/}
                                {/*        <p>Email: <span>info@gmail.com</span></p>*/}
                                {/*    </div>*/}

                                {/*    <div className={`${styles.infoItem} ${styles.padd15}`}>*/}
                                {/*        <p>Degree: <span>A</span></p>*/}
                                {/*    </div>*/}

                                {/*    <div className={`${styles.infoItem} ${styles.padd15}`}>*/}
                                {/*        <p>Телефон: <span>+7 800 100 7000</span></p>*/}
                                {/*    </div>*/}

                                {/*    <div className={`${styles.infoItem} ${styles.padd15}`}>*/}
                                {/*        <p>City: <span>Arkhangelsk</span></p>*/}
                                {/*    </div>*/}

                                {/*    <div className={`${styles.infoItem} ${styles.padd15}`}>*/}
                                {/*        <p>Режим работы: <span>пн-чт: 09:00 - 18:15</span><span>пн: 09:00 - 17:00</span><span>сб-вс: выходной</span>*/}
                                {/*        </p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                <div className={styles.row}>
                                    <div className={`${styles.buttons} ${styles.padd15}`}>
                                        <a href="#contact" className={`${styles.btn} ${styles.hireMme}`}
                                           data-section-index="1">Что здесь?</a>
                                    </div>
                                </div>
                            </div>
                            {/*инфографика*/}
                            <div className={`${styles.statistics} ${styles.padd15}`}>
                                <div className={styles.row}>
                                    <ProgressBar
                                        title="100% узнали о мерах поддержки"
                                        percent={100}
                                        peopleCount={596}
                                        each={'чел.'}
                                    />
                                    <ProgressBar
                                        title="55% обратились за поддержкой"
                                        percent={55}
                                        peopleCount={327}
                                        each={'чел.'}
                                    />
                                    <ProgressBar
                                        title="37% оказаных услуг"
                                        percent={37}
                                        peopleCount={122}
                                        each={'ед.'}
                                    />
                                    <ProgressBar
                                        title="38% прошли обучение"
                                        percent={38}
                                        peopleCount={125}
                                        each={'чел.'}
                                    />
                                    <ProgressBar
                                        title="4% открыли свой бизнес"
                                        percent={4}
                                        peopleCount={13}
                                        each={'чел.'}
                                    />
                                    <ProgressBar
                                        title="3% заключили социальный контракт"
                                        percent={3}
                                        peopleCount={10}
                                        each={'чел.'}
                                    />
                                </div>
                            </div>
                        </div>


                        {/*дорожная карта*/}
                        <div className={styles.row}>
                            <div className={`${styles.roadmapLeft} ${styles.padd15}`}>
                                <h3 className={`${styles.title}`}>2023 год</h3>
                                <div className={styles.row}>
                                    <div className={`${styles.timelineBox} ${styles.padd15}`}>
                                        <div className={`${styles.timeline} ${styles.shadowDark}`}>
                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> март
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Онежский округ</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 26 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> апрель
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Каргопольский и Няндомский
                                                    округа</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 45 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> июнь
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Верхнетоемский, Красноборский,
                                                    Котласский округа и Ленский район</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 75 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> июль
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Пинежский округ</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 25 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> август
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Вельский, Коношский районы и
                                                    Устьянский округ</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 59 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> октябрь
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Виноградовский, Шенкурский и
                                                    Холмогорский округа</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 63 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> ноябрь
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Город Северодвинск</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 8 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> декабрь
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Город Новодвинск и Приморский
                                                    округ</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 30 чел.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.roadmapRight} ${styles.padd15}`}>
                                <h3 className={`${styles.title}`}>2024 год</h3>
                                <div className={styles.row}>
                                    <div className={`${styles.timelineBox} ${styles.padd15}`}>
                                        <div className={`${styles.timeline} ${styles.shadowDark}`}>
                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> февраль
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Лешуконский и Мезенский
                                                    округа</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 17 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> март
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Онежский округ</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 10 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> апрель
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Каргопольский и Няндомский
                                                    округа</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 55 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> июнь
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Ленский район, Вилегодский,
                                                    Котласский, Красноборский и Верхнетоемский округа</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 79 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> июль
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Устьянский округ, Вельский и
                                                    Коношский районы, Шенкурский округ</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 58 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> август
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Пинежский округ</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 14 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> сентябрь
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Плесецкий округ</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 18 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> октябрь
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Виноградовский округ</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 14 чел.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> ноябрь

                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Город Северодвинск</h4>
                                                <p className={`${styles.timelineText}`}>Приняли участие 12 чел.</p>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
