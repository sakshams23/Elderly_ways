import React, { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';
import gsap from 'gsap';
import donations from "../assets/donation.png";
import Marq from "./Marquee";
import SpotLight from "./SpotLight";
import How from "./How";
import Ready from "./Ready";
import WhyUs from "./WhyUs";

const Home = ({ isLoggedIn }) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    gsap.from(elementsRef.current, {
      opacity: 0,
      y: 50,
      stagger: 0.5,
      duration: 1,
      ease: "slow(0.7,0.7,false)",
    });
  }, []);

  return (
    <div>
      <div 
        data-scroll 
        data-scroll-section 
        data-scroll-speed="-.3" 
        className='md:flex md:flex-col md:justify-center md:text-white md:text-3xl md:w-screen md:h-screen md:bg-richblack-900 h-full w-screen  justify-center text-white text-3xl  bg-richblack-900' 
      >
        <div className='flex md:flex flex-row md:flex-wrap flex-wrap'>
          <div 
            className='md:mr-8 ' 
            ref={el => elementsRef.current[0] = el}
          >
            <img 
              src={donations} 
              
              className='md:h-[520px] md:w-[520px] h-80 w-80 md:-mt-10'
            />
          </div>
          <div 
            className='md:ml-8 md:mb-20 ml-8 -mt-24 mb-10' 
            ref={el => elementsRef.current[1] = el}
          >
            <h1 
              className=' md:text-3xl md:font-bold md:mt-48 md:mb-2 md:text-transparent md:bg-clip-text  md:bg-transparent text-xl font-bold mt-28 mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 bg-transparent'
            >
              Donate{" "}
              <ReactTyped
                strings={["Commodities.", "Funds.", " time and efforts."]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar="|"
                showCursor={true}
              />
            </h1>
            {isLoggedIn ? (
              <div ref={el => elementsRef.current[2] = el}>
                <p className='md:text-lg md:text-gray-300 md:mb-10 text-sm text-gray-300 mb-10'>
                  You are logged in. Explore the exclusive content for members!
                </p>
                <a 
                  className="md:inline-flex md:items-center md:justify-center md:rounded-xl md:bg-skin-200 md:py-3 md:px-6 md:font-dm md:text-base md:font-medium md:text-black md:shadow-md md:shadow-skin-200 md:transition-transform md:duration-200 md:ease-in-out md:hover:scale-[1.02]"
                  href="#"
                >
                  Make a way for Elderly
                </a>
              </div>
            ) : (
              <div ref={el => elementsRef.current[3] = el}>
                <p className='md:text-lg md:text-gray-300 text-sm text-gray-300'>
                  Join our community and make a difference!
                </p>
                <p className='md:text-lg md:text-gray-300 text-sm text-gray-300'>
                  Log in to access exclusive features.
                </p>
                <a 
                  className="md:mt-8 md:inline-flex md:items-center md:justify-center md:rounded-xl md:bg-skin-200 md:py-3 md:px-6 md:font-dm md:text-base md:font-medium md:text-black md:shadow-md md:shadow-skin-200 md:transition-transform md:duration-200 md:ease-in-out md:hover:scale-[1.02] mt-2 inline-flex items-center justify-center rounded-lg bg-skin-200 py-2 px-6 font-dm text-xs text-black shadow-md shadow-skin-200 transition-transform duration-200 ease-in-out hover:scale-[1.02] "
                  href="#"
                >
                  Make a way for Elderly
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
