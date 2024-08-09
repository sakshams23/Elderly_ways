import React from 'react';
import Marq from "./Marquee"
import SpotLight from "./SpotLight"
import How from "./How";
import Ready from "./Ready";
import WhyUs from "./WhyUs";
import Home from "./Home";

const Landing = ({ isLoggedIn }) => {
    
  
    return(
        <div>
            <Home isLoggedIn={isLoggedIn}/>
            <Marq/>
      <SpotLight/>
      <How/>
      <WhyUs/>
      <Ready/>
        </div>
    );
};

export default Landing;