import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Response = ({
  onClick,
  isActive,
  text,
  markActive,
  id,
  isMuted,
  isKeyboardActivated,
}) => {
  const buttonElement = React.createRef();

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
    onClick();
  };

  const className = `response ${isActive ? 'active' : ''} ${
    isMuted ? 'muted' : ''
  }`;
  return (
    <React.Fragment>
      <button
        className={className}
        onClick={handleClick}
        onMouseEnter={markActive.bind(null, id, false)}
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

        .response:before {
          content: '- ';
          min-width: 30px;
        }

        .muted {
          color: #998b9c;
        }

        .active {
          color: #11fb7f;
        }

        .active:before {
          content: url('/arrow.png');
          font-size: 0;
        }
        @media screen and (max-width: 500px) {
          .response {
            font-size: 24px;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Response.propTypes = {
  onClick: PropTypes.func,
  markActive: PropTypes.func,
  isActive: PropTypes.bool,
  isMuted: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
  isKeyboardActivated: PropTypes.bool,
};

export default Response;
