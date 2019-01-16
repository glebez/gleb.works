import React from "react";

class IndexStyles extends React.Component {
  render() {
    return (
        <style jsx>{`
          .root {
            position: relative;
            height: 100vh;
            padding: 0 10px;
          }
          .root:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAH0lEQVQYV2NkQAX/GZH4/xkYGBhhAmAOSBJEwDkgAQCCrgQEjpMcPgAAAABJRU5ErkJggg==) repeat,
            url(https://images.unsplash.com/photo-1501560379-05951a742668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
            background-size: auto, cover;
            animation-name: intro;
            animation-duration: 1.5s;
            animation-fill-mode: forwards;
          }
          @keyframes intro {
            from {
              filter: blur(0) brightness(1);
            }
            to {
              filter: blur(.5px) brightness(.6);
            }
          }
        `}</style>
  );
  }
}

export default IndexStyles;
