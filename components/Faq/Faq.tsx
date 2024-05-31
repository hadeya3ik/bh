"use client";
import {titleText, paragraphText, sectionText} from "../../typography/fonts"
import style from '@/typography/typography.module.css'
import Link from 'next/link';
import "./Faq.css"

import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className={`faqQ ${style.subText} ${sectionText.className}`} onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className={`faqA ${style.paragraph} ${paragraphText.className}`}>{answer}</div>}
    </div>
  );
};

const FAQ = ({ data }) => {
  return (
    <div className="faqContainer">
      {data.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const faqData = [
  {
    question: 'DO YOU OFFER PAYMENT PLANS?',
    answer: 'Yes! It can be a big investment working with a designer, so I do my best to make payments as simple as possible for my clients. The first step is to pay a 30-50% deposit to reserve your spot. From there, we can spread the rest into three or more payments throughout the project. However, I am flexible and happy to discuss other payment options that work better with your budget.'
  },
  {
    question: 'WHY DO WE NEED A BRAND STRATEGY?',
    answer: 'A brand strategy is essential for the growth and success of your business. It helps you define your brand’s identity, establish a clear and consistent message, and create a strong connection with your target audience.'
  },
  {
    question: 'HOW DO I BOOK?',
    answer: 'To book a consultation, you can fill out the contact form on our website or give us a call. We will then schedule a time to discuss your project in detail and outline the next steps.'
  }
];

const Faq = () => {
  return (
    <div className="faqSectionContainer">
        <h3 className={`${style.titleText} ${titleText.className}`} >FAQ</h3>
      <FAQ data={faqData} />
    </div>
  )
}

export default Faq;