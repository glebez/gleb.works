import React from 'react';
import PropTypes from 'prop-types';

class Response extends React.Component {
  render() {
    const { onClick, isActive, text, markActive, id, isMuted } = this.props;
    return (
      <>
        <button
          className={`response ${isActive ? 'active' : ''} ${
            isMuted ? 'muted' : ''
          }`}
          onClick={onClick}
          onMouseEnter={markActive.bind(null, id)}
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
            content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAAk0lEQVRIS2NkwAEqs2r+g6Tap7Uw4lKDTRynYpoZCHMFsS4l6EKaGUiswUS7kGgDYYGPHmNnFt1EETKJU0fh4wpTRpoZiO4imHNgLoPJE3Ip3IV0M5BUlxJ0IdUNxBWGuMKUoAupbiDVvUx1AwdPOhy8eZlQnYIuT6jkpn55SKwLCbkMZg7RLqSagcQaRLQLSTUQADejstfrzOXDAAAAAElFTkSuQmCC);
            font-size: 0;
          }
        `}</style>
      </>
    );
  }
}

Response.propTypes = {
  onClick: PropTypes.func,
  markActive: PropTypes.func,
  isActive: PropTypes.bool,
  isMuted: PropTypes.bool,
  text: PropTypes.string,
  id: PropTypes.string,
};

export default Response;
