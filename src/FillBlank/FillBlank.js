import React, { Component } from "react"
import PropTypes from "prop-types"
import "./FillBlank.css"

class FillBlank extends Component {
  handleChange = e => {
    const response = e.target.value
    this.props.onChange(response)
  }

  render() {
    const { prompt, response } = this.props

    return (
      <form className="fill-blank-form">
        <fieldset className="fill-blank-fieldset">
          <legend>{prompt}</legend>
          <label>
            <input
              className="fill-blank-input"
              type="text"
              placeholder={"Enter your answer here"}
              value={response}
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
      </form>
    )
  }
}

FillBlank.propTypes = {
  onChange: PropTypes.func,
  prompt: PropTypes.string,
  response: PropTypes.string
}

FillBlank.defaultProps = {
  onChange: Function.prototype,
  prompt: "",
  response: ""
}

export default FillBlank
