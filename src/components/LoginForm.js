import React, { useState, useEffect } from "react";

import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Link, useNavigate  } from "react-router-dom";
import { API, setAuthToken } from "config/api";
import { connect } from "react-redux";
import { handleLogin } from "actions";
import axios from "axios";

const LoginForm = (props) => {
  const navigate = useNavigate ();
  // const handleLogin = () => {
  //   history.push(`/home`);
  // };

  const [userName, setUserName] = useState("");
  const [password, setPasword] = useState("");
    const handleLogin = (e) => {
         e.preventDefault();
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      axios
        .post(
          `${API}/login`,
        {
          email: "user@nutech-integrasi.com",
          password: "abcdef1234"
        },
          {
            headers: headers,
          }
        )
        .then(function (response) {
          console.log(response);
          localStorage.setItem('token', response?.data?.data?.token);
           alert("Login Berhasil");
           navigate('/home')
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
   <div class="form-heading d-flex align-items-center justify-content-center mx-8">
    Masuk atau buat akun untuk memulai</div>

     <form className="mx-5">
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Masukkan email anda"/>
            </div>
           
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password Anda"/>
            </div>
           
            <button type="submit" className="btn btn-danger w-100"
            onClick={(e) => handleLogin(e)}
            >Login</button>
          
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

export default connect(mapStatetoProps, mapDispatchprops)(LoginForm);
