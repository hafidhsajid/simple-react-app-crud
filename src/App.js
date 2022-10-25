// import logo from './logo.svg';
import React from "react";
import "./App.css";
import "./Bootstrap.css";
import Navbaradmin from "./Admin/navbar";
import { ReactSession } from "react-client-session";
import Header from "./Customer/header";
import Headeradmin from "./Admin/header";
import Readcustomer from "./Admin/readcustomer";
import Indexadmin from "./Admin";
import Indexauth from "./Auth/auth";
import Routing from "./Routing";


function App() {
  return (
    <Routing />
    // <Indexadmin />
    // <Indexauth />
    
  );
}

export default App;
