import React, { Component } from 'react'

export default class Home extends Component {
  constructor (props) {
    super(props)
  }

  testAction = e => {
    this.props.dispatch({type: 'TEST', data: 'ahihi'})
  }

  render() {
    const { test } = this.props;
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
