import React from 'react'
import Chatroom from './components/Chatroom'

class ChatroomList extends React.Component {
  render(){

    const chatroom = this.props.chatrooms.map(chatroom => {
      return <Chatroom chatroom={chatroom} key={chatroom.id} handleClick={this.props.handleClick}/>
    })
      return(
        <div className="ui grid">
          <h2 className="ui header">Lists of Chatrooms:</h2> <br />
          { chatroom }
        </div>
      )
  }
}

export default ChatroomList
