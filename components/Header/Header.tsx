"use client";

import {LogoFont} from "../../typography/fonts"
import style from '../../typography/typography.module.css'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import Link from 'next/link'
import {sectionText} from "../../typography/fonts"
import './header.css'
import { link } from "fs";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='logoContainer'>
      <div onClick={handleNav} className="menu-icon">
        {!nav ? 
          <div className="">
            <AiOutlineMenu size={30} />
            <li className={` ${sectionText.className} navContainer2`}>
              <Link href='/' className={`${style.navItem} hover-target`}> Home </Link>
              <Link href='/Contact' className={`${style.navItem} hover-target`}> Contact </Link>
              <Link href='/Shop' className={`${style.navItem} hover-target`}> Shop </Link>
              <Link href='/Menu' className={`${style.navItem} hover-target`}> Menu </Link>
            </li>
          </div>
          :<AiOutlineClose size={30} />}
      </div>
      <div className="logo">
        <h1 className={`${LogoFont.className} ${style.logo} hover-target`} >Baking Horizon</h1>
      </div>
    </div>
  )
}

export default Header