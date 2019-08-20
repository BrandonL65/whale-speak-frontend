import React from 'react'


class Chatroom extends React.Component {
  render(){
    return(
      <div>
        <i className="plus square icon">
        <div onClick={() => this.props.handleClick(this.props)}>
        {this.props.chatroom.title}
        </div>
        </i>

      </div>
    )
  }
}

export default Chatroom
