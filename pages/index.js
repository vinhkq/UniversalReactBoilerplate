import React, { Component } from 'react'
import Home from '../src/modules/home/containers/home'
import configureStore from '../src/common/store'

class Page extends Component {

  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default configureStore(Page)