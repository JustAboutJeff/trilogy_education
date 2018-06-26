import React, { isValidElement } from "react"
import ReactDOM from "react-dom"
import Score from "./Score"

describe("Score", function() {
  const element = <Score />

  it("returns a valid React element", function() {
    expect(isValidElement(element)).toEqual(true)
  })

  it("renders without crashing", function() {
    const div = document.createElement("div")
    ReactDOM.render(element, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
