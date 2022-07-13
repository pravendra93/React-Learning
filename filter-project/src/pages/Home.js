import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import AboutData from "../components/AboutData";
import Store from "../components/Store";
import Header from "../components/Header";

import {
setProucts
} from "../store/actions/products";
import {
  dataItems
} from "../data"
const Home = () => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    // setItems(dataItems);
    dispatch(setProucts(dataItems))
  }, []);

  const filterItems = (e) => {
    // e.preventDefault();
    // const filter = e.target.dataset.filter;
    // const filterItems =
    //   filter === "all"
    //     ? dataItems
    //     : dataItems.filter((item) => item.type === filter);
    // setItems(filterItems);
  };

  const addToCart = (item) => {
      cartItems.push(item)
      setCartItems([...cartItems])
  }

  const removeCartItems = (id) => {
      const items = cartItems.filter((item) => item.id !== id);
      setCartItems(items)
  }
  return (
    <>
      <Header cartItems={cartItems} onRemoveCartItems={removeCartItems}/>
      <AboutData />
      <Store onFilterItems={filterItems} addToCart={addToCart} />
    </>
  );
};
export default Home;
