import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Poster from '../assets/how.mp4';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const How = () => {
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(videoRef.current, {
      scale: 0.9,
      opacity: 0,
      y: -20,
    }, {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      }
    });
  }, []);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className="bg-skin-200 shadow-lg w-full rounded-3xl px-5 ">
      <h2 ref={videoRef} className="md:text-3xl md:px-5 md:pt-12 md:pb-6 md:text-center md:font-semibold md:text-black   text-2xl px-5 pt-5 pb-6 text-center font-semibold text-black">
      Unveiling Our 
      Vision and Mission
      </h2>
      
      <div className="md:flex md:justify-center md:items-center md:mb-6    flex justify-center items-center pb-8">
        <video
          ref={videoRef}
          className="rounded-tl-md rounded-tr-md w-full h-[576px] object-cover"
          muted
          onMouseOver={e => e.target.play()}
          onMouseOut={e => e.target.pause()}
          src={Poster}
          alt="How it works?"
          
        />
      </div>
    </div>
  );
};

export default How;
