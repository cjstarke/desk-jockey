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
        <BeatMaker
          navbar={this.props.navbar}
          currentUser={this.props.currentUser}/>
      </>
      
    )
  }
}

export default Home