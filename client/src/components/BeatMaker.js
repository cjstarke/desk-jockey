import React from 'react'
import TrackRow from './TrackRow'
import SaveSample from './SaveSample'
import {createSample, updateSample, getUserSamples, getFreeSamples, deleteSample} from '../services/api-helper'

class BeatMaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userSamples: [],
      freeSamples: [],
      selectedTrack: null,
      player: "stopped",
      looping: false,
      microwave: [],
      stapler: [],
      pentap: [],
      scissors: [],
      spacebar: [],
      mouseclick: [],
      sample: "",
      currentSample: null,
      currentId: null,
      currentName: null,
      sampleUser: null,
      change: false
    }
    this.interval = null
  }
  componentDidMount = async () => {
    let response = await getFreeSamples()
    this.setState({freeSamples: response})
    if (this.props.currentUser) {
      let res = await getUserSamples(this.props.currentUser.id)
      this.setState({ userSamples: res })
      console.log(res)
      }
    this.setRows()
  }
  componentDidUpdate = async (prevProps, prevState) => {
    if (this.props.currentUser !== prevProps.currentUser) {
      if (this.props.currentUser) {
        let res = await getUserSamples(this.props.currentUser.id)
        this.setState({ userSamples: res })
        console.log(res)
        }
    }
    if (this.state.currentSample !== prevState.currentSample) {
      this.setRows()
    }
    if (this.state.change !== prevState.change) {
      let res = await getUserSamples(this.props.currentUser.id)
      this.setState({ userSamples: res })
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
    this.setState({
      currentSample: null,
      sample: "",
      currentId: null,
      currentName: null,
      sampleUser: null
    })
    this.setState(prevState => ({
      change: !prevState.change
    }))

  }
  setRows = () => {
   const {currentSample} = this.state
    if (currentSample) {
      let micArray = currentSample.microwave.split(" ")
      let microwave = micArray.map((item) => {
        if (item === "true") {
          return true
        }
          return false
      })
      let penArray = currentSample.microwave.split(" ")
      let pentap = penArray.map((item) => {
        if (item === "true") {
          return true
        }
          return false
      })
      let stapArray = currentSample.stapler.split(" ")
      let stapler = stapArray.map((item) => {
        if (item === "true") {
          return true
        }
          return false
      })
      let scisArray = currentSample.scissors.split(" ")
      let scissors = scisArray.map((item) => {
        if (item === "true") {
          return true
        }
          return false
      })
      let mouArray = currentSample.mouseclick.split(" ")
      let mouseclick = mouArray.map((item) => {
        if (item === "true") {
          return true
        }
          return false
      })
      let spaArray = currentSample.spacebar.split(" ")
      let spacebar = spaArray.map((item) => {
        if (item === "true") {
          return true
        }
          return false
        })

      this.setState({
        microwave: microwave,
        stapler: stapler,
        pentap: pentap,
        scissors: scissors,
        spacebar: spacebar,
        mouseclick: mouseclick,
        currentId: currentSample.id,
        currentName: currentSample.name,
        sampleUser: currentSample.user_id
      })
    }
    else {
      this.setState({
        microwave: Array(16).fill(false),
        stapler: Array(16).fill(false),
        pentap: Array(16).fill(false),
        scissors: Array(16).fill(false),
        spacebar: Array(16).fill(false),
        mouseclick: Array(16).fill(false),
      })
    }
     
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
  handleSampleButton = (e) => {
    let sampleIndex = e.target.value
    let sampleName = e.target.name
    if (sampleName === "user") {
      let sample = this.state.userSamples[sampleIndex]
      this.setState({currentSample: sample})
    } else if (sampleName === "free") {
      let sample = this.state.freeSamples[sampleIndex]
      this.setState({currentSample: sample})
    }
    else {
      this.setState({
        currentSample: null,
        sample: "",
        currentId: null,
        currentName: null,
        sampleUser: null
      })
    }

  }

  hanldeUpdateSample = async (e) => {
    let sampleId = e.target.value
    let sampleData = {}

    sampleData.microwave = this.state.microwave.join(" ")
    sampleData.stapler = this.state.stapler.join(" ")
    sampleData.pentap = this.state.pentap.join(" ")
    sampleData.scissors = this.state.scissors.join(" ")
    sampleData.spacebar = this.state.spacebar.join(" ")
    sampleData.mouseclick = this.state.mouseclick.join(" ")
    await updateSample(sampleId, this.props.currentUser.id, sampleData)
  }

  handleDeleteSample = async (e) => {
    let sampleId = e.target.value
    let element = e

    await deleteSample(sampleId, this.props.currentUser.id)
    this.setState({
      currentSample: null,
      sample: "",
      currentId: null,
      currentName: null,
      sampleUser: null
    })
    this.setState(prevState => ({
      change: !prevState.change
    }))
    
   

  }

  render() {
    return (
      <>
        <div>
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
        <SaveSample
          sample={this.state.sample}
          currentId={this.state.currentId}
          sampleName={this.state.currentName}
          handleSampleName={this.handleSampleName}
          submitSample={this.submitSample}
          sampleUser={this.state.sampleUser}
          deleteSample={this.handleDeleteSample}
          updateSample={this.hanldeUpdateSample}/>
        </div>
        <div className="TrackRows">
        <TrackRow
          track="microwave"
          image="https://i.imgur.com/jcvPqEI.png"
          player={this.state.player}
          array={this.state.microwave}
          currentSample = {this.state.currentSample}
          handleNodeChange={this.OnNodeChange}/>
        <TrackRow
          track="stapler"
          image="https://i.imgur.com/jf8xqlG.png"
          player={this.state.player}
          currentSample = {this.state.currentSample}
          handleNodeChange={this.OnNodeChange}
          array={this.state.stapler}/>
        <TrackRow
          track="pentap"
          image="https://i.imgur.com/dsquDCr.png"
          array={this.state.pentap}
          currentSample = {this.state.currentSample}
          handleNodeChange={this.OnNodeChange}
          player={this.state.player} />
        <TrackRow
          track="scissors"
          image="https://i.imgur.com/htKBdEV.png"
          array={this.state.scissors}
          currentSample = {this.state.currentSample}
          handleNodeChange={this.OnNodeChange}
          player={this.state.player} />
        <TrackRow
          track="spacebar"
          image="https://i.imgur.com/jVEEYYa.png"
          array={this.state.spacebar}
          currentSample = {this.state.currentSample}
          handleNodeChange={this.OnNodeChange}
          player={this.state.player} />
        <TrackRow
          track="mouseclick"
          image="https://i.imgur.com/YGNj0T1.png?1"
          array={this.state.mouseclick}
          currentSample = {this.state.currentSample}
          handleNodeChange={this.OnNodeChange}
          player={this.state.player} />
        </div>
        
        <div>
          {this.state.userSamples.map((sample, index) => {
            return (<button name="user" value={index} key={index} onClick={this.handleSampleButton}>{sample.name}</button>)
          })}
        </div>
        <div>
          {this.state.freeSamples.map((sample, index) => {
            return (<button name="free" value={index} key={index} onClick={this.handleSampleButton}>{sample.name}</button>)
          })}
        </div>
        <div><button name="new" onClick={this.handleSampleButton}>New Sample</button></div>
        
      </>

    )
  }
}

export default BeatMaker