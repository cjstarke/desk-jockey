import React from 'react'
import { tracks } from '../services/constants'

class TrackNode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nodeOn: false,
    }
    this.timer = null
  }
  toggleNode = () => {
    this.setState((prevState) => ({
        nodeOn: !prevState.nodeOn 
    }))
  }
  componentDidMount = () => {
    this.setNode()
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
    this.sound.load()
  }
  setNode = () => {
    this.setState({ nodeOn : this.props.toggle})
  }
  
  onPlay = () => {
    this.timer = setTimeout(() => {
      this.sound.play()
    }, (this.props.place*200))
  }
  onStop = () => {
    clearTimeout(this.timer)
    this.sound.pause()
    this.sound.currentTime=0
  }

  render() {
    let nodewords 
    this.state.nodeOn ? nodewords = "on" : nodewords = this.props.place

    return (
      <>
        <button onClick={this.toggleNode}>{nodewords}</button>
        <audio ref={ref => this.sound = ref} />
      </>
    )
  }
}  

export default TrackNode