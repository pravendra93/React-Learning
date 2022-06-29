import React from "react";
import { Link } from "react-router-dom"
import Logo  from "../assets/img/logo.svg"

const Header = () => {
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
                <Link className="nav-link" to="#">home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="#">about</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">store</Link>
              </li>
            </ul>
            <div className="nav-info-items d-none d-lg-flex ">
              <div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
                <span className="info-icon mx-lg-3"><i className="fas fa-phone"></i></span>
                <p className="mb-0">+ 123 456 789</p>
              </div>
              <div id="cart-info" className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5">
                <span className="cart-info__icon mr-lg-3"><i className="fas fa-shopping-cart"></i></span>
                <p className="mb-0 text-capitalize"><span id="item-count">2 </span> items - $<span className="item-total">10.49</span></p>
              </div>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row max-height justify-content-center align-items-center">
            <div className="col-10 mx-auto banner text-center">
              <h1 className="text-capitalize">welcome to <strong className="banner-title ">grandma's</strong></h1>
              <a href="#store" className="btn banner-link text-uppercase my-2">explore</a>
    
            </div>
            {/* <div id="cart" className="cart">
              <div className="cart-item d-flex justify-content-between text-capitalize my-3">
                <img src="img/z-cake-2.jpeg" className="img-fluid rounded-circle" id="item-img" alt="" />
                <div className="item-text">
    
                  <p id="cart-item-title" className="font-weight-bold mb-0">cart item</p>
                  <p id="cart-item-price" className="mb-0">10.99</p>
                </div>
                <a href="#" id='cart-item-remove' className="cart-item-remove">
                  <i className="fas fa-trash"></i>
                </a>
              </div>
              <div className="cart-item d-flex justify-content-between text-capitalize my-3">
                <img src="img/z-sweets-3.jpeg" className="img-fluid rounded-circle" id="item-img" alt="" />
                <div className="cart-item-text">
    
                  <p id="cart-item-title" className="font-weight-bold mb-0">cart item</p>
                  <p id="cart-item-price" className="mb-0">10.99</p>
                </div>
                <a href="#" id='cart-item-remove' className="cart-item-remove">
                  <i className="fas fa-trash"></i>
                </a>
              </div>
              <div className="cart-total-container d-flex justify-content-around text-capitalize mt-5">
                <h5>total</h5>
                <h5> $ <strong id="cart-total" className="font-weight-bold">10.00</strong> </h5>
              </div>
  
              <div className="cart-buttons-container mt-3 d-flex justify-content-between">
                <a href="#" id="clear-cart" className="btn btn-outline-secondary btn-black text-uppercase">clear cart</a>
                <a href="#" className="btn btn-outline-secondary text-uppercase btn-pink">checkout</a>
              </div>
            </div> */}
          </div>
        </div>
      </header>
    )
}


export default Header;