import React from "react";
import Typing from 'react-typing-animation';

class Message extends React.Component {
  render() {
    const { showNext } = this.props;
    return (
      <div className="message">
      <Typing onFinishedTyping={showNext}>
        <p className="message__copy">{this.props.text}</p>
      </Typing>
        <style jsx>{`
          .message {
            position: relative;
            padding: 5px 20px;
            background-color: rgba(0,0,50,.7);
            border-style: outset;
            border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABMCAYAAADKiSFsAAAAAXNSR0IArs4c6QAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KTMInWQAAAlpJREFUeAHtnDFOAzEQRQnKXTgCHQVFEOIuSLSpUtEicReEoKCg4wicBgqkkfytGY/X60gRL9WMZ2xP3tpf680qm7OVP7fXdz8rD7louNePl82ijk6nc6edZiEAKAHiuYDyyEj7VvxuVzVpd3XTPcakDoVWjmoWKyp5lQAFqCSBZFq3RrU06evxOzn13LTdvtLKIc1i6yWvF6AAlSSQTGueh05Fk1rf93J/UaS8f74Vfus+i61X4PIdQPlsigigChy+U2nUbE1SrfBLiyOj92taR0uzWFHx9bAooAxFbGx1q8Xp/zdanfX0edLaWvBwuK90cQn+p8NzcXbrrVPzW2dDtl7yKgEKUEkCybRKo5L93DS9P1lLk3RCHXdUs3R89dl6SsTxAeWA0WZAKRHHH9aoY2mSU781z9YsVpShjg1AxXwsCihDERuAivlYFFCGIjYAFfOxKKAMRWwAKuZjUUAZitgAVMzHooAyFLEBqJiPRQFlKGIDUDEfiwLKUMQGoGI+FgWUoYgNQMV8LAooQxEbw8/M9Td8/X1Nn2XH5SyP6rxa1/KR/3qyopIEAQWoJIFk2rBG6TyqDaoda2mWjqvzal2jPlsvSRBQgEoSSKZV71Pqy6+z3+lM1lmljWqSvjPBe+YV4mUNaFSSG6CSoCqN0n6zNUvnm+X3apLWwYpSIo4PKAeMNgNKiTh+U6O036lo1qgm6fdmRSkRxweUA0abAaVEHL9bo3SclmZp/rH81tmttw5WVJIYoACVJJBMG9YonUc1S+PH8lv/tdJbB1svSQxQgEoSSKb9AnpRjPpEuDpIAAAAAElFTkSuQmCC) 20 28 / 20px 25px / 15px round;
          }

          .message__copy:before {
            content: '- ';
          }

          .message + .message {
            margin-top: 45px;
          }
        `}</style>
      </div>
  );
  }
}

export default Message;
