import { useLayoutEffect, useRef, useEffect } from "react";
import gsap from "gsap";

const Rolling = ({ videos }: { videos: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const videoHeight = 450; // Height of each video
    const totalVideos = videos.length;
    

    const timeline = gsap.timeline({ repeat: -1, defaults: { ease: "power1.inOut" } });

    videos.forEach((_, index) => {
      timeline
        .to(containerRef.current, {
          y: `-=${videoHeight}`,
          duration: 1,
          delay: 8,
          onComplete: () => {
            // Reset the position when reaching the last video
            if (index === totalVideos - 1) {
              gsap.set(containerRef.current, { y: 0 });
            }
          },
        });
    });

    // Reset position after the last video
    timeline.set(containerRef.current, { y: 0 });

    return () => {
      timeline.kill();
    };
  }, [videos]);

  return (
    <div className="relative h-[500px] w-[500px] overflow-hidden rounded-full border-[0.75rem] border-gray-200">
      <div className="absolute top-0 left-0 w-full" ref={containerRef}>
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            className="video absolute w-full h-[450px] object-cover mt-8"
            autoPlay
            loop
            muted
            playsInline
            style={{ top: `${index * 450}px` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Rolling;
