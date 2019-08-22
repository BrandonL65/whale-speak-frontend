import React from 'react'

class Header extends React.Component {
  render(){
    return(
      <div>
      <h2 class="ui header">
        <i class="comment alternate icon"></i>
        <div class="content">
          WhaleSpeak!
          <div class="sub header">Speak with the whales!</div>
        </div>
      </h2>
      </div>
    )
  }
}

export default Header
