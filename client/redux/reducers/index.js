import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
// import usersReducer from './users'
import mongoReducer from './mongoReducer'
// import users from './users'

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  mongoReducer
})

export default createRootReducer
