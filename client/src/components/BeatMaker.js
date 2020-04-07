import React from 'react'
import { tracks } from '../services/constants'

class BeatMaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTrack: null,
      player: "stopped"
    }
  }
  componentDidMount() {
    this.player.src = tracks.microwave
    this.player2.src = tracks.stapler
    this.player3.src = tracks.pentap
  }
  onPlay = () => {
    this.setState({ player: "playing" })
    this.player.play()
    this.player2.play()
    this.player3.play()
  }
  onStop = () => {
    this.setState({ player: "stopped" })
    this.player.pause()
    this.player.currentTime = 0
    this.player2.pause()
    this.player2.currentTime = 0
    this.player3.pause()
    this.player3.currentTime = 0
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
        <ul>
          <li
            onClick={() => this.setState({selectedTrack: "microwave"})}
          >microwave</li>
           <li
            onClick={() => this.setState({selectedTrack: "stapler"})}
          >stapler</li>
        </ul>
        <div>
          {this.state.player === "stopped" && (
            <button onClick={this.onPlay} >
              Play
            </button>
          )}
          {this.state.player === "playing" && (
            <button onClick={this.onStop}>
              Stop
            </button>
          )}

        </div>
        <audio ref={ref => this.player = ref} />
        <audio ref={ref => this.player2 = ref} />
        <audio ref={ref => this.player3 = ref} />
      </>

    )
  }
}

export default BeatMaker