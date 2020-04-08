import React from 'react'
import { tracks } from '../services/constants'
import TrackNode from './TrackNode';

class TrackRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    const row = Array.from(Array(16)).map((item, index) => {
      return (
        <TrackNode
          track={this.props.track}
          place={index+1}
        />
    )
    })
    return (
      <div>
        {row}
      </div>
    )
  }

}

export default TrackRow