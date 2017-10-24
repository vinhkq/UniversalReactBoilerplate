import React, { Component } from 'react'
import Home from '../src/modules/home/containers/home'
import reducer from '../src/common/rootReducer'
import saga from '../src/common/rootSaga'
import Layout from '../src/common/layout/Layout'
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

export default configureStore({
  Page: Layout(Page),
  reducer: { reducer }
})