//child component to Quiz.js and QuizQuestionButton
import React, { Component, useState } from "react";
import QuizScore from "./QuizScore.js";
import QuizEnd from "./QuizEnd.js";
import QuizQuestionButton from "./QuizQuestionButton.js";

let quizData = require("./quiz_data.json");

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false,
      score: 0,
      rightTheFirstTime: true,
      clickCorrect: "no"
    };
  }
/*
Render Quiz format by showing component that shows questions and answers.
QuizQuestion component shares state with QuizScore component which gives a real
time scoring effect.

If last question is reached logic is employed that hides the QuizQuestion component
and shows the QuizEnd component that gives the final score and asks user if he/she
would like to play the game again.

*/
  render() {
    return (
      <section>
        {this.props.quiz_question.id === quizData.quiz_questions.length && this.state.clickCorrect === "yes"
          ? (
            <QuizEnd finalScore={this.state} />
          ) : (

            <>
              <header className="head">
                <h3>Know the Lingo</h3>
              </header>

              <>
                <main className="app">
                  {" "}
                  {this.state.incorrectAnswer ? (
                    <p className="error"> Sorry, that's not right. </p>
                  ) : null}
                  <section className="question-text" >
                    <p>{this.props.quiz_question.instruction_text}</p>
                  </section>
                  <section className="buttons answer-section">
                    <ul>
                      {this.props.quiz_question.answer_options.map(
                        (
                          answer_option,
                          index //creates a new anonymous function (that's the => part) that receives answer_option & index as a parameter and will return a value of the modified data.
                        ) => (
                          <QuizQuestionButton
                            key={index}
                            button_text={answer_option}
                            clickHandler={this.handleClick.bind(this)}
                          />
                        )
                      )}{" "}
                    </ul>
                  </section>
                  <section>
                    <QuizScore parentState={this.state} />
                  </section>
                </main>
              </>
            </>
          )}
      </section>
    )
  }
  ;

  handleClick(buttonText) {
    if (buttonText == this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false })
      if (this.state.rightTheFirstTime) {
        this.setState({ score: this.state.score + 1 })
        this.setState({ clickCorrect: "yes" })
      }
      this.setState({ clickCorrect: "yes" })
      this.setState({ rightTheFirstTime: true });
      this.props.showNextQuestionHandler();
    } else {
      this.setState({ rightTheFirstTime: false });
      this.setState({ incorrectAnswer: true });
    }
    if (this.props.quiz_question.id == quizData.quiz_questions.length - 1) {
      this.setState({ clickCorrect: "no" })
    }
  }
}

export default QuizQuestion;
