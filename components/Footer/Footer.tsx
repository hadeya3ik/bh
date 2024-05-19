import React from 'react'
import Link from 'next/link'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {sectionText} from "../../typography/fonts"
import style from '../../typography/typography.module.css'
import './footer.css'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <p className={`${sectionText.className} ${style.footerLink}`} >© 2023 BAKING HORIZON</p>
      <div className={`hover-target icons`}>
        <a href="https://www.instagram.com/bakinghorizon/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={18} color={"black"}/>
        </a>
        <a href="https://www.facebook.com/bakinghorizon/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={18} color={"black"}/>
        </a>
        
      </div>
      <Link href='/terms-and-conditions' className={`hover-target`}>
        <p className={`${sectionText.className} ${style.footerLink}`} > TERMS AND CONDITIONS</p>
      </Link>
    </div>
  )
}

export default Footer