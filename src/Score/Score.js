import React, { Component } from "react"
import PropTypes from "prop-types"
import "./Score.css"

class Score extends Component {
  isCorrect(answer, response) {
    const answerSet = answer instanceof Set
    const responseSet = response instanceof Set

    if (!answerSet && !responseSet) {
      return answer === response
    }

    if (answerSet && responseSet) {
      // NOTE: all responses appear in the answer
      for (const r of response) {
        if (!answer.has(r)) return false
      }

      // NOTE: all answers appear in the response
      for (const a of answer) {
        if (!response.has(a)) return false
      }
      return true
    }

    return false
  }

  stringify(subject) {
    const response =
      subject instanceof Set
        ? Array.from(subject).join(" ")
        : subject && subject.trim()

    return response || "No Response"
  }

  renderScore() {
    let correctCount = 0

    return this.props.score
      .map(({ answer, response, prompt }, idx) => {
        const isCorrect = this.isCorrect(answer, response)

        const style = isCorrect
          ? (correctCount++, "score-correct")
          : "score-incorrect"

        const mark = isCorrect ? "✔︎" : "✗"

        return (
          <p key={idx}>
            <small>
              <i>{prompt}</i>
            </small>
            <br/>
            <span className={style}>{`${mark} ${this.stringify(response)}`}</span>
          </p>
        )
      })
      .concat(
        <p key={"last"} className="score-summary">
          {`${correctCount}/${this.props.score.length}`}
        </p>
      )
  }

  render() {
    return (
      <div className="score">
        <p>Congratulations! You finished the quiz.</p>
        {this.renderScore()}
      </div>
    )
  }
}

Score.propTypes = {
  score: PropTypes.array
}

Score.defaultProps = {
  score: []
}

export default Score
