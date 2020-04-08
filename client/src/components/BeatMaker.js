import React from 'react'
import TrackRow from './TrackRow'

class BeatMaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTrack: null,
      player: "stopped",
      looping: false
    }
    this.interval = null
  }

  onPlay = () => {
    let counter = 0
    this.setState({ player: "playing", looping: true })
   this.interval = setInterval(() => {
      
      this.setState((prevState) => ({
        player: `${prevState}${counter}`
      }))
      counter ++
    }, 16*200);
  }
  onStop = () => {
    this.setState({ player: "stopped", looping: false })
    clearInterval(this.interval)
  }

  render() {
    return (
      <>
        <div>BeatMaker</div>
        <div>
          {this.state.looping === false && (
            <button onClick={this.onPlay} >
              Play
            </button>
          )}
          {this.state.looping === true && (
            <button onClick={this.onStop}>
              Stop
            </button>
          )}

        </div>
        <TrackRow
          track="microwave"
          player={this.state.player}/>
        <TrackRow
          track="stapler"
          player={this.state.player} />
        <TrackRow
          track="pentap"
          player={this.state.player} />
        <TrackRow
          track="scissors"
          player={this.state.player} />
        <TrackRow
          track="spacebar"
          player={this.state.player} />
        <TrackRow
          track="mouseclick"
          player={this.state.player} />
        
        
      </>

    )
  }
}

export default BeatMaker