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
      <div>
        <h3 class="ui top attached header">
          { this.props.currentChat.title }
        </h3>
        <div class="ui attached segment">
          <p>{ renderMessages }</p>
          <p><MessageForm handleNewMessage={this.props.handleNewMessage} /></p>
        </div>
      </div>
    )
  }
}

export default CurrentChat
