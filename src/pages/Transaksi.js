import React, { useEffect, useContext, useState } from "react";
import NavBar from "../components/NavBar";
import CardLayanan from "../components/CardLayanan"
import ProfileSaldo from "../components/ProfileSaldo"
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

export default function Transaksi() {
  const [userData, setUserData] = useState([]);
  const [dataBalance, setDataBalance] = useState([]);



const TOKEN = localStorage.getItem('token')
console.log('TOKEN', TOKEN)
  const fetchDataProfile = () => {
    // setIsLoading(true);
    axios
      .get(`${API}/profile`, 
        {
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    }
}
)
      .then(function (response) {
        // setIsLoading(false);
       setUserData(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  const fetchDataBalance = () => {
    // setIsLoading(true);
    axios
      .get(`${API}/balance`, 
        {
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    }
}
)
      .then(function (response) {
        // setIsLoading(false);
       setDataBalance(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  




  useEffect(() => {
    fetchDataProfile();
    fetchDataBalance();
    
  }, []);

  return (
    <>
    <div className="container-fluid">
 <NavBar />
    </div>
    <section id="profile-saldo">
       <ProfileSaldo
             firstName={userData?.data?.data?.first_name}
             lastName={userData?.data?.data?.last_name}
             foto={userData?.data?.data?.profile_image}
             balance={dataBalance?.data?.data?.balance}
             />
    </section>

    <section id="layanan">
      <div className="container">
        <div className="row mt-5">
            <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
     
      <div>
         
       
        <div className="fw-bold fs-5"> 
        Semua Transaksi
          </div>
      </div>
    </div>
     

        </div>
        <div className="row mt-3">
         <div class="card">
  <div class="card-body">
    <div className="row">
      <div className="col">
        <div className="row">
           <div className="fw-bold fs-5"> 
            + RP. 10.000
          </div>
        </div>
        <div className="row">
          <span>aasasasa</span>
          </div>
      </div>
      <div className="col">
        <span>Pembayaran listrik</span>
      </div>
    </div>
  </div>
</div>
     
        </div>
        <div className="row mt-5">
          <div class="login-text">
              <a className="login-link" onClick={() => {}} >di sini</a>
            </div>
        </div>
      </div>
    </section>
   
    </>
  );
}
