import React, { Component } from "react";
//I think there is something wrong with the test for this final task.

/*
Button Flow 1

onClick prop in the <button> tag binds the button to the handleClick() below the render().
handleClick() then looks to QuizQuestion.js to lay out the logic for how to handle the click.
handleClick() passes the fact that a button has been clicked to the clickHandler prop in QuizQuestion.js
Go to QuizQuestion.js for part 2.
*/

class QuizQuestionButton extends Component {
  render() {
    return (
      <li>
        <button onClick={this.handleClick.bind(this)}>
          {" "}
          {this.props.button_text}{" "}
        </button>{" "}
        {/* Adds event handler that is bound to the method below. */}
      </li>
    );
  }
  //Make the buttons do something when clicked
  handleClick() {
    this.props.clickHandler(this.props.button_text);
  }
}

export default QuizQuestionButton;
