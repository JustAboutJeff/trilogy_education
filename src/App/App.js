import React, { Component } from "react"
import "./App.css"
import initialState from "./initialState"

import MultipleChoice from "../MultipleChoice"
import FillBlank from "../FillBlank"
import TrueFalse from "../TrueFalse"
import Page from "../Page"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = Object.assign({}, initialState)
  }

  handleResponse = response => {
    const { workflow: original, page } = this.state
    const workflow = original.slice()
    workflow[page] = Object.assign({}, this.activePage, { response })
    this.setState(prev => Object.assign({}, prev, { workflow }))
  }

  handlePageForward = e => {
    e.preventDefault()

    this.setState(function(prev) {
      const newState = { page: prev.page + 1 }
      const isLastPage = newState.page === prev.workflow.length - 1

      if (
        isLastPage &&
        window.confirm(
          "Submit your quiz? You cannot edit your answers after this point"
        )
      ) {
        newState.didSubmit = true
      } else if (isLastPage) {
        return prev
      }

      return Object.assign({}, prev, newState)
    })
  }

  handlePageBackward = e => {
    e.preventDefault()
    this.setState(prev => Object.assign({}, prev, { page: prev.page - 1 }))
  }

  handleReset = e => {
    e.preventDefault()
    this.setState(prev => Object.assign({}, initialState))
  }

  isQuestionPage({ type } = this.activePage) {
    return [MultipleChoice, FillBlank, TrueFalse].includes(type)
  }

  get activePage() {
    const { workflow, page } = this.state
    return workflow[page]
  }

  get score() {
    return this.state.workflow.filter(this.isQuestionPage)
  }

  get hasResponse() {
    return Boolean(!this.isQuestionPage() || this.activePage.response)
  }

  get canPageForward() {
    const { workflow, page } = this.state
    return this.hasResponse && page + 1 < workflow.length
  }

  get canPageBackward() {
    const { didSubmit, page } = this.state
    return !didSubmit && page - 1 >= 0
  }

  render() {
    return (
      <Page
        canPageBackward={this.canPageBackward}
        canPageForward={this.canPageForward}
        page={this.activePage}
        score={this.score}
        onPageBackward={this.handlePageBackward}
        onPageForward={this.handlePageForward}
        onResponse={this.handleResponse}
        onReset={this.handleReset}
      />
    )
  }
}

export default App
