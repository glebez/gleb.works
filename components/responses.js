import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Response from './response';

const Responses = ({ responses, chosenResponseIds, handleResponse }) => {
  const [activeResponseId, setActiveResponseId] = useState(null);
  const [responseIds, setResponseIds] = useState([]);
  const [isKeyboardActivated, setIsKeyboardActivated] = useState(false);
  const resopnsesContainer = React.createRef();

  const markResponseActive = (id, isKeyboardActivated) => {
    setActiveResponseId(id);
    setIsKeyboardActivated(isKeyboardActivated);
  };

  const setupResponsesState = () => {
    markResponseActive(responses[0].id);
    setResponseIds(responses.map(response => response.id));
  };

  const handleKeyDown = e => {
    if (!responses?.length) return;
    if (e.key === 'ArrowDown') {
      let nextActiveResponseIndex = responseIds.indexOf(activeResponseId) + 1;
      if (nextActiveResponseIndex >= responseIds.length) {
        nextActiveResponseIndex = 0;
      }
      markResponseActive(responseIds[nextActiveResponseIndex], true);
    }

    if (e.key === 'ArrowUp') {
      let nextActiveResponseIndex = responseIds.indexOf(activeResponseId) - 1;
      if (nextActiveResponseIndex < 0) {
        nextActiveResponseIndex = responseIds.length - 1;
      }
      markResponseActive(responseIds[nextActiveResponseIndex], true);
    }

    if (e.key === 'Enter') {
      if (activeResponseId) {
        const response = responses[responseIds.indexOf(activeResponseId)];
        handleResponse(response.value, response.text, response.id);
      }
    }
  };

  useEffect(
    () => {
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    },
    [responses, responseIds, activeResponseId]
  );

  useEffect(
    () => {
      setupResponsesState();
    },
    [responses]
  );

  return (
    <div className="responses-container" ref={resopnsesContainer}>
      {responses &&
        responses.map(({ text, id, value }) => {
          const isActive = id === activeResponseId;
          const isMuted = chosenResponseIds.indexOf(id) > -1;
          return (
            <Response
              isActive={isActive}
              isMuted={!isActive && isMuted}
              text={text}
              key={id}
              id={id}
              markActive={markResponseActive}
              isKeyboardActivated={isKeyboardActivated}
              onClick={handleResponse.bind(null, value, text, id)}
            />
          );
        })}
      <style jsx>{`
        .responses-container {
          grid-column-start: 2;
          padding-top: 10px;
          padding-left: 10px;
          overflow: auto;
        }
      `}</style>
    </div>
  );
};

Responses.propTypes = {
  responses: PropTypes.arrayOf(PropTypes.object),
  handleResponse: PropTypes.func,
  chosenResponseIds: PropTypes.arrayOf(PropTypes.string),
};

export default Responses;
