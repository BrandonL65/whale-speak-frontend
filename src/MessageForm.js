import React from 'react'

class MessageForm extends React.Component {
  render(){
    return(
      <div>
        <form className="ui form"><textarea placeholder="Whale, what have you got to say?" rows="3" onChange={this.props.handleNewMessage}></textarea></form>
      </div>
    )
  }
}

export default MessageForm
