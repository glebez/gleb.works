import React from 'react';
import PropTypes from 'prop-types';
import Typing from 'react-typing-animation';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTypingEnabled: true,
    };

    this.onStartedTyping = this.onStartedTyping.bind(this);
    this.onFinishedTyping = this.onFinishedTyping.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    const canSkipTyping =
      this.state.isTypingEnabled && this.props.author === 'gleb';
    if ((e.key === 'Enter' || e.key === 'Space') && canSkipTyping) {
      this.setState({ isTypingEnabled: false });
      this.onFinishedTyping();
    }
  }

  parseText(text) {
    /* eslint-disable no-useless-escape */
    const splitted = text.split(/(\[[^\[\]]+\]\([^)]+\))/);
    return splitted.map(item => {
      if (item[0] === '[') {
        const [_, text, href] = item.match(/\[([^\[\]]+)\]\(([^)]+)/);
        /* eslint-enable no-useless-escape */
        return (
          <a key={href} target="_blank" rel="noopener noreferrer" href={href}>
            {text}
          </a>
        );
      }
      return item;
    });
  }

  onStartedTyping() {
    const { scrollToBottom, updateScrollContainerState } = this.props;
    this.scrollerInterval = setInterval(scrollToBottom, 50);
    updateScrollContainerState(true);
  }

  onFinishedTyping() {
    const { showNext, updateScrollContainerState } = this.props;
    clearInterval(this.scrollerInterval);
    updateScrollContainerState(false);
    document.removeEventListener('keydown', this.handleKeyDown);
    showNext();
  }

  render() {
    const { text, author } = this.props;
    const { isTypingEnabled } = this.state;
    const parsedText = this.parseText(text);
    return (
      <div className={`message ${author === 'gleb' ? '' : 'message--user'}`}>
        <p className="message__copy message__copy--hidden">{parsedText}</p>
        {isTypingEnabled && author === 'gleb' ? (
          <Typing
            onFinishedTyping={this.onFinishedTyping}
            onStartedTyping={this.onStartedTyping}
            hideCursor
            speed={20}
          >
            <p className="message__copy">{parsedText}</p>
          </Typing>
        ) : (
          <p className="message__copy">{parsedText}</p>
        )}
        <style jsx>{`
          .message {
            position: relative;
            flex-shrink: 0;
            min-height: 55px; //prevent collapsing on typing
            white-space: pre-wrap;
            padding: 5px 20px;
            background-color: rgba(0, 0, 50, 0.7);
            border-style: outset;
            border-image: url('/border.png') 20 28 / 20px 25px / 15px round;
          }
          .message--user {
            border-image: url('/border-alternative.png') 20 30 / 20px 25px /
              15px round;
            color: #11fb7f;
          }

          .message__copy:before {
            content: '- ';
          }

          .message__copy {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 5px 20px;
          }

          .message__copy--hidden {
            position: static;
            visibility: hidden;
          }

          .message + .message {
            margin-top: 45px;
          }
        `}</style>
      </div>
    );
  }
}

Message.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  showNext: PropTypes.func,
  scrollToBottom: PropTypes.func,
  updateScrollContainerState: PropTypes.func,
};

export default Message;
