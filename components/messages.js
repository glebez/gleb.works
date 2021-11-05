import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Message from './message';

const Messages = ({ messages, showNext }) => {
  const scrollableContainer = React.createRef();

  const scrollToBottom = () => {
    if (scrollableContainer.current) {
      scrollableContainer.current.scrollTo(
        0,
        scrollableContainer.current.scrollHeight
      );
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="messages-container" ref={scrollableContainer}>
      <div className="messages-container__inner">
        {messages &&
          messages.map(({ text, author }, i) => (
            <Message
              text={text}
              author={author}
              key={`${text}-${i}`}
              showNext={showNext}
              scrollToBottom={scrollToBottom}
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
};

Messages.propTypes = {
  messages: PropTypes.array,
  showNext: PropTypes.func,
};

export default Messages;
