import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const {t, i18n } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wo7tlss', 'template_nudzfbe', form.current, 'ZhKFr_MyMkQ-QnkEi')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>{t("Hcontact")}</h5>
      <h2>{t("contactMe")}</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kamillukass@seznam.cz</h5>
            <a href='mailto:kamillukass@seznam.cz?' target="_blank"> </a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Kamil Lukas</h5>
            <a href='https://www.linkedin.com/in/kamil-luk%C3%A1%C5%A1-1189ab209/' target="_blank">{t("sendMessage")}</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>Kamil Lukáš</h5>
            <a href='https://m.me/kamil.lukas.71' target="_blank">{t("sendMessage")}</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={t("name")} required />
          <input type="email" name='email' placeholder={t("email")} required />
          <textarea name="message" rows='7' placeholder={t("message")} required ></textarea>
          <button type='submit' className='btn btn-primary'>{t("sendMessage")}</button>
        </form>
      </div>
    </section>
  )
}

export default Contact