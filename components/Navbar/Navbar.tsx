import Link from 'next/link'
import React from 'react'
import {sectionText} from "../../typography/fonts"
import style from '../../typography/typography.module.css'



const Navbar = () => {
  return (
     <li className={`navContainer ${sectionText.className}`}>
      <Link href='/' className={`${style.navItem} hover-target`}> Home </Link>
      <Link href='/Contact' className={`${style.navItem} hover-target`}> Contact </Link>
      <Link href='/Shop' className={`${style.navItem} hover-target`}> Shop </Link>
      <Link href='/Menu' className={`${style.navItem} hover-target`}> Menu </Link>
    </li>)
}

export default Navbar