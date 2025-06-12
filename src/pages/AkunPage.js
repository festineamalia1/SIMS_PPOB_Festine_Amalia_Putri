import React, { useEffect, useContext, useState } from "react";
import NavBar from "../components/NavBar";
import ProfileForm from "../components/ProfileForm"
import {
  Container,
  Row,
  Col,
  Image,
  Jumbotron,
  Button,
  Form,
  Table,
  Modal,
  Spinner,
} from "react-bootstrap";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { API } from "config/api";
import axios from "axios";

// import Barang from "../assets/images/barang1.jpg";

export default function AkunPage() {
 const TOKEN = localStorage.getItem('token')
const navigate = useNavigate();


  const [userData, setUserData] = useState([]);
 const [files, setFiles] = useState();
 const [loading, setIsLoading] = useState([]);
 
  const fetchDataAkun = () => {
    setIsLoading(true);
    axios
      .get(`${API}/profile`, 
        {
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    }
}
)
      .then(function (response) {
       setIsLoading(false);
       setUserData(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
 
console.log("userData", userData)
 

  const onChangeFiles = (e) => {
    console.log("file", e.target.files[0]);
    setFiles(e.target.files[0]);
  };


 
  useEffect(() => {
 fetchDataAkun()
  }, []);



  return (
    <>
    <div className="container-fluid">
 <NavBar />
    </div>
    

    <section id="profile">
      <div className="container">
        <div className="row">
          <div className="avatar-container">
  <img src={userData?.data?.data?.profile_image} alt="Avatar" className="avatar-img"/>
  <div className="edit-icon">
    <i className="bi bi-pencil-fill"></i>
  </div>
</div>
        </div>
      {
        loading == true ?
        "Sebentar"
        :
      <ProfileForm dataProfile={userData}/>
      }
 
  




          
       
     
      </div>
    </section>
   
    </>
  );
}
