import React from 'react'
import MessageForm from './MessageForm'

class CurrentChat extends React.Component {

  constructor(props)
  {
    super(props)
    console.log(this.props)
  }

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
          <MessageForm handleLoad = {this.props.handleLoad} whales = {this.props.whales} currentChat = {this.props.currentChat} handleNewMessage={this.props.handleNewMessage}/>
      </div>
    )
  }
}

export default CurrentChat
