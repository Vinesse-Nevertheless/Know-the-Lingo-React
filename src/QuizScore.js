import React, { Component, useState } from "react";
import QuizEnd from "./QuizEnd";

let quizData = require("./quiz_data.json");


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