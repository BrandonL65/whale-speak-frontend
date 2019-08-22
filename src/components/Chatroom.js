import React from 'react'


class Chatroom extends React.Component {
  render(){
    const classNamer = () => {
      if (this.props.chatroom.title === this.props.currentChat.title ) {
        return "active item"
      } else {
        return "item"
      }
    }
    return(
      <div>
        <div className={classNamer()} onClick={() => this.props.handleClick(this.props)}>
          <div><i className="talk icon small"></i>{this.props.chatroom.title}</div>
        </div>


      </div>
    )
  }
}

export default Chatroom
// this.props.handleClick(this.props)