import React from "react";
import axios from "axios";
import { Navigate,Link } from "react-router-dom";
import Headeradmin from "./header";
import { ReactSession } from "react-client-session";

class Readcustomer extends React.Component {
  // Constructor
  constructor(props) {
    ReactSession.setStoreType("localStorage");
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(
      `${process.env.REACT_APP_HOST}customer`,

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
          this.setState({ fail: true });
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
    // axios.defaults.withCredentials = true;
    // axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    // axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*';

    // axios.defaults.headers.common['username'] = `admin`;
    // axios.defaults.headers.common['password'] = `admin`;
    // axios.defaults.headers.common['Content-Type'] = `application/json`;
    //     axios(
    //       // `${process.env.REACT_APP_HOST}customer`,
    //     {
    //       method: 'GET',

    //       url: 'http://127.0.0.1:4000/customer',
    //       // proxy: {
    //       //   host: '127.0.0.1',
    //       //   port: 4000
    //       // },
    //       // // withCredentials: true,
    //       // params: {
    //       //   access_token: SECRET_TOKEN,
    //       // }
    //     // ,{
    //     headers: new Headers({
    //       // 'Content-Type': 'application/x-www-form-urlencoded',

    //       "Content-Type" : "application/json",
    //       "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
    //       "Access-Control-Allow-Origin": "*",
    //       "username": "admin",
    //       "password": "admin",
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((json) => {
    //       this.setState({
    //         items: json["data"],
    //         DataisLoaded: true,
    //       });
    //     });
  }
  render() {
    // <Headeradmin />;
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
          <Link to={`/admin/customer/create`}>
            <button
              type="button"
              class="btn btn-primary float-end"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@fat"
              style={{ marginRight: "10px" }}
            >
              Add Data
            </button>
          </Link>
        </div>
        <div className="card">
          <div className="card-header">
            <h4>Data Customer</h4>
          </div>

          <div className="card-body">
            <table class="table table-striped">
              <thead class="thead-light">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr>
                    {/* User_Name: { item.username },  */}
                    <td> {(i = i + 1)} </td>
                    <td> {item.Name} </td>
                    <td> {item.Email} </td>
                    <td> {item.Address} </td>
                    <td> {item.Phone} </td>
                    <td>
                      {" "}
                      <Link to={`/admin/customer/${item.id}`}>
                        <button
                          type="button"
                          class="btn btn-warning"
                          style={{ marginRight: "10px" }}
                        >
                          Edit
                        </button>
                      </Link>
                      <button type="button" class="btn btn-danger">
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  //     render(){
  //         return (
  //             <table class="table table-hover">
  //   <thead>
  //     <tr>
  //       <th scope="col">#</th>
  //       <th scope="col">First</th>
  //       <th scope="col">Last</th>
  //       <th scope="col">Handle</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     <tr>
  //       <th scope="row">1</th>
  //       <td>Mark</td>
  //       <td>Otto</td>
  //       <td>@mdo</td>
  //     </tr>
  //     <tr>
  //       <th scope="row">2</th>
  //       <td>Jacob</td>
  //       <td>Thornton</td>
  //       <td>@fat</td>
  //     </tr>
  //     <tr>
  //       <th scope="row">3</th>
  //       <td colspan="2">Larry the Bird</td>
  //       <td>@twitter</td>
  //     </tr>
  //   </tbody>
  // </table>
  //         )
  //     }
}
export default Readcustomer;
