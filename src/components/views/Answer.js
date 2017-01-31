import React from 'react';

export default class Answer extends React.Component {

  constructor() {
    super();
    this.state = {
      answerInput: '',
    };
	}

  handleSubmit(event) {
    event.preventDefault();
		this.props.onAnswerSubmit(this.state.answerInput);
    this.setState({
      answerInput: ''
    });
  }

  handleChange(event) {
		this.setState({answerInput: event.target.value});
	}

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        onChange={this.handleChange.bind(this)}>
				<input
          type="text"
          placeholder="Capital Name"
          value={this.state.answerInput} />
			</form>
    );
  }
}
