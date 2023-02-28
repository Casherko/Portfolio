import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/images/profile.png'
import CZ from '../../assets/images/cz.png'
import EN from '../../assets/images/usa.png'
import { useTranslation } from 'react-i18next'
import HeaderSocials from './HeaderSocials'

const Header = () => {

  const {t, i18n } = useTranslation();

  return (
    <header>
      
      <div className="container header__container">
          <div onClick={() => i18n.changeLanguage("cz")} className='czech__language'><img src={CZ} alt="cz_language"/></div>
          <div onClick={() => i18n.changeLanguage("en")} className='english__language'><img src={EN} alt="en_language"/></div>                    
        <h5>{t("hello")}</h5>
        <h1>{t("fullName")}</h1>
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