import React from 'react';
import PropTypes from 'prop-types';
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
      <div className="container">
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
        <style jsx>{`
          .container {
            grid-column-start: 2;
            margin-bottom: 25px;
          }
        `}</style>
      </div>
    );
  }
}

Responses.propTypes = {
  responses: PropTypes.arrayOf(PropTypes.object),
  handleResponse: PropTypes.func,
  activeResponseId: PropTypes.string,
  chosenResponseIds: PropTypes.arrayOf(PropTypes.string),
  markResponseActive: PropTypes.func,
};

export default Responses;
