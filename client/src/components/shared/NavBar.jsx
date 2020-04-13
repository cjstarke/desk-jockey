import React from 'react'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open : true
    }
  }
  handleClose = () => {
    this.setState({
      open : false
    })
  }
  componentDidMount = () => {
    this.setState({open : this.props.navbar})
  }
  componentDidUpdate = (prevprops) => {
    if (this.props.navbar !== prevprops.navbar) {
      this.setState({open: this.props.navbar})
    }
  }

  render() {
    let navClass 
    this.state.open ? navClass = "NavOpen" : navClass = "NavClose"
    return (
      <nav className={navClass}>
        <div className="Samples">
        <div className="SampleType"><button name="new" onClick={this.props.handleSampleButton}>New Sample</button></div>
        <div className="SampleType">
          <div>Saved Samples</div>
          {this.props.userSamples.map((sample, index) => {
            return (<button name="user" value={index} key={index} onClick={this.props.handleSampleButton}>{sample.name}</button>)
          })}
        </div>
        <div className="SampleType">
          <div>Free Samples</div>
          {this.props.freeSamples.map((sample, index) => {
            return (<button name="free" value={index} key={index} onClick={this.props.handleSampleButton}>{sample.name}</button>)
          })}
        </div>
       
        </div>
    </nav>)
  }
}
export default NavBar