import React, { Component } from "react"
import "./Instructions.css"

class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        <p>{`Welcome! This is a quiz designed to test your code knowledge.`}</p>
        <p>
          {`You will work through each question, one at a time. You must provide an answer to move forward to the next question.`}
        </p>
        <p>
          {`You can always go backward and revisit a previous question using the navigation buttons at the bottom of the page.`}
        </p>
        <p>
          {`Your answers will be automatically saved as you work, and will be available even if you navigate to another question.`}
        </p>
        <p>
          {`When you are finished with all questions, you will be prompted to submit your quiz for scoring.`}
        </p>
        <p>
          {`After submitting, you can view your score but cannot edit any of your answers.`}
        </p>
        <p>{`Simply hit the reset button below to take the quiz again.`}</p>
        <p>{`Enjoy!`}</p>
      </div>
    )
  }
}

export default Instructions
