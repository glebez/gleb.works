import React from 'react';
import Response from './response';

class Responses extends React.Component {
  render() {
    const {
      responses,
      handleResponse,
      activeResponseId,
      chosenResponseIds,
      markResponseActive,
    } = this.props;
    return (
      <>
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
                onClick={handleResponse.bind(null, value, text, id)}
              />
            );
          })}
      </>
    );
  }
}

export default Responses;
