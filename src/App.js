import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchDevotionals } from './actions'
import DevotionalList from './components/DevotionalList'

class App extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    const { dispatch} = this.props
    dispatch(fetchDevotionals())
  }

  onClick() {
    console.log('lol')
  }

  render() {
    const { devotionals, isFetching, lastUpdated } = this.props
    return (
      <div>
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>}
        </p>
        {isFetching && devotionals.length === 0 && <h2>Loading...</h2>}
        {!isFetching && devotionals.length === 0 && <h2>Empty.</h2>}
        { devotionals.items && 
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <DevotionalList devotionals={devotionals.items} onClick={this.onClick}/>
          </div>
        }
      </div>
    )
  }
}

App.propTypes = {
  devotionals: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const {
    devotionals,
    isFetching,
    lastUpdated,
  } = {
    devotionals: state.devotionals,    
    isFetching: state.devotionals.isFetching,
    lastUpdated: state.devotionals.lastUpdated
  }

  return {
    devotionals,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)