import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaArtstation } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/kamil-luk%C3%A1%C5%A1-1189ab209/' target="_blank"><BsLinkedin/></a>
        <a href='https://www.artstation.com/casherko' target="_blank"><FaArtstation/></a>

    </div>
  )
}

export default HeaderSocials