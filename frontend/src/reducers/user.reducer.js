import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  LOGOUT_USER,
} from "../actions/userAuthActions";
import { USER_PROFILE } from "../actions/userProfileActions";
import { CHANGE_USER_NAME } from "../actions/updateUserNameActions";

// Définition de l'état initial de ce réducteur
const initialState = {
  userProfile: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,// On copie l'état actuel
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loginError: action.payload,// On ajoute la propriété loginError avec la valeur action.payload à l'état
      };
    case LOGOUT_USER:
      return {
        ...state,
        userProfile: "",// On réinitialise la propriété userProfile à une chaîne vide
      };
    case USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,// On met à jour la propriété userProfile avec action.payload
      };
    case CHANGE_USER_NAME:
      // On crée une nouvelle copie de userProfile avec le nom d'utilisateur mis à jour
      const newProfile = { ...state.userProfile, userName: action.payload };
      return {
        ...state,
        userProfile: newProfile, // On met à jour la propriété userProfile avec la nouvelle copie
      };

    default:
      return state;
  }
};

export default UserReducer;
