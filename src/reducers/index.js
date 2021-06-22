import { combineReducers } from "redux";

const tempReducer = (state = null, action) => {
  if (action.type === "Fetch_temp") {
    return action.payload;
  }
  return state;
};

export default combineReducers({ temperature: tempReducer });

