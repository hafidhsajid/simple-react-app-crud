import React from "react";
import Headeradmin from "./header";
import Readcustomer from "./readcustomer";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import Readpackage from "./readpackage";
import Readorder from "./readorder";
import Detailorder from "./detailorder";
import Addpackage from "./addpackage";
import Addform from "./addform";
import Editpackage from "./editpackage";
import Addcustomer from "./addcustomer";
import Editcustomer from "./editcustomer";
import Createorder from "../Customer/createorder";
import Login from "../Auth/login";
import LoginAuth from "../Auth/login";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

class Indexadmin extends React.Component {
  render() {
    return (
      //   <div>
      //     <h1>Admin Dashboard</h1>
      //   </div>
      <div className="App">
        <Router>
          <div className="content-header">
            <Routes>
              <Route path = "/admin/*" element={<Headeradmin />}/>
            </Routes>
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <Routes>
                      <Route path="/admin" element={<Readcustomer />} />
                      <Route path="/admin/customer" element={<Readcustomer />} />
                      <Route path="/admin/customer/create" element={<Addcustomer />} />
                      <Route path="/admin/customer/:id" element={<Editcustomer />} />
                      <Route path="/admin/order" element={<Readorder />} />
                      <Route path="/admin/order/:id" element={<Detailorder />} />
                      {/* <Route path="/order/:id"  render={(props) => <Editorder {...props} />} element={<Editorder />} /> */}
                      <Route path="/admin/package" element={<Readpackage />} />
                      <Route path="/admin/package/create" element={<Addpackage />} />
                      <Route path="/admin/package/:id" element={<Editpackage />} />
                      <Route path="/order/create" element={<Createorder />} />
                      <Route path="/login" element={<LoginAuth />} />
                      <Route
                        exact
                        path="/recovery-password"
                        element={<Readcustomer />}
                      />
                      <Route path="*" element={<Readcustomer />} />
                    </Routes>
                  </div>
                </div>
                {/* <Readcustomer /> */}
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default Indexadmin;
