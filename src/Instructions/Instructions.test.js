import React, { isValidElement } from "react"
import ReactDOM from "react-dom"
import Instructions from "./Instructions"

describe("Instructions", function() {
  const element = <Instructions />

  it("returns a valid React element", function() {
    expect(isValidElement(element)).toEqual(true)
  })

  it("renders without crashing", function() {
    const div = document.createElement("div")
    ReactDOM.render(element, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
