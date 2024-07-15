import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Animator from "../Components/Animator";

const Error = () => {
  return (
    <>
      <NavBar />
      <Animator>
        <h1 className="Error">Error 404</h1>

        <Footer />
      </Animator>
    </>
  );
};

export default Error;
