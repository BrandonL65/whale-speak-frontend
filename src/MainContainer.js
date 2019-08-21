import React from 'react'
import Header from './Header'
import ChatroomList from './ChatroomList'
import CurrentChat from './CurrentChat'
import WhalesList from './WhalesList'

class MainContainer extends React.Component {

  state = {
    whales: [],
    chatrooms: [],
    messages: [],
    currentChat: [],
    actualAllMessages: []
  }

  componentDidMount() {

    fetch('http://localhost:3000/whales')     //Populate Whales
    .then(res => res.json())
    .then(whaleData => {
      this.setState({
        whales: whaleData
      })
    })
    fetch('http://localhost:3000/chatrooms')        //Populate Chatrooms 
    .then(res => res.json())
    .then(chatroomData => {
      this.setState({
        chatrooms: chatroomData, currentChat: chatroomData[0] 
      })
    })
    fetch('http://localhost:3000/messages')
    .then(resp => resp.json())
    .then((data) => {
      let all = [];                     //Populate Refresh Page with League messages 
      for (let i=0; i < data.length; i++) {
        if (data[i].chatroom.title == "League") {
          all.push(data[i])
        }
      }
      this.setState ({                //Sets populates Messages AND ActualAllMessages 
        ...this.state,
        messages: data,
        actualAllMessages: all 
      })
    })
  }

  handleClick = (chatroomObj) => {
    let all = [];
    let allMessages = this.state.messages 
    for (let i=0; i < allMessages.length; i++) {
      if (allMessages[i].chatroom.title == chatroomObj.chatroom.title)
      {
        all.push(allMessages[i])
      }
    }
    this.setState({ currentChat: chatroomObj.chatroom, actualAllMessages: all })

  }

  handleNewMessage = (e) => {
    console.log(e.target.value)
  }

  render(){
    return(
      <div>
        <Header />
        <hr />
        <br />
          <ChatroomList chatrooms={this.state.chatrooms} handleClick={this.handleClick}/>

        <hr />
        <br />
        <CurrentChat currentChat={this.state.currentChat} handleNewMessage={this.handleNewMessage} actualMessages = {this.state.actualAllMessages}/>
        <hr />
        <br />
        <WhalesList whales={this.state.whales}/>
      </div>
    )
  }
}

export default MainContainer
