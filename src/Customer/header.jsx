import React from "react";
import { ReactSession } from "react-client-session";
import { Link } from "react-router-dom";

class HeaderCustomer extends React.Component {
  logout = () => {
    ReactSession.setStoreType("localStorage");
    ReactSession.set("username", "");
    ReactSession.set("password", "");
  };
  render() {
    return (
      <header class="p-3 mb-3 border-bottom">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <svg
                class="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              ></svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Link to="/customer/Package" class="nav-link px-2 link-secondary">
                <li>Package</li>
              </Link>
              <Link to="/customer/Order" class="nav-link px-2 link-dark">
                <li>Order</li>
              </Link>
            </ul>

            {/* <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form> */}

            <div class="dropdown show text-end">
              <a
                class="d-block link-dark text-decoration-none dropdown-toggle"
                // data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  class="rounded-circle"
                  width="32"
                  height="32"
                ></img>
              </a>
              <ul class="dropdown-menu show text-small">
                {/* <li><hr class="dropdown-divider"></li> */}
                
                <li>
                  <Link to={"/"}>
                  <div class="dropdown-item" href="" onClick={this.logout}>
                    Sign out
                  </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderCustomer;
