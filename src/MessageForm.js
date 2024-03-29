import React from 'react'

class MessageForm extends React.Component {

  handleNewMessage = (e) =>
  {
    this.setState ({
      message: e.target.value
    })
  }
  handleClick = (e) =>
  {
    let handle = this.props.handleLoad;
    e.preventDefault();
    let firstWhale = this.props.whales[0];
    fetch(`http://localhost:3000/messages`,
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify ({
        content: `${this.state.message}`,
        whale_id: `${firstWhale.id}`,
        chatroom_id: `${this.props.currentChat.id}`
      })
    })
    .then( resp => resp.json())
    .then( (data) => handle())
  };
  render(){
    return(
      <div>
        <form className="ui form">
          <textarea placeholder="Whale, what have you got to say?" rows="3" onChange={(e) => this.handleNewMessage(e)}></textarea>
          <input type="submit" value = "Submit" onClick = {(e) => this.handleClick(e)} />
        </form>
      </div>
    )
  }
}

export default MessageForm
