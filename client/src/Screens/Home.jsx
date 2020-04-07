import React, { Component } from 'react';
import BeatMaker from '../components/BeatMaker'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div>Home</div>
        <BeatMaker />
      </>
      
    )
  }
}

export default Home