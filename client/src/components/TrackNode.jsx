import React from 'react'
import { tracks } from '../services/constants'

class TrackNode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nodeOn: true,
    }
    this.timer = null
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
      if (this.state.nodeOn) {
        if (this.props.player === "stopped") {
          this.onStop()
        }
        else {
          this.onPlay()
        }
      }
    }
  }
  setSound = () => {
    let sample = this.props.track
    this.sound.src = tracks[sample]
  }
  onPlay = () => {
    this.timer = setTimeout(() => {
      this.sound.play()
    }, (this.props.place*500))
  }
  onStop = () => {
    clearTimeout(this.timer)
    this.sound.pause()
    this.sound.currentTime=0
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