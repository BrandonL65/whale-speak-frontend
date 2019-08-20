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
    currentChat: ""
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
        chatrooms: chatroomData
      })
    })

    fetch('http://localhost:3000/messages')
    .then(res => res.json())
    .then(messagesData => {
      this.setState({
        messages: messagesData
      })
    })


  }

  handleClick = (chatroomObj) => {
    this.setState({ currentChat: chatroomObj.chatroom.id })
  }

  render(){
    return(
      <div>
        <Header />
        <hr />
        <br /><ChatroomList chatrooms={this.state.chatrooms} handleClick={this.handleClick}/>
        <hr />
        <br />
        <CurrentChat currentChat={this.state.currentChat}/>
        <hr />
        <br />
        <WhalesList whales={this.state.whales}/>
      </div>
    )
  }
}

export default MainContainer
