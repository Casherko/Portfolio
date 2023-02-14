import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const {t, i18n } = useTranslation();
  return (
    <section id='services'>
      <h5>{t("offer")}</h5>
      <h2>{t("services")}</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>{t("experience1")}</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("front1")}.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("front2")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("front3")}</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>{t("experience2")}</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("graphic1")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("graphic2")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("graphic3")}</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>{t("experience3")}</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("game1")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("game2")}</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>{t("game3")}</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services