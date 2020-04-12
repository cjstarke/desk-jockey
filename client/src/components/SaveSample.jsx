import React from 'react'

class SaveSample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {
    return (
      <>
        {!this.props.currentId &&
          (<form onSubmit={this.props.submitSample}>
            <input name="sample" type="text" value={this.props.sample} onChange={this.props.handleSampleName} />
            <button disabled={!this.props.sample}>Save</button>
          </form>)}
        {this.props.currentId &&
          (<div>
          <span>{this.props.sampleName}</span>
          <button disabled={!this.props.sampleUser}onClick={this.props.updateSample} value={this.props.currentId}>update</button>
          </div>)}
      </>
    )
  }
}

export default SaveSample