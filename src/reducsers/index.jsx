// 合并reducers
import {combineReducers} from 'redux'
import auth from './auth'
import flashMessages from './flashMessges'


const routReducer = combineReducers({
    auth,
    flashMessages
})

export default routReducer;