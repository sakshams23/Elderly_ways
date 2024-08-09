import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Marq from "./pages/Marquee";
import SpotLight from "./pages/SpotLight";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from 'react';
import PrivateRoute from "./components/PrivateRoute";
import AboutUsPage from "./pages/AboutUsPage";
import How from "./pages/How";
import Ready from "./pages/Ready";
import WhyUs from "./pages/WhyUs";
import ContactUsForm from "./pages/ContactUsForm";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [paddingX, setPaddingX] = useState(0);

  useEffect(() => {
    let scroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
      });
    });

    const handleResize = () => {
      const padding = (window.innerWidth - 1280) / 2;
      setPaddingX(padding > 0 ? padding : 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      scroll.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div
      data-scroll-container
      className="w-full h-full bg-richblack-900 flex flex-col overflow-hidden"
      style={{ paddingLeft: paddingX, paddingRight: paddingX }}
    >
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} style={{ paddingLeft: paddingX, paddingRight: paddingX }} />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home isLoggedIn={isLoggedIn} />
              <Marq />
              <SpotLight />
              <How />
              <WhyUs />
              <Ready />
            </div>
          }
        />
        <Route path="/about" element={<AboutUsPage isLoggedIn={isLoggedIn} />} />
        <Route path="/contact" element={<ContactUsForm isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
