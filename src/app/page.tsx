'use client'
import styles from "./page.module.css";
import {useEffect, useState} from "react";

const Home = () => {
    const [activeLink, setActiveLink] = useState<string>('#home'); // Состояние для активной ссылки

    // Функция обработки клика по ссылке
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault(); // Предотвращаем стандартное поведение перехода
        setActiveLink(href); // Устанавливаем новую активную ссылку
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); // Плавный скролл к секции
    };


    const [activeSectionIndex, setActiveSectionIndex] = useState(0);

    // Список секций
    const sections = [
        { id: 1, title: 'Home' },
        { id: 2, title: 'About' },
        { id: 3, title: 'Services' },
        { id: 4, title: 'Portfolio' },
        { id: 5, title: 'Contact' },
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

    // Функция для добавления "back-section" к предыдущей секции
    const addBackSection = (index: number) => {
        const sectionElement = document.querySelector(`#section-${index}`);
        if (sectionElement) {
            sectionElement.classList.add('back-section');
        }
    };

    // Функция для удаления "back-section" со всех секций
    const removeBackSection = () => {
        const allSections = document.querySelectorAll('.section');
        allSections.forEach((section) => {
            section.classList.remove('back-section');
        });
    };

    // Функция-заглушка для тогглера боковой панели
    const asideSectionTogglerBtn = () => {
        console.log('Aside toggler button clicked');
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
                <div className={styles.aside}>
                    <div className={styles.logo}>
                        <a href="#"><span>A</span>tlas</a>
                    </div>

                    <div className={styles.navToggler}>
                        <span></span>
                    </div>

                    <nav className={`${styles.nav}`}>
                        <ul>
                            {sections.map((section, index) => (
                                <li key={section.id}>
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

                <div className={styles.mainContent}>
                    <section className={`${styles.home} ${styles.section} ${activeLink === '#section-0' ? styles.active : ''}`} id={"home"}>
                        <div className={styles.container}>
                            <div className={styles.row}>
                                <div className={`${styles.homeInfo} ${styles.padd15}`}>
                                    <h3 className={styles.hello}>Hello, my name is <span className={styles.name}>Leo Souza</span></h3>
                                    <h3 className={styles.profession}>I'm a <span className={styles.typing}>Web Designer</span></h3>
                                    <p>I'm a web designer with extensive experience for over 10 years. My experience is
                                        to create website designs, graphic designs and much more...</p>
                                    <a href="#" className={styles.btn}>Download CV</a>
                                </div>

                                <div className={`${styles.homeImg} ${styles.padd15}`}>
                                    <img src="https://i.postimg.cc/PJbckj4M/hero.jpg" alt="hero image" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={`${styles.about} ${styles.section} ${activeLink === '#section-1' ? styles.active : ''} `} id={"about"}>
                        <div className={styles.container}>
                            <div className={styles.row}>
                                <div className={`${styles.sectionTitle} ${styles.padd15}`}>
                                    <h2>About me</h2>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={`${styles.aboutContent} ${styles.padd15}`}>
                                    <div className={styles.row}>
                                        <div className={`${styles.aboutText} ${styles.padd15}`}>
                                            <h3>I'm Leo Souza and <span>Web Designer</span></h3>
                                            <p>As a web designer, I'm specialized in creating visually appealing
                                                websites that not only captivate visitors but also provide seamless
                                                navigation and functionality. I continuously seek inspiration from
                                                current design trends and am committed to honing my skills through
                                                ongoing learning and experimentation. My ultimate goal is to craft
                                                digital experiences that engage users and drive results for my
                                                clients</p>
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={`${styles.personalInfo} ${styles.padd15}`}>
                                            <div className={styles.row}>
                                                <div className={`${styles.infoItem} ${styles.padd15}`}>
                                                    <p>Birthday: <span>02 Nov 2000</span></p>
                                                </div>

                                                <div className={`${styles.infoItem} ${styles.padd15}`}>
                                                    <p>Age: <span>24</span></p>
                                                </div>

                                                <div className={`${styles.infoItem} ${styles.padd15}`}>
                                                    <p>Website: <span>www.domain.com</span></p>
                                                </div>

                                                <div className={`${styles.infoItem} ${styles.padd15}`}>
                                                    <p>Email: <span>info@gmail.com</span></p>
                                                </div>

                                                <div className={`${styles.infoItem} ${styles.padd15}`}>
                                                    <p>Degree: <span>CS</span></p>
                                                </div>

                                                <div className={`${styles.infoItem} ${styles.padd15}`}>
                                                    <p>Phone: <span>+17 678 1999</span></p>
                                                </div>

                                                <div className={`${styles.infoItem} ${styles.padd15}`}>
                                                    <p>City: <span>São Paulo</span></p>
                                                </div>

                                                <div className={`${styles.infoItem} ${styles.padd15}`}>
                                                    <p>Freelance: <span>Available</span></p>
                                                </div>
                                            </div>

                                            <div className={styles.row}>
                                                <div className={`${styles.buttons} ${styles. padd15}`}>
                                                    <a href="#contact" className={`${styles.btn} ${styles.hireMme}`} onClick={(e) => handleLinkClick(e, '#contact')} data-section-index="1">Hire
                                                        me!</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`${styles.skills} ${styles.padd15}`}>
                                            <div className={styles.row}>
                                                <div className={`${styles.skillItem} ${styles.padd15}`}>
                                                    <h5>CSS</h5>
                                                    <div className={`${styles.progress}`}>
                                                        <div className={`${styles.progressIn}`} style={{width: '76%'}}></div>
                                                        <div className={`${styles.skillPercent}`}>76%</div>
                                                    </div>
                                                </div>

                                                <div className={`${styles.skillItem} ${styles.padd15}`}>
                                                    <h5>JS</h5>
                                                    <div className={`${styles.progress}`}>
                                                        <div className={`${styles.progressIn}`} style={{width: '86%'}}></div>
                                                        <div className={`${styles.skillPercent}`}>86%</div>
                                                    </div>
                                                </div>

                                                <div className={`${styles.skillItem} ${styles.padd15}`}>
                                                    <h5>PHP</h5>
                                                    <div className={`${styles.progress}`}>
                                                        <div className={`${styles.progressIn}`} style={{width: '66%'}}></div>
                                                        <div className={`${styles.skillPercent}`}>66%</div>
                                                    </div>
                                                </div>

                                                <div className={`${styles.skillItem} ${styles.padd15}`}>
                                                    <h5>HTML</h5>
                                                    <div className={`${styles.progress}`}>
                                                        <div className={`${styles.progressIn}`} style={{width: '96%'}}></div>
                                                        <div className={`${styles.skillPercent}`}>96%</div>
                                                    </div>
                                                </div>

                                                <div className={`${styles.skillItem} ${styles.padd15}`}>
                                                    <h5>Bootstrap</h5>
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
                                            <h3 className={`${styles.title}`}>Education</h3>
                                            <div className={styles.row}>
                                                <div className={`${styles.timelineBox} ${styles.padd15}`}>
                                                    <div className={`${styles.timeline} ${styles.shadowDark}`}>
                                                        <div className={`${styles.timelineItem}`}>
                                                            <div className={`${styles.circleDot}`}></div>
                                                            <h3 className={`${styles.timelineDate}`}>
                                                                <i className={`${'fa'} ${'fa-calendar'}`}></i> 2013 - 2015
                                                            </h3>
                                                            <h4 className={`${styles.timelineTitle}`}>Master in Computer
                                                                Science</h4>
                                                            <p className={`${styles.timelineText}`}>I learnt a wide range of topics
                                                                that are essential to understanding both the theory and
                                                                practical aspects of computing. This involves
                                                                programming fundamentals, computer architecture,
                                                                operating systems, databases, software engineering,
                                                                problem solving, collaboration and communication soft
                                                                skills.</p>
                                                        </div>

                                                        <div className={`${styles.timelineItem}`}>
                                                            <div className={`${styles.circleDot}`}></div>
                                                            <h3 className={`${styles.timelineDate}`}>
                                                                <i className={`${'fa'} ${'fa-calendar'}`}></i> 2011 - 2014
                                                            </h3>
                                                            <h4 className={`${styles.timelineTitle}`}>Master Degree</h4>
                                                            <p className={`${styles.timelineText}`}>I chose my master degree in
                                                                technology. There I deepened my knowledge, enhanced my
                                                                skills in the area and learnt how to increase my career
                                                                prospects in a competitive job market.</p>
                                                        </div>

                                                        <div className={`${styles.timelineItem}`}>
                                                            <div className={`${styles.circleDot}`}></div>
                                                            <h3 className={`${styles.timelineDate}`}>
                                                                <i className={`${'fa'} ${'fa-calendar'}`}></i> 2007 - 2010
                                                            </h3>
                                                            <h4 className={`${styles.timelineTitle}`}>Bachelor Degree</h4>
                                                            <p className={`${styles.timelineText}`}>There I learnt foundational
                                                                courses and computer sciences fundamentals. In the
                                                                institution, I chose my specialization in
                                                                web-development that involves front-end and back-end
                                                                technologies, user interface designs and content
                                                                management systems.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={`${styles.experience} ${styles. padd15}`}>
                                            <h3 className={`${styles.title}`}>Experience</h3>
                                            <div className={styles.row}>
                                                <div className={`${styles.timelineBox} ${styles.padd15}`}>
                                                    <div className={`${styles.timeline} ${styles.shadowDark}`}>
                                                        <div className={`${styles.timelineItem}`}>
                                                            <div className={`${styles.circleDot}`}></div>
                                                            <h3 className={`${styles.timelineDate}`}>
                                                                <i className={`${'fa'} ${'fa-calendar'}`}></i> 2020 - Today
                                                            </h3>
                                                            <h4 className={`${styles.timelineTitle}`}>Senior Front-end
                                                                Designer</h4>
                                                            <p className={`${styles.timelineText}`}>I can design complex software
                                                                systems. My decisions impact scalability,
                                                                maintainability, and overall system architecture. Also,
                                                                I mentor less experienced team members, helping them
                                                                grow and learn.</p>
                                                        </div>

                                                        <div className={`${styles.timelineItem}`}>
                                                            <div className={`${styles.circleDot}`}></div>
                                                            <h3 className={`${styles.timelineDate}`}>
                                                                <i className={`${'fa'} ${'fa-calendar'}`}></i> 2017 - 2019
                                                            </h3>
                                                            <h4 className={`${styles.timelineTitle}`}>Junior Front-end
                                                                Designer</h4>
                                                            <p className={`${styles.timelineText}`}>I learnt to code in an existing
                                                                codebase, dive into the project and understanding its
                                                                structure. Also I worked closely with senior software
                                                                engineers that guided me, answered my questions and
                                                                helped me grow.</p>
                                                        </div>

                                                        <div className={`${styles.timelineItem}`}>
                                                            <div className={`${styles.circleDot}`}></div>
                                                            <h3 className={`${styles.timelineDate}`}>
                                                                <i className={`${'fa'} ${'fa-calendar'}`}></i> 2014 - 2016
                                                            </h3>
                                                            <h4 className={`${styles.timelineTitle}`}>Graphic Designer</h4>
                                                            <p className={`${styles.timelineText}`}>I can create logos, color
                                                                schemes and typography for a brand's identity. Also I
                                                                develop graphics for websites, social media and digital
                                                                ads with applications that enhance user experience.</p>
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

                    <section className={`${styles.service} ${styles.section} ${activeLink === '#section-2' ? styles.active : ''} `} id={"service"}>
                        <div className={`${styles.container}`}>
                            <div className={styles.row}>
                                <div className={`${styles.sectionTitle} ${styles.padd15}`}>
                                    <h2>Services</h2>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={`${styles.serviceItem} ${styles.padd15}`}>
                                    <div className={`${styles.serviceItemInner}`}>
                                        <div className={`${styles.icon}`}>
                                            <i className={`${'fa'} ${'fa-mobile-alt'}`}></i>
                                        </div>
                                        <h4>Web Design</h4>
                                        <p>I offer custom website designs, responsive design to ensure compatibility
                                            across devices, and UI/UX design to enhance user experience</p>
                                    </div>
                                </div>

                                <div className={`${styles.serviceItem} ${styles.padd15}`}>
                                    <div className={`${styles.serviceItemInner}`}>
                                        <div className={`${styles.icon}`}>
                                            <i className={`${'fa'} ${'fa-laptop-code'}`}></i>
                                        </div>
                                        <h4>Graphic Design</h4>
                                        <p>I design logos, icons, illustrations, and other visual assets that enhance
                                            the website's branding and aesthetic appeal</p>
                                    </div>
                                </div>

                                <div className={`${styles.serviceItem} ${styles.padd15}`}>
                                    <div className={`${styles.serviceItemInner}`}>
                                        <div className={`${styles.icon}`}>
                                            <i className={`${'fa'} ${'fa-palette'}`}></i>
                                        </div>
                                        <h4>Digital Marketing</h4>
                                        <p>I build websites that enhances visual aesthetics, user experience, SEO,
                                            responsive design and mainly conversion optimization</p>
                                    </div>
                                </div>

                                <div className={`${styles.serviceItem} ${styles.padd15}`}>
                                    <div className={`${styles.serviceItemInner}`}>
                                        <div className={`${styles.icon}`}>
                                            <i className={`${'fa'} ${'fa-code'}`}></i>
                                        </div>
                                        <h4>UI/UX Solutions</h4>
                                        <p>I offer custom research and design to increase your customer satisfaction and
                                            obtain higher conversion rates</p>
                                    </div>
                                </div>

                                <div className={`${styles.serviceItem} ${styles.padd15}`}>
                                    <div className={`${styles.serviceItemInner}`}>
                                        <div className={`${styles.icon}`}>
                                            <i className={`${'fa'} ${'fa-search'}`}></i>
                                        </div>
                                        <h4>Brand Consultancy</h4>
                                        <p>I build brands through cultural insights & strategic vision. Custom crafted
                                            business solution</p>
                                    </div>
                                </div>

                                <div className={`${styles.serviceItem} ${styles.padd15}`}>
                                    <div className={`${styles.serviceItemInner}`}>
                                        <div className={`${styles.icon}`}>
                                            <i className={`${'fa'} ${'fa-bullhorn'}`}></i>
                                        </div>
                                        <h4>Photography</h4>
                                        <p>I make high-quality photos of any category at a professional level.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={`${styles.portfolio} ${styles.section} ${activeLink === '#section-3' ? styles.active : ''} `} id={"portfolio"}>
                            <div className={`${styles.container}`}>
                            <div className={styles.row}>
                                <div className={`${styles.sectionTitle} ${styles.padd15}`}>
                                    <h2>Portfolio</h2>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={`${styles.portfolioHeading} ${styles.padd15}`}>
                                    <h2>My Last Projects: </h2>
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={`${styles.portfolioItem} ${styles.padd15}`}>
                                    <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                                        <div className={`${styles.portfolioImg}`}>
                                            <img src="https://i.postimg.cc/NGkQB1Y0/portfolio-1.jpg"
                                                 alt="portfolio image" />
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.portfolioItem} ${styles.padd15}`}>
                                    <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                                        <div className={`${styles.portfolioImg}`}>
                                            <img src="https://i.postimg.cc/ydg49Z3w/portfolio-2.jpg"
                                                 alt="portfolio image" />
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.portfolioItem} ${styles.padd15}`}>
                                    <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                                        <div className={`${styles.portfolioImg}`}>
                                            <img src="https://i.postimg.cc/RVPdrbDL/portfolio-3.jpg"
                                                 alt="portfolio image" />
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.portfolioItem} ${styles.padd15}`}>
                                    <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                                        <div className={`${styles.portfolioImg}`}>
                                            <img src="https://i.postimg.cc/25dBY15N/portfolio-4.jpg"
                                                 alt="portfolio image" />
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.portfolioItem} ${styles.padd15}`}>
                                    <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                                        <div className={`${styles.portfolioImg}`}>
                                            <img src="https://i.postimg.cc/RZBHD1ML/portfolio-5.jpg"
                                                 alt="portfolio image" />
                                        </div>
                                    </div>
                                </div>

                                <div className={`${styles.portfolioItem} ${styles.padd15}`}>
                                    <div className={`${styles.portfolioItemInner} ${styles.shadowDark}`}>
                                        <div className={`${styles.portfolioImg}`}>
                                            <img src="https://i.postimg.cc/3wP7t1hK/portfolio-6.jpg"
                                                 alt="portfolio image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className={`${styles.contact} ${styles.section} ${activeLink === '#section-4' ? styles.active : ''} `} id={"contact"}>
                        <div className={`${styles.container}`}>
                            <div className={styles.row}>
                                <div className={`${styles.sectionTitle} ${styles.padd15}`}>
                                    <h2>Contact</h2>
                                </div>
                            </div>

                            <h3 className={`${styles.contactTitle} ${styles.padd15}`}>Any Question? Contact us!</h3>
                            <h4 className={`${styles.contactSubtitle} ${styles.padd15}`}>I'm at your service</h4>

                            <div className={styles.row}>
                                <div className={`${styles.contactInfoItem} ${styles.padd15}`}>
                                    <div className={`${styles.icon}`}><i className={`${'fa'} ${'fa-phone'}`}></i></div>
                                    <h4>Call us on</h4>
                                    <p>+92 333 054 5218</p>
                                </div>


                                <div className={`${styles.contactInfoItem} ${styles.padd15}`}>
                                    <div className={`${styles.icon}`}><i className={`${'fa'} ${'fa-map-marker-alt'}`}></i></div>
                                    <h4>Office</h4>
                                    <p>São Paulo</p>
                                </div>

                                <div className={`${styles.contactInfoItem} ${styles.padd15}`}>
                                    <div className={`${styles.icon}`}><i className={`${'fa'} ${'fa-envelope'}`}></i></div>
                                    <h4>Email</h4>
                                    <p>info@gmail.com</p>
                                </div>

                                <div className={`${styles.contactInfoItem} ${styles.padd15}`}>
                                    <div className={`${styles.icon}`}><i className={`${'fa'} ${'fa-globe'}`}></i></div>
                                    <h4>Website</h4>
                                    <p>www.domain.com</p>
                                </div>
                            </div>
                            <h3 className={`${styles.contactTitle} ${styles.padd15}`}>Send me an email</h3>
                            <h4 className={`${styles.contactSubtitle} ${styles.padd15}`}>I'll contact you as soon as possible!</h4>

                            <div className={styles.row}>
                                <div className={`${styles.contactForm} ${styles.padd15}`}>
                                    <div className={styles.row}>
                                        <div className={`${styles.formItem} ${styles.col6} ${styles.padd15}`}>
                                            <div className={`${styles.formGroup}`}>
                                                <input type="text" className={`${styles.formControl}`} placeholder="Name" />
                                            </div>
                                        </div>

                                        <div className={`${styles.formItem} ${styles.col6} ${styles.padd15}`}>
                                            <div className={`${styles.formGroup}`}>
                                                <input type="email" className={`${styles.formControl}`} placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                                            <div className={`${styles.formGroup}`}>
                                                <input type="text" className={`${styles.formControl}`} placeholder="Subject" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                                            <div className={`${styles.formGroup}`}>
                                                <textarea name="message" id="message" className={`${styles.formControl}`}
                                                          placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={`${styles.formItem} ${styles.col12} ${styles.padd15}`}>
                                            <div className={`${styles.formGroup}`}>
                                                <button type="submit" className={`${styles.btn}`}>Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className={`${styles.styleSwitcher}`}>
                <div className={`${styles.styleSwitcherToggler} ${styles.sIcon}`}>
                    <i className={`${styles.fas} ${styles.faCog} ${styles.faSpin}`}></i>
                </div>

                <div className={`${styles.dayNight} ${styles.sIcon}`}>
                    <i className={`${styles.fas}`}></i>
                </div>

                <h4>Theme Colors</h4>

                <div className={`${styles.colors}`}>
                    <span className={`${styles.color1}`} onClick={() => {"setActiveStyle('color-1')"}}></span>
                    <span className={`${styles.color2}`} onClick={() =>{"setActiveStyle('color-2')"}}></span>
                    <span className={`${styles.color3}`} onClick={() =>{"setActiveStyle('color-3')"}}></span>
                    <span className={`${styles.color4}`} onClick={() =>{"setActiveStyle('color-4')"}}></span>
                    <span className={`${styles.color5}`} onClick={() =>{"setActiveStyle('color-5')"}}></span>
                </div>
            </div>
    </div>
);
}
export default Home;
