import React from "react";

class Response extends React.Component {
  render() {
    const { isActive, text } = this.props;
    return (
      <>
        <button className={`response ${isActive ? 'active' : ''}`}>{text}</button>
        <style jsx>{`
          .response {
            display: block;
            font-size: 28px;
            color: #11fb7f;
            padding: 0;
            margin-bottom: 10px;
            margin-top: 0;
            background-color: transparent;
            font-family: inherit;
            border: none;
            cursor: pointer;
          }

          .response:before {
            content: '- ';
          }

          .active:before {
            content: '+ ';
          }
        `}</style>
      </>
  );
  }
}

export default Response;
