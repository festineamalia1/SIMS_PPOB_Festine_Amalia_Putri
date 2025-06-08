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

export default function Home() {

const navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  const [dataBalance, setDataBalance] = useState([]);
  const [dataService, setDataService] = useState([]);


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

    const fetchDataService = () => {
    // setIsLoading(true);
    axios
      .get(`${API}/services`, 
        {
    headers: {
        'Authorization': `Bearer ${TOKEN}`
    }
}
)
      .then(function (response) {
        // setIsLoading(false);
       setDataService(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  };




console.log("data service", dataService)




  useEffect(() => {
    fetchDataProfile();
    fetchDataBalance();
    fetchDataService();
  }, []);

  console.log("userData", userData?.data?.data?.first_name);

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
            <div className="col">
            <div class="list-layanan">
              {dataService?.data?.data &&
                      dataService?.data?.data?.map((data, i) => (
              <CardLayanan
              fotoService={data?.service_icon}
              namaLayanan={data?.service_name}
              idLayanan={data?.service_code}
              tarifLayanan={data?.service_tariff}
              />
              ))}
                
            </div>
            </div>
        </div>
      </div>
    </section>
   
    </>
  );
}
