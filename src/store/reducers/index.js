import {combineReducers} from 'redux'
import movie from './movie'

import book from './book'
import radio from './radio'
import group from './group'
import home from './slider'
export default combineReducers({
  movie,radio, group,book,home
})
