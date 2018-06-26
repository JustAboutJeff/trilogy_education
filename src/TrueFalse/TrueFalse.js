import React, { Component } from "react"
import PropTypes from "prop-types"
import "./TrueFalse.css"
import uid from "../uid"

class TrueFalse extends Component {
  constructor(props) {
    super(props)
    this.nameUid = uid()
  }

  handleChange = e => {
    const response = e.target.value
    this.props.onChange(response)
  }

  render() {
    const { prompt, response } = this.props
    const trueChecked = response === "true"
    const falseChecked = response === "false"

    return (
      <form className="true-false-form">
        <fieldset onChange={this.handleChange} className="true-false-fieldset">
          <legend>{prompt}</legend>
          <label className="true-false-label">
            <input
              type="radio"
              name={this.nameUid}
              value="true"
              checked={trueChecked}
              className="true-false-input"
            />
            {"True"}
          </label>
          <label className="true-false-label">
            <input
              type="radio"
              name={this.nameUid}
              value="false"
              checked={falseChecked}
              className="true-false-input"
            />
            {"False"}
          </label>
        </fieldset>
      </form>
    )
  }
}

TrueFalse.propTypes = {
  onChange: PropTypes.func,
  prompt: PropTypes.string
}

TrueFalse.defaultProps = {
  onChange: Function.prototype,
  prompt: ""
}

export default TrueFalse
