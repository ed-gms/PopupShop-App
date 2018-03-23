import React, { Component } from 'react';
import Map from '../map/Map.jsx'

const shopPgStyle = {
  marginTop: 100,
  alignItems: 'center',
  marginLeft: 30,
  marginRight: 30,
}
// const shopStyle = {
//   padding: 20,

// }
const titleText = {
  fontWeight: 'bold',
  marginBottom: 30,
}
// const mapSection = {
// //   marginTop: 20,
// // }

const url = "https://images.unsplash.com/photo-1519358349916-caa235110a80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2e62d1e0ffcbeef732f61f4904c28864&auto=format&fit=crop&w=800&q=60"

class Shop extends Component {
  render() {
    const id = this.props.match.params.shopId
    const shops = this.props.shops

    let shopJSX = shops.map((shop, i) => {
      let shopID = shop.id || shop._id
      if (shopID === id) {
        return (
          <div key={i} className="row text-dark d-flex justify-content-center">
            <div className="col-md-6 text-justify pt-5">
              <h4 style={titleText}>{shop.name}</h4>
              <p>{shop.description}</p>
              <p>{shop.dates}</p>
              <p>
                {shop.location.address1}
                <br/>
                {shop.location.city}, {shop.location.state}
              </p>
            </div>
            
            <div className="col-md-6 pt-5">
              <img
                src={!(shop.image_url) ? url : shop.image_url}
                className="img-fluid z-depth-1-half"
                alt=""
              />
            </div>

            <div className="col-md-10 pt-5 pb-5">
              <Map coordinates={shop.coordinates} />
            </div>

          </div>
        )
      }
    })
    return (
      <div style={shopPgStyle}>
        <div className="container-fluid bg-#eeeeee grey lighten-3 z-depth-1-half">
          {shopJSX}
        </div>
      </div>
    );
  }
}

export default Shop;