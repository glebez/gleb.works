import React from "react";
import Response from './response';

class Responses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeResponseId: null,
    }

    this.markActive = this.markActive.bind(this);
  }

  markActive(id) {
    this.setState({activeResponseId: id});
  }

  render() {
    const { responses } = this.props;
    const { activeResponseId } = this.state;
    return (
      <>
          {responses && responses.map(({text, id}, i) => <Response isActive={id === activeResponseId} text={text} key={id} id={id} markActive={this.markActive} />)}
      </>
  );
  }
}

export default Responses;
