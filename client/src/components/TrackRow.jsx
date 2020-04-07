import React from 'react'
import { tracks } from '../services/constants'

class TrackRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    const row = Array.from(Array(16)).map((item, index) => {
      return (
        <div>{index + 1}</div>
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