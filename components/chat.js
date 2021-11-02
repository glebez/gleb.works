import React from 'react';
import Avatar from './avatar';
import ChatBrain from '../chat';
import Message from '../chat/message';
import Messages from './messages';
import Responses from './responses.js';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.chat = new ChatBrain();
    this.state = {
      messages: [],
      shownMessages: [],
      responses: [],
      chosenResponseIds: [],
    };

    this.showNext = this.showNext.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  componentDidMount() {
    this.handleResponse('welcome');
  }

  showNext() {
    const { messages, shownMessages } = this.state;
    if (!messages.length) {
      this.setState({ isDoneTyping: true });
    } else {
      const [next, ...rest] = messages;
      this.setState({
        isDoneTyping: false,
        messages: rest,
        shownMessages: [...shownMessages, next],
      });
    }
  }

  handleResponse(value, text, id) {
    const { messages, responses } = this.chat.trigger(value);
    const {
      shownMessages: oldShownMessages,
      chosenResponseIds: oldChosenResponseIds,
    } = this.state;
    const shownMessages = text
      ? [...oldShownMessages, new Message(text, 'user')]
      : oldShownMessages;
    const chosenResponseIds = [...oldChosenResponseIds, id];
    this.setState(
      {
        messages,
        shownMessages,
        responses,
        chosenResponseIds,
      },
      () => this.showNext()
    );
  }

  render() {
    const {
      isDoneTyping,
      shownMessages,
      responses,
      chosenResponseIds,
    } = this.state;
    return (
      <div className="chat">
        <div className="chat__inner">
          <Avatar />
          <Messages messages={shownMessages} showNext={this.showNext} />
          {isDoneTyping && (
            <Responses
              responses={responses}
              chosenResponseIds={chosenResponseIds}
              handleResponse={this.handleResponse}
              markResponseActive={this.markResponseActive}
            />
          )}
        </div>
        <style jsx>{`
          .chat {
            position: relative;
          }
          .chat__inner {
            display: grid;
            grid-template-columns: 1fr 9fr;
            grid-template-rows: 3fr 1fr;
            height: 100vh;
            max-width: 900px;
            margin: 0 auto;
          }

          @media screen and (max-width: 768px) {
            .chat__inner {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Chat;
