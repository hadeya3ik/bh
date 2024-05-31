import style from '../typography/typography.module.css'
import Link from 'next/link'
import {heroText, sectionText, paragraphText} from "../typography/fonts"
import './common.css'
import Slider from '@/components/Slider/Slider'
import Faq from '@/components/Faq/Faq'

export default function Home() {
  return (
    <main>
      <div className="sectionContainer">
      <h1 className="text-3xl font-bold underline">
      Hello world!
</h1>
        <h2 className={`${heroText.className} ${style.heroText}`}>Cakes and Treats from our Kitchen</h2>
        <p className={`${paragraphText.className} ${style.paragraph}`} >Baking Horizon is a family-owned business nestled in Milton, dedicated to crafting exquisite custom cakes. From birthdays to weddings, we cater to all your special occasions. Explore a wide array of flavors and styles, and let us create a uniquely personalized cake for your celebration. With a passion for baking and a commitment to quality, we take pride in turning your dream cake into a delicious reality.</p>
        <div>
          <button className={`${sectionText.className} ${style.button} hover-target`} >inquire now</button>
        </div>
      </div>
      <div><Slider/></div>
      <div><Faq/></div>
    </main>
  );
}
