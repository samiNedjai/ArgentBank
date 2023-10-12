import axios from "axios";
export const USER_PROFILE = "USER_PROFILE";

///////// Action pour récupérer le profil de l'utilisateur depuis le serveur

export const PostUserProfile = () => {
    return async (dispatch) => {
      let token = localStorage.getItem("token");
  
      if (!token) {
        token = sessionStorage.getItem("token");
      }
  
      if (!token) {
        return;
      }
  
      try {
        const response = await axios.post(
          "http://localhost:3001/api/v1/user/profile",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        if (response.status === 200) {
          const userProfile = response.data.body;
          dispatch({
            type: USER_PROFILE,
            payload: userProfile,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
  };
  