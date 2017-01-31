import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Countries from '../models/Countries';

export default class App extends React.Component {
  constructor() {
    super();

    this.countries = new Countries();
    this.state = {
      currentCountry: this.getRandomCountry(),
      userScore: 0
    };
  }

  checkAnswer(answerInput) {
    if(this.state.currentCountry.capital.toLowerCase() === answerInput.toLowerCase()) {
      this.updateScore(this.state.userScore + 1);
    } else {
      this.updateScore(this.state.userScore - 1);
    }

    this.loadNextQuestion();
  }

  updateScore(score) {
    this.setState({
      userScore: score
    });
  }

  loadNextQuestion() {
    this.setState({
      currentCountry: this.getRandomCountry()
    });
  }

  getRandomCountry() {
    return this.countries.getRandomCountry();
  }

  render() {
    return (
      <div>
        <span>What is the capital of...</span>
        <Question question={this.state.currentCountry.country} />
        <br/>
        <Answer onAnswerSubmit={this.checkAnswer.bind(this)}/>
        <span>Score: {this.state.userScore}</span>
      </div>
    );
  }
}
