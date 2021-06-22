import { combineReducers } from "redux";

const tempReducer = (temperature = null, action) => {
  if (action.type === "Fetch_temp") {
    return action.payload;
  }
  return temperature;
};
export default combineReducers({ temperature: tempReducer });
