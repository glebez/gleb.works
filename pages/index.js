import React from 'react';
import Head from 'next/head';
import Chat from '../components/chat';

class Index extends React.Component {
  render() {
    return (
      <div className="root">
        <Head>
          <title>Gleb Kostyunin Chat</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Chat />
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
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAH0lEQVQYV2NkQAX/GZH4/xkYGBhhAmAOSBJEwDkgAQCCrgQEjpMcPgAAAABJRU5ErkJggg==)
                repeat,
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
              filter: blur(0.5px) brightness(0.6);
            }
          }

          @media screen and (max-width: 500px) {
            .root {
              padding: 0;
            }
          }
        `}</style>
        <style global jsx>
          {`
            @import url('https://fonts.googleapis.com/css?family=VT323');

            * {
              box-sizing: border-box;
            }

            body,
            html {
              padding: 0;
              margin: 0;
              color: #8f8092;
              font-family: VT323;
              font-size: 24px;
            }
            a {
              color: #11fb7f;
              word-break: break-all;
            }

            p {
              margin: 0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Index;
