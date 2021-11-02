import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLocked: false,
    };

    this.scrollableContainer = React.createRef();
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.updateScrollContainerState = this.updateScrollContainerState.bind(
      this
    );
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

  updateScrollContainerState(locked) {
    this.setState({ isLocked: locked });
  }

  render() {
    const { messages, showNext } = this.props;
    const { isLocked } = this.state;
    return (
      <div
        className={`messages-container ${isLocked &&
          'messages-container--locked'}`}
        ref={this.scrollableContainer}
      >
        <div className="messages-container__inner">
          {messages &&
            messages.map(({ text, author }, i) => (
              <Message
                text={text}
                author={author}
                key={`${text}-${i}`}
                showNext={showNext}
                scrollToBottom={this.scrollToBottom}
                updateScrollContainerState={this.updateScrollContainerState}
              />
            ))}
        </div>
        <style jsx>{`
          .messages-container {
            grid-column-start: 2;
            margin-bottom: 25px;
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

          .messages-container--locked {
            padding-right: 36px;
            overflow: hidden;
          }

          .messages-container::-webkit-scrollbar {
            width: 15px;
          }

          .messages-container::-webkit-scrollbar-track {
            background-color: rgba(143, 128, 146, 0.7);
          }

          .messages-container::-webkit-scrollbar-thumb {
            background-color: rgba(88, 6, 107, 0.75);
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
