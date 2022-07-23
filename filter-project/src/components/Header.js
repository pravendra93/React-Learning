import React from "react";
import { Link } from "react-router-dom"
import Logo  from "../assets/img/logo.svg"
import { useSelector } from "react-redux";

const Header = ({cartItems, onRemoveCartItems}) => {
    const { carts } = useSelector((store) => {
        return {
          carts: store.product.carts
        }
    })

  const cartOpen = () => {
    if(!carts.length){
      return;
    }
    const element = document.getElementById("cart");
    element.classList.toggle("showCart");
  }

    let price = 0;
    console.log("carts => ", carts)
    price = carts.reduce((init, item) => {
        return init + item.price
    },0)

    const displayCartItems = () => {
        return carts.map((cart) => {
          return <div className="cart-item d-flex justify-content-between text-capitalize my-3" key={cart.id}>
          <img src={require(`../assets/img/${cart.image}`)} className="img-fluid" id="item-img" alt={cart.title} width="80" />
          <div className="item-text">

            <p id="cart-item-title" className="font-weight-bold mb-0">{cart.title}</p>
            <p id="cart-item-price" className="mb-0">{cart.price}</p>
          </div>
          <a href="#d" id='cart-item-remove' className="cart-item-remove" onClick={()=> {
            onRemoveCartItems(cart.id)
          }}>
            <i className="fas fa-trash"></i>
          </a>
        </div>
        })
    }

    return(
      <header>
        <nav className="navbar navbar-expand-lg px-4">
          <Link className="navbar-brand" to="/"><img src={Logo} alt="logo-image" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNav">
            <span className="toggler-icon"><i className="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="myNav">
            <ul className="navbar-nav mx-auto text-capitalize">
              <li className="nav-item active">
                <a className="nav-link" href="#home">home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#about">about</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#store">store</a>
              </li>
            </ul>
            <div className="nav-info-items d-none d-lg-flex position-relative ">
              <div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
                <span className="info-icon mx-lg-3"><i className="fas fa-phone"></i></span>
                <p className="mb-0">+ 123 456 789</p>
              </div>
              <div id="cart-info" className="nav-info align-items-center cart-info d-flex justify-content-between ms-lg-5" onClick={cartOpen}>
                <span className="cart-info__icon mr-lg-3"><i className="fas fa-shopping-cart"></i></span>
                <p className="mb-0 text-capitalize"><span id="item-count">{carts.length} </span> {carts.length && carts.length > 1 ? "items" : "item"} - $<span className="item-total">{price}</span></p>
              </div>

              <div id="cart" className="cart position-absolute">
                
                  {displayCartItems()}
                <div className="cart-total-container d-flex justify-content-around text-capitalize mt-5">
                  <h5>total</h5>
                  <h5> $ <strong id="cart-total" className="font-weight-bold">{price}</strong> </h5>
                </div>
    
                <div className="cart-buttons-container mt-3 d-flex justify-content-between">
                  <a href="#d" id="clear-cart" className="btn btn-outline-secondary btn-black text-uppercase">clear cart</a>
                  <a href="#d" className="btn btn-outline-secondary text-uppercase btn-pink">checkout</a>
                </div>
              </div>

            </div>
          </div>
        </nav>
        <div className="container-fluid" id="home">
          <div className="row max-height justify-content-center align-items-center">
            <div className="col-10 mx-auto banner text-center">
              <h1 className="text-capitalize">welcome to <strong className="banner-title ">grandma's</strong></h1>
              <a href="#store" className="btn banner-link text-uppercase my-2">explore</a>
    
            </div>
          </div>
        </div>
      </header>
    )
}


export default Header;