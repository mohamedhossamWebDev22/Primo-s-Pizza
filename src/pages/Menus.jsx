import React from "react";

import { useLayoutEffect } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import menu1 from "../assets/menu/1.jpg";
import menu2 from "../assets/menu/2.jpg";
import menu3 from "../assets/menu/3.jpg";
import menu4 from "../assets/menu/4.jpg";
import Animator from "../Components/Animator";

const Menus = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar />

      <Animator>
        <div className="MenuPage">
          <img src={menu1} alt="Menu Page" />
          <img src={menu2} alt="Menu Page" />
          <img src={menu3} alt="Menu Page" />
          <img src={menu4} alt="Menu Page" />
        </div>

        <Footer />
      </Animator>
    </>
  );
};

export default Menus;
