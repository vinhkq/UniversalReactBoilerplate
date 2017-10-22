import React, { Component } from 'react'
import Home from '../src/modules/home/containers/home'
import reducer from '../src/common/rootReducer'
import saga from '../src/common/rootSaga'
import defaultPage from '../src/common/defaultPage'

class Page extends Component {

  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default defaultPage({
  Page, 
  reducer: { reducer }
})