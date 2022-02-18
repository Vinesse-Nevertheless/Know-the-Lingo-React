//Parent component to QuizQuestion.js and QuizEnd.js

import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js";
import QuizEnd from "./QuizEnd.js";

//Get quiz question number, question text, answer options and correct answer from json file
let quizData = require("./quiz_data.json");

/*
Button Flow 3
showQuestionHandler prop is in <QuizQuestion> component.
Before that code is run, an evaluation takes place to see if this is the last question in the quiz.
If it is the last question go to QuizEnd.js

If it's NOT the last question then showQuestionHandler prop is reached.
showQuestionHandler prop is bound to showQuestion()

showQuestion() changes the state of of the quiz question number--go from the current question to the next question
*/

//make data available in state for render
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
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
    this.setState({ quiz_position: this.state.quiz_position + 1 });
  }
  handleResetClick() {
    this.setState({ quiz_position: 1 });
  }
}
export default Quiz;
