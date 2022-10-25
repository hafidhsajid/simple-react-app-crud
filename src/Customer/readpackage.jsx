import React from "react";
import axios from "axios";
import { ReactSession } from "react-client-session";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";


class CustomerReadpackage extends React.Component {
  // Constructor

  constructor(props) {
    ReactSession.setStoreType("localStorage");
    super(props);
    this.a = this.a.bind(this);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  a() {
    fetch(
      `${process.env.REACT_APP_HOST}travelpackage`,

      {
        // mode: 'cors',
        // cache: 'no-cache',
        // credentials: 'same-origin',
        method: "GET",
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
          "Content-Type": "application/json",
          // "Access-Control-Allow-Headers": " X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Origin": "*",
          Connection: "keep-alive",
          // "Allow": "Origin, X-Requested-With, Content-Type, Accept",
          //  username: ReactSession.get("username"),
          password: ReactSession.get("password"),
        },
        // body: 'A=1&B=2'
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        // console.log(json),
        this.setState({
          items: json["data"],
          DataisLoaded: true,
        });
      });
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(
      `${process.env.REACT_APP_HOST}travelpackage`,

      {
        // mode: 'cors',
        // cache: 'no-cache',
        // credentials: 'same-origin',
        method: "GET",
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
          "Content-Type": "application/json",
          // "Access-Control-Allow-Headers": " X-Requested-With, Content-Type, Accept",
          "Access-Control-Allow-Origin": "*",
          Connection: "keep-alive",
          // "Allow": "Origin, X-Requested-With, Content-Type, Accept",
           username: ReactSession.get("username"),
          password: ReactSession.get("password"),
        },
        // body: 'A=1&B=2'
      }
    )
      .then((res) => {
        if (!res.ok) {
          this.setState({
            fail:true,
          })          
        }

        return res.json();
      })
      .then((json) => {
        // console.log(json),
        this.setState({
          items: json["data"],
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, items, fail } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Loading Data .... </h1>
        </div>
      );
    var i = 0;


  if (fail) {
    return <Navigate to="/"></Navigate>;
  }

    return (
      <div className="row">
        <div className="col-md-10"></div>
        <div className="col-md-2">
        </div>
        <div className="card">
          <div className="card-header">
            <h4>Data Package</h4>
          </div>

          <div className="card-body">
            <table class="table table-striped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr>
                    {/* User_Name: { item.username },  */}
                    <td> {(i = i + 1)} </td>
                    <td> {item.Name} </td>
                    <td> {item.Description} </td>
                    <td> Rp.  {item.Price} </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

}
export default CustomerReadpackage;
// const [id, setId] = React.useState("");

const refresh = ()=> {
  const navigate = useNavigate();
  return refresh = navigate(0);
}