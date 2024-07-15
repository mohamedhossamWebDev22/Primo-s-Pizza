import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import { useLayoutEffect } from 'react'
import Animator from "../Components/Animator";


const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar />

      <Animator>
      <h1 className="aboutT">
        Primo's is an American pizza concept based in Cairo. Known for its
        famously extra cheesy pizzas, Primo's uses only the highest quality
        ingredients to create out-of-this-world pizza combinations that leave
        customers craving more. From the moment you step into Primo's, you're
        greeted with the irresistible aroma of perfectly baked pizzas, each one
        generously topped with layers of gooey, melted cheese. Whether you're a
        fan of classic pepperoni or adventurous gourmet toppings, Primo's offers
        a diverse menu that caters to every pizza lover's taste. Their
        commitment to quality and innovation has earned them the reputation of
        being Cairo's favorite pizza destination. Every bite of a Primo's pizza
        is a testament to their dedication to excellence, ensuring that every
        pizza is not only delicious but also a memorable experience. With a cozy
        ambiance and friendly staff, Primo's provides the perfect setting for
        families, friends, and pizza enthusiasts to come together and enjoy the
        ultimate cheesy delight. So, if you're in Cairo and looking for a pizza
        experience like no other, Primo's is the place to be. Come and indulge
        in the tremendous cheesy goodness that has made Primo's a beloved
        favorite among pizza aficionados.
      </h1>

      <Footer/>
      </Animator>
    </>
  );
};

export default About;
