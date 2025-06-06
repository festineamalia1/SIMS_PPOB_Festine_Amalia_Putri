import React, { useState, useRef, useContext } from "react";
import { connect } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

// import Profil from "assets/images/usernav.png";
// import Logout from "assets/images/logout.svg";
import { API } from "config/api";
const ProfileSaldo = ({firstName, LastName, foto, balance}) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const navigate = useNavigate();

  return (
      <div className="container">
        <div class="row align-items-center my-5">
    
   
    <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
     
      <div>
         <img src={foto} alt="avatar" className="profile-img me-3"/>
        <div>Selamat datang,</div>
        <div className="fw-bold fs-5">{firstName}&nbsp;{LastName}</div>
      </div>
    </div>


    <div className="col-md-8">
      <div className="saldo-card">
        <div className="mb-1">Saldo anda</div>
        <div className="text-balance">Rp {balance}</div>
        <div className="lihat-saldo">Lihat Saldo 👁️</div>
      </div>
    </div>
  </div>
      </div>
  );
}

const mapStatetoProps = (state) => {
  return { statusLog: state.status };
};

export default connect(mapStatetoProps)(ProfileSaldo);