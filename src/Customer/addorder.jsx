import { render } from "@testing-library/react";
import React from "react";
import { useNavigate, Redirect, Navigate } from "react-router-dom";

import { ReactSession } from "react-client-session";

const Addorder = () => {
  // class Addpackage extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //         status :'',
  //     };
  // }
  //       value: "",
  //       name: "",
  //       description: "",
  //       price: "",
  //     };
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleChangename = this.handleChangename.bind(this);
  //     this.handleChangedescription = this.handleChangedescription.bind(this);
  //     this.handleChangeprice = this.handleChangeprice.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }

  //   handleChange (event) => {
  //     setFormData({
  //       name: event.target.name,
  //       value: event.target.value,
  //     });
  //   }
  //   handleChange(event) {
  //     this.setState({
  //       value: event.target.value,
  //     });
  //   }
  //   handleChangename(event) {
  //     this.setState({
  //       value: event.target.value,
  //       name: event.target.value_name,
  //     });
  //   }

  //   handleChangedescription(event) {
  //     this.setState({
  //       value: event.target.value,
  //       description: event.target.value_description,
  //     });
  //   }

  //   handleChangeprice(event) {
  //     this.setState({
  //       value: event.target.value,
  //       price: event.target.value_price,
  //     });
  //   }

  //   handleSubmit(event) = () => {
  //     alert("A name was submitted: " + this.state.value);
  //     console.log(this.state);
  //     event.preventDefault();
  //   };
  const [status, setStatus] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [totalprice, setTotalprice] = React.useState("");
  const [ordernumber, setOrdernumber] = React.useState("");
  const [product, setProduct] = React.useState("");
  const [qty, setQty] = React.useState("");
  const [address, setAddress] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_HOST}member/order`,

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
          username: ReactSession.get("username"),
          password: ReactSession.get("password"),
        },
        body: JSON.stringify({
          ordernumber: ordernumber,
          totalprice: totalprice,
          detail: JSON.stringify([
            {
              packageid: product,
              qty: qty,
            },
          ]),
          //   description: description,
          //   price: price,
        }),
      }
    ).then((res) => {
      if (res.ok) {
        setStatus("Created");
        // window.location.href = `/admin/package`;
        // console.log(res);
        //  redirectback();
      } else {
        console.log();
      }
    });
    // return console.log(name + " " + description + " " + price);
    // alert('submit'+{name})
  }


  if (status === "Created") {
    return (
      <div>
        <Navigate to="/customer/order" />
      </div>
    );
  }
    // render() {
    // var message='You selected '+this.state.selectValue;
  return (

    <div className="card">
      <div className="card-header">
        <h4>Order Form </h4>
      </div>

      <div className="card-body">
        <div className="row">
          <div className="col-md-2">
            <BackApp />
          </div>
          <div className="col-md-10"></div>
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="">
            {" "}
            <div className="form-group row">
              <label class="col-sm-2 col-form-label" for="ordernumber">
                Order Number:
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  id="ordernumber"
                  type="number"
                  placeholder="Order Number"
                  value={ordernumber}
                  onChange={(e) => setOrdernumber(e.target.value)}
                  //   value={this.state.name}
                  //   onChange={this.handleChangename}
                />{" "}
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-2 col-form-label" for="description">
                Total Price:
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  id="totalprice"
                  type="number"
                  placeholder="Total Price"
                  value={totalprice}
                  onChange={(e) => setTotalprice(e.target.value)}
                  //   value={this.state.description}
                  //   onChange={this.handleChangedescription}
                />{" "}
              </div>
              <div className="form-group row">
                <label class="col-sm-2 col-form-label" for="description">
                  Product:
                </label>
                <div className="col-sm-10">
                  
                  <div>
                    <input
                      className="form-control"
                      id="product"
                      type="number"
                      placeholder="Product"
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      //   value={this.state.description}
                      //   onChange={this.handleChangedescription}
                    />{" "}
                   {/* <select id = "dropdown" ref = {(input)=> this.menu = input}>
                      <option value="Orange">Orange</option>
                      <option value="Radish">Radish</option>
                      <option value="Cherry">Cherry</option>
                    </select>
                    <p>{message}</p> */}
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label class="col-sm-2 col-form-label" for="description">
                  Qty:
                </label>
                <div className="col-sm-10">
                  <input
                    className="form-control"
                    id="qty"
                    type="number"
                    placeholder="Quantity"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    //   value={this.state.description}
                    //   onChange={this.handleChangedescription}
                  />{" "}
                </div>
              </div>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
  //   }
};

export default Addorder;
const redirectback = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return goBack;
};
const BackApp = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <button onClick={goBack} class="btn btn-primary">
        Back
      </button>
    </div>
  );
};
