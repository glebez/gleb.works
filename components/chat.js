import React from "react";
import Avatar from './avatar';
import Messages from './messages';
import Responses from './responses.js';
import welcome from '../chat/scenes/welcome';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      shownMessages: [],
      responses: [],
    };

    this.showNext = this.showNext.bind(this);
  }

  componentDidMount() {
    this.setState(welcome(), () => this.showNext());
  }

  showNext() {
    const { messages, shownMessages } = this.state;
    if (!messages.length) {
      this.setState({isDoneTyping: true});
    } else {
      const [next, ...rest] = messages;
      this.setState({
        isDoneTyping: false,
        messages: rest,
        shownMessages: [...shownMessages, next],
      });
    }
  }

  render() {
    const { isDoneTyping, shownMessages, responses } = this.state;
    return (
      <div className="chat">
        <div className="container">
          <Avatar />
          <div className="content">
            <Messages messages={shownMessages} showNext={this.showNext} />
      { isDoneTyping && <Responses responses={responses} /> }
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
