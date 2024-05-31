'use client';

import './header.css'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';


export default function Index() {
    const [isActive, setIsActive] = useState(false);

    return (
        // <div className={`header ${isActive ? 'headerActive' : ''}`}>
        <div className={`header ${isActive ? 'headerActive' : ''}`}>
            <div className="bar">
                <div onClick={() => setIsActive(!isActive)}>
                    <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
                    <div className="label">
                        <motion.p variants={opacity} animate={!isActive ? 'open' : 'closed'}>Menu</motion.p>
                        <motion.p variants={opacity} animate={isActive ? 'open' : 'closed'}>Close</motion.p>
                    </div>
                </div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </div>
    );
}