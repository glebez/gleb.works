import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typing from 'react-typing-animation';

const Message = ({ text, author, scrollToBottom, showNext }) => {
  const [isTypingEnabled, setIsTypingEnabled] = useState(true);

  const parseText = text => {
    const splitted = text.split(/(\[[^\[\]]+\]\([^)]+\))/);
    return splitted.map(item => {
      if (item[0] === '[') {
        const [_, text, href] = item.match(/\[([^\[\]]+)\]\(([^)]+)/);
        return (
          <a key={href} target="_blank" rel="noopener noreferrer" href={href}>
            {text}
          </a>
        );
      }
      return item;
    });
  };

  const onStartedTyping = () => {
    scrollToBottom();
  };

  const onFinishedTyping = () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('click', handleClick);
    showNext();
  };

  const skipTyping = () => {
    const canSkipTyping = isTypingEnabled && author === 'gleb';
    if (canSkipTyping) {
      setIsTypingEnabled(false);
      showNext();
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      skipTyping();
    }
  };

  const handleClick = () => {
    skipTyping();
  };

  useEffect(() => {
    if (author !== 'gleb') {
      showNext();
    }
  }, []);

  useEffect(
    () => {
      document.addEventListener('click', handleClick);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('click', handleClick);
        document.removeEventListener('keydown', handleKeyDown);
      };
    },
    [isTypingEnabled]
  );

  const parsedText = parseText(text);
  return (
    <div className={`message ${author === 'gleb' ? '' : 'message--user'}`}>
      <p className="message__copy message__copy--hidden">{parsedText}</p>
      {isTypingEnabled && author === 'gleb' ? (
        <Typing
          onFinishedTyping={onFinishedTyping}
          onStartedTyping={onStartedTyping}
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
          border-image: url('/border-alternative.png') 20 30 / 20px 25px / 15px
            round;
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
          padding: 0;
        }

        .message + .message {
          margin-top: 45px;
        }
      `}</style>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  showNext: PropTypes.func,
  scrollToBottom: PropTypes.func,
};

export default Message;
