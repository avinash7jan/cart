import { combineReducers } from "redux";
import summaryReducer from "./summaryReducer";

export default combineReducers({
  summary: summaryReducer
});
