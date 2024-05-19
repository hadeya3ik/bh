import localfont from "next/font/local"
import { Wix_Madefor_Display } from 'next/font/google'

export const LogoFont = localfont({
  src : [{path : "../fonts/noir.otf"}], variable: '--font-melodin'
})

export const sectionText = Wix_Madefor_Display({
  weight: '400',
  subsets: ['latin'],
})
 