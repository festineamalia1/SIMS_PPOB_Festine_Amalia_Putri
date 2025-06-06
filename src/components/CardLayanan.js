import React, { useState, useRef, useContext } from "react";
import { connect } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

// import Profil from "assets/images/usernav.png";
// import Logout from "assets/images/logout.svg";
import { API } from "config/api";
const CardLayanan = (props) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const navigate = useNavigate();

  return (
    <>
      {/* isLoading || !chanels.chanels ? ( // <h1>Loading...</h1>
      ) : error ? ( // <h1>error {error.message} </h1>
       ) : */}
<div className="card border-0">
  <div className="row d-flex align-items-center justify-content-center">
  <img src={require(`../assets/images/Listrik.png`)} alt="Logo"  style={{maxWidth: '80px'}}/> 

    <p className="text-center pt-2">listrik</p>
 
  </div>
</div>
    </>
  );
}

const mapStatetoProps = (state) => {
  return { statusLog: state.status };
};

export default connect(mapStatetoProps)(CardLayanan);