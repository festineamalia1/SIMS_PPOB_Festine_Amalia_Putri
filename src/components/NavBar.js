import React, { useState, useRef, useContext } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { redirect } from "react-router";

// import Profil from "assets/images/usernav.png";
// import Logout from "assets/images/logout.svg";
import { API, BASE_URL } from "config/api";
const NavBar = (props) => {
  const [active, setActive] = useState(false);
  const target = useRef(null);
  const navigate = useNavigate();

  const handleMenu = (link) => {
    navigate(`/${link}`)
    setActive(true)
  }

  return (
    <>
      {/* isLoading || !chanels.chanels ? ( // <h1>Loading...</h1>
      ) : error ? ( // <h1>error {error.message} </h1>
       ) : */}
<nav class="navbar navbar-expand-lg bg-white border-bottom">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center">
         <div class="logo mb-2 d-flex align-items-center justify-content-center"  onClick={() => navigate(`/home`)}> 
          <img src={require(`../assets/images/Logo.png`)} alt="Logo" className="w-100 px-2"
         
          /> 
          SIMS PPOB
          </div>

      </a>

      <div class="ms-auto">
        <ul class="navbar-nav flex-row gap-3">
          <li className="nav-item nav-link-nonactive">
            <div class="nav-link "
            onClick={() => handleMenu(`top-up`)}
            >Top Up</div>
          </li>
          <li className="nav-item nav-link-nonactive">
            <div class="nav-link "
            onClick={() => handleMenu(`transaksi`)}
            >Transaction</div>
            {/* <a class="nav-link text-dark" href={`${BASE_URL}/transaction`}>Transaction</a> */}
          </li>
          <li className="nav-item nav-link-nonactive">
            <div class="nav-link " 
            onClick={() => handleMenu(`akun-page`)}>Akun</div>
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