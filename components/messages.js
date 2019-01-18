import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';

class Messages extends React.Component {
  render() {
    const { messages, showNext, isTypingEnabled } = this.props;
    return (
      <div className="container">
        {messages &&
          messages.map(({ text, author }) => (
            <Message
              text={text}
              author={author}
              key={text}
              showNext={showNext}
              isTypingEnabled={isTypingEnabled}
            />
          ))}
        <style jsx>{`
          .container {
            margin-bottom: 25px;
          }
        `}</style>
      </div>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array,
  showNext: PropTypes.func,
  isTypingEnabled: PropTypes.bool,
};

export default Messages;
