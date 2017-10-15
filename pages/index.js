
import React, { Component } from 'react'
import configureStore from '../src/common/store'
import Home from '../src/modules/home/containers/home'
import reducer from '../src/common/rootReducer'
import saga from '../src/common/rootSaga'

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
  Page, 
  reducer: { reducer }
})