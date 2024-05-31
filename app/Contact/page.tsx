"use client";

import React from "react";
import Link from 'next/link';

import './contact.css';
import { titleText, paragraphText, sectionText } from "../../typography/fonts";
import style from '@/typography/typography.module.css';
import { heroText } from "@/typography/fonts";
import Faq from '@/components/Faq/Faq';

const ContactPage = () => {
  return (
    <main>
      <div className="sectionContainer">
        <h2 className={`${heroText.className} ${style.titleText}`}>Contact us</h2>
        <p className={`${style.paragraph} ${paragraphText.className}`}>For inquiries, fill up a contact form or email us at</p>
        <div>
          <button className={`${sectionText.className} ${style.button} hover-target`}>hey</button>
        </div>
        <form>
          <div className='flex'>
            <input type="text" placeholder="Your name" name='name' required className="inputField" />
            <input type="email" placeholder="Your email" name="senderEmail" required className="inputField" />
          </div>
        </form>
      </div>
      <div className="border-red-500">hejhfak</div>
    </main>
  );
}

export default ContactPage;
