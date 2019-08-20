import React from 'react'

class CurrentChat extends React.Component {
  render(){
    console.log(this.props, "CurrentChat")
    return(
      <div className="ui grid">
        <h2 className="ui header">CurrentChat:</h2> <br />
        { null }
      </div>
    )
  }
}

export default CurrentChat
