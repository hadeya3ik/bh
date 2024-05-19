import localfont from "next/font/local"
import { Wix_Madefor_Display } from 'next/font/google'
import { Lato } from 'next/font/google'
import { Urbanist } from 'next/font/google'

export const LogoFont = localfont({
  src : [{path : "../fonts/noir.otf"}], variable: '--font-melodin'
})

export const sectionText = Wix_Madefor_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
})
 
export const mobileNavText = localfont({
  src : [{path : "../fonts/blackMango/BlackMango-Light.otf"}], variable: '--font-melodin'
})

export const heroText = localfont({
  src : [{path : "../fonts/cheri.otf"}], variable: '--font-melodin'
})

export const paragraphText = Lato ({
  weight: '300',
  subsets: ['latin'],
})
