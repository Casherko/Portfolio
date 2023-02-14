import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/profile.png'
import { useTranslation } from 'react-i18next'
import HeaderSocials from './HeaderSocials'
import loLanguage from 'react-icons/io'

const Header = () => {

  const {t, i18n } = useTranslation();

  return (
    <header>
      <a className='language'>
      <a onClick={() => i18n.changeLanguage("cz")} className='btn'>CZ</a>
      <a onClick={() => i18n.changeLanguage("en")} className='btn btn-primary'>ENG</a>
        </a> 
      <div className="container header__container">        
        <h5>{t("hello")}</h5>
        <h1>Kamil Lukas</h1>
        <h5 className='text-light'>{t("what")}</h5>
        <CTA />
        <HeaderSocials />

          <div className='me'>
            <img src={ME} alt="not working" />
          </div>
            
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>  
  )
}

export default Header