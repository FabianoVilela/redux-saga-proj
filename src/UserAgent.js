import React, { Component } from 'react'

import { loadDataUARequest } from './actions'
import { connect } from 'react-redux'

class UserAgent extends Component {
  render () {
    return (
      <div>
        <strong>User-agent:</strong> {this.props.data}
        <br />
        <button onClick={() => this.props.loadData()}>Load UA</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.ua.isFetching,
    data: state.ua.data,
    error: state.ua.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadDataUARequest())
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(UserAgent)