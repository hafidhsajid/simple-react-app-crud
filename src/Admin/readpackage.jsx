import React from "react";
import axios from "axios";
import { ReactSession } from "react-client-session";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";


class Readpackage extends React.Component {
  // Constructor

  constructor(props) {
    ReactSession.setStoreType("localStorage");
    super(props);
    // this.handledelete = this.handledelete.bind(this);
    this.handledelete = this.handledelete.bind(this);
    this.a = this.a.bind(this);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  handledelete(e, id) {
    if (window.confirm("Are you sure you want to delete this item?")) {
      // alert('deleted');
      fetch(
        `${process.env.REACT_APP_HOST}travelpackage/${id}`,
  
        {
          // mode: 'cors',
          // cache: 'no-cache',
          // credentials: 'same-origin',
          method: "DELETE",
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
          if (res.status === 200) {
            this.a();
            console.log(res);
            alert("Deleted");
            // this.setState({
            //   DataisLoaded: false,
            // });
          
            
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

    //
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
          <Link to={`/admin/package/create`}>
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
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr>
                    {/* User_Name: { item.username },  */}
                    <td> {(i = i + 1)} </td>
                    <td> {item.Name} </td>
                    <td> {item.Description} </td>
                    <td> Rp. {item.Price} </td>
                    <td>
                      {" "}
                      <Link to={{ pathname: `/admin/package/${item.PackageId}`,
                     query:{name: item.Name, description: item.Description, pice:item.Price} }}>

                      <button
                        type="button"
                        class="btn btn-warning"
                        style={{ marginRight: "10px" }}
                      > 
                        Edit
                      </button>
                      </Link>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={(e) => {
                          this.handledelete(e, item.PackageId);
                        }}
                      >
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

}
export default Readpackage;
// const [id, setId] = React.useState("");
const deletepackage = () => {
  fetch(
    `${process.env.REACT_APP_HOST}travelpackage/`,

    {
      // mode: 'cors',
      // cache: 'no-cache',
      // credentials: 'same-origin',
      method: "DELETE",
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
      return res.json();
    })
    .then((json) => {
      // console.log(json),
      this.setState({
        items: json["data"],
        DataisLoaded: true,
      });
    });
};
const refresh = ()=> {
  const navigate = useNavigate();
  return refresh = navigate(0);
}