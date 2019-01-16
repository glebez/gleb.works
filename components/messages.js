import React from "react";
import Message from './message';
import Typing from 'react-typing-animation';

class Messages extends React.Component {
  render() {
    const { messages, showNext, isTypingEnabled } = this.props;
    return (
      <div className="container">
          {messages && messages.map(({text, author}) => <Message text={text} author={author} key={text} showNext={showNext} isTypingEnabled={isTypingEnabled} />)}
        <style jsx>{`
          .container {
            margin-bottom: 25px;
          }
        `}</style>
      </div>
  );
  }
}

export default Messages;
