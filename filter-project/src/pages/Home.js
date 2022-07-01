import React from "react";
import AboutData from "../components/AboutData";
import Store from "../components/Store";
import Header from "../components/Header";
const Home  = () => {
    const dataItems = [
        {
          image: "sweets-1.jpeg",
          title: "sweet item",
          type: "sweets",
          price: 5,
        },
        {
          image: "cupcake-1.jpeg",
          title: "cupcake item",
          type: "cupcakes",
          price: 5,
        },
        {
          image: "cake-1.jpeg",
          title: "cake item",
          type: "cakes",
          price: 5,
        },
        {
          image: "doughnut-1.jpeg",
          title: "dougnut item",
          type: "doughnuts",
          price: 5,
        },
        {
          image: "sweets-2.jpeg",
          title: "sweet item",
          type: "sweets",
          price: 10,
        },
        {
          image: "cupcake-2.jpeg",
          title: "cupcake item",
          type: "cupcakes",
          price: 10,
        },
        {
          image: "cake-2.jpeg",
          title: "cake item",
          type: "cakes",
          price: 10,
        },
        {
          image: "doughnut-2.jpeg",
          title: "dougnut item",
          type: "doughnuts",
          price: 10,
        },
        {
          image: "sweets-3.jpeg",
          title: "sweet item",
          type: "sweets",
          price: 15,
        },
        {
          image: "cupcake-3.jpeg",
          title: "cupcake item",
          type: "cupcakes",
          price: 15,
        },
        {
          image: "cake-3.jpeg",
          title: "cake item",
          type: "cakes",
          price: 15,
        },
        {
          image: "doughnut-3.jpeg",
          title: "doughnut item",
          type: "doughnuts",
          price: 15,
        }
      ];
    return <>
    <Header />
    <AboutData />
    <Store dataItems={dataItems} />
    </>
};
export default Home;