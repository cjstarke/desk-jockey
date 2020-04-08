import React from 'react'
import { tracks } from '../services/constants'

class TrackNode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nodeOn: true
    }
  }


  render() {
    return this.state.nodeOn ? <button>yes</button> : <button>no</button>
  }
}  

export default TrackNode