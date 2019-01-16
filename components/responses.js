import React from "react";
import Response from './response';

class Responses extends React.Component {
  render() {
    const { responses, handleResponse, activeResponseId, markResponseActive } = this.props;
    return (
      <>
          {responses && responses.map(({text, id, value}) => <Response isActive={id === activeResponseId} text={text} key={id} id={id} markActive={markResponseActive} onClick={handleResponse.bind(null, value, text)} />)}
      </>
  );
  }
}

export default Responses;
