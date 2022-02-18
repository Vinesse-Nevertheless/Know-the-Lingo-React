//child component to Quiz.js and QuizQuestionButton
import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton.js";

/*
Button Flow 2

The clickHandler prop in <QuizQuestionButton/> component below is bound the handleClick(buttonText)
The binding allows handleClick in QuizQuestionButton.js to pass an argument to clickHandler prop on this page
and to have handleClick(buttonText) implement logic.

The logic: if button clicked equals the right answer, go to the method that handles showing the next question.

Go to Quiz.js for part 3.
*/

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false,
    };
  }
  render() {
    {
      /* RETURN REQUIRED */
    }
    return (
      <>
      <header>
          <h3>Know the Lingo</h3>
      </header>
      <main className="app">
        {" "}
       
        {this.state.incorrectAnswer ? (
          <p className="error"> Sorry that's not right </p>
        ) : null}
        <section className="question-text" >
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons answer-section">
          <ul>
            {/* When you call this on an array, you can have it run through all the items in that array 
          and do something interesting with them – in our case, returning a new array of JSX that can 
          be drawn. 
          
          For every item in the array, it gives us the item itself in person and 
          the position of the item in index.*/}
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
            {/* React NEEDS a key attribute so that it knows which item is which. */}
          </ul>
        </section>
      </main>
      </>
    );
  }
  handleClick(buttonText) {
    if (buttonText == this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false });
      this.props.showNextQuestionHandler();
    } else {
      this.setState({ incorrectAnswer: true });
    }
  }
}

export default QuizQuestion;
