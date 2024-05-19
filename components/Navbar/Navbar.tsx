import Link from 'next/link'
import React from 'react'
import './Navbar.css'
import {sectionText} from "../../typography/fonts"
import style from '../../typography/typography.module.css'



const Navbar = () => {
  return (
    // <div className="navBar">
      <li className={`navContainer hover-target ${sectionText.className}`}>
      <Link href='/' className={`${style.navItem} hover-target`}> Home </Link>
      <Link href='/Contact' className={`${style.navItem} hover-target`}> Contact </Link>
      <Link href='/Shop' className={`${style.navItem} hover-target`}> Shop </Link>
      <Link href='/Menu' className={`${style.navItem} hover-target`}> Menu </Link>
    </li>
    //  </div>
    )
}

export default Navbar