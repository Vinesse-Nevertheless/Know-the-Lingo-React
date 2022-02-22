import React, { Component, useState } from "react";

let quizData = require("./quiz_data.json");
/*
This component increments scoring when correct answer is selected,
and displays the number of questions in the entire app.
*/
class QuizScore extends Component {
 
  render() {
    return (
      <div className="score-text">
        <p>Current score: {this.props.parentState.score} / {quizData.quiz_questions.length}
        </p> 
      </div> 
    );  
  }
  }
export default QuizScore;