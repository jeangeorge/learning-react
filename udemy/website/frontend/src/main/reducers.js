import { combineReducers } from 'redux'
import exemploReducer from '../exemplo/exemploReducer'

const rootReducer = combineReducers({
    exemplo: exemploReducer
})

export default rootReducer