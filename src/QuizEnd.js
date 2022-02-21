import React, { Component, useState } from "react";
import QuizScore from "./QuizScore";

class QuizEnd extends Component {
  render() {
    return (
      <>
      <div>
        <p>Thanks for playing!</p>
        <a onClick={this.handleResetClick.bind(this)} href="">
          Reset Quiz
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
