import React from 'react'
import WhaleModal from './WhaleModal'


class Whale extends React.Component {
  render(){
    return(
      <div>
        <WhaleModal name={this.props.name}/>
      </div>
    )
  }
}

export default Whale
