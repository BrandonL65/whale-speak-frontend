import React from 'react'
import { List } from 'semantic-ui-react'
import Chatroom from './components/Chatroom'

class ChatroomList extends React.Component {
  render(){
    const chatroom = this.props.chatrooms.map(chatroom => {
      return <Chatroom chatroom={chatroom} key={chatroom.id} handleClick={this.props.handleClick} currentChat={this.props.currentChat}/>
    })
      return(
        <div className="ui link list">
          { chatroom }
          </div>
      )
  }
}

export default ChatroomList
