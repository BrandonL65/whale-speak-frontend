import React from 'react'
import MessageForm from './MessageForm'

class CurrentChat extends React.Component {
  render(){
    const renderMessages = () => {
      if (this.props.messages.length !== 0) {
        return this.props.messages.map(message => {
          return <div>{message.content}</div>
        })
      } else {
        return <div>Start Chatting!</div>
      }
    }

    return(
      <div className="ui grid">
        <h2 className="ui header">CurrentChat:</h2> <br />
        { this.props.currentChat.title }
        { renderMessages }
          <MessageForm handleNewMessage={this.props.handleNewMessage}/>
      </div>
    )
  }
}

export default CurrentChat
