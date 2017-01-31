import React from 'react';

export default class Question extends React.Component {

  render() {
    return (
      <div>
        <span>{this.props.question}?</span>
      </div>
    );
  }
}
