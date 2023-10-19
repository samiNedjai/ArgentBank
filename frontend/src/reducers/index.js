import { combineReducers } from "redux";
import PostUserReducer from "./user.reducer";

export default combineReducers({
  // reducers
  user: PostUserReducer,
});
