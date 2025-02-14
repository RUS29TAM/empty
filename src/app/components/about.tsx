'use client'
import React, {useState} from 'react';
import styles from "@/app/page.module.css";

const About = () => {
    const [activeLink, setActiveLink] = useState<string>('#home'); // Состояние для активной ссылки

    return (
        <section className={`${styles.about} ${activeLink === '#section-1' ? styles.active : ''} `} id={"about"}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={`${styles.sectionTitle} ${styles.padd15} ${styles.alternateStyle}`}>
                        <h2>О нас</h2>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={`${styles.aboutContent} ${styles.padd15}`}>
                        <div className={styles.row}>
                            <div className={`${styles.aboutText} ${styles.padd15}`}>
                                <h3>Проект <span>Бизнес Десант</span></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam asperiores
                                    aspernatur at, culpa debitis dolor ducimus, eligendi error esse impedit in iure
                                    mollitia necessitatibus nesciunt nihil nobis nulla perspiciatis possimus quam
                                    quisquam sequi similique sint sit sunt totam! Accusantium ducimus nam similique.
                                    Alias asperiores consequatur consequuntur dignissimos, doloribus error eum ex facere
                                    impedit in iusto laboriosam, modi molestiae nesciunt nobis odio optio pariatur
                                    placeat porro, quae quas sapiente ut veritatis. Accusamus distinctio dolorum facere
                                    fugiat harum inventore ipsam nesciunt numquam quas quidem quisquam, rerum sequi
                                    tenetur unde voluptates. Aspernatur beatae blanditiis cupiditate, enim eveniet in
                                    ipsam laborum molestiae molestias mollitia nam nesciunt non nostrum officia porro
                                    rerum similique sit ut veritatis, voluptas? Aperiam consequuntur deleniti eligendi
                                    ex harum in labore non nostrum provident.</p>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={`${styles.personalInfo} ${styles.padd15}`}>
                                <div className={styles.row}>
                                    <div className={`${styles.infoItem} ${styles.padd15}`}>
                                        <p>Date: <span>14 Feb 2025</span></p>
                                    </div>

                                    <div className={`${styles.infoItem} ${styles.padd15}`}>
                                        <p>Spin: <span>24</span></p>
                                    </div>

                                    <div className={`${styles.infoItem} ${styles.padd15}`}>
                                        <p>Website: <span>www.domain.com</span></p>
                                    </div>

                                    <div className={`${styles.infoItem} ${styles.padd15}`}>
                                        <p>Email: <span>info@gmail.com</span></p>
                                    </div>

                                    <div className={`${styles.infoItem} ${styles.padd15}`}>
                                        <p>Degree: <span>A</span></p>
                                    </div>

                                    <div className={`${styles.infoItem} ${styles.padd15}`}>
                                        <p>Телефон: <span>+7 800 100 7000</span></p>
                                    </div>

                                    <div className={`${styles.infoItem} ${styles.padd15}`}>
                                        <p>City: <span>Arkhangelsk</span></p>
                                    </div>

                                    <div className={`${styles.infoItem} ${styles.padd15}`}>
                                        <p>Режим работы: <span>пн-чт: 09:00 - 18:15</span><span>пн: 09:00 - 17:00</span><span>сб-вс: выходной</span>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={`${styles.buttons} ${styles.padd15}`}>
                                        <a href="#contact" className={`${styles.btn} ${styles.hireMme}`}
                                           data-section-index="1">Что здесь?</a>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.skills} ${styles.padd15}`}>
                                <div className={styles.row}>
                                    <div className={`${styles.skillItem} ${styles.padd15}`}>
                                        <h5>One</h5>
                                        <div className={`${styles.progress}`}>
                                            <div className={`${styles.progressIn}`} style={{width: '76%'}}></div>
                                            <div className={`${styles.skillPercent}`}>76%</div>
                                        </div>
                                    </div>

                                    <div className={`${styles.skillItem} ${styles.padd15}`}>
                                        <h5>Two</h5>
                                        <div className={`${styles.progress}`}>
                                            <div className={`${styles.progressIn}`} style={{width: '86%'}}></div>
                                            <div className={`${styles.skillPercent}`}>86%</div>
                                        </div>
                                    </div>

                                    <div className={`${styles.skillItem} ${styles.padd15}`}>
                                        <h5>Three</h5>
                                        <div className={`${styles.progress}`}>
                                            <div className={`${styles.progressIn}`} style={{width: '66%'}}></div>
                                            <div className={`${styles.skillPercent}`}>66%</div>
                                        </div>
                                    </div>

                                    <div className={`${styles.skillItem} ${styles.padd15}`}>
                                        <h5>Four</h5>
                                        <div className={`${styles.progress}`}>
                                            <div className={`${styles.progressIn}`} style={{width: '96%'}}></div>
                                            <div className={`${styles.skillPercent}`}>96%</div>
                                        </div>
                                    </div>

                                    <div className={`${styles.skillItem} ${styles.padd15}`}>
                                        <h5>Five</h5>
                                        <div className={`${styles.progress}`}>
                                            <div className={`${styles.progressIn}`} style={{width: '76%'}}></div>
                                            <div className={`${styles.skillPercent}`}>76%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={`${styles.education} ${styles.padd15}`}>
                                <h3 className={`${styles.title}`}>First</h3>
                                <div className={styles.row}>
                                    <div className={`${styles.timelineBox} ${styles.padd15}`}>
                                        <div className={`${styles.timeline} ${styles.shadowDark}`}>
                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> 2013 - 2015
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Lorem ipsum dolor sit.</h4>
                                                <p className={`${styles.timelineText}`}>Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit. Aut dolor exercitationem iure omnis
                                                    possimus, reiciendis saepe! Ducimus esse modi officiis?.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> 2011 - 2014
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Lorem ipsum.</h4>
                                                <p className={`${styles.timelineText}`}>Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit. Accusantium atque beatae doloribus
                                                    error ex fugiat ipsum iste laborum maiores molestiae non, optio quis
                                                    quo, repudiandae, sint. Enim necessitatibus suscipit ullam!</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> 2007 - 2010
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Lorem ipsum.</h4>
                                                <p className={`${styles.timelineText}`}>Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit. Accusantium atque beatae doloribus
                                                    error ex fugiat ipsum iste laborum maiores molestiae non, optio quis
                                                    quo, repudiandae, sint. Enim necessitatibus suscipit ullam!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.experience} ${styles.padd15}`}>
                                <h3 className={`${styles.title}`}>Second</h3>
                                <div className={styles.row}>
                                    <div className={`${styles.timelineBox} ${styles.padd15}`}>
                                        <div className={`${styles.timeline} ${styles.shadowDark}`}>
                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> 2020 - Today
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Lorem ipsum dolor.</h4>
                                                <p className={`${styles.timelineText}`}>Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit. Aspernatur, consequatur corporis
                                                    dolorem ea eos et, excepturi fugiat id iusto molestiae nemo nesciunt
                                                    nisi nostrum repudiandae sed similique sint, veritatis voluptate.
                                                    Incidunt laborum nulla repellendus suscipit.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> 2017 - 2019
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Lorem ipsum dolor sit.</h4>
                                                <p className={`${styles.timelineText}`}>Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing elit. Aspernatur, consequatur corporis
                                                    dolorem ea eos et, excepturi fugiat id iusto molestiae nemo nesciunt
                                                    nisi nostrum repudiandae sed similique sint, veritatis voluptate.
                                                    Incidunt laborum nulla repellendus suscipit.</p>
                                            </div>

                                            <div className={`${styles.timelineItem}`}>
                                                <div className={`${styles.circleDot}`}></div>
                                                <h3 className={`${styles.timelineDate}`}>
                                                    <i className={`${'fa'} ${'fa-calendar'}`}></i> 2014 - 2016
                                                </h3>
                                                <h4 className={`${styles.timelineTitle}`}>Lorem ipsum dolor.</h4>
                                                <p className={`${styles.timelineText}`}>Lorem ipsum dolor sit amet.</p>
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
