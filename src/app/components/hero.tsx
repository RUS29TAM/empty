'use client'
import React, {useState} from 'react';
import styles from "@/app/page.module.css";
import Anima from "@/app/components/anima/anima";

const Hero = () => {
    const [activeLink, setActiveLink] = useState<string>('#home'); // Состояние для активной ссылки

    return (
        <section className={`${styles.home} ${activeLink === '#section-0' ? styles.active : ''}`} id={"home"}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={`${styles.homeInfo} ${styles.padd15}`}>
                        <h3 className={styles.hello}>Привет, вы на проекте &nbsp; <br/><span className={styles.name}>Бизнес Десант</span>
                        </h3>
                        {/*<h3 className={styles.profession}>наша&nbsp;<span className={styles.typing}>ЦЕЛЬ</span></h3>*/}
                        <p>Мы ставим перед собой важную цель - предоставление комплексной методической и практической поддержки субъектам
                            малого и среднего предпринимательства. Проект направлен на оказание помощи действующим и
                            начинающим предпринимателям, а также "самозанятым" гражданам в преодолении административных,
                            финансовых и организационных барьеров.

                            Благодаря участию представителей отраслевых исполнительных органов власти, профильных
                            организаций и экспертов, "Бизнес – десант" обеспечивает предпринимателей актуальной
                            информацией о доступных мерах государственной поддержки, возможностях развития бизнеса,
                            сертификации, патентовании и маркетинге. В рамках проекта также предоставляются консультации
                            по вопросам юридического сопровождения, выхода на международные рынки и электронные торговые площадки,
                            привлечения инвестиций в развитие проектов.

                            Особое внимание уделяется труднодоступным муниципальным районам и округам Архангельской области, где предприниматели
                            сталкиваются с нехваткой специализированных знаний и ресурсов. </p>
                        {/*<a href="#" className={styles.btn}>Download CV</a>*/}
                    </div>

                    <div className={`${styles.homeImg} ${styles.padd15}`}>
                        <Anima />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
