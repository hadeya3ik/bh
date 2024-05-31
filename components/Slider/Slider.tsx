import img2 from './slideShow/pic2.png';
import img3 from './slideShow/pic3.png';
import img4 from './slideShow/pic4.png';
import img5 from './slideShow/pic5.png';
import img6 from './slideShow/pic6.png';
import img7 from './slideShow/pic7.png';
import img8 from './slideShow/pic8.png';
import {titleText, paragraphText} from "../../typography/fonts"
import style from '@/typography/typography.module.css'

import Image from 'next/image';
import Link from 'next/link';
import "./Slider.css"

export const data = [
    { id: 5, img: img5 },
    { id: 8, img: img8 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
];

const Slider = () => {
  return (
    <div className="SlidersectionContainer">
      <div className={`SubSectionContainer` }>
        <h3 className={`${style.titleText} ${titleText.className}`} >Branding Portfolio</h3>
        <p className={`${style.paragraph} ${paragraphText.className}`} >Our elevated, strategy-led designs are fuelled by curiosity and understated luxury.</p>
      </div>
      <div id="sliderContainer">
        <div id="slider">
          {data.map(item => (
            <Image key={item.id} src={item.img} alt={`Image ${item.id}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider;