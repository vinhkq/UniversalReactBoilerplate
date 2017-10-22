import React, { Component } from 'react'
import Router from 'next/router'

export default class About extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { router: { query } } = Router
    return (
      <div>
        This is about page with params {query.name}
      </div>
    )
  }
}
