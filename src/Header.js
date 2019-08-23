import React from 'react'

class Header extends React.Component {
  render(){
    return(
      <div>
      <h2 className="ui header">
        <i className="comment alternate icon"></i>
        <div className="content">
          WhaleSpeak!
          <div className="sub header">Speak with the whales!</div>
        </div>
      </h2>
      </div>
    )
  }
}

export default Header
