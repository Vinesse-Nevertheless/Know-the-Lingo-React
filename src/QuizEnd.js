

import React, { Component, useState } from "react";

let quizData = require("./quiz_data.json");


class QuizEnd extends Component {
  render() {
    const score = this.props.finalScore.score
    return (
      <>
        <div className="scoreboard">
          <div >Thanks for playing!
            <p>Your final score is {score}/{quizData.quiz_questions.length}.</p>
          </div>
          <a onClick={this.handleResetClick.bind(this)} href="">
            Play Again?
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
