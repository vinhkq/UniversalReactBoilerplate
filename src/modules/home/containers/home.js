import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Home from '../components/home'
import { testAction } from '../HomeAction'

const mapDispatchToProps = dispatch => ({
  testContainer: (data) => {
    // dispatch(testAction(data))     pass data from component
    dispatch(testAction())     // pass data from saga
  },

})

const mapStateToProps = state => {
  return {
    test: state.reducer.HomeReducer.test
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
