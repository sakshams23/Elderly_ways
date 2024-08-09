import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import c1 from '../assets/1.png'
import c2 from '../assets/2.png'
import c3 from '../assets/3.png'
import c4 from '../assets/4.png'
// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const WhyUs = () => {
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    // Cards animation timeline
    let timeln = gsap.timeline({
      scrollTrigger: {
        trigger: cardRefs.current[0].parentElement,
        pin: true,
        pinSpacing: true,
        start: "left-=120px left",
        end: "+=2000",
        scrub: 1
      }
    });

    timeln.addLabel('card1');
    timeln.to(cardRefs.current[0], {
      xPercent: -20,
      opacity: 1
    });

    timeln.from(cardRefs.current[1], {
      xPercent: 95,
      opacity: 0
    });
    timeln.addLabel("card2");

    timeln.to(cardRefs.current[0], {
      scale: 0.95,
      xPercent: -30,
      opacity: 0.5
    }, "-=0.3");

    timeln.to(cardRefs.current[1], {
      xPercent: 0,
      opacity: 1
    });

    timeln.from(cardRefs.current[2], {
      xPercent: 85,
      opacity: 0
    });
    timeln.addLabel('card3');

    timeln.to(cardRefs.current[1], {
      scale: 0.98,
      xPercent: -40,
      opacity: 0.6
    }, "-=0.3");

    timeln.to(cardRefs.current[2], {
      xPercent: 0,
      opacity: 1
    });

    timeln.from(cardRefs.current[3], {
      xPercent: 75,
      opacity: 0
    });
    timeln.addLabel('card4');

    timeln.to(cardRefs.current[2], {
      scale: 0.98,
      xPercent: -50,
      opacity: 0.6
    }, "-=0.3");

    timeln.to(cardRefs.current[3], {
      xPercent: -60,
      opacity: 1
    });
    
    timeln.to(cardRefs.current[3], {});
  }, []);

  return (
    <div className=" md:bg-richblack-900 md:shadow-lg md:w-full md:rounded-3xl md:px-2  md:mb-10 md:block hidden">
       <h2 data-scroll data-scroll-section data-scroll-speed="-0.2" className=" text-8xl font-bold text-center  pt-[200px] mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 bg-transparent h-full">Why Elderly Ways?</h2>
      <div  className="cards flex space-x-10 ">
      
        <div ref={el => cardRefs.current[0] = el} className="card-1  bg-skin-200 text-white p-5 rounded-lg h-72 w-60 opacity-0 transform translate-x-3/4"><img alt='' src={c1}/><p className="text-center mt-2 text-xl font-semibold text-black">Credibility</p></div>
        <div ref={el => cardRefs.current[1] = el} className="card-2  bg-skin-200 text-white p-5 rounded-lg w-60 h-72 opacity-0 transform translate-x-3/4"><img alt='' src={c2}/><p className="text-center mt-2 text-xl font-semibold text-black">Diverse Fundraising</p></div>
        <div ref={el => cardRefs.current[2] = el} className="card-3  bg-skin-200 text-white p-5 rounded-lg w-60 h-72 opacity-0 transform translate-x-3/4"><img alt='' src={c3}/><p className="text-center mt-2 text-xl font-semibold text-black">Volunteer Network</p></div>
        <div ref={el => cardRefs.current[3] = el} className="card-4  bg-skin-200 text-white p-5 rounded-lg w-60 h-72 opacity-0 transform translate-x-3/4"><img alt='' src={c4}/><p className="text-center mt-2 text-xl font-semibold text-black">Social Responsibility</p></div>
      </div>
      
      </div>
  );
};

export default WhyUs;
