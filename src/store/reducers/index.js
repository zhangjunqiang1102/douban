import {combineReducers} from 'redux'
import movie from './movie'
import session from './session'

export default combineReducers({
  movie,
  session
})
