import React, { Component } from 'react'

export default class Home extends Component {
  constructor (props) {
    super(props)
  }

  testAction = e => {
    this.props.testContainer()
  }

  render() {
    const { test, testContainer } = this.props;
    return (
      <div>
        <h1>{test}</h1>
        <input
          type='checkbox'
          onClick={this.testAction}
         />
      </div>
    )
  }
}
