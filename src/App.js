import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchDevotionals } from './actions'
import DevotionalList from './components/DevotionalList'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.state = {
     devotionalActive: false,
     activeDevotionalId: ""
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDevotionals())
  }

  onClick(devotionalId) {
    let devotionalState = !this.state.devotionalActive
    this.setState({
      devotionalActive: devotionalState,
      activeDevotionalId: devotionalId
    })
  }

  render() {
    const { devotionals, isFetching, lastUpdated } = this.props
    let showDevotional = false
    if (this.state.devotionalActive) {
      showDevotional = true
    }
    return (
      <div className="containerFluid">
        <h1 className="jumbotron" style={{textAlign:"center"}}>Daily Devotionals</h1>
        {isFetching && devotionals.length === 0 && <h2>Loading...</h2>}
        {!isFetching && devotionals.length === 0 && <h2>Empty.</h2>}
        { devotionals.items &&      
            <DevotionalList 
              devotionals={devotionals.items} 
              onClick={this.onClick} 
              showDevotional={showDevotional} 
              activeDevotional={this.state.activeDevotionalId}/>
        }
        <br/><br/>
        <p id="updated">
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>}
        </p>
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
