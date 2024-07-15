import Logo from "../assets/logoTransparent.png";

import NavBar from "../Components/NavBar";
import Icon from "../Components/icon";

import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";

import { useLayoutEffect } from "react";

import st1 from "../assets/St1.png";
import st2 from "../assets/st2.png";
import st3 from "../assets/st3.png";
import st4 from "../assets/st4.png";
import st5 from "../assets/st5.png";
import st6 from "../assets/st6.png";
import Animator from "../Components/Animator";

function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar />

      <Animator>
        <div className="content">
          <div className="section1">
            <img className="Sticker lS" src={st1} alt="" />
            <img className="Sticker rS" src={st2} alt="" />
            <img id="Logo" src={Logo} alt="Logo" />
            <p>
              The Best <a>Pizza</a> You Will Eat Ever
            </p>
            <a href="#section2">
              <Icon icon="fa-solid fa-angle-down" />
            </a>
          </div>
          <div className="section2" id="section2">
            <img className="Sticker rS" src={st4} alt="" />
            <img className="Sticker lS" src={st3} alt="" />
            <h1>What Are You Waiting For !?</h1>
            <h2>Go And Order Now !!</h2>
            <a href="tel:19414">
              <button>Order Now</button>
            </a>
          </div>
          <div className="section3">
            <img className="Sticker rS" src={st5} alt="" />
            <img className="Sticker lS" src={st6} alt="" />
            <h1>
              still <u>confused</u> ?
            </h1>
            <p>
              You Can See The <a id="tt">Menu</a>
            </p>
            <NavLink to={"/menu"}>
              <button>See The Menu</button>
            </NavLink>
          </div>
          <div className="section2">
            <img className="Sticker rS" src={st5} alt="" />

            <h1>
              Our <a id="tt">branches</a> are located all around the city.
            </h1>
            <a
              target="_blank"
              href="https://www.elmenus.com/cairo/primos-pizza-p5gz/dokki-xplan/branches"
            >
              <button>Take A Look</button>
            </a>
          </div>
        </div>

        <Footer />
      </Animator>
    </>
  );
}

export default Home;
