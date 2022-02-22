# Know-the-Lingo-React
# A Quiz Component App with React

This is a simple quiz app with trivia about scripts used to write different languages.

This app uses React, Javascript, HTML, and CSS.

In short, when the user clicks a button, the next question shows.
If the user gets the question correct, the score is incremented.
If the user gets the question incorrect, the user receives a message that this
is the incorrect answer choice.
The user must try until he/she chooses the correct answer in order to progress to
the next trivia question.
When the user gets to the end of the quiz, their total score is shown, and
the user is invited to play the game again.

There are several components across different files, pass data as props, and propagate events up and down a chain of components.

There are several quiz components used in this app:

## Quiz Component 
<ul>
<li>displays quiz information from state that contains data from a local JSON file.</li>
</ul>

## QuizQuestion Component
<ul>
<li>displays quiz question data </li>
<li>iterates over an array of questions and display multiple QuizQuestionButtons. </li>
<li>creates methods and event handlers that call them when the button tag in a QuizQuestionButton component is clicked </li>
<li>has those methods increment the position value in the Quiz component's state.</li>
<li>tracks if a questions was answered incorrectly, and display an error message if the last answer was incorrect.</li>
</ul>

## QuizQuestionButton Component
<ul>
<li>display quiz answer buttons </li>
</ul>

## QuizEnd Component
<ul>
<li>display a reset quiz link after the quiz is completed.</li>
</ul>

The Quiz, QuizQuestion, QuizQuestionButton, and QuizEnd components contain methods and event handlers that call them when the anchor tag in the QuizEnd component is clicked. Those methods reset the position value in the Quiz component's state.

This app was built based on the Pluralsight Project "Build a Quiz Component with React," located here: https://app.pluralsight.com/projects/build-a-quiz-component-with-react/
(for the complete ReadMe for this project, please see: https://github.com/pluralsight-projects/React-QuizComponent#readme) and FreeCodeCamp's "How to Build a Quiz App Using React" located here: https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/.

This project was generated with `create-react-app` version 1.5.2.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.