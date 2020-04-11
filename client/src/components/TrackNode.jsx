import React from 'react'
import { tracks } from '../services/constants'

class TrackNode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.timer = null
  }

  componentDidMount = () => {
    this.setSound()
  
  }
  componentDidUpdate = (prevProps) => {
    if (this.props.player !== prevProps.player) {
      if (this.props.toggle) {
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
    this.props.toggle === true ? nodewords = "on" : nodewords = this.props.place

    return (
      <>
        <button
          onClick={(e) => {
            this.props.handleNodeChange(e)
          }}
          value={this.props.place-1}
          name= {this.props.track}
        >{nodewords}</button>
        <audio ref={ref => this.sound = ref} />
      </>
    )
  }
}  

export default TrackNode