import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../search/SearchBar.jsx";

const pageStyle = {
  marginTop: 80,
  alignItems: "center"
};
const titleText = {
  color: "black",
  fontWeight: "bold",
  marginTop: 5
};
const url =
  "https://images.unsplash.com/photo-1519358349916-caa235110a80?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2e62d1e0ffcbeef732f61f4904c28864&auto=format&fit=crop&w=800&q=60";

class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch = userInput => {
    this.setState({
      search: userInput
    });
  };

  render() {
    let filteredShops = this.props.shops.filter(shop => {
      return (
        shop.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    let newShops = filteredShops.map(shop => {
      return shop;
    });
    let filteredJSX = newShops.map((shop, i) => {
      let shopID = shop.id || shop._id;
      return (
        <div key={i} className="col-md-4 mb-4">
          <div className="view overlay z-depth-1-half">
            <img
              src={!shop.image_url ? url : shop.image_url}
              className="shops-imgs"
              alt=""
            />
            <Link to={`/shopdetails/${shopID}`}>
              <div className="mask rgba-white-slight" />
            </Link>
          </div>
          <Link to={`/shopdetails/${shopID}`}>
            <h5 className="title" style={titleText}>
              {shop.name}
            </h5>
          </Link>
          <p>
            {shop.location.address1}
            <br />
            {shop.location.city + ", "}
            {shop.location.state}
          </p>
        </div>
      );
    });
    return (
      <div style={pageStyle}>
        <div className="container">
          <SearchBar
            shops={this.props.shops}
            search={this.state.search}
            updateSearch={this.updateSearch}
          />
          <div className="row">{filteredJSX}</div>
        </div>
      </div>
    );
  }
}

export default ShopList;
