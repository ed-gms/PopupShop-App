import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ShopList extends Component {
  
  render() {
    console.log(this.props.shops)
      let shopsJSX = this.props.shops.map((shop, i) => {
        return (
          <li key={i}>
            {/* <img src={shop.image_url} alt="" className="circle" /> */}
            <span className="title">{shop.name}</span>
            <p>{shop.location.display_address}</p>
          </li>
        )
      })

    return (
      <div>
        <h1>Shop List page</h1>
        <ul>
          {shopsJSX}
        </ul>
        <Link to="/shopdetails"> <span>shop details</span> </Link>

      </div>
    );
  }
}

export default ShopList;