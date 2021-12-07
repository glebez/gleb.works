import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Response from './response';

const Responses = ({ responses, chosenResponseIds, handleResponse }) => {
  const [focusedResponseIndex, setFocusedResponseIndex] = useState(null);
  const responsesContainer = React.createRef();

  const responseRefs = responses.map(() => React.createRef());

  const focusResponseByIndex = i => {
    responseRefs[i]?.current?.focus();
    setFocusedResponseIndex(i);
  }

  const handleKeyDown = e => {
    if (!responses?.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      let nextFocusedResponseIndex = focusedResponseIndex + 1;
      if (nextFocusedResponseIndex >= responseRefs.length) {
        nextFocusedResponseIndex = 0;
      }
      focusResponseByIndex(nextFocusedResponseIndex);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      let nextFocusedResponseIndex = focusedResponseIndex - 1;
      if (nextFocusedResponseIndex < 0) {
        nextFocusedResponseIndex = responseRefs.length - 1;
      }
      focusResponseByIndex(nextFocusedResponseIndex);
    }
  };

  useEffect(
    () => {
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    },
    [responses, focusedResponseIndex]
  );

  useEffect(
    () => {
      focusResponseByIndex(0)
    },
    [responses]
  );

  return (
    <nav className="responses-container" ref={responsesContainer}>
      <ul className="responses-list">
        {responses &&
          responses.map(({ text, id, value }, i) => {
            const isMuted = chosenResponseIds.indexOf(id) > -1;
            return (
              <Response
                isMuted={isMuted}
                text={text}
                key={id}
                id={id}
                markFocused={focusResponseByIndex.bind(null, i)}
                ref={responseRefs[i]}
                onSubmit={handleResponse.bind(null, value, text, id)}
              />
            );
          })}
      </ul>
      <style jsx>{`
        .responses-container {
          grid-column-start: 2;
          padding-top: 10px;
          padding-left: 10px;
          overflow: auto;
        }
        .responses-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </nav>
  );
};

Responses.propTypes = {
  responses: PropTypes.arrayOf(PropTypes.object),
  handleResponse: PropTypes.func,
  chosenResponseIds: PropTypes.arrayOf(PropTypes.string),
};

export default Responses;
