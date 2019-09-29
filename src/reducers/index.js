import {combineReducers} from 'redux'
import PasswordReducer from './passwordReducer'

const rootReducer = combineReducers({
  password: PasswordReducer,
})

export default rootReducer
