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
          handleNodeChange={this.props.handleNodeChange}
          track={this.props.track}
          place={index + 1}
          player={this.props.player}
          toggle={this.props.array[index]}
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