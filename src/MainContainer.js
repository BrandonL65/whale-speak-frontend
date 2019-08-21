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
    initialMessages: [],
    currentChat: []
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
        <div class="ui equal width grid">
          <div class="column">
            <div class="ui segment">
              <ChatroomList chatrooms={this.state.chatrooms} handleClick={this.handleClick}/>
            </div>
          </div>
          <div class="eight wide column">
            <div class="ui segment">
              <CurrentChat currentChat={this.state.currentChat} handleNewMessage={this.handleNewMessage}/>
            </div>
          </div>
          <div class="column">
            <div class="ui segment">
              <WhalesList whales={this.state.whales}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer
