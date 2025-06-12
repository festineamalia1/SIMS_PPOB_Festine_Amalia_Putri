import React, { useState, useEffect } from "react";

import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Link, useNavigate  } from "react-router-dom";
import { API, setAuthToken } from "config/api";
import { connect } from "react-redux";
import { handleLogin } from "actions";
import axios from "axios";

const RegisterForm = (props) => {
  const navigate = useNavigate ();
  // const handleLogin = () => {
  //   history.push(`/home`);
  // };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleRegist = (e) => {
       e.preventDefault();
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    axios
      .post(
        `${API}/Registration`,
       {
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password
},
        {
          headers: headers,
        }
      )
      .then(function (response) {
        console.log(response);
        alert("tambah Data Berhasil");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        alert(
          error.response.data.message
        );
      });
  };

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
   <div class="form-heading d-flex align-items-center justify-content-center mx-8">Lengkapi data untuk membuat akun</div>

     <form className="mx-5">
     <div className="mb-3">
            
      <div className="input-group">
        <span className="input-group-text bg-white">
          <i className="bi bi-envelope"></i>
        </span>
        <input type="email" className="form-control border-start-0" placeholder="Masukkan email anda"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
              />
        </div>
            </div>

            <div className="mb-3">
                <div className="input-group">
        <span className="input-group-text bg-white">
          <i className="bi bi-person"></i>
        </span>
              <input type="text" className="form-control border-start-0" placeholder="Nama depan"
               value={firstName}
              onChange={(e) => {setFirstName(e.target.value)}}
              />
</div>
            </div>
            <div className="mb-3">
               <div className="input-group ">
        <span className="input-group-text bg-white">
          <i className="bi bi-person"></i>
        </span>
              <input type="text" className="form-control border-start-0" placeholder="Nama belakang"
               value={lastName}
              onChange={(e) => {setLastName(e.target.value)}}/>
               </div>
            </div>
            <div className="mb-3">
              <div className="input-group">
        <span className="input-group-text bg-white">
          <i className="bi bi-lock"></i>
        </span>
              <input type="password" className="form-control border-start-0 border-end-0" placeholder="Buat password"
               value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              />
                <span class="input-group-text border-start-0 bg-white">
        <i class="bi bi-eye" id="togglePassword" ></i>
      </span>
               </div>
            </div>
            <div className="mb-4">
               <div className="input-group">
        <span className="input-group-text bg-white">
          <i className="bi bi-lock"></i>
        </span>
              <input type="password" className="form-control border-start-0 border-end-0" placeholder="Konfirmasi password"/>
              <span class="input-group-text border-start-0 bg-white">
        <i class="bi bi-eye" id="togglePassword" ></i>
      </span>
              </div>
            </div>
            <button type="submit" className="btn btn-danger w-100"
            onClick={(e) =>{handleRegist(e)}}
            >Registrasi</button>
           
          </form>
   </>
    
          
    // <Col>
    //   <Row>
    //     <Modal.Dialog>
    //       <Modal.Body>
    //         <div
    //           style={{
    //             marginBottom: "28px",
    //           }}
    //         >
    //           <h1>Sign In</h1>
    //         </div>
    //         <Form>
    //           <Form.Label>Username</Form.Label>
    //           <Form.Group controlId="userName">
    //             <Form.Control
    //               type="text"
    //               name="userName"
    //               required
    //               placeholder="UserName"
    //               value={userName}
    //               onChange={(e) => setUserName(e.target.value)}
    //             />
    //           </Form.Group>
    //           <Form.Label htmlFor="inputPassword5">Password</Form.Label>
    //           <Form.Group controlId="password">
    //             <Form.Control
    //               type="password"
    //               name="password"
    //               required
    //               placeholder="Password"
    //               value={password}
    //               onChange={(e) => setPasword(e.target.value)}
    //             />
    //           </Form.Group>
    //           <Link>
    //             <Button
    //               type="submit"
    //               style={{
    //                 backgroundColor: "#005792",
    //                 border: "none",
    //                 color: "#FFFFFF",
    //                 width: "350px",
    //                 height: "50px",
    //                 borderRadius: "5px",
    //                 marginTop: "28px",
    //               }}
    //               onClick={() => {
    //                 // history.push("/home");
    //                 navigate('/home');
    //                 props.onHandleLogin();
    //               }}
    //             >
    //               Sign In
    //             </Button>
    //           </Link>
    //         </Form>
    //       </Modal.Body>
    //     </Modal.Dialog>
    //   </Row>
    // </Col>
  );
};

const mapStatetoProps = (state) => {
  return { statusLog: state.status };
};

const mapDispatchprops = (dispatch) => {
  return { onHandleLogin: () => dispatch(handleLogin()) };
};

export default connect(mapStatetoProps, mapDispatchprops)(RegisterForm);
