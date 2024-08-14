export const USER_PROFILE = "USER_PROFILE";

///////// Action pour récupérer le profil de l'utilisateur depuis le serveur

export const PostUserProfile = () => (dispatch) => {
  let token = localStorage.getItem("token");

  if (!token) {
    token = sessionStorage.getItem("token");
  }

  if (!token) {
    return;
  }

  fetch("http://localhost:3001/api/v1/user/profile", {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {  // Vérifier que la réponse est ok
      return response.json();
    } else {
      throw new Error('Failed to fetch user profile');
    }
  })
  .then(data => {
    const userProfile = data.body;
    dispatch({
      type: USER_PROFILE,
      payload: userProfile
    });
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
};
