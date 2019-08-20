import React from 'react'
import Header from './Header'
import ChatroomList from './ChatroomList'
import CurrentChat from './CurrentChat'
import WhalesList from './WhalesList'

class MainContainer extends React.Component {

  state = {
    whales: [],
    chatrooms: [],
    currentChatMessages: [],
    currentChat: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/whales')
    .then(res => res.json())
    .then(whaleData => {
      this.setState({
        whales: whaleData
      })
    })

    fetch('http://localhost:3000/chatrooms')
    .then(res => res.json())
    .then(chatroomData => {
      this.setState({
        chatrooms: chatroomData, currentChat: chatroomData[0]
      })
    })
  }

  handleClick = (chatroomObj) => {
    this.setState({ currentChat: chatroomObj.chatroom, currentChatMessages: chatroomObj.messages })
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
        <CurrentChat currentChat={this.state.currentChat} messages={this.state.currentChatMessages} handleNewMessage={this.handleNewMessage}/>
        <hr />
        <br />
        <WhalesList whales={this.state.whales}/>
      </div>
    )
  }
}

export default MainContainer
