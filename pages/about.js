import React, { Component } from 'react'
import reducer from '../src/common/rootReducer'
import saga from '../src/common/rootSaga'
import defaultPage from '../src/common/defaultPage'
import About from '../src/modules/about/components/about'

class Page extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <About />
      </div>
    )
  }
}

export default defaultPage({
  Page, 
  reducer: { reducer }
})