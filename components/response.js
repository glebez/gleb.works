import React from 'react';
import PropTypes from 'prop-types';

class Response extends React.Component {
  constructor(props) {
    super(props);

    this.buttonElement = React.createRef();
  }
  componentDidUpdate() {
    const { isActive, isKeyboardActivated } = this.props;
    if (this.buttonElement.current && isActive && isKeyboardActivated) {
      this.buttonElement.current.scrollIntoView();
    }
  }
  render() {
    const { onClick, isActive, text, markActive, id, isMuted } = this.props;
    const className = `response ${isActive ? 'active' : ''} ${
      isMuted ? 'muted' : ''
    }`;
    return (
      <React.Fragment>
        <button
          className={className}
          onClick={onClick}
          onMouseEnter={markActive.bind(null, id, false)}
          ref={this.buttonElement}
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
  }
}

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
