import React from 'react'
import TrackRow from './TrackRow'

class BeatMaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTrack: null,
      player: "stopped",
      looping: false,
      microwave: [],
      stapler: [],
      pentap: [],
      scissors: [],
      spacebar: [],
      mouseclick: [] 
    }
    this.interval = null
  }
  componentDidMount = () => {
    this.setRows()
  }
  setRows = () => {
    let falseArray = Array(16)
    falseArray.fill(false)
    this.setState({
      microwave: falseArray,
      stapler: falseArray,
      pentap: falseArray,
      scissors: falseArray,
      spacebar: falseArray,
      mouseclick: falseArray,
    })    
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
          player={this.state.player}
          array={this.state.microwave}/>
        <TrackRow
          track="stapler"
          player={this.state.player}
          array={this.state.stapler}/>
        <TrackRow
          track="pentap"
          array={this.state.pentap}
          player={this.state.player} />
        <TrackRow
          track="scissors"
          array={this.state.scissors}
          player={this.state.player} />
        <TrackRow
          track="spacebar"
          array={this.state.spacebar}
          player={this.state.player} />
        <TrackRow
          track="mouseclick"
          array={this.state.mouseclick}
          player={this.state.player} />
        
        
      </>

    )
  }
}

export default BeatMaker