import React, { Component } from 'react'
import About from '../src/modules/about/components/about'
import configureStore from '../src/common/store'

class Page extends Component {

  render() {
    return (
      <div>
        <About />
      </div>
    )
  }
}

export default configureStore(Page)