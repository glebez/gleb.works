import React from 'react';
import PropTypes from 'prop-types';
import Typing from 'react-typing-animation';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.onStartedTyping = this.onStartedTyping.bind(this);
    this.onFinishedTyping = this.onFinishedTyping.bind(this);
  }

  componentDidMount() {
    const { showNext, isTypingEnabled } = this.props;
    if (!isTypingEnabled) {
      showNext();
    }
  }

  parseText(text) {
    /* eslint-disable no-useless-escape */
    const splitted = text.split(/(\[[^\[\]]+\]\([^)]+\))/);
    return splitted.map(item => {
      if (item[0] === '[') {
        const [_, text, href] = item.match(/\[([^\[\]]+)\]\(([^)]+)/);
        /* eslint-enable no-useless-escape */
        return (
          <a key={href} target="_blank" rel="noopener noreferrer" href={href}>
            {text}
          </a>
        );
      }
      return item;
    });
  }

  onStartedTyping() {
    const { scrollToBottom } = this.props;
    this.scrollerInterval = setInterval(scrollToBottom, 50);
  }

  onFinishedTyping() {
    const { showNext } = this.props;
    clearInterval(this.scrollerInterval);
    showNext();
  }

  render() {
    const { isTypingEnabled, text, author } = this.props;
    const parsedText = this.parseText(text);
    return (
      <div className={`message ${author === 'gleb' ? '' : 'message--user'}`}>
        <p style={{ visibility: 'hidden' }}>{parsedText}</p>
        {isTypingEnabled && author === 'gleb' ? (
          <Typing
            onFinishedTyping={this.onFinishedTyping}
            onStartedTyping={this.onStartedTyping}
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
            min-height: 55px; //prevent collapsing on typing
            white-space: pre-wrap;
            padding: 5px 20px;
            background-color: rgba(0, 0, 50, 0.7);
            border-style: outset;
            border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABMCAYAAADKiSFsAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAlpJREFUeAHtnDFOAzEQRQnKXTgCHQVFEOIuSLSpUtEicReEoKCg4wicBgqkkfytGY/X60gRL9WMZ2xP3tpf680qm7OVP7fXdz8rD7louNePl82ijk6nc6edZiEAKAHiuYDyyEj7VvxuVzVpd3XTPcakDoVWjmoWKyp5lQAFqCSBZFq3RrU06evxOzn13LTdvtLKIc1i6yWvF6AAlSSQTGueh05Fk1rf93J/UaS8f74Vfus+i61X4PIdQPlsigigChy+U2nUbE1SrfBLiyOj92taR0uzWFHx9bAooAxFbGx1q8Xp/zdanfX0edLaWvBwuK90cQn+p8NzcXbrrVPzW2dDtl7yKgEKUEkCybRKo5L93DS9P1lLk3RCHXdUs3R89dl6SsTxAeWA0WZAKRHHH9aoY2mSU781z9YsVpShjg1AxXwsCihDERuAivlYFFCGIjYAFfOxKKAMRWwAKuZjUUAZitgAVMzHooAyFLEBqJiPRQFlKGIDUDEfiwLKUMQGoGI+FgWUoYgNQMV8LAooQxEbw8/M9Td8/X1Nn2XH5SyP6rxa1/KR/3qyopIEAQWoJIFk2rBG6TyqDaoda2mWjqvzal2jPlsvSRBQgEoSSKZV71Pqy6+z3+lM1lmljWqSvjPBe+YV4mUNaFSSG6CSoCqN0n6zNUvnm+X3apLWwYpSIo4PKAeMNgNKiTh+U6O036lo1qgm6fdmRSkRxweUA0abAaVEHL9bo3SclmZp/rH81tmttw5WVJIYoACVJJBMG9YonUc1S+PH8lv/tdJbB1svSQxQgEoSSKb9AnpRjPpEuDpIAAAAAElFTkSuQmCC)
              20 28 / 20px 25px / 15px round;
          }
          .message--user {
            border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABNCAYAAADjCemwAAACTUlEQVR4Xu2cMVLDMBBFlYKCS3AMbgINQ5uWC1ByAdq0DA3chGNwCQoKmCFDxlbk7Op7pcTwaO1dS0//ryRbYZUa/J1fXnw1SFud8uPtfVUd5AhokhRoDvL5LUAD2h6BEHvmyrq9Wwuo40OeHjejpFE1DmjCWAENaGMCJ2VPq4a9Xn8K4xcfcvVyNkoaBVGyJ9CEAQYa0KoJuOy5FGVZvY+qcUAbkPYufoEGtMMGbWrP1jUsb7xVi6auz10PqhCL9gTadpimahzQBjL27hh+oFkvDfNXPdG2WKQ9e9txc3PvmrUtmOvnh9G3iOjBnFJeUWmtlQU0Sw4ppXyWAhrQtgTm2rOVsqzxmVvjvOu2JjUNaCml2lkJaEDbVYXfHUKIPY+lrOga17WmAU2YPYEGtJ3rm26jUBpKQ2nDGdZabzJ7ppRqt1VAA5q1jC1fR2kCN6ABTSAghKA0oAkEhBCUBjSBgBCC0oAmEBBCUNpfg5b351jv12qVZbW76UtI6+FRxxAssQHNIlS4DrT/Bq2XXecqy2pn15pmNSaqxgHtCHa0BhelOQal6htBnq/3GVxHf4q3WF+XrLxeSHkejsQPiFQdiUdpWwJAs7xZOEA9C1pv5Tn6F3KLWsNcNQ1oh8fI9cuR1rNpiIwcSVCaA5K6eLVSu5S2VLtGKUuqaUAbE0BplhcL14HWC1qtXYV2hYR4F6u1D5OUBrRazIX7rXVcwCOkFChNwHbS0Cy7Cv0NCfH+G5zah4XUNKDVYnfUuICUUgqUJmBbFDShf4sK+QbxOcR7ZZ/xOwAAAABJRU5ErkJggg==)
              20 30 / 20px 25px / 15px round;
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

          .message + .message {
            margin-top: 45px;
          }
        `}</style>
      </div>
    );
  }
}

Message.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  showNext: PropTypes.func,
  scrollToBottom: PropTypes.func,
  isTypingEnabled: PropTypes.bool,
};

export default Message;
