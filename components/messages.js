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
        <div className="messages-container__inner">
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
        </div>
        <style jsx>{`
          .messages-container {
            grid-column-start: 2;
            overflow-y: scroll;
            align-self: end;
            height: 100%;
            padding: 20px;
            padding-top: 40px;
            border-bottom: 5px solid #58066b;
          }

          .messages-container__inner {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            min-height: 100%;
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
