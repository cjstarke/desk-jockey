import React from 'react'
import TrackRow from './TrackRow'
import SaveSample from './SaveSample'
import {createSample, updateSample, getUserSamples} from '../services/api-helper'

class BeatMaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userSamples: [],
      selectedTrack: null,
      player: "stopped",
      looping: false,
      microwave: [],
      stapler: [],
      pentap: [],
      scissors: [],
      spacebar: [],
      mouseclick: [],
      sample: ""
    }
    this.interval = null
  }
  componentDidMount = async () => {
    if (this.props.currentUser) {
      let res = await getUserSamples(this.props.currentUser.id)
      this.setState({ userSamples: res })
      console.log(res)
      }
    this.setRows()
  }
  componentDidUpdate = async (prevProps) => {
    if (this.props.currentUser !== prevProps.currentUser) {
      if (this.props.currentUser) {
        let res = await getUserSamples(this.props.currentUser.id)
        this.setState({ userSamples: res })
        console.log(res)
        }
    }
    }
  submitSample = async (e) => {
    e.preventDefault()
    let sampleData = {}
    sampleData.name = this.state.sample
    sampleData.microwave = this.state.microwave.join(" ")
    sampleData.stapler = this.state.stapler.join(" ")
    sampleData.pentap = this.state.pentap.join(" ")
    sampleData.scissors = this.state.scissors.join(" ")
    sampleData.spacebar = this.state.spacebar.join(" ")
    sampleData.mouseclick = this.state.mouseclick.join(" ")
    sampleData.user_id=this.props.currentUser.id
    await createSample(sampleData, this.props.currentUser.id)
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
  showUserSamples = () => {
    let samples = this.state.userSamples
    let map = samples.map((sample) => {
      return (
        <div>
          <button>{sample.name}</button>
        </div>  
      )
    })
    return map
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
  handleSampleName = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  render() {
    let map = null
    this.state.userSamples? map = this.showUserSamples : map = (<></>)
    return (
      <>
        <div>BeatMaker</div>
        <SaveSample
          sample={this.state.sample}
          handleSampleName={this.handleSampleName}
          submitSample={this.submitSample}/>
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
        <div>
          {this.state.userSamples.map((sample) => {
            return (<button>{sample.name}</button>)
            })}
        </div>
        
      </>

    )
  }
}

export default BeatMaker