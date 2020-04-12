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
      </>
    )
  }
}

export default SaveSample