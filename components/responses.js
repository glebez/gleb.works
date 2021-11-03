import React from 'react';
import PropTypes from 'prop-types';
import Response from './response';

class Responses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeResponseId: null,
      responseIds: [],
    };

    this.markResponseActive = this.markResponseActive.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.setupResponsesState = this.setupResponsesState.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    this.setupResponsesState();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.responses !== this.props.responses) {
      this.setupResponsesState();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  setupResponsesState() {
    this.markResponseActive(this.props.responses[0].id);
    this.setState({
      responseIds: this.props.responses.map(response => response.id),
    });
  }

  markResponseActive(id) {
    this.setState({ activeResponseId: id });
  }

  handleKeyDown(e) {
    if (e.key === 'ArrowDown') {
      const { activeResponseId, responseIds } = this.state;
      let nextActiveResponseIndex = responseIds.indexOf(activeResponseId) + 1;
      if (nextActiveResponseIndex >= responseIds.length) {
        nextActiveResponseIndex = 0;
      }
      this.markResponseActive(responseIds[nextActiveResponseIndex]);
    }

    if (e.key === 'ArrowUp') {
      const { activeResponseId, responseIds } = this.state;
      let nextActiveResponseIndex = responseIds.indexOf(activeResponseId) - 1;
      if (nextActiveResponseIndex < 0) {
        nextActiveResponseIndex = responseIds.length - 1;
      }
      this.setState({ activeResponseId: responseIds[nextActiveResponseIndex] });
    }

    if (e.key === 'Enter') {
      const { activeResponseId, responseIds } = this.state;
      const { responses } = this.props;
      if (activeResponseId) {
        const response = responses[responseIds.indexOf(activeResponseId)];
        this.props.handleResponse(response.value, response.text, response.id);
      }
    }
  }

  render() {
    const { responses, chosenResponseIds, handleResponse } = this.props;

    const { activeResponseId } = this.state;

    return (
      <div className="responses-container">
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
                markActive={this.markResponseActive}
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
  }
}

Responses.propTypes = {
  responses: PropTypes.arrayOf(PropTypes.object),
  handleResponse: PropTypes.func,
  chosenResponseIds: PropTypes.arrayOf(PropTypes.string),
};

export default Responses;
