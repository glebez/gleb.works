import React from "react";
import Response from './response';

class Responses extends React.Component {
  render() {
    const { responses } = this.props;
    return (
      <>
          {responses && responses.map(({text}, i) => <Response isActive={i===0} text={text} key={text} />)}
      </>
  );
  }
}

export default Responses;
