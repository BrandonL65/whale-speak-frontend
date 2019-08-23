import React from 'react'
import Whale from './components/Whale'

class WhalesList extends React.Component {
  render(){
    const whale = this.props.whales.map(whale => {
      return <Whale name={whale.name} key={whale.id} bio={whale.bio} avatar={whale.avatar} handleWhaleUpdate={this.props.handleWhaleUpdate} handleBioChange={this.props.handleBioChange} />
    })
    return(
      <div>
        <strong>WhaleList</strong>
        { whale }
      </div>
    )
  }
}

export default WhalesList
