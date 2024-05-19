"use client";

import React, { useEffect, useRef, useState } from 'react';
import './Cursor.css'

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const onMouseEnter = () => setHovering(true);
    const onMouseLeave = () => setHovering(false);

    document.addEventListener('mousemove', onMouseMove);

    const elementsToHover = document.querySelectorAll('.hover-target');
    elementsToHover.forEach(element => {
      element.addEventListener('mouseenter', onMouseEnter);
      element.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      elementsToHover.forEach(element => {
        element.removeEventListener('mouseenter', onMouseEnter);
        element.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`cursor inner ${hovering ? 'hover' : ''}`}
      ref={cursorRef}
    ></div>
  );
};

export default CustomCursor;
