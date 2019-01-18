import React from "react";
import Avatar from './avatar';
import ChatBrain from '../chat';
import Message from '../chat/message';
import Messages from './messages';
import Responses from './responses.js';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.scrollableContainer = React.createRef();
    this.chat = new ChatBrain();
    this.state = {
      messages: [],
      shownMessages: [],
      responses: [],
      activeResponseId: null,
      responseIds: [],
      chosenResponseIds: [],
      isTypingEnabled: true,
    };

    this.showNext = this.showNext.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.markResponseActive = this.markResponseActive.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.handleResponse('welcome');
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  showNext() {
    const { messages, shownMessages } = this.state;
    if( this.scrollableContainer.current) {
      this.scrollableContainer.current.scrollTo(0, this.scrollableContainer.current.scrollHeight);
    }
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

  markResponseActive(id) {
    this.setState({activeResponseId: id});
  }

  handleResponse(value, text, id) {
    const { messages, responses } = this.chat.trigger(value);
    const { shownMessages: oldShownMessages, chosenResponseIds: oldChosenResponseIds } = this.state;
    const activeResponseId = responses[0].id;
    const responseIds = responses.map(response => response.id);
    const shownMessages = text ? [
      ...oldShownMessages,
      new Message(text, 'user'),
    ] : oldShownMessages;
    const chosenResponseIds = [...oldChosenResponseIds, id];
    this.setState({messages, shownMessages, responses, activeResponseId, responseIds, chosenResponseIds}, () => this.showNext());
  }

  handleKeyDown(e) {
    if(e.key === 'ArrowDown') {
      const { activeResponseId, responseIds } = this.state;
      let nextActiveResponseIndex = responseIds.indexOf(activeResponseId) + 1;
      if (nextActiveResponseIndex >= responseIds.length) {
        nextActiveResponseIndex = 0
      }
      this.setState({activeResponseId: responseIds[nextActiveResponseIndex]});
    }

    if(e.key === 'ArrowUp') {
      const { activeResponseId, responseIds } = this.state;
      let nextActiveResponseIndex = responseIds.indexOf(activeResponseId) - 1;
      if (nextActiveResponseIndex < 0) {
        nextActiveResponseIndex = responseIds.length -1;
      }
      this.setState({activeResponseId: responseIds[nextActiveResponseIndex]});
    }

    if (e.key === 'Enter' && this.state.isDoneTyping) {
      const { responses, activeResponseId, responseIds } = this.state;
      if (activeResponseId) {
        const response = responses[responseIds.indexOf(activeResponseId)];
        this.handleResponse(response.value, response.text);
      }
    }

  }

  render() {
    const { isDoneTyping, shownMessages, responses, activeResponseId, isTypingEnabled, chosenResponseIds } = this.state;
    return (
      <div className="chat" ref={this.scrollableContainer}>
        <div className="chat__inner">
          <div className="container">
            <Avatar />
            <div className="content">
              <Messages
                messages={shownMessages}
                showNext={this.showNext}
                isTypingEnabled={isTypingEnabled}
              />
        { (!isTypingEnabled || isDoneTyping) &&
          <Responses
            responses={responses}
            activeResponseId={activeResponseId}
            chosenResponseIds={chosenResponseIds}
            handleResponse={this.handleResponse}
            markResponseActive={this.markResponseActive}
          /> }
            </div>
          </div>
        </div>
        <style jsx>{`
          .chat {
            position: relative;
            height: 100%;
            overflow-y: auto;
            padding: 0 15px;
          }
          .chat__inner {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: stretch;
            min-height: 100%;
          }
          .container {
            display: flex;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            justify-content: space-between;
            align-items: flex-end;
            flex: 1;
          }
          .content {
            flex: 1;
            position: relative;
            padding: 25px;
          }
        `}</style>
      </div>
  );
  }
}

export default Chat;
