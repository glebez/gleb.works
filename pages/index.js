import React from "react";
import IndexStyles from '../styles/index.js';
import Chat from '../components/chat';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
      ],
    };
  }
  render() {
    return (
      <div className="root">
        <Chat />
        <IndexStyles />
        <style global jsx>{`
          @import url('https://fonts.googleapis.com/css?family=VT323');

          * {
            box-sizing: border-box;
          }

          body, html {
            padding: 0;
            margin: 0;
            color: #8f8092;
            font-family: VT323;
            font-size: 24px;
          }
        `}
        </style>
      </div>
  );
  }
}

export default Index;
