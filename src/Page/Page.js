import React, { Component } from "react"
import PropTypes from "prop-types"
import "./Page.css"

class Page extends Component {
  renderHeader() {
    const { page } = this.props

    return (
      <header className="heading">
        <h1 className="heading-h1">{"Code Quiz"}</h1>
        <div className="heading-spin">{"\u2328"}</div>
        <div className="heading-subtitle">{page.headerMessage}</div>
      </header>
    )
  }

  renderMain() {
    const { onResponse, page, score } = this.props

    return (
      <main className="main">
        <page.type {...page} score={score} onChange={onResponse} />
      </main>
    )
  }

  renderFooter() {
    const {
      canPageBackward,
      canPageForward,
      onPageBackward,
      onPageForward,
      onReset
    } = this.props

    return (
      <footer className="footer">
        <button
          className="footer-button"
          disabled={!canPageBackward}
          onClick={onPageBackward}
          children={"\u23ea"}
        />
        <button
          className="footer-button footer-reset"
          onClick={onReset}
          children={"Reset Entire Quiz"}
        />
        <button
          className="footer-button"
          disabled={!canPageForward}
          onClick={onPageForward}
          children={"\u23e9"}
        />
      </footer>
    )
  }

  render() {
    return (
      <div className="page">
        {this.renderHeader()}
        {this.renderMain()}
        {this.renderFooter()}
      </div>
    )
  }
}

Page.propTypes = {
  canPageBackward: PropTypes.bool,
  canPageForward: PropTypes.bool,
  onPageBackward: PropTypes.func,
  onPageForward: PropTypes.func,
  onResponse: PropTypes.func,
  onReset: PropTypes.func,
  score: PropTypes.array,
  page: PropTypes.shape({
    choices: PropTypes.any,
    headerMessage: PropTypes.string,
    prompt: PropTypes.string,
    response: PropTypes.any,
    type: PropTypes.any
  })
}

Page.defaultProps = {
  canPageBackward: false,
  canPageForwadr: false,
  onPageBackward: Function.prototype,
  onPageForward: Function.prototype,
  onResponse: Function.prototype,
  onReset: Function.prototype,
  score: [],
  page: {
    choices: [],
    prompt: "",
    response: "",
    type: "div"
  }
}

export default Page
