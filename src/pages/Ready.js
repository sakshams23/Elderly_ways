import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Gallery from '../components/Gallery.js';
import data  from "../assets/data.json";
gsap.registerPlugin(ScrollTrigger);
const Ready = () => {
  const videoRef = useRef(null);
  const buttonRef = useRef(null);

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

  const handleButtonClick = () => {
    gsap.fromTo(buttonRef.current, {
      scale: 1,
      backgroundColor: "#FF8C00",
    }, {
      scale: 1.1,
      backgroundColor: "#FF4500",
      duration: 0.3,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
    gsap.fromTo(buttonRef.current, {
      x: 0,
    }, {
      x: 10,
      duration: 0.1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 3,
    });
  };

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className="bg-skin-200 shadow-lg w-full rounded-3xl px-5">
      <h2 className=" text-4xl font-semibold text-center  pt-10 pb-5  text-transparent bg-clip-text bg-gradient-to-r from-richblack-100 via-richblack-600 to-richblack-900 bg-transparent h-full">Success Stories</h2>
      <center><Gallery data={data.slides} /></center>
      <h2 ref={videoRef} className="text-3xl px-5 pt-12 pb-6 text-center font-semibold text-black">
        Ready to Donate?
      </h2>
      <div className="flex justify-center pb-12">
        <button
          ref={buttonRef}
          onClick={handleButtonClick}
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transform transition-transform duration-200 ease-in-out">
          Make a way for Elderly
        </button>
      </div>
    </div>
  );
};

export default Ready;
