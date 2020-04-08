import React from 'react'
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
          key={index}
          track={this.props.track}
          place={index + 1}
          player={this.props.player}
        />
    )
    })
    return (
      <div>
        {this.props.track}
        {row}
      </div>
    )
  }

}

export default TrackRow