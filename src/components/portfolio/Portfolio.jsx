import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/images/FinalSkullQ.png'
import IMG2 from '../../assets/images/star2.png'
import IMG3 from '../../assets/images/vizitka.png'
import IMG4 from '../../assets/images/reactCode.png'
import IMG5 from '../../assets/images/weaponstrike2.png'
import IMG6 from '../../assets/images/landscape.jpg'
import { useTranslation } from 'react-i18next'


const Portfolio = () => {
  const {t, i18n } = useTranslation();
  return (
    <section id='portfolio'>
      <h5>{t("work")}</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={IMG1} alt="" />
            </div>
            <h3>{t("portfolio1")}</h3>
              <div className='portfolio__item-cta'>
            <a href="https://www.artstation.com/artwork/w0A9rZ" className='btn btn-primary' target='_blank'>Artstation</a>
              </div>          
          </article>
          <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={IMG2} alt="" />
            </div>
            <h3>{t("portfolio2")}</h3>
              <div className='portfolio__item-cta'>
            <a href="https://www.artstation.com/artwork/vJgBAv" className='btn btn-primary' target='_blank'>Gameplay</a>
              </div>          
          </article>
          <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={IMG3} alt="" />
            </div>
            <h3>{t("portfolio3")}</h3>
              <div className='portfolio__item-cta'>
            <a href="www.google.com" className='btn btn-primary' target='_blank'>Github</a>
              </div>          
          </article>
          <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={IMG4} alt="" />
            </div>
            <h3>{t("portfolio4")}</h3>
              <div className='portfolio__item-cta'>
            <a href="www.google.com" className='btn btn-primary' target='_blank'>Github</a>
              </div>          
          </article>
          <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={IMG5} alt="" />
            </div>
            <h3>{t("portfolio5")}</h3>
              <div className='portfolio__item-cta'>
            <a href="https://play.google.com/store/apps/details?id=com.DarkGamesStudios.WeaponStrikes" className='btn btn-primary' target='_blank'>Google Play</a>
              </div>          
          </article>
          <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={IMG6} alt="" />
            </div>
            <h3>{t("portfolio6")}</h3>
              <div className='portfolio__item-cta'>
            <a href="https://www.artstation.com/artwork/lR0lgG" className='btn btn-primary' target='_blank'>ArtStation</a>
              </div>          
          </article>
          
        
      </div>
    </section>
  )
}

export default Portfolio