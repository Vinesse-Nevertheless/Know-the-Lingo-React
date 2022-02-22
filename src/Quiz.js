//Parent component to QuizQuestion.js and QuizEnd.js

import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js";
import QuizEnd from "./QuizEnd.js";

//Get quiz question number, question text, answer options and correct answer from json file
let quizData = require("./quiz_data.json");

/*
This component progress through the json question file and the array with all 
the questions and answers.

Once the array is complete the QuizEnd component is displayed.
*/

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
      lastQuestion: false
    };
  }

  //render quiz question
  render() {
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;
    // const isQuizEnd = false
    return (
      <div className="QuizQuestion">
        {isQuizEnd ? (
           <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
        ) : (
          <QuizQuestion
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
          />
        )}
      </div>
    );
  }
  showNextQuestion() {
    if (this.state.quiz_position < quizData.quiz_questions.length){
    this.setState({ quiz_position: this.state.quiz_position + 1 });
    }
  }
  handleResetClick() {
    this.setState({ quiz_position: 1 });
  }
}
export default Quiz;
