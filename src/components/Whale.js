import React from 'react'
import WhaleModal from './WhaleModal'


class Whale extends React.Component {

  state = {
    edit: false,
    currentBio: "hihihhi"
  }

  handleEditClick = () => {
    this.setState({ edit: !this.state.edit})
  }

  handleBioChange = (e) => {
    this.setState({ 
      ...this.state,
      currentBio: e.target.value 
    })
  }


  render(){
    return(
      <div>
        <WhaleModal name={this.props.name}
        bio={this.state.currentBio}
        avatar={this.props.avatar}
        handleEditClick={this.handleEditClick}
        editState={this.state.edit}
        handleWhaleUpdate={this.props.handleWhaleUpdate}
        handleBioChange={this.handleBioChange}
        currentBio={this.state.currentBio}
        handleCancelClick={this.handleEditClick}
        />
      </div>
    )
  }
}

export default Whale
