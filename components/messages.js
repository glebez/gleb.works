import React from "react";
import Message from './message';
import Typing from 'react-typing-animation';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    props.showNext();
  }
  render() {
    const { messages, showNext } = this.props;
    return (
      <div className="container">
          {messages && messages.map(({text}) => <Message text={text} key={text} showNext={showNext} />)}
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
