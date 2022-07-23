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
import { SET_PRODUCTS, ADD_TO_CART } from "../store/constants"
const Home = () => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    // setItems(dataItems);
    dispatch(setProucts(dataItems))
  }, []);

  const filterItems = (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    const filterItems =
      filter === "all"
        ? dataItems
        : dataItems.filter((item) => item.type === filter);
    // setItems(filterItems);
    dispatch({
      type: SET_PRODUCTS,
      payload: filterItems
    })
  };

  const addToCart = (item) => {
    dispatch({
      type:ADD_TO_CART,
      payload: item
    })
      // cartItems.push(item)
      // setCartItems([...cartItems])
  }

  const removeCartItems = (id) => {
      const items = cartItems.filter((item) => item.id !== id);
      setCartItems(items)
  }

  const filterByKeyWords = (filter) => {
    const filterItems =
      filter === "all"
        ? dataItems
        : dataItems.filter((item) => item.type.includes(filter));
    // setItems(filterItems);
    dispatch({
      type: SET_PRODUCTS,
      payload: filterItems
    })
  };

  return (
    <>
      <Header cartItems={cartItems} onRemoveCartItems={removeCartItems}/>
      <AboutData />
      <Store onFilterItems={filterItems} addToCart={addToCart}  onSearchItems= {filterByKeyWords} />
    </>
  );
};
export default Home;
