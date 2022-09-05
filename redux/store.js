import { createStore, combineReducers} from 'redux';
import CountReducer from './reducers/countReducer';
 
const rootReducer = combineReducers({
  data: CountReducer,
});
 
export const store = createStore(rootReducer);