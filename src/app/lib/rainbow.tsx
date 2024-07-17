"use client";

import React from 'react';
import { colors } from './colors';
import { RainbowTextProps } from './definitions';

const RainbowText: React.FC<RainbowTextProps> = ({ text }) => {
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const handleMouseOver = (e: React.MouseEvent<HTMLSpanElement>) => {
    (e.target as HTMLSpanElement).style.color = getRandomColor();
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    target.style.color = ''; // Reset color
    target.classList.add('span-fade'); // Add the transition class
    setTimeout(() => {
      target.classList.remove('span-fade'); // Remove the transition class after the animation
    }, 3000);
  };

  return (
    <div>
      {text.split('').map((char, index) => (
        <span
          className="font-medium"
          key={index}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{ cursor: 'pointer' }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default RainbowText;
