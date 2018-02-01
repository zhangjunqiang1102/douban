import {combineReducers} from 'redux'
import movie from './movie'
import radio from './radio'
import group from './group'

export default combineReducers({
  movie,radio, group
})
