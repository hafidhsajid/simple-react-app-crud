import React from "react";
import { BrowserRouter, Routes, Route, Link,Navigate } from "react-router-dom";
import {ReactSession} from "react-client-session";

class Readorder extends React.Component {
  // Constructors
  constructor(props) {

    ReactSession.setStoreType("localStorage");
    super(props);

    // console.log(this.props) ;
    this.state = {
      items: [],
      DataisLoaded: false,
      fail: false,
      show: false,
      //   value: this.props.location.state.name,
    };

  }


  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    // const { history, location } = this.props;
    // var path = String(window.location.pathname);
    // var tokens = path.parse('/route/:foo/(.*)');
    // console.log(tokens);
    fetch(
      `${process.env.REACT_APP_HOST}order`,

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
      .then(
        (res) => {
          if (res.ok) {
            console.log(res.status);
            return res.json();
          } else {
            // throw new Error('Something went wrong ...');
            console.log(res);
            this.setState({
              fail: true,
            });
            // return  <Navigate to="/"></Navigate>
          }
        }

        // } else {
        //      return (
        //         <Redirect to="/"/>
        //      )
        // }
        // return res.json()}
      )
      .then((json) => {
        // console.log(json);
        this.setState({
          items: json["data"],
          DataisLoaded: true,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          items: null,
          DataisLoaded: true,
          fail: true,
        });
        // return
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
    const { DataisLoaded, items, fail } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1>Loading Data ....</h1>
        </div>
      );
    // console.log(fail);
    if (fail) {
      return <Navigate to="/"></Navigate>;
    }
    var i = 0;

    return (

      <div className="card">
      
        <div className="card-header">
          <h4>Data Order</h4>
          <h4>{}</h4>
        </div>

        <div className="card-body">
          <table class="table table-striped">
            <thead class="thead-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Time</th>
                <th scope="col">Order Number</th>
                <th scope="col">Customer</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr>
                  {/* User_Name: { item.username },  */}
                  <td> {(i = i + 1)} </td>
                  <td> {item.Created_at} </td>
                  <td> {item.OrderNumber} </td>
                  <td> {item.Name} </td>
                  <td>
                    {" "}
                    <Link to={`/admin/order/${item.OrderNumber}?id=${item.OrderNumber}`}>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      data-whatever="@fat"
                      style={{ marginRight: "10px" }}
                    >
                      Detail
                    </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

export default Readorder;
