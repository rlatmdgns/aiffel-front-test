import {combineReducers} from 'redux';
import user from './user';
import forum from './forum';

const rootReducer = combineReducers({
  user,
  forum,
})

export default rootReducer