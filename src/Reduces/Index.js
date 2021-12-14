import WeatherReducer from './reduce';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ WeatherReducer })

export default rootReducer