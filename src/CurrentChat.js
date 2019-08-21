import React from 'react'
import MessageForm from './MessageForm'

class CurrentChat extends React.Component {

  render(){
    return(
      <div className="ui grid">
        <h2 className="ui header">CurrentChat:</h2> <br />
        { this.props.currentChat.title }
          <ul>
            {

              this.props.actualMessages.map((message) => {
                return <li key = {message.id}> {message.whale.name}: {message.content}  </li>
              }) 

          }
          </ul>
          <MessageForm reload = {this.reload} whales = {this.props.whales} currentChat = {this.props.currentChat} handleNewMessage={this.props.handleNewMessage}/>
      </div>
    )
  }
}

export default CurrentChat
