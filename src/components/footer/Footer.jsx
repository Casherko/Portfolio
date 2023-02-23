import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const {t, i18n } = useTranslation();
  return (
    <footer>
      <a href='#' className='footer__logo'>{t("fullName")}</a>

      <ul className='permalinks'>
        <li><a href='#'>{t("home")}</a></li>
        <li><a href='#about'>{t("about")}</a></li>
        <li><a href='#experience'>{t("experience")}</a></li>
        <li><a href='#services'>{t("services")}</a></li>
        <li><a href='#portfolio'>{t("portfolio")}</a></li>
        <li><a href='#contact'>{t("contact")}</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://facebook.com'><FaFacebookF/></a>
        <a href='https://instagram.com'><FiInstagram/></a>
        <a href='https://linkedin.com'><BsLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer