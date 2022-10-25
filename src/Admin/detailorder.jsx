import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactSession } from "react-client-session";


class Detailorder extends React.Component {

  constructor(props) {
    ReactSession.setStoreType("localStorage");
    super(props);

    // console.log(this.props) ;
    this.state = {
      items: [],
      DataisLoaded: false,
      fail: false,
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
      `${process.env.REACT_APP_HOST}order/` +
        new URLSearchParams(window.location.search).get("id"),

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
            console.log(new URLSearchParams(window.location.search).get("id"));
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
  }

  render() {
    const { DataisLoaded, items, fail } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1>Loading Data ....</h1>
        </div>
      );
    // const {id}= useParams();
    // console.log(fail);
    // if (fail) {
    //   return <Navigate to="/"></Navigate>;
    // }
    var i = 0;

    // console.log(items);
    return (
      <div className="card">
        <div className="card-header">
          <h4>Detail Order </h4>
          <h4>{this.props.params}</h4>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <BackApp />
            </div>
          </div>
          <table class="table table-striped">
            <thead class="thead-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Time</th>
                <th scope="col">Packge</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr>
                  {/* User_Name: { item.username },  */}
                  <td> {(i = i + 1)} </td>
                  <td> {item.Created_at} </td>
                  <td>
                    {" "}
                    {item.Name} (Rp. {item.Price} x {item.qty} )
                  </td>
                  <td>Rp. {item.qty * item.Price} </td>
                  <td> </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Detailorder;

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
