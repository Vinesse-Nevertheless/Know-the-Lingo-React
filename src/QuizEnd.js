

import React, { Component, useState } from "react";

let quizData = require("./quiz_data.json");


class QuizEnd extends Component {
  render() {
    const score = this.props.finalScore.score
    return (
      <>
      <div className="score-text">
        <div className="score">Thanks for playing!
        
          <p>Your final score is {score}   out of {quizData.quiz_questions.length}</p>
        </div>
        <a onClick={this.handleResetClick.bind(this)} href="">
          Reset Quiz
        </a>
      </div>
      </> 
    );
  }
  handleResetClick() {
    this.props.resetClickHandler();
  }
}

export default QuizEnd;
