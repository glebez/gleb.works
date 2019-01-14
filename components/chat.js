import React from "react";
import Avatar from './avatar';
import Messages from './messages';
import Responses from './responses.js';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          text: 'Hey brother!',
        },
        {
          text: 'How are you today',
        }
      ],
      responses: [
        {
          text: 'Im cool',
          value: 'cool',
        },
        {
          text: 'Im kinda not cool',
          value: 'not cool',
        }
      ],
    };
  }
  render() {
    return (
      <div className="chat">
        <div className="container">
          <Avatar />
          <div className="content">
            <Messages messages={this.state.messages} />
            <Responses responses={this.state.responses} />
          </div>
        </div>
        <style jsx>{`
          .chat {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
            padding: 15px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
          .container {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
          .content {
            flex: 1;
          }
        `}</style>
      </div>
  );
  }
}

export default Chat;
