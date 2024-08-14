export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const LOGOUT_USER = "LOGOUT_USER";

// Action pour gérer la connexion réussie de l'utilisateur
export const userLoginSuccess = () => ({
  type: USER_LOGIN_SUCCESS,
});

// Action pour gérer l'échec de connexion de l'utilisateur
export const userLoginFail = (error) => ({
  type: USER_LOGIN_FAIL,
  payload: error,
});

// Action pour déconnecter l'utilisateur
export const logoutUser = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
  return {
    type: LOGOUT_USER,
  };
};

//////// Action pour gérer la connexion de l'utilisateur

export const loginUser = (email, password, navigate, rememberMe) => (dispatch) => {
  fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(response => {
    if (response.ok) {  // Vérifier que la réponse est ok (status 200-299)
      return response.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then(data => {
    const token = data.body.token;
    if (rememberMe) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }
    navigate("/user-account");
    dispatch(userLoginSuccess());
  })
  .catch(error => {
    console.error('Failed to fetch:', error);
    dispatch(userLoginFail("Incorrect username or password"));
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  });
};

