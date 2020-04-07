import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from './shared/Header'
import Footer from './shared/Footer'
import Routes from '../routes/Routes'  
class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div>
        <Header />
        <Routes />
        <Footer/>
      </div>
      
    )
  }
}
export default Container