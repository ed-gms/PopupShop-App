import React, { Component } from 'react';

class Join extends Component {
  render() {
    let styles = {
      marginTop: 85
    }
    return (

      <section className="text-center" style={styles}>
       
        <div className="container-fluid pl-5 pr-5">

          <div className="row d-flex justify-content-center mb-4">
            
            <div className="col-md-9">
              <div className="view overlay z-depth-1-half">
                <img className="d-block w-100 img-fluid" src="images/retail_interior.jpg" alt="shopping" />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>

            <div className="col-md-12 mb-5">
              <h2 className="mb-3 mt-3">Join our community of local retailers like you!</h2>
              <p className="text-justify">
                Pop-up Compass creates a community for consumers and retailers of pop-up shops. As a consumer, you
                can find up-to- date information on pop-up shops nearby, details on their products, and upcoming
                events. As a retailer, you can create your own profile, post details on your pop-up shop locations and
                events, as well as advertise your products.
              </p>
              <button className="btn btn-primary waves-light">Join</button>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Join;