import "./App.css";

import { API, setAuthToken } from "config/api";
import Switch from "react-bootstrap/esm/Switch";
import PrivateRoute from "./components/PrivateRoute";
import 'bootstrap/dist/css/bootstrap.css';
 import { HashRouter , Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Home from "pages/Home";
import TopUp from "pages/TopUp";
import Pembayaran from "pages/Pembayaran";
import Transaksi from "pages/Transaksi";
import AkunPage from "pages/AkunPage";


function App() {
  return (
    <div className="App">
 <BrowserRouter basename="/SIMS_PPOB_Festine_Amalia_Putri">
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
         <Route exact path="/home" element={<Home/>} /> 
  <Route exact path="/top-up" element={<TopUp/>} /> 
  <Route exact path="/bayar/:id" element={<Pembayaran/>} /> 
  <Route exact path="/transaksi" element={<Transaksi/>} /> 
  <Route exact path="/akun-page" element={<AkunPage/>} /> 
  
          
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
