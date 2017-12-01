import { combineReducers } from 'redux'
import {
  REQUEST_DEVOTIONALS,
  RECEIVE_DEVOTIONALS
} from './actions'

const initialState = {
    isFetching: false,    
    devotionals: [{"title":"lol"}]
}

function devotionals(state = initialState, action) {

  switch (action.type) {
    case REQUEST_DEVOTIONALS:
      return Object.assign({}, state, {
        isFetching: true
    })
    case RECEIVE_DEVOTIONALS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.devotionals,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  devotionals
})

export default rootReducer