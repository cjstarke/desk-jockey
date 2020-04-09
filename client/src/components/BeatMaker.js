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
      microwave: Array(16).fill(false),
      stapler: Array(16).fill(false),
      pentap: Array(16).fill(false),
      scissors: Array(16).fill(false),
      spacebar: Array(16).fill(false),
      mouseclick: Array(16).fill(false),
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
  OnNodeChange = (e) => {
    let  track = e.target.name
    let index = e.target.value
    let stateTrack = this.state[track]
    let stateObj = {}
    stateTrack[index] = !stateTrack[index]
    stateObj[track] = [...stateTrack]
    console.log(stateObj)
    this.setState({stateObj })
    

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
          array={this.state.microwave}
          handleNodeChange={this.OnNodeChange}/>
        <TrackRow
          track="stapler"
          player={this.state.player}
          handleNodeChange={this.OnNodeChange}
          array={this.state.stapler}/>
        <TrackRow
          track="pentap"
          array={this.state.pentap}
          handleNodeChange={this.OnNodeChange}
          player={this.state.player} />
        <TrackRow
          track="scissors"
          array={this.state.scissors}
          handleNodeChange={this.OnNodeChange}
          player={this.state.player} />
        <TrackRow
          track="spacebar"
          array={this.state.spacebar}
          handleNodeChange={this.OnNodeChange}
          player={this.state.player} />
        <TrackRow
          track="mouseclick"
          array={this.state.mouseclick}
          handleNodeChange={this.OnNodeChange}
          player={this.state.player} />
        
        
      </>

    )
  }
}

export default BeatMaker