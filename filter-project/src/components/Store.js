import React from "react";

const Store = () => {

    return (
        <section id="store" className="store py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-sm-6 text-center">
              <h1 className="text-capitalize">our <strong className="banner-title ">store</strong></h1>
            </div>
          </div>
          <div className="row">
            <div className=" col-lg-8 mx-auto d-flex justify-content-around my-2 sortBtn flex-wrap">
              <a href="#" className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="all"> all</a>
              <a href="#" className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="cakes">cakes</a>
              <a href="#" className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="cupcakes">cupcakes</a>
              <a href="#" className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="sweets">sweets</a>
              <a href="#" className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="doughnuts">doughnuts</a>
            </div>
          </div>
          <div className="row">
    
            <div className="col-10 mx-auto col-md-6">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-prepend ">
                    <span className="input-group-text search-box" id="search-icon"><i className="fas fa-search"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder='item....' id="search-item" />
                </div>
    
              </form>
            </div>
          </div>
          <div className="row" id="store-items">
            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-item="sweets">
              <div className="card ">
                <div className="img-container">
                  <img src="img/sweets-1.jpeg" className="card-img-top store-img" alt="" />
                  <span className="store-item-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">sweet item</h5>
                    <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">5</strong></h5>
    
                  </div>
                </div>
    
    
              </div>
              
            </div>

            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item cupcakes" data-item="cupcakes">
              <div className="card ">
                <div className="img-container">
                  <img src="img/cupcake-1.jpeg" className="card-img-top store-img" alt="" />
                  <span className="store-item-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">cupcake item</h5>
                    <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">5</strong></h5>
    
                  </div>
                </div>
    
    
              </div>
              
            </div>

            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item cakes" data-item="cakes">
              <div className="card ">
                <div className="img-container">
                  <img src="img/cake-1.jpeg" className="card-img-top store-img" alt=""/>
                  <span className="store-item-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">cake item</h5>
                    <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">5</strong></h5>
    
                  </div>
                </div>
    
    
              </div>
              
            </div>

            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item doughnuts" data-item="dougnuts">
              <div className="card ">
                <div className="img-container">
                  <img src="img/doughnut-1.jpeg" className="card-img-top store-img" alt=""/>
                  <span className="store-item-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">dougnut item</h5>
                    <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">5</strong></h5>
    
                  </div>
                </div>
    
    
              </div>
              
            </div>

            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-item="sweets">
              <div className="card ">
                <div className="img-container">
                  <img src="img/sweets-2.jpeg" className="card-img-top store-img" alt="" />
                  <span className="store-item-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">sweet item</h5>
                    <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">10</strong></h5>
    
                  </div>
                </div>
    
    
              </div>

            </div>

            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item cupcakes" data-item="cupcakes">
              <div className="card ">
                <div className="img-container">
                  <img src="img/cupcake-2.jpeg" className="card-img-top store-img" alt=""/>
                  <span className="store-item-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">cupcake item</h5>
                    <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">10</strong></h5>
    
                  </div>
                </div>
    
    
              </div>

            </div>

            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item cakes" data-item="cakes">
              <div className="card ">
                <div className="img-container">
                  <img src="img/cake-2.jpeg" className="card-img-top store-img" alt=""/>
                  <span className="store-item-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">cake item</h5>
                    <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">10</strong></h5>
    
                  </div>
                </div>
    
    
              </div>

            </div>

            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item doughnuts" data-item="dougnuts">
              <div className="card ">
                <div className="img-container">
                  <img src="img/doughnut-2.jpeg" className="card-img-top store-img" alt=""/>
                  <span className="store-item-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">dougnut item</h5>
                    <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">10</strong></h5>
    
                  </div>
                </div>
    
    
              </div>
 
            </div>

            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-item="sweets">
              <div className="card ">
                <div className="img-container">
                  <img src="img/sweets-3.jpeg" className="card-img-top store-img" alt=""/>
                  <span className="store-item-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">sweet item</h5>
                    <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">15</strong></h5>
    
                  </div>
                </div>
    
    
              </div>
    
            </div>

            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item cupcakes" data-item="cupcakes">
              <div className="card ">
                <div className="img-container">
                  <img src="img/cupcake-3.jpeg" className="card-img-top store-img" alt=""/>
                  <span className="store-item-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">cupcake item</h5>
                    <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">15</strong></h5>
    
                  </div>
                </div>
    
    
              </div>

            </div>

            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item cakes" data-item="cakes">
              <div className="card ">
                <div className="img-container">
                  <img src="img/cake-3.jpeg" className="card-img-top store-img" alt=""/>
                  <span className="store-item-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">cake item</h5>
                    <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">15</strong></h5>
    
                  </div>
                </div>
    
    
              </div>

            </div>

            <div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item doughnuts" data-item="dougnuts">
              <div className="card ">
                <div className="img-container">
                  <img src="img/doughnut-3.jpeg" className="card-img-top store-img" alt=""/>
                  <span className="store-item-icon">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                    <h5 id="store-item-name">dougnut item</h5>
                    <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">15</strong></h5>
    
                  </div>
                </div>
    
    
              </div>

            </div>

    
          </div>
          </div>
      </section>
    )

}

export default Store