import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, LOGOUT_USER } from '../actions/post.user.action';
import { USER_PROFILE } from '../actions/post.userprofile.action';
import { CHANGE_USER_NAME } from '../actions/put.username.action';

const initialState = {
    loginError: null,
     userProfile: '',
  };
  

  const PostUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          loginError: null,
        };
      case USER_LOGIN_FAIL:
        return {
          ...state,
          loginError: action.payload,
        };
      case LOGOUT_USER:
        return {
          ...state,
          loginError: null,
          userProfile: '',
        };
      case USER_PROFILE:
        return {
          ...state,
          userProfile: action.payload,
        };
      case CHANGE_USER_NAME:
        const newProfile = {...state.userProfile , userName: action.payload};
        return {
          ...state,
          userProfile: newProfile
        }
      
      default:
        return state;
    }
  };
  
  export default PostUserReducer;