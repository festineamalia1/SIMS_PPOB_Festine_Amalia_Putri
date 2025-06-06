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

export default function Pembayaran() {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  const [idDelete, setIdDelete] = useState();
  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleClose3 = () => setShow3(false);
  const handleClose4 = () => setShow4(false);
  const handleOpen = () => setShow(true);
  const handleOpen2 = (id) => {
    setShow2(true);
    setIdDelete(id);
  };
  const handleOpen3 = (id) => {
    setShow3(true);
  };
  const handleOpen4 = (id) => {
    setShow4(true);
    setIdDelete(id);
  };
const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [userDataDetail, setUserDataDetail] = useState("");

  const handleShow = (id) => {
    handlDetailBarang(id);
    setShow(true);
  };
  console.log("userId", userId);
  const [userData, setUserData] = useState([]);

  const [barangData, setBarangData] = useState([]);
  const [detailBarang, setDetailBarang] = useState([]);

  const [nama, setNama] = useState();
  const [foto, setFoto] = useState();
  const [beli, setBeli] = useState();
  const [jual, setJual] = useState();
  const [stok, setStok] = useState();
  const [admin, setAdmin] = useState();
  const [searchData, setSearchData] = useState();

  const namaBrgEdit = window.localStorage.getItem("Nama");
  const fotoBrgEdit = window.localStorage.getItem("Nama");
  const beliBrgEdit = window.localStorage.getItem("Beli");
  const jualBrgEdit = window.localStorage.getItem("Jual");
  const stokBrgEdit = window.localStorage.getItem("Stok");

  const [namaEdit, setNamaEdit] = useState("");
  const [fotoEdit, setFotoEdit] = useState("");
  const [beliEdit, setBeliEdit] = useState(0);
  const [jualEdit, setJualEdit] = useState(0);
  const [stokEdit, setStokEdit] = useState(0);
  const [adminEdit, setAdminEdit] = useState();
  const [isLoading, setIsLoading] = useState(false);

  console.log("beliEdit", beliEdit);

  const fetchDataBarang = () => {
    setIsLoading(true);
    axios
      .get(`${API}/barang`)
      .then(function (response) {
        setIsLoading(false);
        console.log(response);
        setBarangData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSearchBarang = () => {
    setIsLoading(true);
    axios
      .get(`${API}/search/${searchData}`)
      .then(function (response) {
        setIsLoading(false);
        console.log(response);
        setBarangData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handlDetailBarang = (id) => {
    axios
      .get(`${API}/barang/${id}`)
      .then(function (response) {
        console.log(response);
        setDetailBarang(response.data.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleTambah = () => {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    axios
      .post(
        `${API}/barang`,
        {
          nama_barang: nama,
          foto_barang: "barang5.jpg",
          harga_beli: beli,
          harga_jual: jual,
          stok: stok,
          admin: 1,
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
          "tambah Data Gagal, Nama Barang Pastikan berbeda, untuk harga beli, harga jual dan stok hanya dapat di isi angka"
        );
      });
  };

  const handleEdit = () => {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    axios
      .post(
        `${API}/barang/${idDelete}`,
        {
          nama_barang: namaEdit,
          foto_barang: "barang5.jpg",
          harga_beli: beliEdit,
          harga_jual: jualEdit,
          stok: stokEdit,
          admin: 1,
        },
        {
          headers: headers,
        }
      )
      .then(function (response) {
        console.log(response);
        alert("Edit Data Berhasil");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        alert(
          "Edit Data Gagal. Nama Barang Pastikan berbeda, untuk harga beli, harga jual dan stok hanya dapat di isi angka"
        );
      });
  };

  const handleDelete = () => {
    axios
      .post(`${API}/barang/${idDelete}`)
      .then(function (response) {
        console.log(response);
        alert("hapus Data Berhasil");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
        alert("hapus Data Gagal");
      });
  };

  const [files, setFiles] = useState();

  const onChangeFiles = (e) => {
    console.log("file", e.target.files[0]);
    setFiles(e.target.files[0]);
  };

  console.log("barangData", barangData);
  useEffect(() => {
    fetchDataBarang();
  }, []);

  console.log("searchData", searchData);

  return (
    <>
    <div className="container-fluid">
 <NavBar />
    </div>
    <section id="profile-saldo">
       <ProfileSaldo/>
    </section>

    <section id="layanan">
      <div className="container">
        <div className="row mt-5">
            <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
     
      <div>
         
        <div>Pembayaran</div>
        <div className="fw-bold fs-5"> 
          <img src={require(`../assets/images/Listrik.png`)} alt="Logo"  style={{maxWidth: '40px'}}/>  
          &nbsp;Nominal Top Up
          </div>
      </div>
    </div>
     

        </div>
        <div className="row mt-5">
          <div className="col ">
      <form className="">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Masukkan Nominal Anda"/>
            </div>
            <button type="submit" className="btn btn-danger w-100">Bayar</button>
          
          </form>
     </div>
     
        </div>
      </div>
    </section>
   
    </>
  );
}
