import React, { Component } from 'react'
import Link from 'next/link'
import style from '../home.css'

export default class Home extends Component {
  constructor (props) {
    super(props)
  }

  testAction = e => {
    this.props.testContainer('ahihi');
  }

  render() {
    const { test } = this.props;
    return (
      <div>
        <style jsx>{style}</style>
        <h1>{test}</h1>
        <input
          type='checkbox'
          onClick={this.testAction}
         />
        <Link href={{ pathname: '/about', query: { name: 'test' } }}>
          <a>About Here!</a>
        </Link>
      </div>
    )
  }
}
