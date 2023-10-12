import { combineReducers} from "redux";
import PostUserReducer from "./post.user.reducer";





export default combineReducers({
    // reducers
    user: PostUserReducer,
    
}) 