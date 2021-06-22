import { combineReducers } from "redux";
import tempReducer from './temperatureReducer'


export default combineReducers({ temperature: tempReducer });

