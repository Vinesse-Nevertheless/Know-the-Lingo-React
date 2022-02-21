import React, { Component, useState } from "react";

let quizData = require("./quiz_data.json");


class QuizScore extends Component {
  render() {
    return (
      <div className="scoreDisplay">
        <p>Your score is {this.props.parentState.score} out of {quizData.quiz_questions.length}
        </p>
      </div>
    );
  }
}

export default QuizScore;
