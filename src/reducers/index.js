import block_json from '../data/characters.json'
import {BLOCK_CONTENT} from '../actions'
import {combineReducers} from 'redux'
function block(state=[],action){
    switch(action.type){
        case BLOCK_CONTENT:
        return [...state,...block_json]
        default:
        return state
    }
}
export default combineReducers({block})