export const CHANGE_USER_NAME = "CHANGE_USER_NAME";

///////// Action pour mettre à jour le nom d'utilisateur

export const changeUserName = (userName) => {
  return (dispatch) => {
    let token = localStorage.getItem("token");

    if (!token) {
      token = sessionStorage.getItem("token");
    }
    if (!token) {
      return;
    }

    fetch("http://localhost:3001/api/v1/user/profile", {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to update user name');
      }
    })
    .then(data => {
      dispatch({
        type: CHANGE_USER_NAME,
        payload: userName,
      });
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  };
};
