import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
  constructor (){
    super()

    this.state = {
      messages: [
        {
          id: 1,
          user: {
            uid: 'sdfs34849327',
            displayName: 'Davey',
            email: 'davey@fretless.com',
          },
          body: 'Chatting up a storm, yo!',
        },
    
        {
          id: 2,
          user: {
            uid: 'sdlfkj35948',
            displayName: 'Dana',
            email: 'dana@fretless.com',
          },
          body: 'This guy is so annoying. I hate my job.',
        },
      ]
    }
  }

  render() {
    return (
      <div className="Chat">
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm />
      </div>
    )
  }
}

export default Chat