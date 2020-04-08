import React from 'react'
import { tracks } from '../services/constants'

class TrackNode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nodeOn: true
    }
  }
  toggleNode = () => {
    this.setState((prevState) => ({
        nodeOn: !prevState.nodeOn 
    }))
  }
  componentDidMount = () => {
    this.setSound()
  }
  componentDidUpdate = (prevProps) => {
    if (this.props.player !== prevProps.player) {
      console.log('changed');
    }
  }
  setSound = () => {
    let sample = this.props.track
    this.sound.src = tracks[sample]
  }
  onPlay = () => {
    setTimeout(() => {
      this.sound.play()
    }, (this.props.place*500))

  }
    


  render() {

    return (
      <>
        <button onClick={this.toggleNode}>{this.props.place}</button>
        <audio ref={ref => this.sound = ref} />
      </>
    )
  }
}  

export default TrackNode