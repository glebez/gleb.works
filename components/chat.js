import React, { useState, useEffect, useRef } from 'react';
import Avatar from './avatar';
import ChatBrain from '../chat';
import Message from '../chat/message';
import Messages from './messages';
import Responses from './responses.js';

const Chat = () => {
  const chat = new ChatBrain();
  const [messages, setMessages] = useState([]);
  const [shownMessages, setShownMessages] = useState([]);
  const [responses, setResponses] = useState([]);
  const [chosenResponseIds, setChosenResponsesIds] = useState([]);
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const shouldShowNext = useRef(true);

  const showNext = () => {
    if (!messages.length) {
      setIsDoneTyping(true);
    } else {
      const [next, ...rest] = messages;
      setIsDoneTyping(false);
      setMessages(rest);
      setShownMessages([...shownMessages, next]);
    }
  };

  const handleResponse = (value, text, id) => {
    const { messages, responses } = chat.trigger(value);
    const newShownMessages = text
      ? [...shownMessages, new Message(text, 'user')]
      : shownMessages;
    const newChosenResponseIds = [...chosenResponseIds, id];
    shouldShowNext.current = true;
    setMessages(messages);
    setResponses(responses);
    setShownMessages(newShownMessages);
    setChosenResponsesIds(newChosenResponseIds);
  };

  useEffect(
    () => {
      shouldShowNext.current && showNext();
      return () => {
        if (messages.length) {
          shouldShowNext.current = false;
        }
      };
    },
    [messages]
  );

  useEffect(() => {
    handleResponse('welcome');
  }, []);

  return (
    <div className="chat">
      <div className="chat__inner">
        <Avatar />
        <Messages messages={shownMessages} showNext={showNext} />
        {isDoneTyping && (
          <Responses
            responses={responses}
            chosenResponseIds={chosenResponseIds}
            handleResponse={handleResponse}
          />
        )}
      </div>
      <style jsx>{`
        .chat {
          position: relative;
        }
        .chat__inner {
          display: grid;
          grid-template-columns: 1fr 9fr;
          grid-template-rows: 2fr 1fr;
          height: 100vh;
          max-width: 900px;
          margin: 0 auto;
        }

        @media screen and (max-width: 768px) {
          .chat__inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Chat;
