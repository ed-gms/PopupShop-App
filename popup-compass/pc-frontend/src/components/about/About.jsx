import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="aboutContent text-center">
        <h2 className="mb-3 mt-5">About Us</h2>
        <div className="container-fluid">

          <div className="row d-flex justify-content-center mb-4">
           
            <div className="col-md-12">
              <p className="mb-5 text-justify">
                Pop-up Compass creates a community for consumers and retailers of pop-up shops. As a consumer, you
                can find up-to- date information on pop-up shops nearby, details on their products, and upcoming
                events. As a retailer, you can create your own profile, post details on your pop-up shop locations and
                events, as well as advertise your products.
              </p>
            </div>

            <div className="col-md-10">
              <div className="view overlay z-depth-1-half">
                <img className="d-block w-100 img-fluid" src="https://images.unsplash.com/photo-1457221675774-24790d99071a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc04bd0d24d9a0afca293efa3a42d2b6&auto=format&fit=crop&w=2809&q=80" alt="shopping" />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    );
  }
}

export default About;