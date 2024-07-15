import React from "react";

import Logo from "../assets/logoTransparent.png";
import Icon from "./icon";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="Info">
          <img src={Logo} alt="" />
          <div className="txt">
            <div>
              <a href="https://www.instagram.com/primos.pizza?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <Icon icon="fa-brands fa-instagram" />
              </a>
              <a href="https://www.facebook.com/primospizzame/?locale=ar_AR">
                <Icon icon="fa-brands fa-facebook" />
              </a>
              <a href="tel:19414">
                <Icon icon="fa-solid fa-phone" />
              </a>
            </div>
            <hr />
            <div className="t">
              Your Favorite Cheesy American Pizza
            </div>
          </div>
        </div>
        <h1>Made By : محمد حسام</h1>
      </footer>
    </>
  );
};

export default Footer;
