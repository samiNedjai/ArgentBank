import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/argentBankLogo.webp";

import { logoutUser } from "../../actions/userAuthActions";
import { PostUserProfile } from "../../actions/userProfileActions";

import "./navbar.css";

const Navbar = () => {
  // Vérifie si le jeton (token) de l'utilisateur est stocké dans le stockage local ou de session
  const tokenLocalStorage = localStorage.getItem("token");
  const tokenSessionStorage = sessionStorage.getItem("token");
  const token = tokenLocalStorage || tokenSessionStorage;
  // Récupère le profil de l'utilisateur depuis le store Redux
  const userProfile = useSelector((state) => state.UserReducer.userProfile);
  // console.log(userProfile);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    // Envoie une action pour déconnecter l'utilisateur
    dispatch(logoutUser());
    navigate("/ArgentBank");
  };
// Utilise le hook useEffect pour récupérer le profil de l'utilisateur lorsque le composant est monté
  useEffect(() => {
    dispatch(PostUserProfile());
  }, [dispatch]);
// Rend la barre de navigation en fonction de l'authentification de l'utilisateur (présence d'un jeton)
  if (token) {
    return (
      <nav className="main-nav">
        <NavLink to="/ArgentBank" className="main-nav-logo">
          <img
            src={logo}
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div className="navbar_loginSuccess">
          <NavLink to="/user-account" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {userProfile.userName}
          </NavLink>
          <NavLink to="/ArgentBank" className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="main-nav">
        <NavLink to="/ArgentBank" className="main-nav-logo">
          <img
            src={logo}
            alt="Argent Bank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    );
  }
};

export default Navbar;
