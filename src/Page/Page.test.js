import React, { isValidElement } from "react"
import ReactDOM from "react-dom"
import Page from "./index"

describe("Page", function() {
  const element = <Page />

  it("returns a valid React element", function() {
    expect(isValidElement(element)).toEqual(true)
  })

  it("renders without crashing", function() {
    const div = document.createElement("div")
    ReactDOM.render(element, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
