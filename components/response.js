import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Response = React.forwardRef(({
  onSubmit,
  isActive,
  text,
  markFocused,
  isMuted,
  isKeyboardActivated,
}, ref) => {
  const buttonElement = ref;

  // TODO: Make work with new focus
  useEffect(
    () => {
      if (buttonElement.current && isActive && isKeyboardActivated) {
        buttonElement.current.scrollIntoView();
      }
    },
    [isActive, isKeyboardActivated]
  );

  const handleClick = e => {
    e.stopPropagation();
    onSubmit();
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.stopPropagation();
      onSubmit();
    }
  }

  const className = `response ${
    isMuted ? 'muted' : ''
  }`;

  return (
    <li>
      <button
        className={className}
        onClick={handleClick}
        onMouseEnter={markFocused}
        onKeyDown={handleKeyDown}
        ref={buttonElement}
      >
        {text}
      </button>
      <style jsx>{`
        .response {
          display: flex;
          font-size: 28px;
          color: #cffee5;
          padding: 0;
          margin-bottom: 10px;
          margin-top: 0;
          background-color: transparent;
          font-family: inherit;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .response::before {
          content: '- ';
          min-width: 30px;
        }

        .muted {
          color: #998b9c;
        }

        .response:focus {
          color: #11fb7f;
          outline: none;
        }

        .response:focus::before {
          content: url('/arrow.png');
          font-size: 0;
        }

        @media screen and (max-width: 500px) {
          .response {
            font-size: 24px;
          }
        }
      `}</style>
    </li>
  );
});

Response.displayName = 'Response';

Response.propTypes = {
  onSubmit: PropTypes.func,
  markFocused: PropTypes.func,
  isMuted: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
};

export default Response;
