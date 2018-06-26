import React, { isValidElement } from "react"
import ReactDOM from "react-dom"
import TrueFalse from "./TrueFalse"

describe("TrueFalse", function() {
  const element = <TrueFalse />

  it("returns a valid React element", function() {
    expect(isValidElement(element)).toEqual(true)
  })

  it("renders without crashing", function() {
    const div = document.createElement("div")
    ReactDOM.render(element, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
