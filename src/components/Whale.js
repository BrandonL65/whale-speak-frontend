import React from 'react'


class Whale extends React.Component {
  render(){
    return(
      <div>
        <strong>WhaleName:</strong> {this.props.name} 
      </div>
    )
  }
}

export default Whale
