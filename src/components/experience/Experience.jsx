import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const {t, i18n } = useTranslation();
  return (
    <section id='experience'>
      <h5>{t("skill")}</h5>
      <h2>{t("exp")}</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>{t("experience1")}</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>{t("intermediate")}</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>{t("intermediate")}</small>
              </div>             
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>{t("preintermediate")}</small>
              </div>             
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>{t("preintermediate")}</small>
              </div>             
            </article>
          </div>
        </div>

{/* END OF FRONTEND*/ }

        <div className='experience__backend'>
        <h3>{t("experience3")}</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Unity</h4>
                <small className='text-light'>{t("intermediate")}</small>
              </div>             
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Unreal Engine</h4>
                <small className='text-light'>{t("preintermediate")}</small>
              </div>              
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Zbrush</h4>
                <small className='text-light'>{t("intermediate")}</small>
              </div>             
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Maya 3D</h4>
                <small className='text-light'>{t("preintermediate")}</small>
              </div>            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>{t("intermediate")}</small>
              </div>
            </article>
          </div>
        </div>        
      </div>
    </section>
  )
}

export default Experience