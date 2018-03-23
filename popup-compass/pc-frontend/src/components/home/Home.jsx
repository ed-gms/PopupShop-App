import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    let styles = {
      height: 805
    };
    return (
      <div>
        <div id="intro" className="view" style={styles}>
          <div className="full-bg-img">
            <div className="mask rgba-black-strong">
              <div className="container-fluid d-flex align-items-center justify-content-center h-100">
                <div className="row d-flex justify-content-center text-center">
                  <div className="col-md-10">
                    <h2 className="display-3 font-bold white-text mb-2">Pop-up Compass</h2>
                    <hr className="hr-light" />
                    <h4 className="white-text my-4">Leading you on your next pop-up shop experience.</h4>
                    <Link to="/popupshops" className="nav-link">
                      <button type="button" className="btn btn-outline-white">Browse Shops
                        <i className="fa fa-search ml-2"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main>
          <div className="container mt-5">
            <section id="best-features" className="text-center">
              <h2 className="mb-5 font-weight-bold">Featured Shops</h2>
              <div className="row d-flex justify-content-center mb-4">
                <div className="col-md-8">
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptate hic provident nulla repellat
                      facere esse molestiae ipsa labore porro minima quam quaerat rem, natus repudiandae debitis est
                sit pariatur.</p>
                </div>
              </div>

              <div className="row">

                <div className="col-lg-4 col-md-12 mb-r">
                  <div className="card card-cascade wider">
                    <div className="view overlay hm-white-slight">
                      <img src="https://images.unsplash.com/photo-1454873019514-eae2f086587a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe16c66c5866bcbace81e594ea8eac5e&auto=format&fit=crop&w=800&q=60" className="img-fluid" alt="" />
                      <a>
                        <div className="mask waves-effect waves-light"></div>
                      </a>
                    </div>
                    <div className="card-body text-center no-padding">
                      <a href="" className="text-muted">
                        <h5>Homemade Soaps</h5>
                      </a>
                      <h4 className="card-title"><strong><a href="">Sophie's Soap Shop</a></strong></h4>
                      <p className="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                    </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 mb-r">
                  <div className="card card-cascade wider">
                    <div className="view overlay hm-white-slight">
                      <img src="https://images.unsplash.com/photo-1454641350786-bc31a1997ba9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73de4aac14eb825eb7702032ca7679dc&auto=format&fit=crop&w=800&q=60" className="img-fluid" alt="" />
                      <a>
                        <div className="mask waves-effect waves-light"></div>
                      </a>
                    </div>
                    <div className="card-body text-center no-padding">
                      <a href="" className="text-muted">
                        <h5>Baked Goods</h5>
                      </a>
                      <h4 className="card-title"><strong><a href="">Poppy's Pastries</a></strong></h4>
                      <p className="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,        adipisci velit, sed quia non numquam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 mb-r">
                  <div className="card card-cascade wider">
                    <div className="view overlay hm-white-slight">
                      <img src="https://images.unsplash.com/photo-1507310951869-fe0941df4dbd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4993055d12d8c2f037a29d86e5e029be&auto=format&fit=crop&w=800&q=60" className="img-fluid" alt="" />
                      <a>
                        <div className="mask waves-effect waves-light"></div>
                      </a>
                    </div>
                    <div className="card-body text-center no-padding">
                      <a href="" className="text-muted">
                        <h5>Craft Beer</h5>
                      </a>
                      <h4 className="card-title"><strong><a href="">Carter's Craft Beer</a></strong></h4>
                      <p className="card-text">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,        adipisci velit, sed quia non numquam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="my-5" />

            <section id="newsletter" className="text-center grey lighten-5">
              <div className="row d-flex justify-content-center pt-5 pb-5">
                <div className="col-md-10">
                  <h2 className="mb-5 font-weight-bold">Subscribe To Our Newsletter</h2>
                    <p className="">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quianon numquam.
                    </p>
                  <form>
                    <div className="md-form">
                      <input type="text" id="form3" className="form-control" />
                      <label>Your email</label>
                      <button className="btn btn-primary waves-light">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            <hr className="my-5" />
            
          </div>
        </main>
      </div>
    );
  }
}

export default Home;

