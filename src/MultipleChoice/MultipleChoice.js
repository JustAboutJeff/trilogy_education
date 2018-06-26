import React, { Component } from "react"
import PropTypes from "prop-types"
import "./MultipleChoice.css"
import uid from "../uid"

class MultipleChoice extends Component {
  handleChange = e => {
    const { checked: isChecked, value } = e.target
    const response = new Set(this.props.response)

    if (isChecked) {
      response.add(value)
    } else {
      response.delete(value)
    }

    this.props.onChange(response)
  }

  renderChoices() {
    const { response, choices } = this.props
    return choices.map((choice, idx) => {
      const choiceUid = uid()
      const isChecked = response.has(choice)
      return (
        <div key={idx}>
          <label className="multiple-choice-label">
            <input
              checked={isChecked}
              type="checkbox"
              name={choiceUid}
              value={choice}
              className="multiple-choice-input"
            />
            {choice}
          </label>
        </div>
      )
    })
  }

  render() {
    const { prompt } = this.props

    return (
      <form className="multiple-choice-form">
        <fieldset
          onChange={this.handleChange}
          className="multiple-choice-fieldset"
        >
          <legend>{prompt}</legend>
          {this.renderChoices()}
        </fieldset>
      </form>
    )
  }
}

MultipleChoice.propTypes = {
  choices: PropTypes.array,
  onChange: PropTypes.func,
  prompt: PropTypes.string,
  response: PropTypes.instanceOf(Set)
}

MultipleChoice.defaultProps = {
  choices: [],
  onChange: Function.prototype,
  prompt: "",
  response: new Set()
}

export default MultipleChoice
