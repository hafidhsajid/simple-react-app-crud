import React from "react";
import Login from "./login";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

class Indexauth extends React.Component {
  render() {
    return (
        <div className="App">
            <div className="content-header">
                <div className="content">

<Login />
                </div>

            </div>
      {/* <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router> */}
        </div>
    );
  }
}
export default Indexauth;
