"use client";

import { useState } from 'react';

const Work = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setIsHovered(true);
      setIsAnimating(true);
    }
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex justify-start items-center overflow-hidden h-full bg-gray-100 rounded-[32px]">
      <div className="flex w-full h-full gap-4 overflow-hidden">
        <div className="h-full overflow-hidden">
          <img
            src="/mac-mock.png"
            className={`w-full h-full ${isHovered ? 'animate-scalePic' : 'animate-scalePicReverse'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onAnimationEnd={handleAnimationEnd}
            alt="Mac Mockup"
          />
        </div>
        <div className="h-full relative">
          <img src="/mac-mock.png" className="w-full h-full" alt="Mac Mockup" />
          <button className="absolute bottom-4 right-4 rounded-full text-white text-[3rem] bg-gray-500/40 px-5 border-2 border-gray-500/50">+</button>
        </div>
        <div className="h-full">
          <img src="/mac-mock.png" className="w-full h-full" alt="Mac Mockup" />
        </div>
        <div className="h-full relative">
          <img src="/mac-mock.png" className="w-full h-full" alt="Mac Mockup" />
        </div>
      </div>
    </div>
  );
};

export default Work;
