import React from "react";
import Avatar from './avatar';
import Messages from './messages';
import Responses from './responses.js';
import welcome from '../chat/scenes/welcome';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.scrollableContainer = React.createRef();
    this.state = {
      messages: [],
      shownMessages: [],
      responses: [],
      activeResponseId: null,
      responseIds: [],
    };

    this.showNext = this.showNext.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.markResponseActive = this.markResponseActive.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.handleResponse(welcome);
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

  handleResponse(cb) {
    const { messages, responses } = cb();
    const activeResponseId = responses[0].id;
    const responseIds = responses.map(response => response.id);
    this.setState({messages, responses, activeResponseId, responseIds}, () => this.showNext());
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

    if (e.key === 'Enter') {
      const { responses, activeResponseId, responseIds } = this.state;
      this.handleResponse(responses[responseIds.indexOf(activeResponseId)].value);
    }

  }

  render() {
    const { isDoneTyping, shownMessages, responses, activeResponseId, messages, isTypingEnabled } = this.state;
    return (
      <div className="chat" ref={this.scrollableContainer}>
        <div className="chat__inner">
          <div className="container">
            <Avatar />
            <div className="content">
              <Messages messages={ isTypingEnabled ? shownMessages : messages} showNext={this.showNext} />
        { (!isTypingEnabled || isDoneTyping) &&
          <Responses
            responses={responses}
            activeResponseId={activeResponseId}
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
