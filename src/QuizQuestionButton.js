import React, { Component } from "react";
/*
Component that handles question button clicks.
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
