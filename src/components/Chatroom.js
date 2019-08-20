import React from 'react'


class Chatroom extends React.Component {
  render(){
    return(
      <div>
        <h3 className="ui header" >Name:</h3>
        <i className="plus square icon"></i>
          <div onClick={() => this.props.handleClick(this.props)}>
          {this.props.chatroom.title}
          </div>
      </div>
    )
  }
}

export default Chatroom
