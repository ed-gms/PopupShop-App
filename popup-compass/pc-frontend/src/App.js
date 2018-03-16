import React, { Component } from 'react';
import './App.css';
import Nav from './components/navbar/Nav.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import ShopList from './components/shop-list/ShopList.jsx'
import Shop from './components/shop-details/Shop.jsx'
import Join from './components/new-shop/Join.jsx'
import CreateProfile from './components/profile/CreateProfile.jsx'
import axios from 'axios'
import {
  Switch,
  Route,
} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      shops: [
        
      ]
    }
  }

  componentWillMount() {
    axios.get(`http://localhost:8080/shops`)
      .then((response) => {
        this.setState({
          shops: response.data,

        })
      })
  }

  render() {
    // console.log(this.state.shops)
    return (
      <div className="App">
        <header>
          <nav>
            <Nav />
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/popupshops' render={() => {
            return <ShopList shops={this.state.shops} />
          }}
          />
          <Route path='/shopdetails' component={Shop} />
          <Route path='/join' component={Join} />
          <Route path='/createprofile' component={CreateProfile} />
        </Switch>
      </div>
    );
  }
}

export default App;
