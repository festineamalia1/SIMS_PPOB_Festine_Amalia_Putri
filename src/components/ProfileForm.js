import React, { useState, useEffect } from "react";

import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Link, useNavigate  } from "react-router-dom";
import { API, setAuthToken } from "config/api";
import { connect } from "react-redux";
import { handleLogin } from "actions";
const RegisterForm = (props) => {
  const navigate = useNavigate ();
  // const handleLogin = () => {
  //   history.push(`/home`);
  // };

  const [userName, setUserName] = useState("admin");
  const [password, setPasword] = useState("admin");

  console.log("statusLog", props.statusLog);

  // useEffect(() => {
  //   props.onHandleLogin()
  // }, []);
  const StatusLog = window.localStorage.getItem("LogStatus");
  const handleRedirect = () => {
    window.location.reload();
  };
  return (
   <>
    {/* <div class="col d-flex align-items-center justify-content-center mx-8">Nama Profile</div> */}
   <div class="form-heading d-flex align-items-center justify-content-center mx-8">Nama Profile</div>

     <form className="px-5">
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Masukkan email anda"/>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Nama depan"/>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Nama belakang"/>
            </div>
          </form>
   </>
    
          
  
  );
};

const mapStatetoProps = (state) => {
  return { statusLog: state.status };
};

const mapDispatchprops = (dispatch) => {
  return { onHandleLogin: () => dispatch(handleLogin()) };
};

export default connect(mapStatetoProps, mapDispatchprops)(RegisterForm);
