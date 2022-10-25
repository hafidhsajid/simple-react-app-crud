import React, { useState } from "react";

class Addform extends React.Component {
    constructor(props) {
        this.setState({
            firstName: "",
            lastName: "",
        });
    }

//   const [state, setState] = ({
//       firstName: "",
//       lastName: ""
//     }
//     )
//     ;

  render() {
    return (
      <div>
        {/* <form>
          <label>
            First name
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleChange}
            />
          </label>

          <label>
            Last name
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
            />
          </label>
        </form> */}
      </div>
    );
  }
}
export default Addform;
