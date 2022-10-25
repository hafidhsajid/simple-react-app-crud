import React from "react";

const Register = () => {
  require("./floating.css");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_HOST}register`,

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
          name: name,
          email: email,
          password: password,
          phone: phone,
          address: address,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        setStatus("Login");
        // window.location.href = `/admin/package`;
        // console.log(res);
        //  redirectback();
      } else {
        console.log();
      }
    });
    // return console.log(name + " " + description + " " + price);
    // // alert('submit'+{name})
  }

  const [status, setStatus] = React.useState("");

  if (status === "Login") {
    return <div>{(window.location.href = `/`)}</div>;
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
          <h1 class="h3 mb-3 font-weight-normal">Register</h1>
        </div>

        <div class="form-label-group">
          <input
           className="form-control"
           id="name"
           type="text"
           placeholder="name"
           value={name}
           onChange={(e) => setName(e.target.value)}
          />
          {/* <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
                </input> */}

          <label for="inputEmail">Name</label>
        </div>
        <div class="form-label-group">
          <input
            className="form-control"
            id="email"
            type="email"
            placeholder="email"
            value={email}
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
        <div class="form-label-group">
          <input
           className="form-control"
           id="phone"
           type="phone"
           placeholder="phone"
           value={phone}
           onChange={(e) => setPhone(e.target.value)}
          />
          {/* <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
                </input> */}
          <label for="inputPassword">Phone</label>
        </div>
        <div class="form-label-group">
          <input
           className="form-control"
           id="address"
           type="text"
           placeholder="text"
           value={address}
           onChange={(e) => setAddress(e.target.value)}
            />
          {/* <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
                </input> */}
          <label for="inputPassword">Address</label>
        </div>

        <div class="checkbox mb-3">
          <label></label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Register
        </button>
        <p class="mt-5 mb-3 text-muted text-center">© 2017-2022</p>
      </form>
    </div>
  );
};

export default Register;
