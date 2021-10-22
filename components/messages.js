import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.scrollableContainer = React.createRef();
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.scrollableContainer.current) {
      this.scrollableContainer.current.scrollTo(
        0,
        this.scrollableContainer.current.scrollHeight
      );
    }
  }

  render() {
    const { messages, showNext } = this.props;
    return (
      <div className="messages-container" ref={this.scrollableContainer}>
        {messages &&
          messages.map(({ text, author }, i) => (
            <Message
              text={text}
              author={author}
              key={`${text}-${i}`}
              showNext={showNext}
              scrollToBottom={this.scrollToBottom}
            />
          ))}
        <style jsx>{`
          .messages-container {
            grid-column-start: 2;
            margin-bottom: 25px;
            overflow: auto;
            align-self: end;
            max-height: 100%;
            padding: 20px;
            padding-top: 40px;
          }
        `}</style>
      </div>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
  showNext: PropTypes.func,
};

export default Messages;
