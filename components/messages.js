import React from "react";
import Message from './message';

class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="container">
          {messages && messages.map(({text}) => <Message text={text} key={text} />)}
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
