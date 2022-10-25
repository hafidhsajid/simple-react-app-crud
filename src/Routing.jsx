import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
// import Headeradmin from "./Admin/header";
import Readpackage from "./Admin/readpackage";
import Readorder from "./Admin/readorder";
import Detailorder from "./Admin/detailorder";
import Addpackage from "./Admin/addpackage";
import Editpackage from "./Admin/editpackage";
import Addcustomer from "./Admin/addcustomer";
import Editcustomer from "./Admin/editcustomer";
import Createorder from "./Customer/createorder";
import LoginAuth from "./Auth/login";
import Headeradmin from "./Admin/header";
import Readcustomer from "./Admin/readcustomer";
import Unauthorized from "./Auth/unauthorized";
import Register from "./Auth/register";
import CustomerReadpackage from "./Customer/readpackage";
import HeaderCustomer from "./Customer/header";
import ReadorderCustomer from "./Customer/readorder";
import Addorder from "./Customer/addorder";

class Routing extends React.Component{
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
                  <Route path = "/customer/*" element={<HeaderCustomer />}/>
                  <Route path = "/401/" element={<Unauthorized />}/>
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
                          <Route path="/customer" element={<CustomerReadpackage />} />
                          <Route path="/customer/package" element={<CustomerReadpackage />} />
                          <Route path="/customer/order" element={<ReadorderCustomer />} />
                          <Route path="/customer/order/:id" element={<Detailorder />} />
                          <Route path="/customer/order/create" element={<Addorder />} />
                          <Route path="/order/create" element={<Createorder />} />
                          <Route path="/package" element={<Createorder />} />
                          <Route path="/login" element={<LoginAuth />} />
                          <Route path="/register" element={<Register />} />
                          <Route path="*" element={<LoginAuth />} />
                          <Route
                            exact
                            path="/recovery-password"
                            element={<LoginAuth />}
                          />
                          {/* <Route path="*" element={<Readcustomer />} /> */}
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

export default Routing;