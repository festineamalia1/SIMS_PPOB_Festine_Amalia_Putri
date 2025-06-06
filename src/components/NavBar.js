import React, { useState, useRef, useContext } from "react";
import { connect } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

// import Profil from "assets/images/usernav.png";
// import Logout from "assets/images/logout.svg";
import { API } from "config/api";
const NavBar = (props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      {/* isLoading || !chanels.chanels ? ( // <h1>Loading...</h1>
      ) : error ? ( // <h1>error {error.message} </h1>
       ) : */}
<nav class="navbar navbar-expand-lg bg-white border-bottom">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="#">
         <div class="logo mb-2 d-flex align-items-center justify-content-center"> 
          <img src={require(`../assets/images/Logo.png`)} alt="Logo" className="w-100 px-2"/> 
          SIMS PPOB
          </div>
        {/* <span class="fw-semibold">SIMS PPOB</span> */}
      </a>

      <div class="ms-auto">
        <ul class="navbar-nav flex-row gap-3">
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Top Up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Transaction</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">Akun</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  );
}

const mapStatetoProps = (state) => {
  return { statusLog: state.status };
};

export default connect(mapStatetoProps)(NavBar);