import React from 'react';
import Head from 'next/head';
import Chat from '../components/chat';

class Index extends React.Component {
  componentDidMount() {
    if (!('doNotTrack' in navigator) || !(navigator?.doNotTrack === '1')) {
      let analytics = {};

      analytics['href'] = window.location.href;
      analytics['userAgent'] = navigator.userAgent;
      analytics['width'] = window.innerWidth;
      analytics['referrer'] = document.referrer;
      analytics['platform'] = navigator.platform;
      analytics['date'] = new Date().toUTCString();

      navigator?.sendBeacon(
        'https://us-central1-analytics-c2223.cloudfunctions.net/handler',
        JSON.stringify(analytics)
      );
    }
  }
  render() {
    return (
      <div className="root">
        <Head>
          <title>chatGLB</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" type="image/jpg" href="/favicon.ico" />
          <link rel="prefetch" href="/arrow.png" />
          <link rel="prefetch" href="/border.png" />
          <link rel="prefetch" href="/border-alternative.png" />
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
            background: url('/bg-pattern.png') repeat, url('/bg-image.jpeg');
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
            @import url('https://fonts.googleapis.com/css?family=VT323&display=swap');

            * {
              box-sizing: border-box;
            }

            body,
            html {
              padding: 0;
              margin: 0;
              color: #8f8092;
              font-family: VT323, monospace;
              font-size: 24px;
              background-color: #031c21;
            }
            a {
              color: #11fb7f;
              word-break: break-all;
            }

            p {
              margin: 0;
            }
            ::-webkit-scrollbar {
              width: 15px;
            }

            ::-webkit-scrollbar-track {
              background-color: rgba(143, 128, 146, 0.7);
            }

            ::-webkit-scrollbar-thumb {
              background-color: rgba(88, 6, 107, 0.75);
            }
          `}
        </style>
      </div>
    );
  }
}

export default Index;
