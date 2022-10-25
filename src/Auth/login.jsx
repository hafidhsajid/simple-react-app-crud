import React from "react";
import { useNavigate, Redirect, Navigate, useParams } from "react-router-dom";
import { ReactSession } from "react-client-session";

// class Login extends React.Component{
const LoginAuth = () => {
  require("./floating.css");

  ReactSession.setStoreType("localStorage");
  // render(){
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_HOST}login`,

      {
        // mode: 'cors',
        // cache: 'no-cache',
        // credentials: 'same-origin',
        method: "POST",
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Connection: "keep-alive",
        },
        body: JSON.stringify({
          username: email,
          password: password,
          // description: description,
          // price: price,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        ReactSession.set("username", email);
        ReactSession.set("password", password);
        // window.location.href = `/admin/package`;
        //  redirectback();
        return res.json();
      } else {
        console.log();
        alert("Invalid Username or Password");
        return res.json();
      }
    }).then((json) => {
      if (json.data!==undefined) {
        console.log(json.data);
        ReactSession.set("level", json.data);
  
        setStatus("Login");
        
      }
    });
    // return console.log(name + " " + description + " " + price);
    // // alert('submit'+{name})
  }

  const [status, setStatus] = React.useState("");

  if (status === "Login") {
    if ( ReactSession.get("level")==='admin'
    ) {
      return (
        <div>
          {window.location.href = `/admin`}
        </div>
      );
    }
    if ( ReactSession.get("level")==='user'
    ) {
      return (
        <div>
          {window.location.href = `/customer`}
        </div>
      );
    }
  }

  return (
    <div>
      <form class="form-signin" onSubmit={handleSubmit}>
        <div class="text-center mb-4">
          <img
            class="mb-4"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt=""
            width="72"
            height="72"
          ></img>
          <h1 class="h3 mb-3 font-weight-normal">Login</h1>
        </div>

        <div class="form-label-group">
          <input
            type="text"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
              </input> */}

          <label for="inputEmail">Email address</label>
        </div>

        <div class="form-label-group">
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
              </input> */}
          <label for="inputPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
          <label></label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted text-center">© 2017-2022</p>
      </form>
    </div>
  );
};

export default LoginAuth;
