import { render } from "@testing-library/react";
import React from "react";
import { useNavigate, Redirect, Navigate } from "react-router-dom";
import { ReactSession } from "react-client-session";

const Addpackage = () => {
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
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `${process.env.REACT_APP_HOST}travelpackage`,

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
          name: name,
          description: description,
          price: price,
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
    return console.log(name + " " + description + " " + price);
    // alert('submit'+{name})
  }
  if (status === "Created") {
    return (
      <div>
        <Navigate to="/admin/package" />
      </div>
    );
  }
  //   render() {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Add Data Package </h4>
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
              <label for="name" className="col-sm-2 col-form-label">Name:</label>
              <div className="col-sm-10">

              <input
                className="form-control"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                //   value={this.state.name}
                //   onChange={this.handleChangename}
              />{" "}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" for="description">Description:</label>
              <div className="col-sm-10">

              <input
                className="form-control"
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                //   value={this.state.description}
                //   onChange={this.handleChangedescription}
              />{" "}
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" for="price">Price:</label>
              <div className="col-sm-10">

              <input
                className="form-control"
                id="price"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                //   value={this.state.price}
                //   onChange={this.handleChangeprice}
              />
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

export default Addpackage;
const redirectback = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return goBack;
};
const BackApp = () => {
  const navigate = useNavigate();
  const goBack = () => navigate("/admin/package");

  return (
    <div>
      <button onClick={goBack} class="btn btn-primary">
        Back
      </button>
    </div>
  );
};

// function Inputa(handleChange, handleSubmit) {
//   return (
//     <form onSubmit={handleSubmit}>
//       <fieldset>
//         <label className="col-sm-2 col-form-label">
//           <p>Name</p>
//           <input name="name" onChange={handleChange} />
//         </label>
//       </fieldset>
//       <fieldset>
//         <label className="col-sm-2 col-form-label">
//           <p>Apples</p>
//           <select name="apple" onChange={handleChange}>
//             <option value="">--Please choose an option--</option>
//             <option value="fuji">Fuji</option>
//             <option value="jonathan">Jonathan</option>
//             <option value="honey-crisp">Honey Crisp</option>
//           </select>
//         </label>
//         <label>
//           <p>Count</p>
//           <input type="number" name="count" onChange={handleChange} step="1" />
//         </label>
//         <label>
//           <p>Gift Wrap</p>
//           <input type="checkbox" name="gift-wrap" onChange={handleChange} />
//         </label>
//       </fieldset>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
