import React from 'react'
import './about.css'
import ME from '../../assets/images/FinalSkullQ.png'
import {CgWebsite} from 'react-icons/cg'
import {CgIfDesign} from 'react-icons/cg'
import {BiGame} from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

const About = () => {
  const {t, i18n } = useTranslation();
  return (
    <section id='about'>
      <h5>{t("getToKnow")}</h5>
      <h2>{t("aboutMe")}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <CgWebsite className='about__icon'/>
              <h5>{t("experience1")}</h5>
              <small>{t("time1")}</small>
            </article>

            <article className='about__card'>
              <CgIfDesign className='about__icon'/>
              <h5>{t("experience2")}</h5>
              <small>{t("time2")}</small>
            </article>

            <article className='about__card'>
              <BiGame className='about__icon'/>
              <h5>{t("experience3")}</h5>
              <small>{t("time3")}</small>
            </article>
          </div>

          <p>
          {t("infoAbout")}
          </p>

          <a href='#contact' className='btn btn-primary'>{t("talk")}</a>
        </div>
      </div>

    </section>
  )
}

export default About