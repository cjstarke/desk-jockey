import React from 'react'
import { tracks } from '../services/constants'
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
  // componentDidMount() {
  //   this.player.src = tracks.microwave
  //   this.player2.src = tracks.stapler
  //   this.player3.src = tracks.pentap
  // }
  onPlay = () => {
    let counter = 0
    this.setState({ player: "playing", looping: true })
   this.interval = setInterval(() => {
      
      this.setState((prevState) => ({
        player: `${prevState}${counter}`
      }))
      counter ++
    }, 16*500);
  }
  onStop = () => {
    this.setState({ player: "stopped", looping: false })
    clearInterval(this.interval)
  }

    // if (this.state.player !== prevState.player) {
    //     if (this.state.player === "stopped") {
    //     this.player.pause();
    //     this.player.currentTime = 0;
    //     this.setState({ selectedTrack: null });
    //   } else if (
    //     this.state.player === "playing" &&
    //     prevState.player === "stopped"
    //   ) {
    //     this.player.play();
    //   }
    // }



  render() {
    return (
      <>
        <div>BeatMaker</div>
        {/* <ul>
          <li
            onClick={() => this.setState({selectedTrack: "microwave"})}
          >microwave</li>
           <li
            onClick={() => this.setState({selectedTrack: "stapler"})}
          >stapler</li>
        </ul> */}
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
        {/* <audio ref={ref => this.player = ref} />
        <audio ref={ref => this.player2 = ref} />
        <audio ref={ref => this.player3 = ref} /> */}
        <TrackRow
          track="microwave"
          player={this.state.player}/>
        <TrackRow
          track="stapler"
          player={this.state.player}/>
      </>

    )
  }
}

export default BeatMaker