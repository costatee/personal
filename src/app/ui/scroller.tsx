import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface InfiniteScrollerProps {
  items: string[];
}

const Scroller: React.FC<InfiniteScrollerProps> = ({ items }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const inner = scroller.querySelector('.scroller__inner') as HTMLDivElement;
    const itemCount = items.length;

    // Duplicate items for seamless scroll
    for (let i = 0; i < itemCount; i++) {
      const clone = inner.children[i].cloneNode(true);
      (clone as HTMLElement).setAttribute('aria-hidden', 'true');
      inner.appendChild(clone);
    }

    // Set up GSAP animation
    const duration = 200; // Animation duration in seconds
    gsap.to(inner, {
      x: -inner.scrollWidth / 2,
      duration,
      ease: 'none',
      repeat: -1,
    });

  }, [items]);

  return (
    <div className="scroller" ref={scrollerRef}>
      <div className="scroller__inner flex gap-[8rem]">
        {items.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="logo"
            className="w-36 h-36 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Scroller;
